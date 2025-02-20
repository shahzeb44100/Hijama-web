import MissionIcon from "@/assets/icons/MissionIcon";
import WhyUsIcon from "@/assets/icons/WhyUsIcon";
import './curve.css'

const CommitmentSection = () => {
  return (
    <section className="flex flex-col gap-5 relative gradient-bg 
                        -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-24 
                        rounded-3xl sm:rounded-t-[40%_7%] md:rounded-t-[45%_8%] lg:rounded-t-[50%_10%]
                         sm:rounded-b-[40%_7%] md:rounded-b-[45%_8%] lg:rounded-b-[50%_10%]
                        text-white px-9 sm:px-8 lg:px-32 lg:py-28 py-16 mb-6 md:mb-10 lg:mb-20">
      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-10">
        <div className="flex justify-start w-full lg:w-auto">
          <MissionIcon />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-base sm:text-lg leading-[28px] sm:leading-[35px]">
            We aim to provide authentic online Ruqyah treatment for Jinn possession, black magic and evil eye through
            out the world and Hijama services through out Pakistan. Our authentic, accessible, compassionate,
            and effective Ruqyah and hijama treatment address both physical and spiritual ailments. At the
            Rewired Hijama and Ruqyah Centre we try to empower you to achieve spiritual and phyhsical well-being,
            emotional balance, protection from and treatment of jinn possession, evil eye and black magic.
            We deliver all while upholding the standards of Quran and Sunnah.
          </p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
        <div className="flex justify-start w-full lg:w-auto">
          <WhyUsIcon />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">Why Us?</h2>
          <p className="mt-4 text-base sm:text-lg leading-[28px] sm:leading-[35px]">
            The Rewired hijama and Ruqyah centre is backed by Scholars of Islam, motivational speakers and doctors.
            We are the highest rated Hijama and Ruqyah centre of Pakistan on google. We are authentic, we do not
            indulge in any form of shirk or bid'ah, we are qualified yet we continue to seek guidance of senior ulama.
            We do not compromise on Quran and Sunnah. We are easily accessible from any where in the world and we are
            affordable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
