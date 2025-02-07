"use client"
import React from 'react'
import ProblemImg from '/public/Problem.png'
import SolutionImg from '/public/Solution.png'
import { head } from 'framer-motion/client';
import Image from 'next/image';

interface Props {
  heading: string;
  subHeading: string;
}

const DataCard = ({ heading, subHeading }: Props) => {
  return (
    <div className='relative w-[496px] h-[370px] rounded-[20px] p-9 border border-[var(--border-color)] flex flex-col gap-5 text-[#010D3E] overflow-hidden' style={{ boxShadow: "0px 7px 24px 0px rgba(36, 38, 43, 0.1)" }}>
      <div className='font-semibold'>{heading}</div>
      <div>{subHeading}</div>
      <div className='absolute bottom-[-30%] left-[50%] translate-x-[-50%] opacity-40'>
        <Image src={heading === "PROBLEM" ? ProblemImg : SolutionImg} alt='img' />
      </div>
    </div>
  )
}

export default DataCard