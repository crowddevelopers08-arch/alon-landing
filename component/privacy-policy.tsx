// app/privacy-policy/page.jsx or components/PrivacyPolicy.jsx
import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header with clinic name */}
        <div className="bg-[#9B7057] px-6 py-8 sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-white/90 mt-2 text-sm sm:text-base">
            Anlon Skin & Aesthetics • Last Updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-8">
          
          {/* Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Our Commitment to Your Privacy</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              At Anlon Skin & Aesthetics, we understand that your hair and scalp health information is personal and sensitive. This Privacy Policy explains how we collect, use, and protect your information when you visit our clinic or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We are committed to maintaining the confidentiality of your medical information in accordance with applicable laws and medical ethics.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">To provide you with the best hair treatment care, we may collect:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-medium">Personal Information:</span> Name, age, contact details, and identification</li>
              <li><span className="font-medium">Medical History:</span> Hair loss history, previous treatments, medications, and family history of hair conditions</li>
              <li><span className="font-medium">Clinical Information:</span> Scalp analysis results, hair density measurements, and treatment progress photos</li>
              <li><span className="font-medium">Payment Information:</span> Billing details and insurance information (if applicable)</li>
              <li><span className="font-medium">Website Data:</span> Cookies and browsing behavior when you visit our website</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Your information helps us provide better care:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>To accurately diagnose your hair and scalp condition</li>
              <li>To create personalized treatment plans for hair fall, thinning, or restoration</li>
              <li>To track your progress through before/after photos and consultations</li>
              <li>To communicate appointment reminders and follow-up care instructions</li>
              <li>To process payments and maintain medical records</li>
              <li>To improve our services based on patient outcomes</li>
            </ul>
          </section>

          {/* Medical Photography */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Medical Photography & Documentation</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              As part of your hair treatment journey, we may take clinical photographs to document your progress. These images are:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Used only for medical assessment and treatment planning</li>
              <li>Stored securely in your confidential patient file</li>
              <li>Never shared publicly without your explicit written consent</li>
              <li>Anonymized if used for educational or training purposes</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">How We Protect Your Data</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We implement strict security measures to protect your information:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Secure electronic medical records system with access controls</li>
              <li>Physical records stored in locked, restricted-access areas</li>
              <li>Encrypted transmission of digital information</li>
              <li>Regular staff training on patient confidentiality</li>
              <li>Limited access to patient information on a need-to-know basis</li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Do We Share Your Information?</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We do not sell or rent your personal information. We may share information only:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>With your explicit consent</li>
              <li>When required by law or legal process</li>
              <li>With other healthcare providers involved in your treatment (with your permission)</li>
              <li>For insurance or payment purposes (limited to necessary information)</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              As our patient, you have the right to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Access your medical records and treatment history</li>
              <li>Request corrections to your information</li>
              <li>Withdraw consent for photography or data use</li>
              <li>Request deletion of non-medical information (subject to legal retention requirements)</li>
              <li>Know how your data is being used</li>
            </ul>
          </section>

          {/* Cookies & Website */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Website & Cookies</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our website uses cookies to improve your browsing experience. These may collect anonymous information about your visit. You can adjust cookie settings in your browser at any time.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              When you contact us through our website forms, your information is securely transmitted and used only to respond to your inquiry.
            </p>
          </section>

          {/* Updates to Policy */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We may update this privacy policy occasionally to reflect changes in our practices or legal requirements. The latest version will always be available on our website and at our clinic.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9B7057]">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              If you have questions about this privacy policy or how we handle your information, please contact us:
            </p>
            <div className="bg-orange-50 p-5 rounded-xl space-y-2">
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-semibold">📍 Clinic Address:</span> [Your Clinic Address Here]
              </p>
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-semibold">📞 Phone:</span> +91 [Your Phone Number]
              </p>
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-semibold">✉️ Email:</span> [Your Email Address]
              </p>
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-semibold">🕒 Hours:</span> Monday - Saturday, 10:00 AM - 7:00 PM
              </p>
            </div>
          </section>

          {/* Consent Note */}
          <div className="bg-gray-50 p-4 rounded-lg text-center text-xs sm:text-sm text-gray-600 italic">
            By visiting our clinic or using our services, you acknowledge that you have read and understood this Privacy Policy.
          </div>

          {/* Back to Home Link */}
          <div className="text-center pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-[#9B7057] hover:text-[#7a5a47] font-medium transition-colors">
              <span>←</span> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;