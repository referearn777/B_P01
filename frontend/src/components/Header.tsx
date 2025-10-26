import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Alankritha Naturals Logo" className="h-10 w-auto object-contain" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Alankritha Naturals
              </h1>
              <p className="text-xs text-gray-600">Beauty parlour & Botique</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>7981904087</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}