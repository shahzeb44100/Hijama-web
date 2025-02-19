
import aboutImage from "@/assets/images/aboutImage.jpg"
import Certificate from "@/components/Certificate"
import GetInTouchSection from "@/components/GetInTouchSection"
import SpecialistBio from "@/components/SpecialistBio"

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <GetInTouchSection
                imageUrl={aboutImage}
                title="About"
            />
            <div className="flex flex-col w-full px-7 py-11 md:px-24 md:py-107">
                <SpecialistBio />
                <Certificate />
            </div>
        </div>
    )
}

export default About 