import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import testimonial1 from "@/assets/images/testimonial-1.png";
import TopRightQuotationIcon from "@/assets/icons/TopRightQuotationIcon";
import BottomLeftQuotationIcon from "@/assets/icons/BottomLeftQuotationIcon";
import ArrowBackIcon from "@/assets/icons/ArrowBackIcon";
import ArrowForwardIcon from "@/assets/icons/ArrowForwardIcon";
import { motion } from "framer-motion";
import { useState } from "react";
import "./testimonial.css";

const testimonials = [
    {
        text: `Personally, I would definitely recommend all of you to visit this place... One of the best hijama centres of Islamabad`,
        author: "Tuaha Ibn Jalil",
        image: testimonial1,
    },
    {
        text: `Amazing experience, very professional and clean environment. Highly recommend this center for hijama therapy.`,
        author: "John Doe",
        image: testimonial1,
    },
    {
        text: `Amazing service experience, very professional and clean environment. Highly recommend this center for hijama therapy.`,
        author: "John Doe 2",
        image: testimonial1,
    },
];

const iconColors = [
    "#6D7880",  // 0
    "#EB8D51",  // 1
    "#CC9F5B"   // 2
] as const;

export default function TestimonialLGSection() {
    const [animationKey, setAnimationKey] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="hidden lg:block w-full relative">
            <Swiper
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full h-[500px] md:h-[930px] sm:h-[600px] relative"
                onSlideChange={(swiper) => {
                    setAnimationKey(prev => prev + 1);
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {/* Bottom Left Quotation Icons - Hide on mobile */}
                <div className="absolute bottom-14 left-20 z-10 hidden md:block">
                    <div className="relative -left-20 -bottom-20">
                        <div className="flex">
                            <motion.div
                                key={animationKey}
                                initial={{ y: "-100%", opacity: 0, rotate: 90 }}
                                animate={{ y: "0%", opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.9, ease: "easeInOut" }}
                            >
                                <BottomLeftQuotationIcon color={iconColors[activeIndex]} />
                            </motion.div>
                            <BottomLeftQuotationIcon color={iconColors[activeIndex]} />
                        </div>
                    </div>
                </div>

                {/* Top Right Quotation Icons - Hide on mobile */}
                <div className="absolute top-14 left-[35%] z-10 hidden md:block">
                    <div className="relative -right-20 -top-20">
                        <div className="flex">
                            <TopRightQuotationIcon color={iconColors[activeIndex]} />
                            <motion.div
                                key={animationKey + 1}
                                initial={{ y: "100%", opacity: 0, rotate: -180 }}
                                animate={{ y: "0%", opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.9, ease: "easeInOut" }}
                            >
                                <TopRightQuotationIcon color={iconColors[activeIndex]} />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="relative flex items-center w-full h-full overflow-hidden">
                        <div className="testimonial-gradient"
                        ></div>

                        <div className="absolute right-0 top-0 w-full md:w-[918px] h-full">
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                                style={{ mixBlendMode: "multiply" }}
                            />
                        </div>

                        <div className="relative w-full md:w-1/2 px-6 md:pl-20 z-20">
                            <div className="flex mt-40 md:mt-56 flex-col w-full text-center md:text-right">
                                <p className="text-2xl md:text-[48px] leading-tight md:leading-[55px] tracking-[0%] font-montserrat text-black md:text-[#6D7880]">
                                    "{testimonial.text}"
                                </p>

                                <div className="mt-8 md:mt-16 text-center md:text-right">
                                    <h3 className="text-3xl md:text-[48px] leading-tight md:leading-[55px] tracking-[0%] font-montserrat font-semibold text-black md:text-[#6D7880">
                                        {testimonial.author}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation - Adjust size for mobile */}
                <motion.div
                    key={animationKey}
                    className="swiper-button-prev !text-dark-gray z-50 !h-12 !w-12 md:!h-20 md:!w-20 before:hidden after:hidden flex items-center justify-center"
                    initial={{ x: "100%", y: "100%", opacity: 0, rotate: -90 }}
                    animate={{ x: "0%", y: "0%", opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                >
                    <ArrowBackIcon color={iconColors[activeIndex]} />
                </motion.div>

                <motion.div
                    key={animationKey + 1}
                    className="swiper-button-next !text-dark-gray z-50 !h-12 !w-12 md:!h-20 md:!w-20 before:hidden after:hidden flex items-center justify-center"
                    initial={{ x: "-100%", y: "-100%", opacity: 0, rotate: 90 }}
                    animate={{ x: "0%", y: "0%", opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                >
                    <ArrowForwardIcon color={iconColors[activeIndex]} />
                </motion.div>
            </Swiper>

            {/* Pagination */}
            <div className="absolute bottom-4 md:bottom-18 left-1/2 transform -translate-x-1/2 z-30">
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}
