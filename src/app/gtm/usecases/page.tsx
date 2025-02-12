import Footer from '@/components/Footer'
import GeneralNavbar from '@/components/GeneralNavbar'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import { gtmUsecasesjsonData } from '../../../../data/gtmUsecasesData'
import PageCard from '@/components/PageCard'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

export const metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/gtm/usecases",
  },
  openGraph: {
    title: "Where should you Go",
    description: "Gain real-time insights, track key metrics, and make data-driven event decisions.",
    url: "https://whr.ai/gtm/usecases",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_human-resources.jpg",
        width: 1200,
        height: 630,
        alt: "GTM Event Intelligence Solutions",
      },
    ],
    type: "website",
  },
};

const Page = () => {
	return (
		<SubpageLandingComponent passedData={gtmUsecasesjsonData} page='usecases' heading='Where should you Go' subheading='Gain real-time insights, track key metrics, and make data-driven event decisions'/>
	)
}

export default Page