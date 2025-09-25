"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { anton } from "@/app/fonts";

const WaitlistHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Waitlist submission:", formData);
      // Add your waitlist submission logic here
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        registerAs: "User"
      });
      
      // Close modal if open
      setIsModalOpen(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error("Submission error:", error);
      // Handle error state if needed
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20 xl:gap-24">
          
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
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h2 className={`text-white text-2xl sm:text-3xl font-bold mb-6 text-center ${anton.className}`}>
                Join Waitlist
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Row - Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-3 py-3 bg-white/20 backdrop-blur-sm border-0 border-b-2 border-gold-500 text-white placeholder-gray-300 focus:outline-none focus:border-gold-400 focus:bg-white/25 transition-all duration-300 rounded-t"
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
                      className="w-full px-3 py-3 bg-white/20 backdrop-blur-sm border-0 border-b-2 border-gold-500 text-white placeholder-gray-300 focus:outline-none focus:border-gold-400 focus:bg-white/25 transition-all duration-300 rounded-t"
                      required
                    />
                  </div>
                </div>

                {/* Second Row - Phone and Register As */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-3 py-3 bg-white/20 backdrop-blur-sm border-0 border-b-2 border-gold-500 text-white placeholder-gray-300 focus:outline-none focus:border-gold-400 focus:bg-white/25 transition-all duration-300 rounded-t"
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
                      className="w-full px-3 py-3 bg-white/20 backdrop-blur-sm border-0 border-b-2 border-gold-500 text-white focus:outline-none focus:border-gold-400 focus:bg-white/25 transition-all duration-300 rounded-t appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFC000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.2em 1.2em'
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
                    className="w-full px-3 py-3 bg-white/20 backdrop-blur-sm border-0 border-b-2 border-gold-500 text-white placeholder-gray-300 focus:outline-none focus:border-gold-400 focus:bg-white/25 transition-all duration-300 rounded-t"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white/90 text-black font-bold py-4 px-6 rounded-full hover:bg-white transition-all duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining waitlist..." : "Sign up now"}
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-white text-center mb-4 font-medium">Follow Us</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
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
          <div className="bg-transparent rounded-2xl p-4 w-full max-w-sm max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-white text-xl font-bold ${anton.className}`}>Join Waitlist</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gold-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* First Row - Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white text-xs font-medium mb-1">
                    First name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 bg-transparent border-0 border-b-2 border-gold-500 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-xs font-medium mb-1">
                    Last name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 bg-transparent border-0 border-b-2 border-gold-500 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Phone and Register As */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white text-xs font-medium mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 bg-transparent border-0 border-b-2 border-gold-500 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-xs font-medium mb-1">
                    Register as
                  </label>
                  <select
                    name="registerAs"
                    value={formData.registerAs}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 bg-transparent border-0 border-b-2 border-gold-500 text-white focus:outline-none focus:border-gold-400 appearance-none cursor-pointer text-sm"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFC000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.25rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1rem 1rem'
                    }}
                  >
                    <option value="User" className="bg-black text-white">User</option>
                    <option value="Vendor" className="bg-black text-white">Vendor</option>
                  </select>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white text-xs font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 bg-transparent border-0 border-b-2 border-gold-500 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 text-sm"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white/90 text-black font-bold py-3 px-6 rounded-full hover:bg-white transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? "Joining waitlist..." : "Sign up now"}
              </button>
            </form>

            {/* Social Links in Modal */}
            <div className="mt-4">
              <p className="text-white text-center mb-3 font-medium text-sm">Follow Us</p>
              <div className="flex justify-center gap-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <div>
              <p className="font-bold">Success!</p>
              <p className="text-sm">You've been added to the waitlist. We'll notify you when we launch!</p>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="ml-2 text-white hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistHero;