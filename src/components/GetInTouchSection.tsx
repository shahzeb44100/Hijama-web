import React from 'react'
import { Link } from 'react-router-dom'

interface BackgroundImageProps {
    imageUrl: string
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => (
    <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
    >
        <div className="absolute inset-0 bg-black/50"></div>
    </div>
)

interface HeroContentProps {
    title: string
    buttonText: string
    buttonLink: string
}

const HeroContent: React.FC<HeroContentProps> = ({ title, buttonText, buttonLink }) => (
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <h1 className="font-brand text-6xl sm:text-7xl md:text-9xl mb-8 tracking-[-0.05em] uppercase text-white">
            {title}
        </h1>
        <Link
            to={buttonLink}
            className="bg-primary-red hover:bg-primary-hover font-medium md:font-bold text-xl md:text-2xl text-white px-8 py-4 rounded-md transition-colors"
        >
            {buttonText}
        </Link>
    </div>
)

interface GetInTouchSectionProps {
    imageUrl: string
    title: string
    buttonText?: string
    buttonLink?: string
}

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
    imageUrl,
    title,
    buttonText = "Get in touch",
    buttonLink = "/contact"
}) => {
    return (
        <div className="relative w-full h-[367px] sm:h-[540px] md:h-[620px] lg:h-[760px]">
            <BackgroundImage imageUrl={imageUrl} />
            <HeroContent
                title={title}
                buttonText={buttonText}
                buttonLink={buttonLink}
            />
        </div>
    )
}

export default GetInTouchSection 