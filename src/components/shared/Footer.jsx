
import logo from '../../assets/images/logo3.jpg'

const Footer = () => {
  return (
    <div className='bg-blue-100'>
      <footer className="footer text-base-content p-10">
        <aside>
          <img src={logo} alt="" className="w-16 h-16 rounded-full" />
          <p className='text-base font-medium'>
            BackToOwner
            <br />
            Providing reliable service since 2019
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="divider"></div>
      <div className=" p-4">
        <p className="text-center font-medium">All Right Reserved @ Hayder Ali 2024</p>
      </div>
    </div>
  );
};

export default Footer;
