'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import GridImage from '/public/herosection_grid.png'
import LogoSparkle from '/public/logo_sparkle.png'
import GridImageTwo from "/public/usecase_grid.png"
import LeftArrow from '/public/LeftArrow.svg'
import RightArrow from '/public/RightArrow.svg'
import SparkleImg from "/public/sparkle.png";
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'
import HomeNavbar from '@/components/HomeNavbar'
import ProblemContainer from "@/components/realWorldProblem/ProblemContainer";
import ProductsCarousel from '@/components/ProductSection/ProductsCarousel'
import CircleContainer from '@/components/circleAnimation/CircleContainer'
import Clarity from '@/components/clarityAnimation/Clarity'
import JourneySection from '@/components/journeySection/JourneySection'
import FragmentDataIcon from '/public/realworldproblems/Fragmenteddata.svg'
import NoiseIcon from '/public/realworldproblems/noise.svg'
import PuzzleIcon from '/public/realworldproblems/puzzle.svg'
import IntelDataIcon from '/public/realworldproblems/timesensitiveintel.svg'
import UseCasesContainer from '@/components/useCaseSection/UseCasesContainer'
import HeroSectionImage from '/public/about-banner.jpg'

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const data = [
    { heading: "Deep Industry Expertise", subheading: "With over 10 years in the event space, we possess an unparalleled understanding of the complexities and nuances that drive event-related volatility." },
    { heading: "Largest Event Database", subheading: "We have built the largest database of events, supported by a sophisticated data engine capable of filtering out spam, scams, and duplicates to ensure data integrity." },
    { heading: "Robust Relationships", subheading: "Our strong connections with event planner networks allow us to continuously enrich our data and stay ahead of industry trends." },
    { heading: "Advanced Signal Processing", subheading: "Leveraging billions of signals, we provide real-time solutions that deliver actionable insights." },
    { heading: "Extensive User Network", subheading: "Access to a user network of 50 million eventgoers ensures comprehensive coverage and detailed intelligence." },
  ]
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length); // Loop back to 0
  };

  const cardData = [
    { icon: FragmentDataIcon, heading: "Fragmented Data", subheading: "Fragmented data poses significant challenges, with information scattered across multiple sources, inconsistent formats, various languages, duplicate entries, and unsynchronised timelines" },
    { icon: NoiseIcon, heading: "Too Much Noise", subheading: "With overwhelming volumes of information, the process of finding relevant data, cleaning it, identifying fake or unreliable entries, and quantifying it for meaningful use becomes a daunting task." },
    { icon: PuzzleIcon, heading: "Piecing the Puzzle", subheading: "Data is only as valuable as the connections between its points. Without linking multiple lateral data points, insights remain incomplete and unusable." },
    { icon: IntelDataIcon, heading: "Time Sensitive Intel", subheading: "Delivering actionable intelligence to the right people at the right time is critical for success. When key insights are accessible exactly when they’re needed, it enables informed decisions." },
  ]
  return (
    <div className='flex flex-col items-center'>
      <HomeNavbar/>

      <div className="w-full">
            {/* For Screens ≤ 898px - Text Above, Image Below */}
            <div className="max-[898px]:flex flex-col hidden mt-[100px] relative">
              {/* Container with Gradient */}
              <div
                className="w-full p-6 rounded-r-md relative"
                style={{
                  opacity: "0.9",
                  background: `#fff`,
                  backdropFilter: "blur(50px)",
                }}
              >
                {/* Text Content */}
                <div className="w-[60%]">
                  <h1>
                    <div className="text-black font-bold text-[28px] leading-[34px] z-30">
                    Powering Real-World Intelligence
                    </div>
                    <div className="text-black text-sm leading-5 mt-4 z-300">
                      <p>At whr.ai, we aim to be the ultimate source of truth for real-world actions. We envision a future where individuals and organizations affected by events have the insights to plan effectively, forecast accurately, and make decisive moves to advance their business.</p>
                    </div>
                  </h1>
                </div>
              </div>

              {/* Image Below Text on Small Screens */}
              <div className="w-full">
                <Image
                  src={HeroSectionImage}
                  alt="Hero Section Image"
                  width={1000}
                  height={1000}
                  priority // Ensures this image loads ASAP for LCP optimization
                  className="w-full max-h-[650px] object-cover"
                />
              </div>
            </div>

            <div className="min-[899px]:block hidden w-full">
              {/* Background Image */}
              <Image
                src={HeroSectionImage}
                alt="Hero Section Image"
                width={1000}
                height={1000}
                priority
                className="h-[450px] md:h-[650px] w-full object-cover"
              />

              {/* Blurry Background */}
              <div
                className="absolute left-0 top-0 h-[450px] md:h-[650px] w-full md:w-[700px] p-6 rounded-r-md"
                style={{
                  opacity: "0.9",
                  background: `#ECECEC`,
                  filter: "blur(100px)",
                  backdropFilter: "blur(50px)",
                  maskImage:
                    "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
                }}
              />

              {/* Text Content */}
              <div className="absolute left-5 md:left-[100px] top-10 h-auto max-w-[90%] md:max-w-[40%] p-4 md:p-6 rounded-r-md flex flex-col">
                {/* Main Text */}
                <h1>
                  {/* <div className="text-black font-bold text-[28px] md:text-[40px] mt-20 md:mt-32 leading-[34px] md:leading-[46px] break-words">
                    {dataToDisplay.text}
                  </div> */}
                   <div className="text-black mt-28 text-[58px] max-[775px]:text-[28px] break-words leading-[34px] md:leading-[66px]">
                   Powering Real-World Intelligence
                  </div>

                  {/* Subtext */}
                  <div className="text-[#171717] text-sm md:text-lg leading-5 md:leading-6 mt-4 text-wrap break-words">
                    <p>At whr.ai, we aim to be the ultimate source of truth for real-world actions. We envision a future where individuals and organizations affected by events have the insights to plan effectively, forecast accurately, and make decisive moves to advance their business.</p>
                  </div>
                </h1>
              </div>
            </div>
          </div>
      <div className="w-full"><ProblemContainer cardData={cardData} route="home" /></div>
      {/* <div className="flex flex-col gap-10 items-center mt-14">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">CUSTOMERS</div>
        <AutoScroll icons={companyLogos} size="small" />
      </div> */}
      <div className="mt-14 w-full">
        <CircleContainer />
      </div>
      <div className="mt-14 w-full">
        {/* <ProductsCarousel /> */}
      </div>
      {/* <div className="w-full mt-4"><Clarity /></div>s */}
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[10]" />
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>
      {/* Empowering Section */}
      {/* <div className='w-[87%] flex items-center'>
        <div className='flex flex-col w-[50%] gap-4 max-[480px]:w-full'>
          <div className='text-[56px] leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px] max-[480px]:w-full'>Empowering Real-World Intelligence</div>
          <div className='text-[#3a3a3a] text-lg max-[730px]:text-[14px] max-[730px]:leading-[20px] max-[480px]:w-full'>At whr.ai, our mission is to be the single source of truth for all actions happening in the real world. We envision a future where every individual and organization impacted by real-world events is empowered with the intelligence needed to plan better, forecast accurately, and take decisive actions to drive their business forward.</div>
        </div>
        <Image src={LogoSparkle} alt='Logo' className='ml-[20%] h-[200px] w-[180px] max-[730px]:h-[150px] max-[730px]:w-[120px]  max-[480px]:hidden' />
      </div> */}


      {/* Journey Section */}
      <JourneySection />
      
      {/* What sets us apart */}
      <div className='w-[87%] flex justify-between mt-[120px] max-[730px]:flex-col'>
        <div className='flex flex-col w-[30%] gap-4 max-[730px]:w-full'>
          <div className='text-[56px] leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px] max-[480px]:w-full'>What Sets Us Apart</div>
          <div className='text-[var(--secondary-text-color)]'>Redefining the Ordinary. Delivering the Extraordinary.</div>
        </div>
        <div className='relative w-[55%] flex flex-col items-center h-[250px] max-[730px]:justify-center max-[730px]:max-h-[220px] max-[730px]:w-full max-[730px]:mt-4 max-[1000px]:w-[60%]' 
        style={{ backgroundImage: `url(${GridImageTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute left-[-3%] top-[50%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer max-[575px]:h-[25px] max-[575px]:w-[25px]' onClick={handlePrev}>
            <Image src={LeftArrow} alt='left' />
          </div>
          <div className='w-[80%] flex items-center justify-between max-[1070px]:justify-center'>
            <Image src={SparkleImg} alt="star" height={30} width={30} className='max-[1070px]:hidden' />
            <div className='text-[var(--primary-color)] text-center font-medium text-[24px] max-[575px]:text-[20px]'>
              {data[currentIndex].heading}</div>
            <Image src={SparkleImg} alt="star" height={30} width={30} className='max-[1070px]:hidden' />
          </div>
          <div className='text-lg w-[80%] mt-7 flex flex-col gap-3 max-[575px]:text-[14px] max-[575px]:mt-4 max-[885px]:justify-center'>
            <div>{data[currentIndex].subheading}</div>
          </div>
          <div className='absolute right-[-3%] top-[50%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer max-[575px]:h-[25px] max-[575px]:w-[25px]' onClick={handleNext}>
            <Image src={RightArrow} alt='right' />
          </div>
        </div>
      </div>
      {/* Why US */}
      <div className='w-[87%] flex flex-col items-center mt-[120px]'>
        {/* Header Section */}
        <div className='flex flex-col items-center gap-4 mb-16 text-center'>
          <div className='text-[56px] leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px]'>Why Whr.ai</div>
          <div className='text-[var(--secondary-text-color)] text-lg'>Powering Events with Intelligent Connections.</div>
        </div>
        
        {/* Cards Section */}
        <div className='grid grid-cols-3 gap-6 w-full max-w-[1200px] max-[1024px]:grid-cols-1 max-[1024px]:max-w-[500px]'>
          <div className='flex flex-col gap-5 border border-[var(--border-color)] rounded-2xl p-8'>
            <Image src={SparkleImg} alt='sparkle' width={38} height={38} />
            <div className='text-[24px] text-[var(--primary-color)] max-[730px]:text-[20px]'>Trusted Data</div>
            <div className='text-lg text-[var(--secondary-text-color)] max-[730px]:text-[16px]'>Rely on data that is meticulously verified and constantly updated to ensure accuracy.</div>
          </div>
          
          <div className='flex flex-col gap-5 border border-[var(--border-color)] rounded-2xl p-8'>
            <Image src={SparkleImg} alt='sparkle' width={38} height={38} />
            <div className='text-[24px] text-[var(--primary-color)] max-[730px]:text-[20px]'>Comprehensive Coverage</div>
            <div className='text-lg text-[var(--secondary-text-color)] max-[730px]:text-[16px]'>Access a single source of truth covering all event categories and geographies</div>
          </div>
          
          <div className='flex flex-col gap-5 border border-[var(--border-color)] rounded-2xl p-8'>
            <Image src={SparkleImg} alt='sparkle' width={38} height={38} />
            <div className='text-[24px] text-[var(--primary-color)] max-[730px]:text-[20px]'>For Event Stakeholders</div>
            <div className='text-lg text-[var(--secondary-text-color)] max-[730px]:text-[16px]'>We maximize benefits for hotels, venues, planners, research firms, agencies, and enterprises in events.</div>
          </div>
        </div>
      </div>
      {/* WHO we Serve */}
      <div className='w-full flex flex-col justify-between mt-[120px] max-[480px]:flex-col max-[480px]:gap-4'>
        <div className='text-[56px] text-center leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px] max-[480px]:w-full'>Who We Serve</div>
        <div className="w-full flex items-center justify-center mt-10">
        <UseCasesContainer pathName="" />
      </div>
      </div>



      {/* Conclusion */}
      <div className="w-[87%] flex flex-col items-center justify-center rounded-2xl border border-[var(--border-color)] gap-5 mt-[120px] py-4"
        style={{ backgroundImage: `url(${GridImageTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='text-[48px] w-[90%] text-center text-[var(--primary-color)] max-[775px]:text-[40px] max-[480px]:text-[24px]'>Innovating the Future of Event Intelligence</div>
        <div className='w-[60%] text-center text-[20px] text-[var(--secondary-text-color)] max-[775px]:text-[16px] max-[480px]:text-[14px]'>As a newly launched company, we are excited to continue expanding our offerings and enhancing our platform. Our commitment to innovation ensures that we remain at the forefront of event intelligence, providing our clients with the tools they need to navigate and thrive in an ever-changing real-world landscape.</div>

      </div>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Page