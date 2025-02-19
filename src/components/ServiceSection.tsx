import hijama from "@/assets/images/hijama.png";
import coaching from "@/assets/images/life-coaching.png";
import Ruqyah from "@/assets/images/Ruqya.png";

const services = [
    {
        title: "Hijama",
        image: hijama,
        link: "/services/hijama"
    },
    {
        title: "Life Coaching",
        image: coaching,
        link: "/services/coaching"
    },
    {
        title: "Ruqyah",
        image: Ruqyah,
        link: "/services/Ruqyah"
    }
];

const ServiceSection = () => {
    return (
        <section className='m-11 md:m-0 p-11 rounded-2xl lg:rounded-none sm:py-16 md:py-20 lg:py-24 sm:px-8 md:px-16 lg:px-107 bg-primary-red sm:mb-12 md:mb-16 lg:mb-20'>
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-60 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold mb-4">
                    Services
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium">
                    Services Provided by
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium">
                    Rewired Center
                </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <a
                        key={index}
                        href={service.link}
                        className="group relative overflow-hidden rounded-lg bg-white pb-4 sm:pb-6 md:pb-8 
                                 transition-transform duration-300 hover:-translate-y-2
                                 shadow-md hover:shadow-xl"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                className="h-full w-full object-cover transition-transform duration-500 
                                         group-hover:scale-110"
                            />
                        </div>

                        {/* Title Container */}
                        <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8">
                            <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-black">
                                {service.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;