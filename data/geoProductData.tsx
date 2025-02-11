import ApiImage from '/public/geoProductImages/Api_product.png'
import Coordinate from '/public/geoProductImages/Coordinate.png'
import Research from '/public/geoProductImages/Research.png'
import TrackerTenmplate from '/public/geoProductImages/tracker-templates.png'
import TrackerLanding from '/public/geoProductImages/Trackers-landing.png'
import Trends from '/public/geoProductImages/Trends-product.png'
import Icon1 from '/public/GeoProductHowIcons/Teli-01.svg'
import Icon2 from '/public/GeoProductHowIcons/Teli-02.svg'
import Icon3 from '/public/GeoProductHowIcons/Teli-03.svg'
import Icon4 from '/public/GeoProductHowIcons/Teli-04.svg'
import Icon5 from '/public/GeoProductHowIcons/Teli-05.svg'
import Icon6 from '/public/GeoProductHowIcons/Teli-06.svg'
import Icon7 from '/public/GeoProductHowIcons/Teli-07.svg'
import Icon8 from '/public/GeoProductHowIcons/Teli-08.svg'
import Icon9 from '/public/GeoProductHowIcons/Teli-09.svg'
import Icon10 from '/public/GeoProductHowIcons/Teli-10.svg'
import Icon11 from '/public/GeoProductHowIcons/Teli-11.svg'
import Icon12 from '/public/GeoProductHowIcons/Teli-12.svg'
import Icon13 from '/public/GeoProductHowIcons/Teli-13.svg'
import Icon14 from '/public/GeoProductHowIcons/Teli-14.svg'
import Icon15 from '/public/GeoProductHowIcons/Teli-15.svg'
import Icon16 from '/public/GeoProductHowIcons/Teli-16.svg'
import Icon17 from '/public/GeoProductHowIcons/Teli-17.svg'
import Icon18 from '/public/GeoProductHowIcons/Teli-18.svg'
import { AIAssistantIcon,  APIModelIcon,
    CoordinateIcon,
    SearchIcon,
    TrackerIcon,
    TrendsIcon, } from "../svgicons/icons";

