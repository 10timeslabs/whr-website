import React from 'react'
import Image from 'next/image'

interface Props {
	data: { name: string, price: string, features: string[], per: string }
	isActive: boolean;
}

const PriceCard = ({ data, isActive }: Props) => {
	return (
		<div className={`h-[430px] w-full bg-white drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-between p-5 ${isActive ? "border-2 border-[var(--primary-color)]" : ""}`}>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<span className='font-semibold text-[24px]'>{data.name}</span>
					<span className='text-[14px] text-[var(--secondary-text-color)]'>{`Unleash the Power of Your Business with ${data.name} Plan.`}</span>
				</div>
				<div className='flex items-center gap-2'>
					<span className='text-[30px] font-medium'>{data.price}</span>
					<span className='text-[var(--secondary-text-color)] text-[14px]'>{data.per}</span>
				</div>
				<div className='w-full border'></div>
				<div className='flex flex-col gap-2'>
					{data.features.map((feature, key) => (
						<div key={key} className='flex gap-2 items-center'>
							<TickIcon/>
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

const TickIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M7.40705 1.11188C6.81302 0.610492 5.94402 0.610493 5.34999 1.11188L4.809 1.5685C4.55652 1.78161 4.24408 1.91103 3.91486 1.93888L3.20944 1.99853C2.43486 2.06404 1.82038 2.67851 1.75488 3.45309L1.69522 4.15851C1.66738 4.48773 1.53795 4.80017 1.32485 5.05266L0.868229 5.59364C0.36684 6.18768 0.366841 7.05667 0.868229 7.6507L1.32485 8.19169C1.53795 8.44417 1.66738 8.75663 1.69522 9.08584L1.75488 9.79129C1.82038 10.5659 2.43486 11.1803 3.20944 11.2458L3.91486 11.3054C4.24408 11.3334 4.55652 11.4628 4.80901 11.6759L5.34999 12.1325C5.94402 12.6338 6.81302 12.6338 7.40705 12.1325L7.94803 11.6759C8.20052 11.4628 8.51298 11.3334 8.84218 11.3054L9.54764 11.2458C10.3222 11.1803 10.9367 10.5659 11.0022 9.79129L11.0618 9.08584C11.0897 8.75663 11.2191 8.44417 11.4322 8.19169L11.8888 7.6507C12.3902 7.05667 12.3902 6.18768 11.8888 5.59364L11.4322 5.05265C11.2191 4.80017 11.0897 4.48773 11.0618 4.15851L11.0022 3.45309C10.9367 2.67851 10.3222 2.06404 9.54764 1.99853L8.84218 1.93888C8.51298 1.91103 8.20052 1.78161 7.94803 1.5685L7.40705 1.11188ZM9.27815 5.535C9.5584 5.25478 9.5584 4.80043 9.27815 4.5202C8.99798 4.23997 8.54359 4.23997 8.26334 4.5202L5.58156 7.20201L4.49436 6.11481C4.21413 5.83457 3.75979 5.83457 3.47956 6.11481C3.19933 6.39504 3.19933 6.84938 3.47956 7.12961L5.07417 8.72418C5.35439 9.00443 5.80874 9.00443 6.08896 8.72418L9.27815 5.535Z" fill="#252430" />
		</svg>
	)
}
