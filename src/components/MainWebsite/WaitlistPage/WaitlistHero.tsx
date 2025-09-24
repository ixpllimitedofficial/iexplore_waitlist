"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { anton } from "@/app/fonts";

const WaitlistHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    registerAs: "User"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist submission:", formData);
    // Add your waitlist submission logic here
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col lg:flex-row items-center justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-image.png')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Content - Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <Image 
                src="/logo_waiting.png" 
                alt="iExplore Logo" 
                width={80} 
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight ${anton.className}`}>
              <span className="text-white">YOUR </span>
              <span className="text-gold-500">NIGHTLIFE</span>
              <br />
              <span className="text-gold-500">COMPANION</span>
              <span className="text-white"> IN</span>
              <br />
              <span className="text-white">YOUR HANDS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
              We're almost ready to launch. Get early access by joining the waitlist now. 
              You'll be the first to know when we go live.
            </p>

            {/* User Count */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <Image 
                src="https://www.iexploreonline.com/_next/static/media/ExplorersWaitingSvg.c8e9b2e3.svg"
                alt="Explorers waiting"
                width={160}
                height={40}
                className="w-32 sm:w-40 h-auto"
              />
              <p className="text-white font-medium">
                <span className="text-gold-500 font-bold">12.7k</span> Explorers already waiting
              </p>
            </div>

            {/* Mobile Join Waitlist Button */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gold-500 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Right Content - Waitlist Form (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-auto lg:min-w-[400px] xl:min-w-[450px]">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold-500/20">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
                Join Waitlist
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Row - Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      First name:
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Last name:
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      required
                    />
                  </div>
                </div>

                {/* Second Row - Phone and Register As */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Register as
                    </label>
                    <select
                      name="registerAs"
                      value={formData.registerAs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFC000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="User" className="bg-black text-white">User</option>
                      <option value="Vendor" className="bg-black text-white">Vendor</option>
                    </select>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-4 px-6 rounded-lg hover:bg-gold-500 hover:text-white transition-all duration-300 transform hover:scale-105 mt-6"
                >
                  Sign up now
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-white text-center mb-4 font-medium">Follow Us</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                    aria-label="Twitter/X"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.vicarious-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm text-center">
                  All rights reserve. IXPL Limited © 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:hidden">
          <div className="bg-black/95 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-gold-500/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">Join Waitlist</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gold-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={(e) => { handleSubmit(e); setIsModalOpen(false); }} className="space-y-4">
              {/* First Row - Name Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    required
                  />
                </div>
              </div>

              {/* Phone and Register As */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Register as
                  </label>
                  <select
                    name="registerAs"
                    value={formData.registerAs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFC000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="User" className="bg-black text-white">User</option>
                    <option value="Vendor" className="bg-black text-white">Vendor</option>
                  </select>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold-500 text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 mt-6"
              >
                Sign up now
              </button>
            </form>

            {/* Social Links in Modal */}
            <div className="mt-6">
              <p className="text-white text-center mb-4 font-medium">Follow Us</p>
              <div className="flex justify-center gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                  aria-label="Twitter/X"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.vicarious-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistHero;