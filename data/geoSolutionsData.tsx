import React from "react";
// import DemandForeCasting from "/public/geo_soln_illustrations/demand forecasting.svg";
// import DynamicPricing from "/public/geo_soln_illustrations/Dynamic Pricing.svg";
// import EventProspecting from "/public/geo_soln_illustrations/Event Prospecting.svg";
// import GeoMarketing from "/public/geo_soln_illustrations/Geo Marketing.svg";
// import InventoryPlanning from "/public/geo_soln_illustrations/Inventory Planning..svg";
// import RiskIdentification from "/public/geo_soln_illustrations/Risk Identification.svg";
// import TravelAdvisory from "/public/geo_soln_illustrations/Travel Advisory.svg";
// import WorkforceManagement from "/public/geo_soln_illustrations/Workforce Management.svg";
import DemandForeCasting from "../data/solutionAnimationData/demandforecasting.json"
import DynamicPricing from "../data/solutionAnimationData/Dynamicpricing.json"
import EventProspecting from "../data/solutionAnimationData/EventProspecting.json"
import GeoMarketing from "../data/solutionAnimationData/Geomarketing.json"
import InventoryPlanning from "../data/solutionAnimationData/Inventoryplanning.json"
import RiskIdentification from "../data/solutionAnimationData/RiskIdentification.json"
import TravelAdvisory from "../data/solutionAnimationData/Traveladvisory.json"
import WorkforceManagement from "../data/solutionAnimationData/Workforcemanagement.json"
import {
  Geo_UseCase_1,
  Geo_UseCase_10,
  Geo_UseCase_11,
  Geo_UseCase_12,
  Geo_UseCase_13,
  Geo_UseCase_14,
  Geo_UseCase_15,
  Geo_UseCase_2,
  Geo_UseCase_3,
  Geo_UseCase_4,
  Geo_UseCase_5,
  Geo_UseCase_6,
  Geo_UseCase_7,
  Geo_UseCase_8,
  Geo_UseCase_9,
} from "../svgicons/icons";
const imageURL = "https://c1.10times.com/whr/geo/static/image";
export const geoSolutionsjsonData = [
  {
    id: "demand-forecasting",
    image: DemandForeCasting,
    text: "Forecast Onground Demand",
    subtext:
      "Geo’s AI-powered platform is used by leading businesses to give greater predictability to its demand volatility enabling them to achieve millions of dollars in improved forecasting accuracy.",
    problem:
      "Demand on ground is volatile. While some factors like seasonality and population density are easy to measure, events lead to unexpected change in demand.",
    solution:
      "Eventeli enables better predictability of demand by taking into consideration upcoming & forecasted events, along with the estimated impact.",
    how: `We cover all event format that impact onground reality and footfall. For attended events, our AI engine estimates expected footfall and it split between local versus inbound traffic from outside a speciic geo-location. Additionally, our engine qualitifies the economic impacts the events go have individually or as a group of events happening within a geography on a specifc time period. 

How can this be used:
a. See demand forecast and its impact over time in our trend dashboard 
b. Consume data via an API to include in your internal prediction model`,

    usecases: [
      {
        topic: "Hotel & Lodging",
        content:
          "Local vs. inbound audience data helps refine rates.",
        icon: <Geo_UseCase_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        href: "/geo/usecases/hotel-lodging",
      },
      {
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Plan workforce & inventory around spikes.",
        href: "/geo/usecases/restaurants",
      },
      {
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Time offers to inbound tourists.",
        href: "/geo/usecases/activity-planners",
      },
      {
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Manage passenger surge.",
        href: "/geo/usecases/aviation-airport",
      },
      {
        topic: "Transportation ",
        icon: <Geo_UseCase_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Match supply for local commutes.",
        href: "/geo/usecases/transportation",
      },
      {
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Price ad spots for event crowds.",
        href: "/geo/usecases/ooh-marketing",
      },
      {
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Staff & stock precisely.",
        href: "/geo/usecases/retail-commerce",
      },
      {
        topic: "Parking",
        icon: <Geo_UseCase_8 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Adjust capacity & fees.",
        href: "/geo/usecases/parking",
      },
      {
        topic: "DMO & DMC",
        icon: <Geo_UseCase_9 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Collaborate with local hospitality on inbound. ",
        href: "/geo/usecases/dmo-dmc",
      },
      {
        topic: "Event Planners",
        icon: <Geo_UseCase_10 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Choose event location/dates. ",
        href: "/geo/usecases/event-planners",
      },
      {
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_11 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Plan deliveries.",
        href: "/geo/usecases/hyperlocal-quick-commerce",
      },
      {
        topic: "Local Government",
        icon: <Geo_UseCase_13 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Proactively manage big gatherings.",
        href: "/geo/usecases/local-government",
      },
      {
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Integrate into corporate planning.",
        href: "/geo/usecases/enterprise",
      },
    ],
    metaData:{
      title:"Demand Forecasting - whr.ai GEO",
      description:"Accurately forecast on-ground demand using whr.ai GEO's event intelligence and predictive analytics for better planning.",
      image:`${imageURL}/solution/Demandforecasting.png`,
    }
  },
  {
    id: "dynamic-pricing",
    image: DynamicPricing,
    text: "Less Surprise, Better Price",
    subtext:
      "Improve pricing strategy with forecasted data around events and its impact.",
    problem: "Demand is volatile. Knowledge about change is time sensitive",
    solution:
      "AI enabled demand forecasting can help price change in tandem. Staying ahead of the market forces is critical to optimaily price inventory to ensure maximum return. If future demand is low and its not factored into the pricing, it can lead to lower sales and vic-e-versa.",
    how: "With a single source of truth for events that are coming, adjusted for what is changing and accounting for whats critical for the businesses, can provide a significant edge in efficient pricing. Know in advance about forecasted demand basis relevent audience, to improve your internal model or to make manual interventions in price setting. ",
    usecases: [
      {
        topic: "Hotel & Lodging",
        content:
          "Fine-tune room pricing.",
        icon: <Geo_UseCase_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        href: "/geo/usecases/hotel-lodging",
      },
      {
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Adjust package rates around peak visitor times.",
        href: "/geo/usecases/activity-planners",
      },
      {
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Update flight fares or add capacity.",
        href: "/geo/usecases/aviation-airport",
      },
      {
        topic: "Transportation ",
        icon: <Geo_UseCase_5 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Manage surge fares or deploy extra staff.",
        href: "/geo/usecases/transportation",
      },
      {
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          " Price premium ad space for upcoming event windows.",
        href: "/geo/usecases/ooh-marketing",
      },
      {
        topic: "Parking",
        icon: <Geo_UseCase_8 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Adjust fees for events with high car usage.",
        href: "/geo/usecases/parking",
      },
      {
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Set dynamic delivery charges.",
        href: "/geo/usecases/hyperlocal-quick-commerce",
      },
    ],
    metaData:{
      title:"Dynamic Pricing - whr.ai GEO",
      description:"Optimize your pricing strategy with whr.ai GEO's dynamic pricing solutions, powered by real-time event demand intelligence.",
      image:`${imageURL}/solution/DynamicPricing.png`,
    }
  },
  {
    id: "event-prospecting",
    image: EventProspecting,
    text: "Events Mean Business",
    subtext:
      "Events generate 1 trillion+ economic impact. Unlock potential business opportunities identifying events that meet your business objectives.",
    problem:
      "Finding and managing all events that can be interest is time consuming. Even if you were able to make a list of upcoming events, the opporutnity is lost unless you can forecast events that are likely to be hosted and meet your business criteria",
    solution:
      "Be able to an AI like assitant that can track your criteria and update you with list of events that are relevant for your business with enrichment, calendar view and contact details for the relevant event connect",
    how: "With a wide range of filters and scores, Eventeli makes it easy for any business to identify upcoming and forecasted events that would be relevant for their business. See it in a table or export the data to use it within your research environment. All data is check for duplciates, fake and verified by AI+human checks. Use the data in one single geography or around the world.",
    usecases: [
     
      {
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Target travelers near event venues.",
        href: "/geo/usecases/restaurants",
      },
      {
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Market experiences to inbound visitors.",
        href: "/geo/usecases/activity-planners",
      },
      {
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Billboards, bus stands near expected footfall hotspots.",
        href: "/geo/usecases/ooh-marketing",          
      },
      {
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Activate pop-ups or local promotions.",
        href: "/geo/usecases/retail-commerce",
      },
      {
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Acquire new customers from event audiences.",
        href: "/geo/usecases/hyperlocal-quick-commerce",
      },
      {
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Identify right time/place for brand marketing.",
        href: "/geo/usecases/enterprise",
      },
    ],
    metaData:{
      title:"Event Prospecting - whr.ai GEO",
      description:"Unlock business opportunities with whr.ai GEO's event prospecting. Identify and target events that align with your business objectives.",
      image:`${imageURL}/solution/EventProspecting.png`,
    }
  },
  {
    id: "geo-marketing",
    image: GeoMarketing,
    text: "Spot that is Hot",
    subtext:
      "Better target & time your onground ad campaign placements with forecasted demand intel around expected footfall in specific area, audience interests and timings. ",
    problem:
      "Out of home advertising like billboards, street hoardings, bus stand markting around event venues, popups and activations, tend to be decided without forecast into future expected footfall or audience demographics. ",
    solution:
      "For businesses that engage in advertising & marketing activities outdoor, insight on potential peak time and audience background can be a game changer. Having event intel can drive better ROI, location identifcation and improved strategy & planning. ",
    how: "Eventeli provides a single place to get all onground events that are coming, changing or critical for your business usecase. Our models enrich the data with additional score focused on expected footfall, inbound traffic, international audience. This can further be split by type of event and expected economic impact from it. This data can be consumer in our dashboard to foresee spikes, or compare between different promotion times being considered. You can also consume this data into an existing model, to further finetune your result. ",
    usecases: [
      {
        topic: "Restaurants",
        content:
          "Target travelers near event venues.",
        icon: <Geo_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        href: "/geo/usecases/restaurants",
      },
      {
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Market experiences to inbound visitors.",
        href: "/geo/usecases/activity-planners",
      },
      {
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Billboards, bus stands near expected footfall hotspots.",
        href: "/geo/usecases/ooh-marketing",
      },
      {
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          " Activate pop-ups or local promotions.",
        href: "/geo/usecases/retail-commerce",
      },
      {
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          " Acquire new customers from event audiences.",
        href: "/geo/usecases/hyperlocal-quick-commerce",
      },
      {
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Identify right time/place for brand marketing.",
        href: "/geo/usecases/enterprise",
      },
    ],
    metaData:{
      title:"Geo Marketing - whr.ai GEO",
      description:"Enhance your geo-marketing strategies with whr.ai GEO's event intelligence. Target the right audience at the right time and location.",
      image:`${imageURL}/solution/GeoMarketing.png`,
    }
  },

  {
    id: "inventory-planning",
    image: InventoryPlanning,
    text: "Ready with the Right Stock",
    subtext:
      "Being over or under stocked can jeoperdize a business. Effcient inventory management needs reliable demand predictor.",
    problem:
      "Getting inventory level just right is an art. How well its managed can be the difference between profit and loss for a business. Too much or too little can both lead to inefficiency. To get it right, a business needs  a magic balls that can look sufficiently far ahead in time and also, help idnetify what could impact the demand.",
    solution:
      "To solve the inventory problem, businesses impacted by onground event demand, need the intel sufficiently ahead of time to decide to reduce or increase supplies. They need to be able to filter out whats relevant for their business and how much impact it could have.",
    how: "Eventeli provides a single event data source for all events that are upcoming or forecasted, along with potential footfall, estimated economic impact and split between local vs. customers who are travelling. This data can be seen in a user friendy dashboard or consumed in the models being used by the businesses, which might take into consideration their own historicial data.  ",
    usecases: [
      {
        topic: "Hotel & Lodging",
        content:
          "Plan linens/toiletries around surge nights.",
        icon: <Geo_UseCase_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        href: "/geo/usecases/hotel-lodging",
      },
      {
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Purchase perishable goods matching footfall forecasts.",
        href: "/geo/usecases/restaurants",
      },
      {
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Move inventory to local hubs.",
        href: "/geo/usecases/hyperlocal-quick-commerce",
      },
      {
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Prepare enough supplies for passenger inflow.",
        href: "/geo/usecases/aviation-airport",          
      },
      {
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Order extra items for peak or hold back for lean phases.",
        href: "/geo/usecases/retail-commerce",
      },
    ],
    metaData:{
      title:"Inventory Planning - whr.ai GEO",
      description:"Ensure optimal inventory levels with whr.ai GEO's inventory planning solutions, driven by event-driven demand forecasting.",
      image:`${imageURL}/solution/Inventorymanagement.png`,
    }
  },
  {
    id: "risk-identification",
    image: RiskIdentification,
    text: "Turn Risk into Opportunity",
    subtext:
      "Prepare for unexpected risks in an area with forecasting around large gathering or other warnings",
    problem:
      "Onground occurance can lead to potential risk to local businesses directly and indirectly.",
    solution:
      "While some events cannot be forecasted or predicted, but significant amount of ongound activity from planned events to expected weather, can be consolidated and checked of impact in isolation or in conjunction with all other events. Using AI model and human overview, anomalies can be unearthered.",
    how: "We both consolidate and forecast all possible events, quantify them using our models, verify with human reviewing, pattern match where needed, to get a clear view on onground activity in advance. Next, our models identifies any unexpected change in demand pattern. Lastly, our human intervention tries to quantfy the root cause and what risk it entails for the local businesses.",
    usecases: [
      {
        topic: "Aviation & Airport",
        content:
          "Spike in inbound can be a security/capacity risk.",
        icon: <Geo_UseCase_4 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        href: "/geo/usecases/aviation-airport",
      },
      {
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Event disruptions or crowd surges can hamper normal traffic or cause traffic jams. ",
        href: "/geo/usecases/retail-commerce",
      },
      {
        topic: "Event Planners",
        icon: <Geo_UseCase_10 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Stay alert for competing or clashing events, plus environment disruptions.",
        href: "/geo/usecases/event-planners",
      },
      {
        topic: "Local Government",
        icon: <Geo_UseCase_13 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Manage security, traffic for multiple small events.",
        href: "/geo/usecases/local-government",
      },
      {
        topic: "Enterprise",
        icon: <Geo_UseCase_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Avoid travel risk for employees if a city is overcrowded or under strain.",
        href: "/geo/usecases/enterprise",
      },
    ],
    metaData:{
      title:"Risk Identification - whr.ai GEO",
      description:"Turn risks into opportunities with whr.ai GEO's risk identification solutions. Proactively manage event-driven risks for your business.",
      image:`${imageURL}/solution/RiskIdentification.png`,
    }
  },
  {
    id: "travel-advisory",
    image: TravelAdvisory,
    text: "Better Safe than Sorry",
    subtext:
      "Traveling for work is a norm and only expected to grow in the coming days. However, local circumstances are always changing, evolving and volatile. Connect the dots with a single window on what is planned or forecated for a specific geography.",
    problem:
      "Geting an ealy warning based on pattern or as soon as there is any signal triggered by onground event, requires tracking various signals and looking at it hollistically to ascertain if there is anything of concern",
    solution:
      "A single channel that identifies events of all form - social, business, sports, unplanned like weather & holidays, terror attacks to help to stay on top. Based on your company planned travel footprint, track various geopgraphies for specific travel dates in advance.",
    how: "Collating, cleaning and enriching events of all form, from a small social event to a large tradeshow, along with holidays, weather, unexpected events like terror attacks along with any other anomoly that would be could as an event, we try to bring forth a risk score that can sent out as a notification or a warning. Additionally, we can also, send an update if things look good and meets your internal mandate or requirement. ",
    usecases: [
      {
        topic: "Hotel & Lodging",
        content:
          "Pre-warn guests of citywide gatherings.",
        icon: <Geo_UseCase_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        href: "/geo/usecases/hotel-lodging",
      },
      {
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Provide flight/traffic advisories",
        href: "/geo/usecases/aviation-airport",
      },
      {
        topic: "Event Planners",
        icon: <Geo_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Alert delegates to disruptions or schedule shifts.",
        href: "/geo/usecases/event-planners",
      },
      {
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Keep traveling staff informed to avoid high-risk areas.",
        href: "/geo/usecases/enterprise",
      },
    ],
    metaData:{
      title:"Travel Advisory - whr.ai GEO",
      description:"Stay safe and informed with whr.ai GEO's travel advisory solutions, powered by real-time event intelligence and risk assessment.",
      image:`${imageURL}/solution/Traveladvisory.png`,
    }
  },
  {
    id: "workforce-management",
    image: WorkforceManagement,
    text: "Manage Workforce Availability & Utilization",
    subtext:
      "Workforce cannot change ad-hoc. Better strategies your workforce availbility with future demand data around events onground.",
    problem:
      "Labor cost is a major expense and cannot be increased or decreased without enough planning time. Workforce needs training and scheduling months in advance. So if there are spikes & lean period, workforce is either over-burdened or under utlized.",
    solution:
      "A single channel that aggregates, structures, qualifies onground event data. It should remove noise and bring out whats relevant. Solution needs to be smart enough to ingest parameters important for a business to tag forecasted events and audience that would be considered target audience.",
    how: "Eventeli's single source of truth for events that impact businesses, can help identify volatity in demand basis the nature of a business and its audience filtering. This can be visualized for operational managers to take a call or used by companies in their internal data modeling.",
    usecases: [
      {
        topic: "Hotel & Lodging",
        content:
          "Staff up for big events.",
        icon: <Geo_UseCase_1 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        href: "/geo/usecases/hotel-lodging",
      },
      {
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Align servers/chefs with forecasted crowds.",
        href: "/geo/usecases/restaurants",
      },
      {
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Have enough guides/instructors.",
        href: "/geo/usecases/activity-planners",
      },
      {
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Staff security/customs for spikes.",
        href: "/geo/usecases/aviation-airport",
      },
      {
        topic: "Transportation ",
        icon: <Geo_UseCase_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Bring in more drivers or vehicles.",
        href: "/geo/usecases/transportation",
      },
      {
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Schedule more floor staff.",
        href: "/geo/usecases/retail-commerce",
      },
      {
        topic: "Parking",
        icon: <Geo_UseCase_8 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Hire extra valet attendants.",
        href: "/geo/usecases/parking",
      },
      {
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Shift couriers to hot zones",
        href: "/geo/usecases/hyperlocal-quick-commerce",
      },
      {
        topic: "Local Government",
        icon: <Geo_UseCase_13 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Deploy more police or sanitation.",
        href: "/geo/usecases/local-government",
      },
    
    ],
    metaData:{
      title:"Workforce Management - whr.ai GEO",
      description:"Manage workforce availability and utilization effectively with whr.ai GEO's demand forecasting and event intelligence.",
      image:`${imageURL}/solution/WorkforceManagement.png`,
    }
  },
];
