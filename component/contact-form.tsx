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
    <div className="fixed inset-0 z-50 overflow-y-auto pt-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container - Compact, No Scroll */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-3 md:p-6">
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[98%] sm:max-w-md md:max-w-lg mx-auto">
          
          {/* Header - Compact */}
          <div className="px-3 sm:px-4 md:px-5 pt-3 sm:pt-4 pb-1 sm:pb-2 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  Book Consultation
                </h2>
                <p className="text-xs text-gray-600 mt-0.5">
                  Fill details to schedule your appointment
                </p>
              </div>
              {/* Close button */}
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Form Content - Compact, No Scroll Needed */}
          <div className="px-3 sm:px-4 md:px-5 py-2 sm:py-3">
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5 md:space-y-3">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all"
                    placeholder="Full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all"
                    placeholder="Email address"
                  />
                </div>
              </div>

              {/* Row 2: Phone */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Row 3: Date, Time & Treatment */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={getTodayDate()}
                    className="w-full px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all"
                  />
                </div>


              </div>
                {/* Treatment */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Treatment *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all bg-white"
                  >
                    <option value="">Select</option>
                    <option value="consultation">Consultation</option>
                    <option value="hair-fall">Hair Fall</option>
                    <option value="regenera">Regenera</option>
                    <option value="prp">PRP</option>
                  </select>
                </div>
              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D9953D] focus:border-[#D9953D] transition-all resize-none"
                  placeholder="Any specific concerns..."
                />
              </div>

              {/* Row 5: Buttons */}
              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 text-black font-semibold py-1.5 sm:py-2 px-2 rounded-md transition-all duration-300 shadow hover:shadow-md text-xs sm:text-sm"
                  style={{ backgroundColor: '#D9953D' }}
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-1.5 sm:py-2 px-2 rounded-md hover:bg-gray-300 transition-all duration-300 text-xs sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;