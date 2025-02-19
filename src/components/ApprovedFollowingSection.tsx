import React from 'react'
import ApprovedFollowingImage from '@/assets/images/approved-following.png'

const ApprovedFollowingSection: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center'>
            <h2 className='text-center text-primary-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat tracking-tight leading-tight'>
                Our centre is approved
            </h2>
            <h2 className='text-center text-primary-red text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat tracking-tight leading-tight mb-8 sm:mb-10 lg:mb-12'>
                by the following
            </h2>
            <img
                src={ApprovedFollowingImage}
                alt="approved-following"
                className="w-full h-auto"
            />
        </section>
    )
}

export default ApprovedFollowingSection