import AustraliaIcon from "@/assets/icons/AustraliaIcon";
import NationalIcon from "@/assets/icons/NationalIcon";
import UKIcon from "@/assets/icons/UKIcon";
import specialistImage from "@/assets/images/specialist.png";

const SpecialistBio = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Left Section: Bio Info */}
            <div className="md:w-[55%] text-left">
                <h1 className="text-40 md:text-8xl font-bold text-dark-gray leading-[38px] tracking-[-0.03em] lg:leading-[92.16px]">
                    Abdul
                </h1>
                <h1 className="text-40 md:text-8xl font-bold text-dark-gray leading-[38px] tracking-[-0.03em] lg:leading-[92.16px]">
                    Baseer Khan
                </h1>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-4 text-light-gray text-sm font-semibold md:text-2xl">
                    <li className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-[#7E7E7E] rounded-full mt-2" /> Registered Tabeeb at National Tibb <NationalIcon />
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-[#7E7E7E] rounded-full mt-2" /> Qualified Hijama Therapist from London therapy Clinic UK <UKIcon />
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-[#7E7E7E] rounded-full mt-2" /> Life Coach from Aware Academy Global Australia <AustraliaIcon />
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-3 h-3 bg-[#7E7E7E] rounded-full mt-2" /> Ruqyah Consultant <UKIcon />
                    </li>
                </ul>
            </div>

            {/* Right Section: Image */}
            <div className="mt-6 md:mt-0 md:w-[45%] flex justify-center">
                <img
                    src={specialistImage}
                    alt="Specialist"
                    className="w-full max-w-md rounded-lg"
                />
            </div>
        </div>
    );
};

export default SpecialistBio;
