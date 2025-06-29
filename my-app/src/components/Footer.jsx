import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-green-400 mt-20 sm:mt-32 text-green-900" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-20">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start justify-center h-full mb-8 sm:mb-0">
            <div className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-8 text-green-700 text-center sm:text-left ml-[-60px]">
              <span className="text-white">THE</span>
              <span className="text-yellow-400 ml-2 sm:ml-3">ECOM</span>
              <span className="text-blue-600 ml-2 sm:ml-3">MONKS</span>
            </div>
            <p className="text-green-900 text-base sm:text-xl mb-6 sm:mb-10 leading-relaxed font-semibold text-center sm:text-left flex items-center justify-center">
              Plot No. GH02, Sector-4, Greater Noida West- 201309
            </p>
            <div className="flex space-x-4 sm:space-x-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <Facebook className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <Linkedin className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 sm:mb-0 flex flex-col items-center sm:items-start">
            <h3 className="text-xl sm:text-3xl font-extrabold text-green-900 mb-6 sm:mb-10">
              Quick Links
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              {[
                "Home",
                "Our Services",
                "Our Frameworks",
                "Why Us",
                "Contact Us",
                "How it Works",
                "About Us",
                "Legal",
                "Privacy and Policy",
                "Terms and conditions",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-xl font-medium hover:translate-x-2 sm:hover:translate-x-4 transform block cursor-pointer"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl sm:text-3xl font-extrabold text-green-900 mb-6 sm:mb-10">Contact</h3>
            <div className="space-y-5 sm:space-y-8">
              <a
                href="mailto:hello@thecommonks.com"
                className="block text-green-700 hover:text-green-400 transition-colors duration-500 text-base sm:text-xl font-medium cursor-pointer"
              >
                <Mail className="inline w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 align-text-bottom" />
                hello@thecommonks.com
              </a>
              <a
                href="https://www.theecommonks.com"
                className="block text-green-700 hover:text-green-400 transition-colors duration-500 text-base sm:text-xl font-medium cursor-pointer"
              >
                <Globe className="inline w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 align-text-bottom" />
                www.theecommonks.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-10 sm:mt-20 pt-8 sm:pt-16 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <p className="text-xs sm:text-base text-gray-400 text-center">
            © 2025 The Ecom Monks. All rights reserved.
          </p>
          <p className="text-xs sm:text-base text-gray-400 mt-3 sm:mt-0 text-center">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
