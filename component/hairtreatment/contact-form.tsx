// components/BookingFormModal.tsx
'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { X, Phone, Mail, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
  consent: boolean;
}

// Define props interface
interface BookingFormModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
  redirectUrl?: string;
  inline?: boolean;
}

const BookingFormModal = ({
  isOpen,
  onClose,
  onSuccess,
  redirectUrl = '/thank-you',
  inline = false,
}: BookingFormModalProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Type-safe change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Type-safe submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setSubmitStatus({
        type: 'error',
        message: 'Please consent to being contacted'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          treatment: formData.treatment,
          message: formData.message,
          consent: formData.consent,
          source: 'Anlon Booking Form',
          formName: 'Anlon',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          status: 'new',
          bookingStatus: 'pending'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
        
        // Close the modal first
        onClose?.();
        
        // Redirect to thank-you page
        router.push(redirectUrl);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit booking. Please try again.'
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
      setIsSubmitting(false);
    }
  };


  if (!inline && !isOpen) return null;

  const formContent = (
    <>
      {/* Status Message - Only show errors */}
      {submitStatus.type === 'error' && (
        <div className="mb-4 p-3 rounded-lg text-sm bg-red-50 text-red-800 border border-red-200">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 inline mr-1 text-[#9B7057]" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 inline mr-1 text-[#9B7057]" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Row 2: Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Phone className="w-4 h-4 inline mr-1 text-[#9B7057]" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Row 3: Treatment */}
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Treatment Type <span className="text-red-500">*</span>
            </label>
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9B7057] focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Select a treatment</option>
              <option value="Hair Thinning Treatment">Hair Thinning Treatment</option>
              <option value="Skin Brightening">Hairloss Treatment</option>
              <option value="HIFU Lifting">Baldness Treatment</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 5: Consent */}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="mt-1 mr-2 w-4 h-4 text-[#9B7057] border-gray-300 rounded focus:ring-[#9B7057]"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I consent to being contacted via call, SMS, or WhatsApp regarding my appointment and treatment options. <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Row 6: Buttons */}
        <div className={`flex gap-3 ${inline ? 'pt-2' : 'pt-4'}`}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-cta flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              <span className="flex items-center gap-2 flex-nowrap justify-center">
                <span className="hidden md:inline text-[11px] font-semibold line-through text-red-300 tracking-wide whitespace-nowrap">Consultation Fee ₹499</span>
                <span className="hidden md:inline text-[10px] font-bold text-green-300 tracking-wider uppercase border border-green-300 px-1.5 py-0.5 rounded-full whitespace-nowrap">FREE</span>
                <span className="hidden md:inline w-px h-3 bg-white/30 flex-shrink-0" />
                <span className="flex items-center gap-1.5 whitespace-nowrap font-bold">
                  Book Your Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            )}
          </button>
          {!inline && (
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm border border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );

  // ── Inline mode ──────────────────────────────────────────────────────────
  if (inline) return <div>{formContent}</div>;

  // ── Modal mode ───────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="flex min-h-full items-center justify-center p-4 max-sm:mt-7 md:mt-6">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
          <div className="px-8 pt-6 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Book a Quick Appointment</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Fuller Scalp , Stronger Roots , Stronger Hair.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close modal"
                disabled={isSubmitting}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="px-8 py-6">{formContent}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;