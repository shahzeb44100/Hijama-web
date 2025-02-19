import FAQsImage from "@/assets/images/FAQs.jpeg";

const FAQsSection = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-12 px-11 relative bg-gray-100 m-6 lg:m-0 rounded-full lg:rounded-none"
            style={{
                backgroundImage: `url(${FAQsImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Section Title */}
            <h2 className="text-xs md:text-xl font-medium text-[#B02828]">Frequently Asked</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-red-900 mt-2">FAQs</h1>

            {/* FAQ Boxes */}
            <div className="flex w-full justify-center flex-col md:flex-row gap-6 mt-8">
                {/* FAQs for Hijama */}
                <div className="flex lg:flex lg:flex-col justify-center flex-row bg-[#E76B6B] text-white text-center py-3 lg:py-20 lg:px-36 rounded-full lg:rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                    <p className="text-lg md:text-2xl font-medium">FAQs for</p>
                    <h3 className="text-lg lg:text-2xl font-medium lg:font-bold">Hijama</h3>
                </div>

                {/* FAQs for Ruqyah */}
                <div className="flex lg:flex lg:flex-col justify-center flex-row bg-[#E76B6B] text-white text-center w-auto py-3 lg:py-20 lg:px-36 rounded-full lg:rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                    <p className="text-lg md:text-2xl font-medium">FAQs for</p>
                    <h3 className="text-lg lg:text-2xl font-medium lg:font-bold">Ruqyah</h3>
                </div>
            </div>
        </div>
    );
};

export default FAQsSection;
