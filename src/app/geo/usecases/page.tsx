import React from 'react'
import { geoUsecasesjsonData } from '../../../../data/geoUsecasesData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={geoUsecasesjsonData} page='usecases' />
	)
}

export default Page