'use client'

import { useState } from 'react';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    treatment: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.consent) {
      setSubmitStatus({ type: 'error', message: 'Please consent to being contacted' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          treatment: formData.treatment,
          message: formData.message,
          preferredDate: formData.date,
          consent: formData.consent,
          source: 'Anlon Booking Form',
          formName: 'Anlon-Booking',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          status: 'new',
          bookingStatus: 'pending',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (onSuccess) onSuccess();
        onClose?.();

        // ── Redirect to thank-you page with full page reload ──
        window.location.href = redirectUrl;
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit booking. Please try again.',
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
      setIsSubmitting(false);
    }
  };

  const getTodayDate = () => new Date().toISOString().split('T')[0];

  if (!inline && !isOpen) return null;

  const formContent = (
    <>
      {/* Error message */}
      {submitStatus.type === 'error' && (
        <div className="mb-4 p-3 rounded-lg text-sm bg-red-50 text-red-800 border border-red-200">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <svg className="w-4 h-4 inline mr-1" style={{ color: '#9B7057' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <svg className="w-4 h-4 inline mr-1" style={{ color: '#9B7057' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Row 2: Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <svg className="w-4 h-4 inline mr-1" style={{ color: '#9B7057' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Row 3: Date & Treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <svg className="w-4 h-4 inline mr-1" style={{ color: '#9B7057' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Preferred Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={getTodayDate()}
              disabled={isSubmitting}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
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
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Select a treatment</option>
              <option value="Initial Consultation">Initial Consultation</option>
              <option value="Skin Brightening">Skin Brightening</option>
              <option value="HIFU Lifting">HIFU Lifting</option>
              <option value="Acne & Scars">Acne &amp; Scars</option>
              <option value="Anti-Ageing">Anti-Ageing</option>
              <option value="Pigmentation">Pigmentation</option>
              <option value="Hair Removal">Hair Removal</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 4: Consent */}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="mt-1 mr-2 w-4 h-4 border-gray-300 rounded"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I consent to being contacted via call, SMS, or WhatsApp regarding my appointment and treatment options.{' '}
            <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Row 5: Buttons */}
        <div className={`flex gap-3 ${inline ? 'pt-2' : 'pt-4'}`}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(90deg, #9B7057, #b8875f)' }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

  // ── Inline mode ──
  if (inline) return <div>{formContent}</div>;

  // ── Modal mode ──
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="flex min-h-full items-center justify-center p-4 max-sm:mt-7 md:mt-6">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
          {/* Modal header */}
          <div className="px-8 pt-6 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Book a Quick Appointment</h2>
                <p className="text-sm text-gray-600 mt-1">Fuller Scalp, Stronger Roots, Stronger Hair.</p>
              </div>
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
