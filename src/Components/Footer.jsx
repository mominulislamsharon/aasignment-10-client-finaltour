import { Link } from 'react-router-dom';
import footerImage from '../../public/LogoH.png'

const Footer = () => {
  return (
    <div className='p-10 bg-base-200 text-base-content'>
        <footer className="footer ">
      <aside>
        <div>
            <img className='w-[60px]' src={footerImage} alt="" />
        </div>
        <p className="text-2xl font-bold">
          Artifacts.Ltd
        </p>
        <p className="font-medium">It was established in 2024.</p>
        <div className=" pt-6">
        <input type="text" placeholder="Your Email" className="input input-bordered join-item" /> 
        <button className="btn ml-2 btn-primary rounded-lg join-item">Subscribe</button>
      </div>
      </aside>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Landscape Painting</a>
        <a className="link link-hover">Portrait Drawing</a>
        <a className="link link-hover">Watercolour Painting</a>
        <a className="link link-hover">Oil Painting</a>
        <a className="link link-hover">Cartoon Drawing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to='/' className="link font-medium link-hover">Home</Link>
        <a className="link font-medium link-hover">Add Craft Item</a>
        <a className="link font-medium link-hover">All Art & Craft Items</a>
        <a className="link  font-medium link-hover">About Us</a>
        <a className="link font-medium link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">artifacts@gmail.com</a>
        <a className="link link-hover">+88 124 445 24</a>
        <a className="link link-hover">Howbuilding Dhaka</a>
      </nav>
      
    </footer>
    <div className='text-center pt-8 font-medium'>
    <p>Copyright © 2024 - All right reserved by Artifacts Ltd</p>
    </div>
    </div>
  );
};

export default Footer;
