import React from 'react';

const HairSpecialistComponent = () => {
    return (
        <div className="w-full  px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 lg:pb-0">
            <div className="max-w-7xl mx-auto">
                {/* Desktop Layout (lg and above) - Original */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Content */}
                    <div className="space-y-3">
                        {/* Decorative Elements */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-28 h-28 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                            <div className="w-10 h-10 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                            <div className="grid grid-cols-3 gap-1.5 w-11 h-11 flex-shrink-0">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                                ))}
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl font-bold text-[#9B7057] leading-tight uppercase tracking-tight">
                            MEET YOUR HAIR SPECIALIST
                        </h1>

                        {/* Doctor Name and Designation */}
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-black">
                                Dr. Nisha R. Srinivas
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Dermatosurgeon | Dermatologist | Venereologist | Leprologist<br/>
                                Aesthetic Physician & Clinical Lead – Anlon Skin & Aesthetics
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="grid grid-cols-1 gap-1">
                            {/* Feature 1 - Hair-Aligned Profile */}
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    {/* Medical Icon */}
                                    <svg className="w-12 h-12 text-[#FF6B35] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                        <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                        <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                        <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                        <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                        <circle cx="37" cy="15" r="2" fill="currentColor"/>
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-bold text-black uppercase leading-snug mb-2">
                                            HAIR-ALIGNED PROFILE
                                        </h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Dr. Nisha has 12 years of overall medical experience, with 7+ years specialising in dermatology and medical aesthetics, including extensive experience in hair loss diagnosis, scalp disorders, and hair restoration planning.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 - Approach */}
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    {/* Medical Icon */}
                                    <svg className="w-12 h-12 text-[#FF6B35] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                        <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                        <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                        <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                        <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                        <circle cx="37" cy="15" r="2" fill="currentColor"/>
                                    </svg>
                                    <div>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Her approach to hair treatment focuses on understanding the root cause of hair loss, recommending stage-appropriate solutions, and ensuring long-term scalp and follicle health rather than short-term cosmetic fixes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image Area */}
                    <div className="relative">
                        <div className="relative">
                            {/* Doctor's Image */}
                            <div className="w-full h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                {/* Replace with actual doctor's image */}
                                <img 
                                    src="path-to-doctor-image.jpg" 
                                    alt="Dr. Nisha R. Srinivas - Hair Specialist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Experience Badge */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#3B4F7D] text-white px-8 py-10 shadow-xl">
                                <div className="text-center">
                                    <div className="text-8xl font-bold leading-none mb-2">12</div>
                                    <div className="text-base font-semibold leading-tight">
                                        Years<br/>Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout (below lg) - Image between heading and paragraphs */}
                <div className="block lg:hidden">
                    {/* Decorative Elements - First */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-xl sm:text-2xl font-bold text-[#9B7057] leading-tight uppercase tracking-tight mb-3">
                        MEET YOUR HAIR SPECIALIST
                    </h1>

                    {/* Doctor Name */}
                    <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                        Dr. Nisha R. Srinivas
                    </h2>

                    {/* Image - Positioned after name, before paragraphs */}
                    <div className="relative mb-6">
                        <div className="relative">
                            {/* Doctor's Image */}
                            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                <img 
                                    src="path-to-doctor-image.jpg" 
                                    alt="Dr. Nisha R. Srinivas - Hair Specialist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Experience Badge */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#3B4F7D] text-white px-3 sm:px-4 py-4 sm:py-5 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold leading-none mb-1">12</div>
                                    <div className="text-xs sm:text-sm font-semibold leading-tight">
                                        Years<br/>Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Designation - After image */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                        Dermatosurgeon | Dermatologist | Venereologist | Leprologist<br className="hidden sm:block"/>
                        Aesthetic Physician & Clinical Lead – Anlon Skin & Aesthetics
                    </p>

                    {/* Features Section - After designation */}
                    <div className="grid grid-cols-1 gap-4">
                        {/* Feature 1 - Hair-Aligned Profile */}
                        <div className="flex items-start gap-2 sm:gap-3">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                <circle cx="37" cy="15" r="2" fill="currentColor"/>
                            </svg>
                            <div>
                                <h3 className="text-sm sm:text-base font-bold text-black uppercase leading-snug mb-1">
                                    HAIR-ALIGNED PROFILE
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Dr. Nisha has 12 years of overall medical experience, with 7+ years specialising in dermatology and medical aesthetics, including extensive experience in hair loss diagnosis, scalp disorders, and hair restoration planning.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 - Approach */}
                        <div className="flex items-start gap-2 sm:gap-3">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                <circle cx="37" cy="15" r="2" fill="currentColor"/>
                            </svg>
                            <div>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Her approach to hair treatment focuses on understanding the root cause of hair loss, recommending stage-appropriate solutions, and ensuring long-term scalp and follicle health rather than short-term cosmetic fixes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HairSpecialistComponent;