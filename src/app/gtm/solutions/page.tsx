import React from 'react'
import { gtmSolutionsjsonData } from '../../../../data/gtmSolutionsdata'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={gtmSolutionsjsonData} page='solutions' />
	)
}

export default Page