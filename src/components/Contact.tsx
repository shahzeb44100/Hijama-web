import React from 'react'
import PhoneIcon from "@/assets/icons/PhoneIcon"
import LocationIcon from "@/assets/icons/LocationIcon"
import MessageIcon from "@/assets/icons/MessageIcon"
import WhatsappIcon from '@/assets/icons/WhatsappIcon'

// Contact data from footer
const contactData = {
    phone: "+92 333 1117834",
    whatsapp: "+92 333 1117834",
    email: "info@rewiredcentre.com",
    address: {
        line1: "Shop# 1B, Basement, Umar Plaza,",
        line2: "ICT, 13-F Kohistan Rd, Islamabad"
    }
}

const Contact: React.FC = () => {
    return (
        <div className="bg-primary-red mx-11 sm:mx-0 sm:my-32 my-8 rounded-xl sm:rounded-3xl px-4 sm:px-[100px] py-[68px] text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                    Contacts
                </h1>

                <p className="text-lg sm:text-xl mb-12">
                    Lorem ipsum dolor sit amet consectetur.<br />
                    Morbi enim odio vestibulum urna.
                </p>

                <div className="space-y-6 flex flex-col items-center">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <PhoneIcon />
                        <a href={`tel:${contactData.phone}`} className="text-lg hover:underline">
                            {contactData.phone}
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-4">
                        <WhatsappIcon />
                        <a
                            href={`https://wa.me/${contactData.whatsapp.replace(/\s+/g, '')}`}
                            className="text-lg hover:underline"
                        >
                            {contactData.whatsapp}
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <MessageIcon className='w-6 h-10' />
                        <a href={`mailto:${contactData.email}`} className="text-lg hover:underline">
                            {contactData.email}
                        </a>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4">
                        <LocationIcon />
                        <p className="text-lg">
                            {contactData.address.line1}<br />
                            {contactData.address.line2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact 