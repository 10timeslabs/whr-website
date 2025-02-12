import React from 'react'
import { geoUsecasesjsonData } from '../../../../data/geoUsecasesData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

export const metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/geo/usecases",
  },
  openGraph: {
    title: "Where could you focus",
    description: "Gain real-time insights, track key metrics, and make data-driven event decisions",
    url: "https://whr.ai/geo/usecases",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/geo/static/image/usecases/geo_usecase_hotel&lodging_cropped.png",
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
		<SubpageLandingComponent passedData={geoUsecasesjsonData} page='usecases' heading='Where could you focus' subheading='Gain real-time insights, track key metrics, and make data-driven event decisions'/>
	)
}

export default Page