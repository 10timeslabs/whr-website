import React from 'react'
import Image from 'next/image'
import TickIcon from '/public/priceTick.svg'


interface Props {
	data: { name: string, price: number, features: string[], per: string }
	isActive: boolean;
	isAnually: boolean;
}

const PriceCard = ({ data, isActive, isAnually }: Props) => {
	return (
		<div className={`h-[540px] w-full bg-white drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col justify-between p-5 ${isActive ? "border-2 border-[var(--primary-color)]" : ""}`}>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<span className='font-semibold text-[24px]'>{data.name}</span>
					<span className='text-[14px] text-[var(--secondary-text-color)]'>{`Unleash the Power of Your Business with ${data.name} Plan.`}</span>
				</div>
				<div className='flex items-center gap-2'>
					<span className='text-[30px] font-medium'>
						{data.price === 0 ? "Custom" : `$${isAnually ? data.price * 10 : data.price}`}
					</span>
					{!isAnually && <span className='text-[var(--secondary-text-color)] text-[14px]'>{data.per}</span>}
				</div>
				<div className='w-full border'></div>
				<div className='flex flex-col gap-2'>
					{data.features.map((feature, key) => (
						<div key={key} className='flex gap-2 items-center'>
							<Image src={TickIcon} alt='tick' />
							<span>{feature}</span>
						</div>
					))}
				</div>
			</div>
			<button className='bg-[var(--primary-color)] rounded-md text-white text-center py-2 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]'>Start free trial</button>
		</div>
	)
}

export default PriceCard
