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
  },
];
