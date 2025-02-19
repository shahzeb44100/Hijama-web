import React from 'react'
import arrowImage from "@/assets/images/arrowImage.png"

const Location: React.FC = () => {
    return (
        <div className="relative w-full bg-white pt-10 sm:pt-16">
            <div className="w-full mx-auto space-y-8">
                {/* Title Section */}
                <div className="text-center space-y-2 mb-3">
                    <div className="relative inline-block">
                        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-primary-red -tracking-[0.05em]">
                            Location
                        </h2>
                        <img
                            src={arrowImage}
                            alt="arrow"
                            className="absolute -right-[140px] lg:-right-[100px] top-6 w-24 h-auto"
                        />
                    </div>
                    <p className="text-xs font-medium text-dark-gray sm:text-xl lg:text-2xl max-w-[224px] sm:max-w-xs md:max-w-md lg:max-w-md mx-auto leading-[26px] -tracking-[0.05em]">
                        Lorem ipsum dolor sit amet consecte. Morbi enim odio vestibulum urna.
                    </p>
                </div>

                {/* Map Section */}
                <div className="relative w-full h-[500px] sm:h-[600px] rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.308894574731!2d73.04881661744384!3d33.6518073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea4aee5bdf8f%3A0xe6b55e05d462beb1!2sF-8%20Markaz%20F-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647887642324!5m2!1sen!2s"
                        className="w-full h-full border-0"
                        style={{ filter: 'invert(90%) hue-rotate(180deg)' }} // This gives a dark theme to the map
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Location Pin */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="relative">
                            <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary-red rounded-full animate-ping"></div>
                            <div className="relative w-6 h-6 bg-primary-red rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">📍</span>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-1 rounded-full shadow-md">
                                <span className="text-sm font-medium">Rewired Ruqyah & Hijama Centre</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location