import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-white mt-5 sm:mt-32 text-green-900 relative z-50" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-20">
          {/* Brand */}
          <div className="flex flex-col items-start justify-start h-full mb-1 md:mb-0 col-span-1 sm:mr-8">
            <div className="flex items-center mb-4 sm:mb-8">
              <img src="/logo.png" alt="THE ECOM MONKS Logo" className="w-12 h-12 sm:w-20 sm:h-20 mr-3" />
              <span className="text-3xl sm:text-3xl font-extrabold text-green-700 tracking-tight">THE ECOM MONKS</span>
            </div>
            <p className="text-green-900 text-base sm:text-xl mb-2 leading-relaxed font-semibold text-left">
              Plot No. GH02, Sector-4, Greater Noida West- 201309
            </p>
            <a href="mailto:hello@theecommonks.com" className="text-green-700 hover:text-green-400 transition-colors duration-500 text-base sm:text-lg font-medium cursor-pointer mt-2 flex items-center break-all">
              <Mail className="w-5 h-5 mr-2" />hello@theecommonks.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => handleLinkClick('/')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => handleLinkClick('/services')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Services
              </Link>
              <Link 
                to="/ourframeworks" 
                onClick={() => handleLinkClick('/ourframeworks')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Frameworks
              </Link>
              <Link 
                to="/contactus" 
                onClick={() => handleLinkClick('/contactus')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Contact Us
              </Link>
              <Link 
                to="/whyus" 
                onClick={() => handleLinkClick('/whyus')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Why Us
              </Link>
              <Link 
                to="/results" 
                onClick={() => handleLinkClick('/results')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Results
              </Link>
              <Link 
                to="/how-it-works" 
                onClick={() => handleLinkClick('/how-it-works')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                How It Works
              </Link>
              <Link 
                to="/aboutus" 
                onClick={() => handleLinkClick('/aboutus')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                About Us
              </Link>
              <Link 
                to="/faqs" 
                onClick={() => handleLinkClick('/faqs')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                FAQs
              </Link>
              <Link 
                to="/thankyou" 
                onClick={() => handleLinkClick('/thankyou')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Thank You
              </Link>
              <Link 
                to="/application" 
                onClick={() => handleLinkClick('/application')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/refund" 
                onClick={() => handleLinkClick('/refund')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Refund Policy
              </Link>
              <Link 
                to="/tandc" 
                onClick={() => handleLinkClick('/tandc')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Terms and Conditions
              </Link>
              <Link 
                to="/privacy" 
                onClick={() => handleLinkClick('/privacy')}
                className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 mb-4">
              <a href="mailto:hello@theecommonks.com" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all hover:underline">
                <Mail className="w-5 h-5 mr-2" />hello@theecommonks.com
              </a>
              <a href="tel:+918505846555" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 hover:underline">
                <MessageCircle className="w-5 h-5 mr-2" />+91-8505846555
              </a>
              <a href="https://www.thecommonks.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all hover:underline">
                <Globe className="w-5 h-5 mr-2" />www.thecommonks.com
              </a>
            </div>
            <div className="flex space-x-3 mt-2">
              <a href="https://www.linkedin.com/company/theecommonks/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=918586818818&text=Hi%2C%20I%20want%20to%20avail%20TheEcomMonk%20services!%20Can%20you%20help%20me%20scale%20my%20brand%3F" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/theecommonks/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:hello@theecommonks.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500">
                <Mail className="w-5 h-5 text-white" />
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
