import founder from "@/assets/images/founder.png"

export default function RuqyahHeroSection() {
    return (
        <>
            <div className="relative lg:min-h-[600px] min-h-auto bg-gradient-radial from-rose-100/50 via-rose-100/30 to-transparent overflow-hidden">
                <div className="pt-12 lg:pt-20">
                    <div className="flex items-center">
                        <div className="hidden lg:flex w-full relative pl-107 h-[851px]">
                            {/* Desktop Layout */}
                            <div className="absolute top-[28%] left-36 h-full">
                                <div className="inline-block mb-10">
                                    <div className="inline-flex gap-2 items-center rounded-[20px] bg-primary-red px-6 py-2 text-white shadow-sm">
                                        <p className="text-xl font-medium">Founder & Youth Club</p>
                                        <p className="text-xl font-semibold">Abdul Baseer Khan</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h1 className="flex flex-col gap-y-2">
                                        <div className="block text-4xl lg:text-[2rem] font-bold text-dark-gray leading-[44.43px] lg:leading-[44.43px]">
                                            The Ummah needs Comprehensive
                                        </div>
                                        <div className="block text-2xl lg:text-[4rem] font-bold text-dark-gray leading-[44.43px] lg:leading-[50.44px]">
                                            Ruqyah & Hijama
                                        </div>
                                        <div className="block text-2xl lg:text-[4rem] font-bold text-dark-gray leading-[44.43px] lg:leading-[61.44px]">
                                            more than ever
                                        </div>
                                    </h1>

                                    <p className="text-2xl font-semibold text-light-gray max-w-[38rem] leading-[25px]">
                                        "I cannot emphasize enough on the importance of Ruqyah treatment along with Hijama therapy for the Ummah. It is absolutely crucial, miraculous, full of shifa and life changing"
                                    </p>
                                </div>
                            </div>
                            <img
                                src={founder || "/placeholder.svg"}
                                alt="Medical Professional"
                                className="w-[1445px] h-[851px] object-contain absolute -right-14"
                            />
                        </div>

                        {/* Mobile/Tablet Layout */}
                        <div className="px-11 lg:hidden flex flex-col items-start lg:items-center text-left lg:text-center sm:px-8 md:px-14">
                            <div className="lg:mb-8 mb-4 sm:w-3/4 md:w-2/3">
                                <div className="flex justify-center gap-2 items-center rounded-[20px] bg-primary-red px-6 sm:px-6 py-2 text-white shadow-sm">
                                    <p className="text-xs md:text-xl sm:text-lg font-normal lg:font-medium">Founder & Youth Club</p>
                                    <p className="text-xs md:text-xl sm:text-lg font-normal lg:font-semibold">Abdul Baseer Khan</p>
                                </div>
                            </div>

                            <div className="space-y-4 max-w-2xl mx-auto">
                                <h1 className="flex flex-col gap-y-2">
                                    <div className="text-base md:text-2xl sm:text-3xl font-bold text-dark-gray leading-[32px] sm:leading-[40px]">
                                        The Ummah needs Comprehensive
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-dark-gray leading-[20px] sm:leading-[44.43px]">
                                        Ruqyah & Hijama
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-bold text-dark-gray leading-[20px] sm:leading-[44.43px]">
                                        more than ever
                                    </div>
                                </h1>

                                <p className="text-xs sm:text-xl md:text-2xl font-semibold text-light-gray leading-[18px] sm:leading-[25px] mx-auto">
                                    "I cannot emphasize enough on the importance of Ruqyah treatment along with Hijama therapy for the Ummah. It is absolutely crucial, miraculous, full of shifa and life changing"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:hidden flex justify-end mt-8">
                <img
                    src={founder || "/placeholder.svg"}
                    alt="Medical Professional"
                    className="w-full h-full object-contain"
                />
            </div>
        </>
    );
}

