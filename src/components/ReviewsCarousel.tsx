import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ArrowBackIcon from "@/assets/icons/ArrowBackIcon";
import ArrowForwardIcon from "@/assets/icons/ArrowForwardIcon";

const reviews = [
    { id: 1, name: "John Doe", review: "Excellent service! Highly recommended.", rating: 5 },
    { id: 2, name: "Sarah Smith", review: "Very professional and helpful.", rating: 5 },
    { id: 3, name: "David Johnson", review: "Great experience! Will use again.", rating: 5 },
    { id: 4, name: "Emily Wilson", review: "Outstanding customer service and quality work.", rating: 5 },
    { id: 5, name: "Michael Brown", review: "Couldn't be happier with the results. True professionals.", rating: 5 },
    { id: 6, name: "Jennifer Taylor", review: "Fast, efficient, and friendly service. Highly satisfied!", rating: 5 },
    { id: 7, name: "Robert Anderson", review: "Exceeded my expectations in every way possible.", rating: 5 },
];

const ReviewsCarousel = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const swiperRef = useRef<SwiperType>(null);

    return (
        <div className="py-20 bg-white text-center">
            <h4 className="text-lg text-red-600 font-medium">Customer's testimonials</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mt-2">What are they Saying?</h2>

            <div className="mt-6">
                <h3 className="text-lg font-bold">EXCELLENT</h3>
                <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="text-yellow-500 text-xl" />
                    ))}
                </div>
                <p className="text-gray-700 mt-1">Based on 251 Reviews</p>
                <div className="mt-2 flex justify-center">
                    <GoogleIcon />
                </div>
            </div>

            <div className="relative mt-8 w-full px-24">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="w-full h-auto overflow-hidden"
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    onSlideChange={() => setAnimationKey(prev => prev + 1)}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="p-4 flex justify-center mb-10">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md min-h-[200px] flex flex-col justify-between">
                                <p className="text-lg text-gray-700">"{review.review}"</p>
                                <h4 className="mt-2 font-bold text-gray-900">{review.name}</h4>
                                <div className="flex justify-center mt-1">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <FaStar key={index} className="text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    key={animationKey}
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center !text-dark-gray z-50 !h-12 !w-12 md:!h-20 md:!w-20 before:hidden after:hidden cursor-pointer"
                >
                    <ArrowBackIcon width="50" height="40" />
                </motion.div>

                <motion.div
                    key={animationKey + 1}
                    onClick={() => swiperRef.current?.slideNext()}
                    className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center !text-dark-gray z-50 !h-12 !w-12 md:!h-20 md:!w-20 before:hidden after:hidden cursor-pointer"
                >
                    <ArrowForwardIcon width="50" height="40" />
                </motion.div>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
