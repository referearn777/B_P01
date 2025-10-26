import { Heart, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              Alankritha Naturals
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your premier destination for natural beauty treatments and organic skincare in a serene spa environment.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="h-4 w-4 text-pink-400" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-pink-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Popular Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Facial Treatments</span></li>
              <li><span className="text-gray-300">Hair Styling</span></li>
              <li><span className="text-gray-300">Pedicure & Manicure</span></li>
              <li><span className="text-gray-300">Makeup Artistry</span></li>
              <li><span className="text-gray-300">Spa & Massage</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Oppo Maharani parlour, Akkayyapalem, Visakhapatnam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">7981904087</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">sivakumari8822@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Alankritha Naturals. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}