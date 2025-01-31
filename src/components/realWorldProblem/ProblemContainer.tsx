import React from 'react'
import ProblemImage from '/public/realworldproblems/Problem_sol_pipeline.png'
import Image, { StaticImageData } from 'next/image'
import TopgridImage from '/public/realworldproblems/Problemgrid_top.png'
import BottomgridImage from '/public/realworldproblems/Problemgrid_bottom.png'
import ProblemCard from './ProblemCard'
import EngineScroll from './EngineScroll'

interface Props {
    cardData : {icon : StaticImageData, heading : string, subheading : string}[]
}

const ProblemContainer = ({cardData} : Props) => {

    return (
        <div className='w-full flex items-center justify-center relative'>
            <Image src={TopgridImage} alt='grid' className='absolute top-0 -z-[10] max-[600px]:hidden' />
            <Image src={BottomgridImage} alt='grid' className='absolute bottom-[20%] -z-[10] max-[600px]:hidden'/>
            <div className='w-[90%] flex mt-[110px] justify-between max-[1000px]:flex-col'>
                <div className='flex flex-col w-[30%] gap-8 max-[1000px]:w-[100%] max-[1000px]:gap-4'>
                    <div className='text-[64px] leading-[70px]'>Real World Problems</div>
                    <div className='text-[20px] text-[var(--secondary-text-color)]'>A billion people go, do we know when, why, whr?</div>
                    <Image src={ProblemImage} alt='prob' width={220} className='max-[1000px]:hidden'/>
                    <div className='text-[64px] leading-[70px] max-[1000px]:hidden'>Wht, Whn, <span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent'>Whr?</span></div>
                    <div className='text-[var(--secondary-text-color)] text-[20px] max-[1000px]:hidden'>Built with billions of signals, millions of sources, thousands of models to answer real questions</div>
                </div>
                <div className='w-[60%] flex flex-col gap-4 max-[1000px]:w-[100%] max-[1000px]:justify-center'>
                    <div className="grid grid-cols-2 gap-4 max-[1000px]:mt-8 max-[1000px]:grid-cols-1">
                        {cardData.map((problem, key) => (
                            <ProblemCard
                                key={key}
                                icon={problem.icon}
                                heading={problem.heading}
                                subheading={problem.subheading}
                            />
                        ))}
                    </div>
                    <div className='text-[64px] leading-[64px] hidden max-[1000px]:block mt-5'>Wht, Whn, <span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent'>Whr?</span></div>
                    <div className='text-[var(--secondary-text-color)] text-[20px] hidden max-[1000px]:block'>Built with billions of signals, millions of sources, thousands of models to answer real questions</div>
                    <div className='w-full h-[500px]'><EngineScroll/></div>
                </div>
            </div>
        </div>
    )
}

export default ProblemContainer