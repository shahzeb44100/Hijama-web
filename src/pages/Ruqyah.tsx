import rukyahImage from "@/assets/images/rukyahImage.jpg"
import Appointment from "@/components/Appointment"
import FrequentlyAsked from "@/components/FrequentlyAsked"
import InfoRukyah from "@/components/InfoRukyah"
import Contact from '@/components/Contact'
import GetInTouchSection from "@/components/GetInTouchSection"

const Ruqyah = () => {
    return (
        <div className="flex flex-col items-center justify-center">
             <GetInTouchSection
                imageUrl={rukyahImage}
                title="Rukyah"
            />
            <InfoRukyah />
            <Appointment />
            <FrequentlyAsked />
            <Contact />
        </div>
    )
}

export default Ruqyah 