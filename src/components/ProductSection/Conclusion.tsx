import React from 'react'
import GridImageTwo from "/public/usecase_grid.png";
import Image from 'next/image';

interface Props {
    heading: string;
    subheading: string;
}

const Conclusion = ({ heading, subheading }: Props) => {
    return (
        <div className="w-[87%] flex flex-col items-center justify-center rounded-2xl border border-[var(--border-color)] h-[256px] gap-5"
            style={{ backgroundImage: `url(${GridImageTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='text-[48px] text-[var(--primary-color)]'>{heading}</div>
            <div className='w-[40%] text-center text-[20px] text-[var(--secondary-text-color)]'>{subheading}</div>

        </div>
    )
}

export default Conclusion