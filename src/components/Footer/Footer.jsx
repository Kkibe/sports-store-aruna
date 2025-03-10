import './Footer.scss';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    return (
        <div className='footer theme'>
            <div className='section-wrapper theme'>
                <section>
                    <h2>sportsexpress</h2>
                    <div className='items-container theme'>
                        <NavLink to='/' title='sportsexpress' state={{ from: location }}>Home</NavLink>
                        <NavLink to='/store' title='store' state={{ from: location }}>Store</NavLink>
                        <NavLink to='/about' title='about us' state={{ from: location }}>About sportsexpress</NavLink>
                    </div>
                </section>

                <section>
                    <h2>Useful Links</h2>
                    <div className='items-container theme'>
                        <NavLink to='/login' title='login' state={{ from: location }}>Sign In</NavLink>
                        <NavLink to='/register' title='register' state={{ from: location }}>Get Started</NavLink>
                        <NavLink to='/contact' title='get in touch' state={{ from: location }}>Contact Us</NavLink>
                    </div>
                </section>
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; sportsexpress {new Date().getFullYear()}</p>
                <NavLink to="/about/#faq" title='help' state={{ from: location }}>FAQ</NavLink>
            </div>
        </div>
    );
}

export default Footer;
