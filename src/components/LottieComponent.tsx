'use client'
import React from 'react'
import Lottie from 'lottie-react';
import NotFoundImage from '../../public/404.json'

const LottieComponent = () => {
    return (
        <div className="h-[300px]">
            <Lottie animationData={NotFoundImage} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default LottieComponent