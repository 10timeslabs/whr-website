import React, { useEffect, useRef, useState } from 'react'
import Logo from '/public/logo/croppedlogo.png'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import BottomWaveImage from '/public/claritysection_wave_bottom.png'
import TopWaveImage from '/public/claritysection_wave_top.png'

const Clarity = () => {
    const logoRef = useRef(null);
    const isLogoInView = useInView(logoRef, { once: false });
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if (isLogoInView) {
            setTimeout(() => {
                setShowText(true);
            }, 600); // Wait for logo animation to complete before showing text
        }
    }, [isLogoInView]);
    return (
        <div className='w-full flex flex-col items-center justify-center h-[550px] relative'>
            <Image src={TopWaveImage} alt='wave' className='-z-10 absolute top-[-20%]' width={1300} />
            <Image src={BottomWaveImage} alt='wave' className='-z-10 absolute bottom-0' style={{ width: "100%" }} />
            <div className='font-medium text-[32px] max-[575px]:text-[28px]'>Clarity in Chaos</div>
            <div className='text-[var(--secondary-text-color)] text-[20px] text-center max-[575px]:text-[16px]'>Real-world can be chaotic; beauty emerges from chaos. </div>
            <div className='flex items-center justify-center w-full mt-10 h-[280px]'>
                <div className='w-[800px] relative flex items-center justify-center h-full'>
                    <motion.div
                        ref={logoRef}
                        initial={{ scale: 0.1 }}
                        animate={isLogoInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: .6, ease: "easeOut" }}
                    >
                        <Image
                            className="drop-shadow-[0_10px_5px_rgba(103,80,164,0.5)]"
                            src={Logo}
                            alt="logo"
                            height={60}
                            width={51}
                        />
                    </motion.div>

                    {/* Typewriter Texts */}
                    {showText && (
                        <div className='text-[24px] max-[820px]:text-[18px]'>
                            <div className="absolute top-0 left-[30%] bg-[#F8FBEA] text-[#8B8D52] rounded-xl py-1 px-2 max-[820px]:left-[40%] max-[650px]:left-[20%]">
                                <Typewriter words={["Don't Just Go, Know"]} loop={1} typeSpeed={50} />
                                <span className="font-semibold">
                                    <Typewriter words={[" WHR!"]} loop={1} typeSpeed={50} />
                                </span>
                            </div>


                            <div className="absolute top-[80px] left-0 bg-[#FFF7F5] text-[#AE7562] rounded-xl py-1 px-2 max-[820px]:left-[10%] max-[650px]:top-[55px]">
                                <Typewriter words={["Where could you"]} loop={1} typeSpeed={50} />
                                <span className="font-semibold">
                                    <Typewriter words={[" FOCUS?"]} loop={1} typeSpeed={50} />
                                </span>
                            </div>

                            <div className="absolute top-[120px] right-0 bg-[#FEF6FF] text-[#9263A0] rounded-xl py-1 px-2 max-[820px]:right-[10%] max-[650px]:top-[180px]">
                                <Typewriter words={["Where should you"]} loop={1} typeSpeed={50} />
                                <span className="font-semibold">
                                    <Typewriter words={[" GO?"]} loop={1} typeSpeed={50} />
                                </span>
                            </div>

                            <div className="absolute top-[210px] left-[30%] bg-[#F4FAFF] text-[#486D95] rounded-xl py-1 px-2 max-[820px]:left-[40%] max-[650px]:top-[250px] max-[650px]:left-[20%]">
                                <Typewriter words={["Where would you"]} loop={1} typeSpeed={50} />
                                <span className="font-semibold">
                                    <Typewriter words={[" BE?"]} loop={1} typeSpeed={50} />
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Clarity