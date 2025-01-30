import React from 'react'
import ProblemImage from '/public/realworldproblems/Problem_sol_pipeline.png'
import Image from 'next/image'
import TopgridImage from '/public/realworldproblems/Problemgrid_top.png'
import BottomgridImage from '/public/realworldproblems/Problemgrid_bottom.png'
import FragmentDataIcon from '/public/realworldproblems/Fragmenteddata.svg'
import NoiseIcon from '/public/realworldproblems/noise.svg'
import PuzzleIcon from '/public/realworldproblems/puzzle.svg'
import IntelDataIcon from '/public/realworldproblems/timesensitiveintel.svg'
import ProblemCard from './ProblemCard'
import EngineScroll from './EngineScroll'

const ProblemContainer = () => {

    const data = [
        { icon: FragmentDataIcon, heading: "Fragmented Data", subheading: "Fragmented data poses significant challenges, with information scattered across multiple sources, inconsistent formats, various languages, duplicate entries, and unsynchronised timelines" },
        { icon: NoiseIcon, heading: "Too Much Noise", subheading: "With overwhelming volumes of information, the process of finding relevant data, cleaning it, identifying fake or unreliable entries, and quantifying it for meaningful use becomes a daunting task." },
        { icon: PuzzleIcon, heading: "Piecing the Puzzle", subheading: "Data is only as valuable as the connections between its points. Without linking multiple lateral data points, insights remain incomplete and unusable." },
        { icon: IntelDataIcon, heading: "Time Sensitive Intel", subheading: "Delivering actionable intelligence to the right people at the right time is critical for success. When key insights are accessible exactly when they’re needed, it enables informed decisions." },
    ]

    return (
        <div className='w-full flex items-center justify-center relative'>
            <Image src={TopgridImage} alt='grid' className='absolute top-0 -z-[10]' />
            <Image src={BottomgridImage} alt='grid' className='absolute bottom-[20%] -z-[10]' />
            <div className='w-[1300px] flex mt-[110px] justify-between'>
                <div className='flex flex-col w-[30%] gap-8'>
                    <div className='text-[64px] leading-[70px]'>Real World Problems</div>
                    <div className='text-[20px] text-[var(--secondary-text-color)]'>A billion people go, do we know when, why, whr?</div>
                    <Image src={ProblemImage} alt='prob' width={220} />
                    <div className='text-[64px] leading-[70px]'>Wht, Whn, <span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent font-semibold'>Whr?</span></div>
                    <div className='text-[var(--secondary-text-color)]'>Built with billions of signals, millions of sources, thousands of models to answer real questions</div>
                </div>
                <div className='w-[60%] flex flex-col gap-8'>
                    <div className="grid grid-cols-2 gap-4">
                        {data.map((problem, key) => (
                            <ProblemCard
                                key={key}
                                icon={problem.icon}
                                heading={problem.heading}
                                subheading={problem.subheading}
                            />
                        ))}
                    </div>
                    <div className='w-full h-[500px]'><EngineScroll/></div>
                </div>
            </div>
        </div>
    )
}

export default ProblemContainer