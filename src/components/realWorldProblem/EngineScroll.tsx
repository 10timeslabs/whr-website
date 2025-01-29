import React from 'react'
import CleaningImage from '/public/realworldproblems/cleaningengine.png'
import EnrichmentImage from '/public/realworldproblems/cleaningengine.png'
import InteligenceImage from '/public/realworldproblems/cleaningengine.png'
import SourcingImage from '/public/realworldproblems/cleaningengine.png'
import Image from 'next/image'

const EngineScroll = () => {

	const data = [
		{ image: CleaningImage, heading: "Cleaning Engine", subheading: "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use." },
		{ image: EnrichmentImage, heading: "Cleaning Engine", subheading: "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use." },
		{ image: InteligenceImage, heading: "Cleaning Engine", subheading: "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use." },
		{ image: SourcingImage, heading: "Cleaning Engine", subheading: "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use." },
	]

	return (
		<div className='w-full h-full rounded-xl border border-[var(--border-color)] relative overflow-hidden p-5'>
			<div
				className="absolute right-[-60px] top-0 h-full w-[600px] h-[500px] -z-10"
				style={{
					background: `
            radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 100%)`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			></div>
			{/* Scrollable section */}
			<div className="w-full h-[300px] overflow-y-auto">
				{data.map((engine, key) => (
					<div className="flex flex-col w-full h-full mb-[100px]" key={key}>
						<div className={`flex justify-center w-full`}>
							<Image src={engine.image} alt="img" width={500} />
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