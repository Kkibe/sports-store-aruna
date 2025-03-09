import './Flyer.scss';
import { NavLink, useLocation } from 'react-router-dom';
export default function Flyer() {
  const location = useLocation();
  return (
    <div className="flyer">
      <h1>Welcome to Your Ultimate Sports Gear Destination!</h1>
      <h2>Get the best sports accessories, from football boots to training gear. Shop now and elevate your game!</h2>
      <NavLink to="/store" className="btn">Explore</NavLink>
    </div>

  )
}
