import React from 'react'
import { gtmProductJsonData } from '../../../../data/gtmProductData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={gtmProductJsonData} page='product' />
	)
}

export default Page