import React from 'react'
import markImage from "@/assets/images/markImage.png"

const AhadeesSection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto text-center space-y-16">
                {/* Title Section */}
                <div className="space-y-4 relative">
                    <h2 className="text-2xl sm:text-5xl lg:text-8xl font-bold text-dark-gray flex flex-col leading-tight -tracking-[0.07em]">
                        Ahadees
                        <div className="flex items-center justify-center gap-2 -mt-3">
                            about
                            <div className="text-primary-red relative">
                                Hijama
                                <img
                                    src={markImage}
                                    alt="mark"
                                    className="absolute -right-4 -left-4 -bottom-2 w-[calc(100%+2rem)]"
                                />
                            </div>
                        </div>
                    </h2>
                    <p className="text-black text-base sm:text-xl lg:text-2xl max-w-xl mx-auto -tracking-[0.05em]">
                        Lorem ipsum dolor sit amet consectetur. Dictum eu rhoncus justo vitae ante aliquet.
                    </p>
                </div>

                {/* First Hadith */}
                <div className="space-y-4">
                    <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-dark-gray">
                        Cupping is the Best of Remedies
                    </h3>
                    <p className="text-dark-gray font-medium text-base sm:text-xl lg:text-2xl max-w-5xl mx-auto -tracking-[0.05em]">
                        Anas ibn Maalik r.a. reported that the Nabi (salallahu alayhi wasallam.) said, "Indeed the best of remedies you have is cupping (hijama)..."
                    </p>
                    <p className="text-black font-semibold text-base sm:text-xl lg:text-2xl max-w-xl mx-auto -tracking-[0.05em]">
                        -Saheeh al-Bukhaari (5371)
                    </p>
                </div>

                {/* Second Hadith */}
                <div className="space-y-4">
                    <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-dark-gray max-w-full mx-auto -tracking-[0.05em]">
                        The Angels Recommending Cupping (Hijama):
                    </h3>
                    <p className="text-dark-gray font-medium text-base sm:text-xl lg:text-2xl max-w-5xl mx-auto -tracking-[0.05em]">
                        Abdullah ibn Abbas r.a. reported that the Nabi (salallahu alayhi wasallam.) said, "I did not pass by an angel from the angels on the night journey except that they all said to me: Upon you is cupping (hijama), O Muhammad." (Sunan ibn Maajah (3477) in the narration reported by Abdullah ibn Mas'ud r.a. the angels said, "Oh Muhammad, order your Ummah (nation) with cupping (hijama)."
                    </p>
                    <p className="text-black font-semibold text-base sm:text-xl lg:text-2xl max-w-xl mx-auto -tracking-[0.05em]">
                        - Sunan Tirmidhee (3479)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AhadeesSection 