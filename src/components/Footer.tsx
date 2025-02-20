import { Link } from "react-router-dom"
import logo from "@/assets/images/logo-2.png"
import FacebookIcon from "@/assets/icons/FacebookIcon"
import InstaIcon from "@/assets/icons/InstaIcon"
import YoutubeIcon from "@/assets/icons/YoutubeIcon"
import PhoneIcon from "@/assets/icons/PhoneIcon"
import MessageIcon from "@/assets/icons/MessageIcon"
import LocationIcon from "@/assets/icons/LocationIcon"

const Footer = () => {
    return (
        <footer className="bg-primary-red text-white py-12 lg:py-20 px-4 md:px-8 lg:px-32 font-montserrat">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                {/* Logo and Social Media Section */}
                <div className="text-center sm:text-left order-1">
                    <div className="mb-10 lg:mb-68 flex justify-center sm:justify-start">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Rewired Logo"
                                className="max-w-220 lg:max-w-none"
                            />
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-2xl lg:text-4xl font-bold text-white tracking-[-0.03em] mb-5 sm:mb-8  lg:mb-68">Follow Us</h3>
                        <div className="flex gap-4 justify-center sm:justify-start">
                            <a href="#" className="hover:opacity-80">
                                <YoutubeIcon className="w-8 h-8" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <InstaIcon className="w-8 h-8" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <FacebookIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* About Us Section - Moved to last on mobile */}
                <div className="text-center sm:text-left order-4 md:order-2">
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-5 sm:mb-8  lg:mb-11 tracking-[-0.03em]">About Us</h3>
                    <p className="text-white text-xs lg:text-xl font-normal max-w-220 leading-[25px] tracking-[-0.03em] mx-auto sm:mx-0">
                        The Rewired Hijama and Ruqyah Centre stands out as the best Hijama clinic in Islamabad offering authentic
                        treatment from Quran and Sunnah to treat jinn possession, black magic and evil eye all over the world.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="text-center sm:text-left order-2 md:order-3">
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-5 sm:mb-8  lg:mb-11 tracking-[-0.03em]">Quick Links</h3>
                    <ul className="space-y-1 lg:space-y-7">
                        <li>
                            <Link to="/books" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/refund" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Connect Section */}
                <div className="text-center sm:text-left order-3 md:order-4">
                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-5 sm:mb-8  lg:mb-11 tracking-[-0.03em]">Connect</h3>
                    <div className="space-y-4 lg:space-y-7">
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <PhoneIcon className="w-6 h-6 shrink-0" />
                            <a href="tel:+923331117834" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                +92 333 1117834
                            </a>
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <PhoneIcon className="w-6 h-6 shrink-0" />
                            <a href="tel:+923331117834" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                +92 333 1117834
                            </a>
                        </div>
                        <div className="flex items-start gap-2 justify-center sm:justify-start">
                            <MessageIcon className="w-6 h-6 shrink-0 mt-1" />
                            <a href="mailto:info@rewiredcentre.com" className="hover:underline text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                info@rewiredcentre.com
                            </a>
                        </div>
                        <div className="flex items-start gap-2 justify-center sm:justify-start">
                            <LocationIcon className="w-6 h-6 shrink-0 mt-1" />
                            <p className="text-xs lg:text-xl font-semibold leading-[25px] tracking-[-0.03em]">
                                Shop# 1B, Basement, Umar Plaza, ICT, 13-F Kohistan Rd, Islamabad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

