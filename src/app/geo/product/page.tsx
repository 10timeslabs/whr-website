import React from 'react'
import { geoProductJsonData } from '../../../../data/geoProductData'
import SubpageLandingComponent from '@/components/SubpageLandingComponent'

export const metadata = {
  title: "whr.ai/geo/product - GEO Event Products",
  alternates: {
    canonical: "https://whr.ai/geo/product",
  },
  openGraph: {
    title: "Stay Ahead with Data-Driven Forecasting",
    description: "Leverage GEO’s predictive insights to forecast footfall, optimize staffing, and fine-tune pricing strategies.",
    url: "https://whr.ai/geo/product",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/gtm-geo/static/image/product/Research.png",
        width: 1200,
        height: 630,
        alt: "GEO Event Intelligence Product",
      },
    ],
    type: "website",
  },
};

const Page = () => {
	return (
		<SubpageLandingComponent passedData={geoProductJsonData} page='product' heading='Stay Ahead with Data-Driven Forecasting' subheading='Leverage GEO’s predictive insights to forecast footfall, optimize staffing, and fine-tune pricing strategies.'/>
	)
}

export default Page