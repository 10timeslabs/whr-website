'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Sparkle from '/public/sparkle.png'
import Image from 'next/image';

interface Props {
  text: string;
}

const TypewriterEffect = ({ text }: Props) => {
  return (
    <div className="relative inline-block">
    {/* Typewriter Text */}
    <span className="custom-cursor">
      <Typewriter words={[text]} loop={1} typeSpeed={50} cursor={false} />
    </span>
  
    {/* Custom Image Cursor */}
    <Image
      src={Sparkle} // Replace with your cursor image path
      alt="Cursor"
      width={50}
      height={50}
      className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 pointer-events-none"
      style={{
        animation: "blink 1s steps(2, start) infinite",
      }}
    />
  
    {/* Custom Keyframes for Blinking */}
    <style jsx>{`
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `}</style>
  </div>
  
  )
}

export default TypewriterEffect