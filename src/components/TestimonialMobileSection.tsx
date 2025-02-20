import testimonial1 from "@/assets/images/testimonial-1.png";
import BottomLeftQuotationSMIcon from "@/assets/icons/BottomLeftQuotationSMIcon";
import TopRightQuotationSMIcon from "@/assets/icons/TopRightQuotationSMIcon";

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
        text: `Fantastic service experience, very professional and clean environment. Highly recommend this center for hijama therapy.`,
        author: "John Doe 2",
        image: testimonial1,
    },
];

const TestimonialMobileSection = () => {
    return (
        <div className="flex flex-col gap-16 lg:hidden p-11">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="relative bg-light-gray-2 rounded-lg shadow-md p-6 flex flex-col items-center text-center gap-"
                >
                    {/* Top Right Quotation Mark */}
                    <div className="absolute -top-6 right-4">
                        <div className="flex gap-2">
                            <TopRightQuotationSMIcon color="#6D7880" />
                            <TopRightQuotationSMIcon color="#6D7880" />
                        </div>
                    </div>

                    {/* Testimonial Image (Circular) */}
                    <div className="absolute -top-12 w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-light-gray">
                        <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Testimonial Content */}
                    <p className="mt-8 text-sm md:text-lg text-gray-700 font-medium leading-relaxed px-4">
                        "{testimonial.text}"
                    </p>

                    {/* Author Name */}
                    <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                        {testimonial.author}
                    </h3>

                    {/* Bottom Left Quotation Mark */}
                    <div className="absolute -bottom-6 left-4">
                        <div className="flex gap-2">
                            <BottomLeftQuotationSMIcon color="#6D7880" />
                            <BottomLeftQuotationSMIcon color="#6D7880" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialMobileSection;
