import React from 'react'
import { gtmProductJsonData } from '../../../../data/gtmProductData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={gtmProductJsonData} page='product' heading='' subheading=''/>
	)
}

export default Page