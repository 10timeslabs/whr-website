import React from 'react'
import DataCard from './DataCard'


const ProblemSolution = () => {
	return (
		<div className='w-full flex flex-col items-center gap-5 p-4'>
			<div className='text-sm font-medium border border-color rounded-xl py-1 px-7'>What do we solve</div>
			<div className='flex gap-[50px]'>
				<DataCard heading='PROBLEM' subHeading='Demand on ground is volatile. While some factors like seasonality and population density are easy to measure, events lead to unexpected change in demand. '/>
				<DataCard heading='SOLUTION' subHeading='Eventeli enables better predictability of demand by taking into consideration upcoming & forecasted events, along with the estimated impact. '/>
			</div>
		</div>
	)
}

export default ProblemSolution