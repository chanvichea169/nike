import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="max-container flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={50} alt="logo" />
          </a>
          <p className="text-sm text-slate-gray mt-5">
            © 2021 Nike. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h4 className="text-lg font-bold text-white">Company</h4>
          <a href="/" className="text-sm text-slate-gray">
            About Us
          </a>
          <a href="/" className="text-sm text-slate-gray">
            Careers
          </a>
          <a href="/" className="text-sm text-slate-gray">
            News
          </a>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h4 className="text-lg font-bold text-white">Support</h4>
          <a href="/" className="text-sm text-slate-gray">
            Contact Us
          </a>
          <a href="/" className="text-sm text-slate-gray">
            FAQs
          </a>
          <a href="/" className="text-sm text-slate-gray">
            Shipping & Returns
          </a>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h4 className="text-lg font-bold text-white">Follow Us</h4>
          <a
            href="https://www.facebook.com/share/15adbnS5NG/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-gray"
          >
            Facebook
          </a>
          <a
            href="https://t.me/Vichea_Chann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-gray"
          >
            Telegram
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-gray"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
