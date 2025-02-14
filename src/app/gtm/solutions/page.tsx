import React from 'react'
import { gtmSolutionsjsonData } from '../../../../data/gtmSolutionsdata'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

export const metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/gtm/solutions",
  },
  openGraph: {
    title: "Leverage Real-World Data for Smarter Decisions",
    description: "Discover how businesses are making smarter decisions by harnessing real-world market and event signals.",
    url: "https://whr.ai/gtm/solutions",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/gtm/static/image/solution/Brandbuilding.png",
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
		<SubpageLandingComponent passedData={gtmSolutionsjsonData} page='solutions' heading='Leverage Real-World Data for Smarter Decisions' subheading='Discover how businesses are making smarter decisions by harnessing real-world market and event signals.'/>
	)
}

export default Page