// components/BookingFormModal.tsx
'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { X } from 'lucide-react';

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
}

// Define props interface
interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingFormModal = ({ isOpen, onClose }: BookingFormModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    message: ''
  });

  // Type-safe change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Type-safe submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can send this data to your backend
    alert('Booking confirmed! We will contact you shortly.');
    onClose();
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayDate = (): string => {
    return new Date().toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container - Large, Fixed Height, No Scroll */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
          
          {/* Header - Spacious */}
          <div className="px-8 pt-6 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Book Your Consultation
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Please fill in your details to schedule an appointment with our specialists
                </p>
              </div>
              {/* Close button */}
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Form Content - Fixed Height, No Scroll Needed */}
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Row 2: Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Row 3: Date, Time & Treatment */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={getTodayDate()}
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all"
                  />
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Treatment Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a treatment</option>
                    <option value="consultation">Initial Consultation</option>
                    <option value="hair-fall">Hair Fall Treatment</option>
                    <option value="regenera">Regenera Activa</option>
                    </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your concerns or specific requirements..."
                />
              </div>

              {/* Row 5: Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg text-sm bg-[#9B7057] hover:bg-[#c4842c]"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm border border-gray-300"
                >
                  Cancel
                </button>
              </div>

              {/* Additional Info */}
              <p className="text-xs text-gray-500 text-center mt-4">
                By confirming your booking, you agree to our terms and conditions and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;