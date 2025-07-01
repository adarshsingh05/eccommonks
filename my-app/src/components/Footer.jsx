import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-green-400 mt-20 sm:mt-32 text-green-900" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-20">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start justify-center h-full mb-8 sm:mb-0">
            <div className="flex items-center mb-4 sm:mb-8">
              <img src="/logo.png" alt="THE ECOM MONKS Logo" className="w-12 h-12 sm:w-16 sm:h-16 mr-3" />
              <span className="text-3xl sm:text-5xl font-extrabold text-green-700 tracking-tight">THE ECOM MONKS</span>
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
          <div className="mb-8 sm:mb-0 flex flex-col items-center sm:items-start w-full">
            <h3 className="text-xl sm:text-3xl font-extrabold text-green-900 mb-6 sm:mb-10">Quick Links</h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-4">
              {[
                { label: "Home", href: "#" },
                { label: "Our Services", href: "#services" },
                { label: "Our Frameworks", href: "#frameworks" },
                { label: "Why Us", href: "#whyus" },
                { label: "Contact Us", href: "#contact" },
                { label: "How it Works", href: "#howitworks" },
                { label: "About Us", href: "#about" },
                { label: "FAQs", href: "#faqs" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms and Conditions", href: "#terms" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-green-700 hover:text-green-400 transition-all duration-500 text-base sm:text-xl font-medium block py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl sm:text-3xl font-extrabold text-green-900 mb-6 sm:mb-10">Contact</h3>
            <div className="space-y-5 sm:space-y-8">
              <a
                href="mailto:hello@thecommonks.com"
                className="flex flex-col sm:flex-row items-center text-green-700 hover:text-green-400 transition-colors duration-500 text-base sm:text-lg md:text-base font-medium cursor-pointer"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5 mr-0 sm:mr-2 mb-1 sm:mb-0 align-text-bottom" />
                <span className="leading-tight">hello@thecommonks.com</span>
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
