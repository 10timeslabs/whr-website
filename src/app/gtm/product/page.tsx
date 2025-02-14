import React from 'react'
import { gtmProductJsonData } from '../../../../data/gtmProductData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

export const metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/gtm/products",
  },
  openGraph: {
    title: "Real-Time Event Tracking for Maximum Impact",
    description: "From event search to AI-powered tracking, streamline your workflow and uncover new opportunities effortlessly.",
    url: "https://whr.ai/gtm/products",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/gtm-geo/static/image/product/Research.png",
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
		<SubpageLandingComponent passedData={gtmProductJsonData} page='product' heading='Real-Time Event Tracking for Maximum Impact' subheading='From event search to AI-powered tracking, streamline your workflow and uncover new opportunities effortlessly.'/>
	)
}

export default Page