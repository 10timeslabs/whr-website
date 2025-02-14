import React from 'react'
import { geoSolutionsjsonData } from '../../../../data/geoSolutionsData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

export const metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/geo/solutions",
  },
  openGraph: {
    title: "Real-World Insights, Real-Time Decisions",
    description: "From data consolidation to location-based insights—unlock powerful solutions for strategic growth.",
    url: "https://whr.ai/geo/solutions",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/geo/static/image/solution/Demandforecasting.png",
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
		<SubpageLandingComponent passedData={geoSolutionsjsonData} page='solutions' heading='Real-World Insights, Real-Time Decisions' subheading='From data consolidation to location-based insights—unlock powerful solutions for strategic growth.'/>
	)
}

export default Page