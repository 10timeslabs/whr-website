"use client"
import React from 'react'
import Lottie from 'lottie-react'
import CleaningImage from '../../../public/realworldproblems/cleaningengine.json'
import EnrichmentImage from '../../../public/realworldproblems/enrichmentengine.json'
import InteligenceImage from '../../../public/realworldproblems/intelligenceengine.json'
import SourcingImage from '../../../public/realworldproblems/sourcingengine.json'
// import Image from 'next/image'

const EngineScroll = () => {

	const data = [
		{ image: SourcingImage, heading: "Sourcing Engine", subheading: "Powered by the largest event scraper, our platform sources data from millions of users, channels, and trusted partners. Backed by a dedicated data-searching team and integrated with top platforms, we ensure comprehensive and reliable event intelligence to keep you ahead" },
		{ image: CleaningImage, heading: "Cleaning Engine", subheading: "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use." },
		{ image: EnrichmentImage, heading: "Enrichment Engine", subheading: "Link additional data building blocks, add valuable cues for deeper insights, and organize with ranking, rating, clustering, and tagging. Calculate linkages and influence to unlock the full potential of your data and drive smarter decisions" },
		{ image: InteligenceImage, heading: "Intelligence Engine", subheading: "Seamlessly connect multiple datasets, identify patterns through advanced modeling, and generate precise estimations and scoring. Compute overall impact scores to unlock deeper insights and drive impactful decisions" },
	]

	return (
		<div className='w-full h-full rounded-xl border border-[var(--border-color)] relative overflow-hidden p-5 bg-white'>
			<div
				className="absolute right-[-100px] top-0 h-full w-[600px] h-[500px] z-10"
				style={{
			// 		background: `
            // radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 100%)`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			></div>
			<div className="absolute z-20 w-[95%] h-[460px] overflow-y-auto"
				style={{
					WebkitMaskImage:
						"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
					maskImage:
						"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
				}}>
				{data.map((engine, key) => (
					<div className="flex flex-col w-full h-full mt-5" key={key}>
						{/* <div className={`flex justify-center w-full`}>
							<Image src={engine.image} alt="img" height={222} />
						</div> */}
						<div className="h-[222px]">
							<Lottie animationData={engine.image} style={{ width: '100%', height: '100%' }} />
						</div>
						<div className="font-semibold text-[24px] mt-10">{engine.heading}</div>
						<div className="text-[var(--secondary-text-color)] mt-5">{engine.subheading}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default EngineScroll