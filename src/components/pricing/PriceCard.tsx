import React from 'react'
import TickIcon from '/public/greenTick.svg'
import Image from 'next/image'

interface Props {
	data: { name: string, price: string, features: string[], per: string }
	isActive : boolean;
}

const PriceCard = ({ data, isActive }: Props) => {
	return (
		<div className={`h-[350px] w-full bg-white drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]  rounded-lg flex flex-col gap-4 p-5 ${isActive ? "border-2 border-[var(--primary-color)]" : ""}`}>
			<div className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent text-[20px] font-medium'>{data.name}</div>
			<div className='flex items-center'>
				<span className='text-[30px] font-medium'>{data.price}</span>
				<span className='text-[var(--secondary-text-color)] text-[20px]'>{data.per}</span>
			</div>
			<button className='bg-[var(--primary-color)] rounded-md text-white text-center py-2 w-[200px] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]'>Start free trial</button>
			<div className='w-full border'></div>
			<div className='flex flex-col gap-2'>
				{data.features.map((feature, key)=>(
					<div key={key} className='flex gap-2'>
						<Image src={TickIcon} alt='tick' width={20}/>
						<span>{feature}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default PriceCard