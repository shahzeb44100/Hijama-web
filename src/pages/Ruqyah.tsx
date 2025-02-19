import rukyahwelcome from "@/assets/images/rukyahwelcome.png"
import rukyahwelcomesm from "@/assets/images/rukyahwelcomesm.png"
import Appointment from "@/components/Appointment"
import FrequentlyAsked from "@/components/FrequentlyAsked"
import InfoRukyah from "@/components/InfoRukyah"
import Contact from '@/components/Contact'

const Ruqyah = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={rukyahwelcome} alt="About" className="w-full md:h-full hidden sm:block" />
            <img src={rukyahwelcomesm} alt="About" className="w-full h-[367px] lg:h-full block sm:hidden" />
            <InfoRukyah />
            <Appointment />
            <FrequentlyAsked />
            <Contact />
        </div>
    )
}

export default Ruqyah 