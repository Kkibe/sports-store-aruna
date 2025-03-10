import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { increment } from "firebase/database";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, orderBy, setDoc, startAfter } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLDtEm-sFClNIoKK1x0PAnI4A1bi_iMOY",
  authDomain: "sportsexpress.firebaseapp.com",
  projectId: "sportsexpress",
  storageBucket: "sportsexpress.firebasestorage.app",
  messagingSenderId: "764091017074",
  appId: "1:764091017074:web:c43ebf8cc5428c63ed5feb",
  measurementId: "G-D5X3KBGFM4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

export const signInUser = (email, password, setNotification) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    setNotification({
      isVisible: true,
      type: 'success',
      message: "Welcome Back!",
    });
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setNotification({
      isVisible: true,
      type: 'error',
      message: errorMessage,
    });
  });
  return;
}

export const registerUser = (username, email, password, setNotification) => {
  createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
    const user = userCredential.user;
    const userDocRef = doc(db, "users", user.email);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return setNotification({
        isVisible: true,
        type: 'error',
        message: "The user already exists! Login insted.",
      });
    }
    await setDoc(userDocRef, {
      email: user.email,
      username: username
    }).then(async (response) => {
      setNotification({
        isVisible: true,
        type: 'success',
        message: `User with ${user.email} has been registered successfully`,
      });
    }).catch(async (error) => {
      const errorMessage = await error.message;
      setNotification({
        isVisible: true,
        type: 'error',
        message: errorMessage,
      });
    });
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setNotification({
      isVisible: true,
      type: 'error',
      message: errorMessage,
    });
  });
  return;
}

export const addPurchase = async (userId, data) => {
  try {
    // Get reference to the 'applications' collection for the user
    const userApplicationsRef = collection(db, 'users', userId, 'purchases');
    // Add a new document to the 'applications' collection with the data
    const docRef = await addDoc(userApplicationsRef, { ...data });
    setSuccess("Your Order Submitted Successfully.")
  } catch (error) {
    const errorMessage = await error.message;
    setError(errorMessage);
  }
  return;
};


export const getUser = async (userId, setUserData) => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  if (userDoc.exists()) {
    setUserData(userDoc.data());
  } else {
    console.error("User not found");
  }
};

export const addContact = async (data, setNotification) => {
  const contactsDocRef = collection(db, "contacts");
  await addDoc(contactsDocRef, { ...data, responded: false }).then(async (userCredential) => {
    setNotification({
      isVisible: true,
      type: 'success',
      message: "Thank You! We will get back to you as soon as possible.",
    });
  }).catch(async (error) => {
    const errorMessage = await error.message;
    setNotification({
      isVisible: true,
      type: 'error',
      message: errorMessage,
    });
  });
};

export const addMailList = async (data, setNotification, setEmail) => {
  try {
    // Reference to the document using email as the document ID
    const mailDocRef = doc(db, "mail-list", data.email);
    const mailDoc = await getDoc(mailDocRef);

    // Check if the email already exists
    if (mailDoc.exists()) {
      return setNotification({
        isVisible: true,
        type: 'warning',
        message: "The email already exists! Try a new one.",
      });
    }

    // Add new email to the mail-list
    await setDoc(mailDocRef, { ...data });
    setNotification({
      isVisible: true,
      type: 'success',
      message: "You are now subscribed to our newsletter.",
    });
    setEmail("");
  } catch (error) {
    setNotification({
      isVisible: true,
      type: 'error',
      message: error.message || "An error occurred while subscribing.",
    });
  }
};