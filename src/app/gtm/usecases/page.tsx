import Footer from '@/components/Footer'
import GeneralNavbar from '@/components/GeneralNavbar'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import { gtmUsecasesjsonData } from '../../../../data/gtmUsecasesData'
import PageCard from '@/components/PageCard'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

const Page = () => {
	return (
		<SubpageLandingComponent passedData={gtmUsecasesjsonData} page='usecases' heading='' subheading=''/>
	)
}

export default Page