import React from 'react'
import { geoSolutionsjsonData } from '../../../../data/geoSolutionsData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={geoSolutionsjsonData} page='solutions'/>
	)
}

export default Page