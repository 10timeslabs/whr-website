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
  return (
    <div className='pt-[120px] flex flex-col items-center'>
      <HomeNavbar/>
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[10]" />
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>
      {/* Empowering Section */}
      <div className='w-[87%] flex items-center'>
        <div className='flex flex-col w-[50%] gap-4 max-[480px]:w-full'>
          <h1 className='text-[56px] leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px] max-[480px]:w-full'>Empowering Real-World Intelligence</h1>
          <div className='text-[#3a3a3a] text-lg max-[730px]:text-[14px] max-[730px]:leading-[20px] max-[480px]:w-full'>At whr.ai, our mission is to be the single source of truth for all actions happening in the real world. We envision a future where every individual and organization impacted by real-world events is empowered with the intelligence needed to plan better, forecast accurately, and take decisive actions to drive their business forward.</div>
        </div>
        <Image src={LogoSparkle} alt='Logo' className='ml-[20%] h-[200px] w-[180px] max-[730px]:h-[150px] max-[730px]:w-[120px]  max-[480px]:hidden' />
      </div>
      {/* Journey Section */}
      <div className='w-[87%] flex justify-between mt-[70px] max-[480px]:flex-col max-[480px]:gap-4'>
        <div className='text-[56px] leading-[64px] w-[30%] max-[730px]:text-[40px] max-[730px]:leading-[50px] max-[480px]:w-full'>Our Journey</div>
        <div className='text-[#3a3a3a] text-lg w-[50%] max-[730px]:text-[14px] max-[730px]:leading-[20px] max-[480px]:w-full'>Founded in January 2025, whr.ai was born from over a decade of experience in the event industry. Our founder and team recognized that events are a core factor of volatility that is notoriously difficult to gauge. Traditional data was fragmented and riddled with noise, making it challenging to incorporate events into actionable business insights. Unlike more straightforward factors like weather or holidays, understanding the dynamic and multifaceted nature of events required a specialized approach. Determined to solve this problem, we launched whr.ai to create a reliable single source of truth that everyone can depend on.</div>
      </div>
      {/* What sets us apart */}
      <div className='w-[87%] flex justify-between mt-[70px] max-[730px]:flex-col'>
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
      <div className='w-[87%] flex justify-between mt-[70px] max-[1050px]:flex-col'>
        <div className='flex flex-col w-[30%] gap-4 max-[1050px]:w-full'>
          <div className='text-[56px] leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px]'>Why Whr.ai</div>
          <div className='text-[var(--secondary-text-color)]'>Powering Events with Intelligent Connections.</div>
        </div>
        <div className='flex flex-col gap-4 w-[60%] max-[1050px]:mt-4 max-[1050px]:w-full'>
          <div className='flex gap-4 max-[580px]:flex-col'>
            <div className='flex flex-col gap-5 border border-[var(--border-color)] rounded-2xl p-8 '>
              <Image src={SparkleImg} alt='sparkle' width={38} height={38} />
              <div className='text-[24px] text-[var(--primary-color)] max-[730px]:text-[18px]'>Trusted Data</div>
              <div className='text-lg text-[var(--secondary-text-color)] max-[730px]:text-[14px]'>Rely on data that is meticulously verified and constantly updated to ensure accuracy.</div>
            </div>
            <div className='flex flex-col gap-5 border border-[var(--border-color)] rounded-2xl p-8'>
              <Image src={SparkleImg} alt='sparkle' width={38} height={38} />
              <div className='text-[24px] text-[var(--primary-color)] max-[730px]:text-[18px]'>Comprehensive Coverage</div>
              <div className='text-lg text-[var(--secondary-text-color)] max-[730px]:text-[14px]'>Access a single source of truth covering all event categories and geographies</div>
            </div>
          </div>
          <div className='flex flex-col gap-5 border border-[var(--border-color)] rounded-2xl p-8 w-full'>
            <Image src={SparkleImg} alt='sparkle' width={38} height={38} />
            <div className='text-[24px] text-[var(--primary-color)] max-[730px]:text-[18px]'>Designed for Event Stakeholders</div>
            <div className='text-lg text-[var(--secondary-text-color)] max-[730px]:text-[14px]'>Our solutions are tailored to unlock maximum benefits for hotels, venues, event planners, research firms, brand agencies, and large enterprises involved in events.</div>
          </div>
        </div>
      </div>
      {/* WHO we Serve */}
      <div className='w-[87%] flex justify-between mt-[70px] max-[480px]:flex-col max-[480px]:gap-4'>
        <div className='text-[56px] leading-[64px] w-[30%] max-[730px]:text-[40px] max-[730px]:leading-[50px] max-[480px]:w-full'>Who We Serve</div>
        <div className='text-[#3a3a3a] w-[50%] text-lg max-[730px]:text-[14px] max-[730px]:leading-[20px] max-[480px]:w-full'>Our primary customers include global hotels, venues, event planners, research firms, brand agencies, and large enterprises that participate in or provide services to events. Whether you are a local business affected by inbound visitors or an enterprise investing over $100k annually in events, whr.ai offers tailored solutions to meet your specific needs</div>
      </div>
      {/* Conclusion */}
      <div className="w-[87%] flex flex-col items-center justify-center rounded-2xl border border-[var(--border-color)] gap-5 mt-[70px] py-4"
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