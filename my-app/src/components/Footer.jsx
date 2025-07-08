import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-green-400 mt-20 sm:mt-32 text-green-900 pointer-events-auto" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-20">
          {/* Brand */}
          <div className="flex flex-col items-start justify-start h-full mb-8 md:mb-0 col-span-1 sm:mr-8">
            <div className="flex items-center mb-4 sm:mb-8">
              <img src="/logo.png" alt="THE ECOM MONKS Logo" className="w-12 h-12 sm:w-20 sm:h-20 mr-3" />
              <span className="text-3xl sm:text-3xl font-extrabold text-green-700 tracking-tight">THE ECOM MONKS</span>
            </div>
            <p className="text-green-900 text-base sm:text-xl mb-2 leading-relaxed font-semibold text-left">
              Plot No. GH02, Sector-4, Greater Noida West- 201309
            </p>
            <a href="mailto:hello@thecommonks.com" className="text-green-700 hover:text-green-400 transition-colors duration-500 text-base sm:text-lg font-medium cursor-pointer mt-2 flex items-center break-all">
              <Mail className="w-5 h-5 mr-2" />hello@thecommonks.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Home</Link>
              <Link to="/services" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Services</Link>
              <Link to="/ourframeworks" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Frameworks</Link>
              <Link to="/contactus" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Contact Us</Link>
              <Link to="/whyus" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Why Us</Link>
              <Link to="/results" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Results</Link>
              <Link to="/how-it-works" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">How It Works</Link>
              <Link to="/aboutus" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">About Us</Link>
              <Link to="/faqs" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">FAQs</Link>
              <Link to="/thankyou" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Thank You</Link>

            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/refund" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Refund Policy</Link>
              <Link to="/tandc" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Terms and Conditions</Link>
              <Link to="/privacy" className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 mb-4">
              <a href="mailto:hello@thecommonks.com" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all"><Mail className="w-5 h-5 mr-2" />hello@thecommonks.com</a>
              <a href="tel:+918505846555" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500"><MessageCircle className="w-5 h-5 mr-2" />+91-8505846555</a>
              <a href="https://www.thecommonks.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all"><Globe className="w-5 h-5 mr-2" />www.thecommonks.com</a>
            </div>
            <div className="flex space-x-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-10 sm:mt-20 pt-8 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-base text-gray-400">
          <div className="mb-2 md:mb-0">© 2025 The Ecom Monks. All rights reserved.</div>
          <div className="mb-2 md:mb-0">Made with ❤️ in India</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
