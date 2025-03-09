import './Products.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { products } from '../../data';

export default function Products() {
  const location = useLocation();
  return (
    <div className='products' id='products'>
      <h1 className='head'>Explore Our Store</h1>
      <div className="wrapper">
        {
          products.map(product => {
            return (
              <div key={product.id}>
                <h1>{product.plan}</h1>
                <div className="image-container">
                  <img src={`${product.image}`} alt="" />
                </div>
                <h2><span>KSH{product.price}</span></h2>
                <h3>{product.title}</h3>
                <ul>
                  {
                    product.features.map(feature => {
                      return <li key={feature.split(" ").join("_")}>{feature}</li>
                    })
                  }
                </ul>
                <img src="https://i.postimg.cc/2jV99bKc/Vector-1.png" alt="bg" className="table-bg" />
                <NavLink className="btn" style={{ backgroundColor: product.color }} state={{ from: location, data: product }} to={"/pay"}>Buy Now</NavLink>
              </div>
            );
          })
        }

      </div>
    </div>
  )
}
