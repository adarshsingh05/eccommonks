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
        {/* Brand Row for Mobile - Text then Logo (move to very top, only show once) */}
        <div className="flex md:hidden items-center mb-6 mt-2">
        <img src="/logo.png" alt="THE ECOM MONKS Logo" className="w-12 h-12" />
          <span className="text-xl xs:text-2xl font-extrabold text-green-700 tracking-tight whitespace-nowrap mr-3">THE ECOM MONKS</span>
          
        </div>
        {/* Brand Row - Top Left */}
        <div className="hidden md:flex items-center mb-10 sm:mb-[5px] mt-2 sm:mt-[-230px] sm:ml-[-130px]">
          <img src="/logo.png" alt="THE ECOM MONKS Logo" className="w-24 h-24 mr-4" />
          <span className="text-2xl sm:text-4xl font-extrabold text-green-700 tracking-tight whitespace-nowrap" style={{ fontSize: '2.5rem', lineHeight: 1 }}>THE ECOM MONKS</span>
        </div>

        {/* Team Credentials Section */}
        <div className="hidden md:flex flex-col items-center justify-center w-full mb-12">
          <div className="relative mb-2">
            <span className="text-4xl font-extrabold text-black relative z-10">Your Monks' Credentials</span>
            <span className="absolute left-0 right-0 bottom-1 h-4 bg-yellow-100 z-0" style={{ width: '100%', borderRadius: '4px' }}></span>
          </div>
          <div className="text-xl italic text-black mb-6 mt-2">Built by Monks who’ve scaled real brands — now here to scale yours.</div>
          <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-8 mt-2 w-full max-w-2xl">
            <img src="/Indian School of Business Logo.png" alt="ISB" className="h-8 sm:h-10 object-contain mb-2" />
            <img src="/Gyan Dairy logo.png" alt="Gyan Dairy" className="h-10 sm:h-14 object-contain mb-2" />
            <img src="/Happy Bunny.jpg" alt="Happy Bunny" className="h-10 sm:h-14 object-contain mb-2" />
            <img src="/edreams-odigeo.png" alt="edreams-odigeo" className="h-10 sm:h-20 w-20 object-contain bg-white rounded-full px-2 mb-2" />
            <img src="/Rare Rabit.png" alt="Rare Rabit" className="h-8 sm:h-10 object-contain bg-black rounded px-2 mb-2" />
            <img src="/Thyrocare.png" alt="Thyrocare" className="h-10 sm:h-14 object-contain bg-white rounded-full px-2 mb-2" />
            <img src="/Nhea Logo.png" alt="Nhea Logo" className="h-14 sm:h-18 sm:w-[140px] sm:ml-[-40px] object-contain bg-white rounded-full px-2 mb-2" />
          </div>
        </div>

        {/* Team Credentials Section for Mobile */}
        <div className="flex md:hidden flex-col items-center justify-center w-full mb-8 mt-2 px-2">
          <div className="relative mb-2 w-full flex flex-col items-center">
            <span className="text-lg xs:text-xl sm:text-2xl font-extrabold text-black relative z-10 text-center">Your Monks' Credentials</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-2 bg-yellow-100 z-0 w-3/4 rounded" style={{ minWidth: '120px' }}></span>
          </div>
          <div className="text-sm xs:text-base sm:text-lg italic text-black mb-4 mt-1 text-center">Built by Monks who’ve scaled real brands — now here to scale yours.</div>
          <div className="flex flex-col items-center w-full max-w-xs mx-auto gap-2">
            <div className="flex flex-row items-center justify-center gap-3 w-full">
              <img src="/Indian School of Business Logo.png" alt="ISB" className="h-9 object-contain" />
              <img src="/Gyan Dairy logo.png" alt="Gyan Dairy" className="h-10 object-contain" />
              <img src="/Happy Bunny.jpg" alt="Happy Bunny" className="h-10 object-contain" />
              <img src="/edreams-odigeo.png" alt="edreams-odigeo" className="h-10 w-12 object-contain bg-white rounded-full px-1" />
            </div>
            <div className="flex flex-row items-center justify-center gap-3 w-full mt-1">
              <img src="/Rare Rabit.png" alt="Rare Rabit" className="h-9 object-contain bg-black rounded px-1" />
              <img src="/Thyrocare.png" alt="Thyrocare" className="h-10 object-contain bg-white rounded-full px-1" />
              <img src="/Nhea Logo.png" alt="Nhea Logo" className="h-16 w-[100px] ml-[-10px] object-contain bg-white rounded-full px-1" />
            </div>
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 gap-10 sm:gap-20 items-start">
          {/* Email under brand, left-aligned */}
         
          {/* Quick Links, Legal, Contact - All at Same Level */}
          <div className="col-span-9 flex flex-row items-start justify-between w-full sm:w-[1300px] h-full">
            {/* Each section grows to fill space and aligns to bottom */}
            <div className="flex flex-col items-start flex-1 max-w-xs">
              <h3 className="text-2xl font-extrabold text-green-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-16">
                <div className="flex flex-col space-y-2">
                  <Link to="/" onClick={() => handleLinkClick('/')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Home</Link>
                  <Link to="/services" onClick={() => handleLinkClick('/services')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Services</Link>
                  <Link to="/ourframeworks" onClick={() => handleLinkClick('/ourframeworks')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Frameworks</Link>
                  <Link to="/contactus" onClick={() => handleLinkClick('/contactus')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Contact Us</Link>
                  <Link to="/whyus" onClick={() => handleLinkClick('/whyus')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Why Us</Link>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link to="/results" onClick={() => handleLinkClick('/results')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Results</Link>
                  <Link to="/how-it-works" onClick={() => handleLinkClick('/how-it-works')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">How It Works</Link>
                  <Link to="/aboutus" onClick={() => handleLinkClick('/aboutus')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">About Us</Link>
                  <Link to="/faqs" onClick={() => handleLinkClick('/faqs')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">FAQs</Link>
                  <Link to="/application" onClick={() => handleLinkClick('/application')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Monk Grant</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start flex-1 max-w-xs">
              <h3 className="text-2xl font-extrabold text-green-900 mb-4 ">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/refund" onClick={() => handleLinkClick('/refund')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Refund Policy</Link>
                <Link to="/tandc" onClick={() => handleLinkClick('/tandc')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Terms and Conditions</Link>
                <Link to="/privacy" onClick={() => handleLinkClick('/privacy')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex flex-col items-start flex-1 max-w-xs">
              <h3 className="text-2xl font-extrabold text-green-900 mb-4">Contact</h3>
              <div className="flex flex-col space-y-2 mb-4">
                <a href="mailto:hello@theecommonks.com" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all hover:underline whitespace-nowrap text-lg"><Mail className="w-6 h-6 mr-2" />hello@theecommonks.com</a>
                <a href="tel:+918505846555" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 hover:underline text-lg"><MessageCircle className="w-6 h-6 mr-2" />+91-8505846555</a>
                <a href="https://www.thecommonks.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all hover:underline text-lg"><Globe className="w-6 h-6 mr-2" />www.thecommonks.com</a>
              </div>
              <div className="flex space-x-3 mt-2">
                <a href="https://www.linkedin.com/company/theecommonks/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><Linkedin className="w-6 h-6 text-white" /></a>
                <a href="https://api.whatsapp.com/send?phone=918586818818&text=Hi%2C%20I%20want%20to%20avail%20TheEcomMonk%20services!%20Can%20you%20help%20me%20scale%20my%20brand%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><MessageCircle className="w-6 h-6 text-white" /></a>
                <a href="https://www.instagram.com/theecommonks/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><Instagram className="w-6 h-6 text-white" /></a>
                <a href="mailto:hello@theecommonks.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><Mail className="w-6 h-6 text-white" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (unchanged) */}
        <div className="md:hidden grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-20">
          {/* Quick Links */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => handleLinkClick('/')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Home</Link>
              <Link to="/services" onClick={() => handleLinkClick('/services')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Services</Link>
              <Link to="/ourframeworks" onClick={() => handleLinkClick('/ourframeworks')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Frameworks</Link>
              <Link to="/contactus" onClick={() => handleLinkClick('/contactus')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Contact Us</Link>
              <Link to="/whyus" onClick={() => handleLinkClick('/whyus')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Why Us</Link>
              <Link to="/results" onClick={() => handleLinkClick('/results')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Results</Link>
              <Link to="/how-it-works" onClick={() => handleLinkClick('/how-it-works')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">How It Works</Link>
              <Link to="/aboutus" onClick={() => handleLinkClick('/aboutus')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">About Us</Link>
              <Link to="/faqs" onClick={() => handleLinkClick('/faqs')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">FAQs</Link>
              <Link to="/application" onClick={() => handleLinkClick('/application')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Monk Grant</Link>
            </div>
          </div>
          {/* Legal */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/refund" onClick={() => handleLinkClick('/refund')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Refund Policy</Link>
              <Link to="/tandc" onClick={() => handleLinkClick('/tandc')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Terms and Conditions</Link>
              <Link to="/privacy" onClick={() => handleLinkClick('/privacy')} className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-lg font-medium block cursor-pointer focus:outline-none focus:ring-0 hover:underline">Privacy Policy</Link>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-start w-full col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-green-900 mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 mb-4">
              <a href="mailto:hello@theecommonks.com" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all hover:underline whitespace-nowrap"><Mail className="w-5 h-5 mr-2" />hello@theecommonks.com</a>
              <a href="tel:+918505846555" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 hover:underline"><MessageCircle className="w-5 h-5 mr-2" />+91-8505846555</a>
              <a href="https://www.thecommonks.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-700 hover:text-green-400 transition-colors duration-500 break-all hover:underline"><Globe className="w-5 h-5 mr-2" />www.thecommonks.com</a>
            </div>
            <div className="flex space-x-3 mt-2">
              <a href="https://www.linkedin.com/company/theecommonks/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><Linkedin className="w-5 h-5 text-white" /></a>
              <a href="https://api.whatsapp.com/send?phone=918586818818&text=Hi%2C%20I%20want%20to%20avail%20TheEcomMonk%20services!%20Can%20you%20help%20me%20scale%20my%20brand%3F" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><MessageCircle className="w-5 h-5 text-white" /></a>
              <a href="https://www.instagram.com/theecommonks/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><Instagram className="w-5 h-5 text-white" /></a>
              <a href="mailto:hello@theecommonks.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500"><Mail className="w-5 h-5 text-white" /></a>
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
