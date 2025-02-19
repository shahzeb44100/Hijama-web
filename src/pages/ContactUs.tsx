import hijamaImage from "@/assets/images/hijamaImage.jpeg"
import GetInTouchSection from "@/components/GetInTouchSection"
import Contact from "@/components/Contact"

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <GetInTouchSection
                imageUrl={hijamaImage}
                title="Contacts"
            />
            <Contact />
        </div>
    )
}

export default ContactUs 