const imageURL = "https://c1.10times.com/whr/gtm-geo/static/image/product"
export const geoProductJsonData = [
    {
        id: "event-search",
        heading: "Event Search",
        href: "/geo/product/event-search",
        dropText:
            "Find events with whr.ai's smart filters for better planning.",
        icon: <SearchIcon color="currentColor" />,
        image: Research,
        text: "Real-Time & Verified Data",
        subtext:
            "Identify what’s actionable from millions of events using smart filters and scores",
        problem:
            "Events are often limited to basic fields (topic, date, location). More signals are needed to quantify relevance & ROI from all available opportunities.",
        solution:
            "Allow polygon-based or citywide searches. Filter by event types, inbound scores, or expected footfall to see which events matter most.",
        how: [
            { icon: Icon1, content: "Search by Geo: Draw polygons or pick entire cities" },
            { icon: Icon2, content: "Filter by Types: Business, social, or unplanned events.", },
            { icon: Icon3, content: "View Flexibly: Table, card, map, or calendar." },
        ],
        highlights: ["Uncover & compare relevant events", "Boost ROI with relevant filters", "Flexible viewing formats"],
        conclusion: {
            heading: "Make Search Smart",
            subheading: "Go beyond basic lists and power your event strategy with deeper intel."
        },
        metaData: {
            title: "Event Search - whr.ai GEO",
            description: "Utilize whr.ai's Event Search to identify actionable events with smart filters and scores for better planning and forecasting.",
            image: `${imageURL}/Coordinate.png`,
        }
    },
    {
        id: "smart-tracker",
        heading: "Smart Tracker",
        href: "/geo/product/smart-tracker",
        dropText:
            "Track critical events with whr.ai's Smart Tracker.",
        icon: <TrackerIcon color="currentColor" />,
        image: TrackerLanding,
        text: "Track What Matters",
        subtext:
            "Create custom search filters and let your AI agent keep track of everything that’s changing—or critical—for your location or sector",
        problem:
            "It’s tedious to keep tabs on every event that might impact demand or drive changes, especially across multiple locations or competitor areas.",
        solution:
            "Unlock events that could shape your outlook. Track entire cities or precise geolocations for the event types you care about—updated daily.",
        how: [
            { icon: Icon4, content: "City or Radius: Monitor all events in a custom radius (2–10 km) or a citywide scope." },
            { icon: Icon5, content: "Filter by Types: Business, social, or unplanned events.", },
            { icon: Icon6, content: "Notifications: Custom triggers based on event type or volatility." }
        ],
        highlights: ["Never miss a major or minor event change", "Scale monitoring across multiple areas", "Automated alerts for timely action"],
        conclusion: {
            heading: "Don’t Miss Out",
            subheading: "Use trackers to avoid guesswork and stay ahead of any event-led volatility."
        },
        metaData: {
            title: "Smart Tracker - whr.ai GEO",
            description: "Track critical events with whr.ai's Smart Tracker. Create custom filters and let our AI agent monitor and notify you.",
            image: `${imageURL}/Coordinate.png`,
        }
    },
    {
        id: "ai-assistant",
        heading: "AI Assistant",
        href: "/geo/product/ai-assistant",
        dropText:
            "Resolve demand queries with whr.ai's AI Assistant.",
        icon: <AIAssistantIcon color="currentColor" />,
        image: TrackerTenmplate,
        text: "Deploy Event Agent",
        subtext:
            "Resolve on-ground demand queries by asking our fine-tuned AI assistant, trained on millions of events across 15k+ cities, accessing 2B+ data points",
        problem:
            "Standard search filters may not always be the best for ad-hoc questions; a natural language approach is easier for deeper insight and context.",
        solution:
            "Our event AI harnesses advanced language models and intelligence on on-ground events. It can convert ad-hoc queries into future trackers automatically.",
        how: [{ icon: Icon7, content: "Natural Language: Ask direct questions; get contextual answers." },
        { icon: Icon8, content: "Powered by Data: Uses a decade of event intelligence to provide deeper context." },
        { icon: Icon9, content: "Tracker Conversion: Turn repeated questions into persistent watchers." }],
        highlights: ["Conversational approach for complex queries", "Automatically sets trackers for future references", "Reduces guesswork with real-time context"],
        conclusion: {
            heading: "Your On-Ground Oracle",
            subheading: "Ask questions, get contextual responses, and turn insights into trackers effortlessly."
        },
        metaData: {
            title: "AI Assistant - whr.ai GEO",
            description: "Resolve on-ground demand queries with whr.ai's AI Assistant. Ask questions in natural language and get actionable responses.",
            image: `${imageURL}/Coordinate.png`,
        }
    },
    {
        id: "trends-monitor",
        heading: "Trends Monitor",
        href: "/geo/product/trends-monitor",
        dropText:
            "Monitor event trends with whr.ai's Trends Monitor.",
        icon: <TrendsIcon color="currentColor" />,
        image: Trends,
        text: "Monitor Meaningful Change",
        subtext:
            "Keep an eye on future on-ground actions & events. Identify anomalies or outliers that require attention.",
        problem:
            "Impactful decisions require enough lead time and comprehensive coverage. Multiple small events can collectively create spikes or disruptions if not tracked in advance.",
        solution:
            "Trend monitoring quantifies anomalies in event volume, predicted footfall, and economic impact, all visualized in a dedicated dashboard.",
        how: [
            { icon: Icon10, content: "Anomaly Criteria: Adjust thresholds to reduce false alarms." },
            { icon: Icon11, content: "Visual Dashboard: Real-time graphs of events, footfall, or economic signals." },
            { icon: Icon12, content: "Proactive Alerts: Email or platform notifications when anomalies occur." }
        ],
        highlights: ["Real-time coverage ensures you have time to respond", "Data-driven anomaly detection for multi-event impacts", "Visual cues reduce oversight"],
        conclusion: {
            heading: "Stay Ahead",
            subheading: "Monitor crucial dates, locations, and potential causes of disruptions—minimize last-minute surprises."
        },
        metaData: {
            title: "Trends Monitor - whr.ai GEO",
            description: "Monitor meaningful changes in event trends with whr.ai's Trends Monitor. Identify anomalies and respond proactively.",
            image: `${imageURL}/Coordinate.png`,
        }
    },
    {
        id: "coordinate",
        heading: "Coordinate",
        href: "/geo/product/coordinate",
        dropText:
            "Streamline team coordination with whr.ai's Coordinate.",
        icon: <CoordinateIcon />,
        image: Coordinate,
        text: "Track & Take Action",
        subtext:
            "Turn risk into opportunity: flag anomalies or high-impact events, share with your team, and specify action in one interface.",
        problem:
            "Identifying, noting, and acting on major or minor on-ground changes are usually separate tasks—leading to intel loss and coordination nightmares.",
        solution:
            "A single platform to unify notes, tasks, and alerts for each event or anomaly discovered. Keep everyone aligned and in the loop.",
        how: [
            { icon: Icon13, content: "Central Feed: Mark events that need action, mention colleagues, and store notes in context." },
            { icon: Icon14, content: "One Interface: No endless emails; everything is linked to relevant event data." },
            { icon: Icon15, content: "Track Changes: Flag updates or new signals." }],
        highlights: ["Unified approach: search + notes + task assignment", "Faster team alignment on urgent or high-impact events", "Clear traceability for each decision"],
        conclusion: {
            heading: "Make Coordination Easy",
            subheading: "A single terminal for your entire team to annotate, act, and stay synced on event developments."
        },
        metaData: {
            title: "Coordinate - whr.ai GEO",
            description: "Streamline team coordination around events with whr.ai's Coordinate. Flag risks, assign tasks, and share notes seamlessly.",
            image: `${imageURL}/Coordinate.png`,
        }
    },
    {
        id: "api_modeltraining",
        heading: "API & Model Training",
        href: "/geo/product/api_modeltraining",
        dropText:
            "Integrate whr.ai event data into your systems via API.",
        icon: <APIModelIcon color="currentColor" />,
        image: ApiImage,
        text: "Consume Event Data in Your Data Stack",
        subtext:
            "Consume event or trend data in your internal systems via an API or leverage it to enrich your own models",
        problem:
            "Integrating event data into proprietary workflows is complicated: duplications, fake listings, messy formats, and incomplete insights hamper internal data accuracy.",
        solution:
            "A single EventAPI that aggregates and cleans millions of events worldwide. No more manually verifying, deduplicating, or checking for fakes—get structured data instantly.",
        how: [
            { icon: Icon16, content: "Single Endpoint: Access curated event data via RESTful API" },
            { icon: Icon17, content: "Score Enrichment: International audience, inbound traffic, or volatility scores." },
            { icon: Icon18, content: "Historical Library: Train your models with historical event patterns." }],
        highlights: ["Access large-scale, validated event data", "Offload heavy-lift verification & deduplication", "Refine internal models with robust external intel"],
        conclusion: {
            heading: "Elevate Your Data Stack",
            subheading: "Improve internal models and workflows with clean, continuously updated event intelligence—no clutter, only actionable data."
        },
        metaData: {
            title: "API & Model Training - whr.ai GEO",
            description: "Integrate whr.ai's event data into your systems via our API. Enhance your models with reliable, enriched event intelligence.",
            image: `${imageURL}/Coordinate.png`,
        }
    }
]