import Newsletter from '../../components/Newsletter/Newsletter';
import Featured from '../../components/Featured/Featured';
import Slider from '../../components/Slider/Slider';
import './Home.scss';
import Testimonials from '../../components/Testimonials/Testimonials';
import Flyer from '../../components/Flyer.jsx/Flyer';
import ScrollToTop from '../ScrollToTop';
import AppHelmet from '../AppHelmet';
import Products from '../../components/Products/Products';

export default function Home() {
  return (
    <div className='Home'>
      <ScrollToTop />
      <AppHelmet title={""} />
      <Slider />
      <Featured />
      <Products />
      <Flyer />
      <h1>Testimonials</h1>
      <h2>What clients say</h2>
      <Testimonials />
      <Newsletter />
    </div>
  )
}
