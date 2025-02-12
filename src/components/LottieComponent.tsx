'use client'
import React from 'react'
import Lottie from 'lottie-react';


interface Props{
    lottieData : any;
    height : number
}

const LottieComponent = ({lottieData, height} : Props) => {
    return (
        <div className={`min-h-[${height}px]`}>
            <Lottie animationData={lottieData} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default LottieComponent