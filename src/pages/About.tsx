import welcome from "@/assets/images/welcome.png"
import welcome2 from "@/assets/images/welcome2.png"
import Certificate from "@/components/Certificate"
import SpecialistBio from "@/components/SpecialistBio"

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={welcome} alt="About" className="w-full md:h-full hidden sm:block" />
            <img src={welcome2} alt="About" className="w-full h-[367px] lg:h-full block sm:hidden" />
            <div className="flex flex-col w-full px-7 py-11 md:px-24 md:py-107">
                <SpecialistBio />
                <Certificate />
            </div>
        </div>
    )
}

export default About 