import React from 'react'
import GetInTouchSection from '@/components/GetInTouchSection'
import AhadeesSection from '@/components/AhadeesSection'
import hijamaImage from "@/assets/images/hijamaImage.jpeg"
import SunnaDaysSection from '@/components/SunnaDaysSection'
import Contact from '@/components/Contact'
import FrequentlyAsked from '@/components/FrequentlyAsked'
import Location from '@/components/Location'

const Hijama: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <GetInTouchSection
                imageUrl={hijamaImage}
                title="HIJAMA"
            />
            <AhadeesSection />
            <SunnaDaysSection />
            <FrequentlyAsked />
            <Contact />
            <Location />
        </div>
    )
}

export default Hijama 