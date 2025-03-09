import { NavLink } from 'react-router-dom';
import './About.scss';
import Faq from '../../components/Faq/Faq';
import Newsletter from '../../components/Newsletter/Newsletter';
import Testimonials from '../../components/Testimonials/Testimonials';
import ScrollToTop from '../ScrollToTop';
import AppHelmet from '../AppHelmet';

const About = () => {
    return (
        <div className="about">
            <ScrollToTop />
            <AppHelmet title={"About"} />
            <div className="about-us">
                <div className="info">
                    <h1>About Us</h1>
                    <p>Welcome to our online sports accessory store, your go-to destination for high-quality sports gear, apparel, and equipment! Whether you're an athlete, a fitness enthusiast, or a casual player, we provide everything you need to perform at your best.</p>

                    <h1>For Athletes and Sports Enthusiasts</h1>
                    <p>Explore our wide range of premium sports accessories, from football boots and jerseys to training equipment and protective gear. We carefully select products to help you train, compete, and enjoy your favorite sports with confidence.</p>

                    <h1>For Teams and Coaches</h1>
                    <p>We offer team kits, bulk orders, and customized gear for clubs, schools, and coaches looking to outfit their players with high-performance equipment. Our products are designed for durability and comfort, ensuring your team stays ahead of the competition.</p>

                    <h1>Stay Ahead with the Latest Gear</h1>
                    <p>We bring you the latest sports innovations, ensuring you have access to the best brands and cutting-edge gear. Subscribe to our updates and be the first to know about new arrivals, exclusive deals, and seasonal collections.</p>

                    <h1>Our Mission</h1>
                    <p>Our mission is to support athletes of all levels by providing top-quality sports accessories that enhance performance and comfort. We are passionate about sports and committed to helping you reach your goals. Join our community and experience the best in sports gear today!</p>

                    <div className="links">
                        <NavLink to="/contact" title='contact' className="btn">Contact Us</NavLink>
                        <NavLink to="#subscribe" title='newsletter' className='btn'>Newsletter</NavLink>
                    </div>
                </div>
            </div>
            <Faq />
            <h1>What Our Clients Say:</h1>
            <Testimonials />
            <Newsletter />
        </div>
    );
}

export default About;