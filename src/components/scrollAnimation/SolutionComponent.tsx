import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
  solution: string;
  image: StaticImageData
}

const SolutionComponent = ({ solution, image }: Props) => {
  return (
    <div className='flex'>
      <div>{solution}</div>
      <Image src={image} alt='img' height={300} width={300}/>
    </div>
  )
}

export default SolutionComponent