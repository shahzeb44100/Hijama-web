import React from 'react'
import rukyahInfo from "@/assets/images/rukyahInfo.jpeg"
import ruqyahImage from '@/assets/images/ruqyah-best.png'

const InfoRukyah: React.FC = () => {
    return (
        <div className="relative w-full h-full lg:h-screen block">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${rukyahInfo})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/90" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {/* Info Title */}
                <h1 className="text-[#EB5454] text-6xl font-bold text-center pt-32 pb-16 tracking-[-0.03em]">
                    Info
                </h1>

                {/* Main Content */}
                <div className="flex-1 flex items-start justify-center">
                    <div className="max-w-7xl w-full mx-auto px-6">
                        <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-20 px-10 sm:px-16 lg:px-28">
                            {/* Left Section - Text */}
                            <div className="text-white text-left w-full lg:w-[58%] my-8 lg:mt-0">
                                <h2 className="text-4xl text-center lg:text-left font-bold mb-4 leading-[53px] tracking-[-0.03em]">
                                    Ruqyah
                                </h2>
                                <p className="text-sm lg:text-xl font-medium leading-[25px] mb-8">
                                    Ruqyah is a healing method that uses the Quran and hadith to treat illnesses, evil eye, magic, and jinn
                                </p>
                                <div className="gap-y-3">
                                    <div>
                                        <h3 className="text-2xl text-center lg:text-left font-semibold leading-[25px] tracking-[-0.05em] mb-2">
                                            Practice
                                        </h3>
                                        <p className="text-sm lg:text-xl font-medium leading-[24px] mb-5 sm:mb-3">
                                            Ruqyah involves reciting Quranic verses, seeking refuge, remembrance, and supplication.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl text-center lg:text-left font-semibold leading-[25px] tracking-[-0.05em] mb-2">
                                            Purpose
                                        </h3>
                                        <p className="text-sm lg:text-xl font-medium leading-[24px] mb-5 sm:mb-3">
                                            Ruqyah is a way to cure physical ailments and evil eye, and to build faith and reaffirm belief in Allah.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl text-center lg:text-left font-semibold leading-[25px] tracking-[-0.05em] mb-2">
                                            Evidence
                                        </h3>
                                        <p className="text-sm lg:text-xl font-medium leading-[24px] mb-5 sm:mb-3">
                                            The Messenger of Allah said, "Make good use of the two cures: honey and the Qur'an". A'ishah said, "When the Messenger of Allah was ill, Jibril performed Ruqyah on him".
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Quran Image */}
                            <div className="w-full lg:w-[42%]">
                                <img
                                    src={ruqyahImage}
                                    alt="Quran"
                                    className="w-full lg:[429px] h-full lg:h-[537px] rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoRukyah