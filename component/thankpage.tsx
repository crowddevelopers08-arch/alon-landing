// app/thank-you/page.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Phone, Mail, MapPin, Clock, CheckCircle, Award, Users, Shield } from 'lucide-react';

const ThankYouPage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    date: '',
    time: '',
    treatment: ''
  });

  useEffect(() => {
    // Get booking details from localStorage or URL params
    const savedBooking = localStorage.getItem('lastBooking');
    if (savedBooking) {
      setBookingDetails(JSON.parse(savedBooking));
    }
    
    // Clear the booking data after reading
    // localStorage.removeItem('lastBooking');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#D9953D] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#9B7057] rounded-full opacity-5 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Success Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-500" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-[#D9953D] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                ✓
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You, <span className="text-[#D9953D]">{bookingDetails.name || 'Valued Patient'}</span>!
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Your hair treatment journey begins with medical clarity and expert care.
          </p>

          {/* Booking Confirmation Card */}
          {bookingDetails.date && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 max-w-2xl mx-auto border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9953D]" />
                Appointment Confirmed
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Date</p>
                  <p className="text-lg font-semibold text-gray-900">{bookingDetails.date}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Time</p>
                  <p className="text-lg font-semibold text-gray-900">{bookingDetails.time}</p>
                </div>
                {bookingDetails.treatment && (
                  <div className="sm:col-span-2 bg-orange-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Treatment</p>
                    <p className="text-lg font-semibold text-gray-900 capitalize">{bookingDetails.treatment}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-10 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D9953D] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-[#D9953D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation Call</h3>
                <p className="text-sm text-gray-600">Our team will call within 2 hours to confirm your appointment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D9953D] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-[#D9953D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Doctor Consultation</h3>
                <p className="text-sm text-gray-600">Meet with our specialist for detailed scalp analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D9953D] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-[#D9953D]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Plan</h3>
                <p className="text-sm text-gray-600">Receive a custom treatment plan tailored to your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Patients Trust <span className="text-[#D9953D]">Anlon Aesthetics</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience the difference of medical-grade, ethical hair care
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D9953D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">12+ Years Experience</h3>
              <p className="text-sm text-gray-600">Led by Dr. Nisha R. Srinivas, dermatosurgeon</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D9953D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Medical Approach</h3>
              <p className="text-sm text-gray-600">Evidence-based, non-commercial treatments</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D9953D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">5000+ Patients</h3>
              <p className="text-sm text-gray-600">Trusted by thousands for hair restoration</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D9953D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-gray-600">Convenient appointment times available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Need to Reach Us?</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#D9953D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call us directly</p>
                    <a href="tel:+1234567890" className="text-lg font-semibold text-gray-900 hover:text-[#D9953D]">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#D9953D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email us</p>
                    <a href="mailto:care@anlon aesthetics.com" className="text-lg font-semibold text-gray-900 hover:text-[#D9953D]">
                      care@anlonaesthetics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#D9953D] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Visit us</p>
                    <p className="text-lg font-semibold text-gray-900">Chennai - Nungambakkam & Kotturpuram</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#D9953D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Clinic Hours</p>
                    <p className="text-lg font-semibold text-gray-900">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Prepare for Your Visit</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D9953D] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">Avoid washing hair on the day of consultation for better scalp analysis</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D9953D] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">Bring list of current medications or supplements you're taking</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D9953D] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">Share previous treatment history if any - helps us plan better</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D9953D] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">Arrive 10 minutes early to complete any necessary paperwork</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D9953D] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">5</span>
                  <p className="text-gray-700">Write down any questions or concerns about your hair loss</p>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-[#D9953D] bg-opacity-10 rounded-xl border-l-4 border-[#D9953D]">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#D9953D]">Note:</span> Your initial consultation includes a detailed scalp analysis using dermoscopy to assess follicle health and recommend the most suitable treatment approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#D9953D] text-black font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              ← Back to Home
            </Link>
            <Link
              href="/services"
              className="bg-[#9B7057] text-white font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Explore Our Services
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            We look forward to helping you on your hair restoration journey. See you soon!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;