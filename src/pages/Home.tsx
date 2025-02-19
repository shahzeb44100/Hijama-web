import ApprovedFollowingSection from "@/components/ApprovedFollowingSection"
import CommitmentSection from "@/components/commitment/CommitmentSection"
import FAQsSection from "@/components/FAQsSection"
import HeroSection from "@/components/HeroSection"
import ReviewsCarousel from "@/components/ReviewsCarousel"
import RuqyahHeroSection from "@/components/RuqyahHeroSection"
import ServiceSection from "@/components/ServiceSection"
import TestimonialLGSection from "@/components/testimonial/TestimonialLGSection"
import TestimonialMobileSection from "@/components/TestimonialMobileSection"

const Home = () => {
    return (
        <>
            <div className="px-0 lg:px-107 mb-10 lg:mb-92 mt-0 lg:mt-109">
                <HeroSection />
            </div>
            <TestimonialLGSection />
            <TestimonialMobileSection />
            <ServiceSection />
            <RuqyahHeroSection />
            <CommitmentSection />
            <ApprovedFollowingSection />
            <FAQsSection />
            <ReviewsCarousel />
        </>
    )
}

export default Home 