import { Link } from "react-router-dom"
import heroImage from "@/assets/images/hero-img.png"
import heroImageMobile from "@/assets/images/hero-img-mobile.png"

const HeroSection = () => {
    return (
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-2 lg:space-y-8 text-center lg:text-left absolute lg:relative z-10 top-1/2 lg:top-0 transform -translate-y-[25%] lg:translate-y-0 w-full px-4 lg:px-0">
                <div>
                    <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-7xl lg:text-96 leading-tight lg:leading-title tracking-title text-white lg:text-dark-gray">
                        Rewired
                    </h1>
                    <h2 className="font-montserrat font-normal text-base sm:text-2xl md:text-3xl lg:text-40 leading-normal lg:leading-subtitle tracking-title text-white lg:text-dark-gray mt-2 lg:mt-n5">
                        Hijama & Ruqyah Centre
                    </h2>
                </div>

                <p className="text-xs md:text-base font-normal text-white lg:text-light-gray leading-[relaxed] lg:leading-[25px] tracking-[-0.03em] lg:max-w-xl mx-auto lg:mx-0">
                    An initiative of a Youth Club member to provide authentic online treatment of
                    jinn possession, black magic and evil eye all over the world with the Fadhal of
                    Allah. Hijama services provided in Islamabad and Lahore only.
                </p>

                <div className="pt-4">
                    <Link
                        to="/contact"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-lg font-medium text-white bg-primary-red rounded-md hover:bg-white hover:text-primary-red border-2 border-primary-red transition-colors"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full lg:w-auto relative">
                <div className="absolute inset-0 bg-black/50 lg:hidden rounded-2xl"></div>
                <img
                    src={heroImage}
                    alt="Rewired Centre Team"
                    className="w-full hidden lg:block max-w-none h-auto rounded-2xl shadow-lg"
                />
                <img
                    src={heroImageMobile}
                    alt="Rewired Centre Team"
                    className="w-full block lg:hidden h-[368px] sm:h-auto object-fill"
                />
            </div>
        </section>
    )
}

export default HeroSection