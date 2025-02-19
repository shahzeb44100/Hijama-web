import contactImage from "@/assets/images/contactImage.jpg"
import GetInTouchSection from "@/components/GetInTouchSection"
import Contact from "@/components/Contact"

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <GetInTouchSection
                imageUrl={contactImage}
                title="Contacts"
            />
            <Contact />
        </div>
    )
}

export default ContactUs 