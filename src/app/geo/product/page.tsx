import React from 'react'
import { geoProductJsonData } from '../../../../data/geoProductData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={geoProductJsonData} page='product' heading='' subheading=''/>
	)
}

export default Page