import certificate1 from "@/assets/images/certificate-1.png";
import certificate2 from "@/assets/images/certificate-2.png";
import UKIcon from "@/assets/icons/UKIcon";

const certificates = [
    {
        title: "Therapy Clinic London",
        icon: <UKIcon width="64" height="46" />,
        description: `The founder of Rewired Centre, Abdul Baseer, is not only an internationally qualified coach but also an internationally Qualified Hijama therapist with a Level 5 Advanced Diploma in Health & Hijama from the Therapy Clinic London, United Kingdom.`,
        image: certificate1,
    },
    {
        title: "Aware Academy Global",
        description: `The Founder of the rewired centre brother Abdul Baseer is a Qualified international coach. He recieved a certificate of proficiency from The Aware Academy Global with a score of 100%. Alhamdulillah. This was the first batch of the aware academy.
His expertises in helping people overcome porn addiction, suicidal thoughts, depression, anxiety, stress and heart breaks.`,
        image: certificate2,
    },
];

const Certificate = () => {
    return (
        <div className="space-y-8 px-0 sm:px-6py-12">
            {certificates.map((cert, index) => (
                <div
                    key={index}
                    className="rounded-lg p-8 sm:pr-16 sm:pl-[52px] sm:py-[70px] shadow-lg flex flex-col lg:flex-row gap-4 items-center justify-center h-full min-h-[300px]"
                    style={{
                        background: "linear-gradient(180deg, #EB5454 0%, #903333 100%)",
                    }}
                >
                    {/* Left Section - Text */}
                    <div className="lg:w-3/4 text-white text-center flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold flex items-start text-left sm:items-center gap-2 leading-[30.72px]">
                            {cert.title} <p className="hidden sm:block">{cert.icon && cert.icon}</p>
                        </h2>
                        <p className="mt-3 text-sm md:text-2xl text-left tracking-[-0.03em] leading-[16.72px] sm:leading-[30.72px]">{cert.description}</p>
                    </div>

                    {/* Right Section - Certificate Image */}
                    <div className="mt-4 w-full md:mt-0 lg:w-1/4 flex justify-end items-center">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full lg:w-52 rounded-lg shadow-md"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certificate;
