import React from "react";
import DemandForeCasting from "/public/geo_soln_illustrations/demand forecasting.svg";
import DynamicPricing from "/public/geo_soln_illustrations/Dynamic Pricing.svg";
import EventProspecting from "/public/geo_soln_illustrations/Event Prospecting.svg";
import GeoMarketing from "/public/geo_soln_illustrations/Geo Marketing.svg";
import InventoryPlanning from "/public/geo_soln_illustrations/Inventory Planning..svg";
import RiskIdentification from "/public/geo_soln_illustrations/Risk Identification.svg";
import TravelAdvisory from "/public/geo_soln_illustrations/Travel Advisory.svg";
import WorkforceManagement from "/public/geo_soln_illustrations/Workforce Management.svg";

export const geoSolutionsjsonData = [
  {
    id: "demand_forecasting",
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
  },
  {
    id: "dynamic_pricing",
    image: DynamicPricing,
    text: "Less Surprise, Better Price",
    subtext:
      "Improve pricing strategy with forecasted data around events and its impact.",
    problem: "Demand is volatile. Knowledge about change is time sensitive",
    solution:
      "AI enabled demand forecasting can help price change in tandem. Staying ahead of the market forces is critical to optimaily price inventory to ensure maximum return. If future demand is low and its not factored into the pricing, it can lead to lower sales and vic-e-versa.",
    how: "With a single source of truth for events that are coming, adjusted for what is changing and accounting for whats critical for the businesses, can provide a significant edge in efficient pricing. Know in advance about forecasted demand basis relevent audience, to improve your internal model or to make manual interventions in price setting. ",
  },
  {
    id: "event_prospecting",
    image: EventProspecting,
    text: "Events Mean Business",
    subtext:
      "Events generate 1 trillion+ economic impact. Unlock potential business opportunities identifying events that meet your business objectives.",
    problem:
      "Finding and managing all events that can be interest is time consuming. Even if you were able to make a list of upcoming events, the opporutnity is lost unless you can forecast events that are likely to be hosted and meet your business criteria",
    solution:
      "Be able to an AI like assitant that can track your criteria and update you with list of events that are relevant for your business with enrichment, calendar view and contact details for the relevant event connect",
    how: "With a wide range of filters and scores, Eventeli makes it easy for any business to identify upcoming and forecasted events that would be relevant for their business. See it in a table or export the data to use it within your research environment. All data is check for duplciates, fake and verified by AI+human checks. Use the data in one single geography or around the world.",
  },
  {
    id: "geo_marketing",
    image: GeoMarketing,
    text: "Spot that is Hot",
    subtext:
      "Better target & time your onground ad campaign placements with forecasted demand intel around expected footfall in specific area, audience interests and timings. ",
    problem:
      "Out of home advertising like billboards, street hoardings, bus stand markting around event venues, popups and activations, tend to be decided without forecast into future expected footfall or audience demographics. ",
    solution:
      "For businesses that engage in advertising & marketing activities outdoor, insight on potential peak time and audience background can be a game changer. Having event intel can drive better ROI, location identifcation and improved strategy & planning. ",
    how: "Eventeli provides a single place to get all onground events that are coming, changing or critical for your business usecase. Our models enrich the data with additional score focused on expected footfall, inbound traffic, international audience. This can further be split by type of event and expected economic impact from it. This data can be consumer in our dashboard to foresee spikes, or compare between different promotion times being considered. You can also consume this data into an existing model, to further finetune your result. ",
  },

  {
    id: "inventory_planning",
    image: InventoryPlanning,
    text: "Ready with the Right Stock",
    subtext:
      "Being over or under stocked can jeoperdize a business. Effcient inventory management needs reliable demand predictor.",
    problem:
      "Getting inventory level just right is an art. How well its managed can be the difference between profit and loss for a business. Too much or too little can both lead to inefficiency. To get it right, a business needs  a magic balls that can look sufficiently far ahead in time and also, help idnetify what could impact the demand.",
    solution:
      "To solve the inventory problem, businesses impacted by onground event demand, need the intel sufficiently ahead of time to decide to reduce or increase supplies. They need to be able to filter out whats relevant for their business and how much impact it could have.",
    how: "Eventeli provides a single event data source for all events that are upcoming or forecasted, along with potential footfall, estimated economic impact and split between local vs. customers who are travelling. This data can be seen in a user friendy dashboard or consumed in the models being used by the businesses, which might take into consideration their own historicial data.  ",
  },
  {
    id: "risk_identification",
    image: RiskIdentification,
    text: "Turn Risk into Opportunity",
    subtext:
      "Prepare for unexpected risks in an area with forecasting around large gathering or other warnings",
    problem:
      "Onground occurance can lead to potential risk to local businesses directly and indirectly.",
    solution:
      "While some events cannot be forecasted or predicted, but significant amount of ongound activity from planned events to expected weather, can be consolidated and checked of impact in isolation or in conjunction with all other events. Using AI model and human overview, anomalies can be unearthered.",
    how: "We both consolidate and forecast all possible events, quantify them using our models, verify with human reviewing, pattern match where needed, to get a clear view on onground activity in advance. Next, our models identifies any unexpected change in demand pattern. Lastly, our human intervention tries to quantfy the root cause and what risk it entails for the local businesses.",
  },
  {
    id: "travel_advisory",
    image: TravelAdvisory,
    text: "Better Safe than Sorry",
    subtext:
      "Traveling for work is a norm and only expected to grow in the coming days. However, local circumstances are always changing, evolving and volatile. Connect the dots with a single window on what is planned or forecated for a specific geography.",
    problem:
      "Geting an ealy warning based on pattern or as soon as there is any signal triggered by onground event, requires tracking various signals and looking at it hollistically to ascertain if there is anything of concern",
    solution:
      "A single channel that identifies events of all form - social, business, sports, unplanned like weather & holidays, terror attacks to help to stay on top. Based on your company planned travel footprint, track various geopgraphies for specific travel dates in advance.",
    how: "Collating, cleaning and enriching events of all form, from a small social event to a large tradeshow, along with holidays, weather, unexpected events like terror attacks along with any other anomoly that would be could as an event, we try to bring forth a risk score that can sent out as a notification or a warning. Additionally, we can also, send an update if things look good and meets your internal mandate or requirement. ",
  },
  {
    id: "workforce_management",
    image: WorkforceManagement,
    text: "Manage Workforce Availability & Utilization",
    subtext:
      "Workforce cannot change ad-hoc. Better strategies your workforce availbility with future demand data around events onground.",
    problem:
      "Labor cost is a major expense and cannot be increased or decreased without enough planning time. Workforce needs training and scheduling months in advance. So if there are spikes & lean period, workforce is either over-burdened or under utlized.",
    solution:
      "A single channel that aggregates, structures, qualifies onground event data. It should remove noise and bring out whats relevant. Solution needs to be smart enough to ingest parameters important for a business to tag forecasted events and audience that would be considered target audience.",
    how: "Eventeli's single source of truth for events that impact businesses, can help identify volatity in demand basis the nature of a business and its audience filtering. This can be visualized for operational managers to take a call or used by companies in their internal data modeling.",
  },
];
