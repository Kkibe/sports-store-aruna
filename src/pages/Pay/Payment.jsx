import { useLocation } from 'react-router-dom';
import './Pay.scss';
import { useEffect, useState } from 'react';
import AppHelmet from '../AppHelmet';
import ScrollToTop from '../ScrollToTop';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dataState, notificationState, userState } from '../../recoil/atoms';
import { PaystackButton } from 'react-paystack';
import { addPurchase, getUser } from '../../firebase';


export default function Payment() {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);
  const [paymentType, setPaymentType] = useState("mpesa");
  const location = useLocation();
  const [data, setData] = useState(dataState);
  const setNotification = useSetRecoilState(notificationState);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setData(location.state.data)
    } else {
      setData(products[0])
    }
  }, [location]);

  const componentProps = {
    reference: (new Date()).getTime().toString(),
    email: user ? user.email : "coongames8@gmail.com",
    amount: (paymentType === "mpesa") ? ((data && data.price * 100) || (data.price * 100)) : (((data && data.price * 100) / 129) || ((data.price * 100) / 129)),
    publicKey: 'pk_live_bddd84f711046f4cb7bfd24aa6a640af0dbfd784',
    currency: (paymentType === "mpesa") ? "KES" : "USD",
    metadata: {
      name: user ? user.email : "coongames8@gmail.com",
    },
    text: 'PAY NOW',
    onSuccess: async (response) => {
      const currentDate = new Date().toISOString();
      await addPurchase(user.email, {
        date: currentDate,
        delivered: false,
        paid: true,
        amount: data.price,
        item: data.title,
      }, setNotification).then(() => {
        getUser(user.email, setUser);
      }).then(() => {
        navigate("/", { replace: true });
      });
    },
    onClose: () => {
      //console.log('Payment dialog closed');
      // Handle payment closure here
    },
  };

  return (
    <div className='pay'>
      <AppHelmet title={"Booking"} />
      <ScrollToTop />
      {
        loading && <Loader />
      }

      {data && <h4>Payment Of {paymentType === 'mpesa' ? `KSH ${data.price}` : `$ ${(data.price / 129).toFixed(2)}`}</h4>}
      {data && <h4>{data.plan} Plan For A {data.billing}</h4>}
      <form className="method">
        <fieldset>
          <input name="payment-method" type="radio" value={"mpesa"} id="mpesa" checked={paymentType === "mpesa"} onChange={(e) => setPaymentType(e.target.value)} />
          <label htmlFor="mpesa">📲 Mobile Payment</label>
        </fieldset>
        <fieldset>
          <input name="payment-method" type="radio" value={"card"} id="card" checked={paymentType === "card"} onChange={(e) => setPaymentType(e.target.value)} />
          <label htmlFor="card">💳 Credit Card</label>
        </fieldset>
      </form>
      <PaystackButton {...componentProps} className='btn' />
    </div>
  )
}
