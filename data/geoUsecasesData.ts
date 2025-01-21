import Hotelandlodging from "/public/geo_usecases_banners/geo_usecase_hotel&lodging_cropped.png";
import Restaurant from "/public/geo_usecases_banners/geo_usecase_restaurants.jpg";
import ActivityPlanners from "/public/geo_usecases_banners/geo_usecase_activityplanner.jpg";
import Aviation from "/public/geo_usecases_banners/geo_usecase_aviation&airport.jpg";
import Transportation from "/public/geo_usecases_banners/geo_usecase_transportation.jpg";
import OOHMarketing from "/public/geo_usecases_banners/geo_usecase_OOH marketing.jpg";
import RetailCommerce from "/public/geo_usecases_banners/geo_usecase_retail commerce.jpg";
import Parking from "/public/geo_usecases_banners/geo_usecase_parking.jpg";
import DemoDMC from "/public/geo_usecases_banners/geo_usecase_dmo dmc.jpg";
import VenueOperator from "/public/geo_usecases_banners/geo_usecases_venue operator.jpg";
import QuickCommerce from "/public/geo_usecases_banners/geo_usecase_quick commerce.jpg";
import LocalGovernment from "/public/geo_usecases_banners/geo_usecase_local government.jpg";
import ManPower from "/public/geo_usecases_banners/geo_usecase_manpower.jpg";
import EventPlanner from "/public/geo_usecases_banners/geo_useacase_eventplanner.jpg";

import CorporateAndBrand from "/public/geo_usecases_banners/geo_usecase_corporate & brands .jpg";

export const geoUsecasesjsonData = [
  {
    id: "hotel&lodging",
    image: Hotelandlodging,
    text: "Higher Occupancy, Lower Surprises",
    // blurColor: "#E3B785",
    // blurColor: "linear-gradient(to bottom, #ffffff, #E3B785)",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(227, 183, 133, 0.5) 53%)",
    opacity: "20%",
    subtext:
      "You can't plan for what you can't foresee. Identifying causes for sudden increases and decreases in bookings is critical to taking action. With events being the most volatile factor, having a reliable event forecast helps with better pricing, inventory management, and staffing.",
    problem:
      "Events are constantly changing with new launches, dates, formats and location. Historical data has been proven to be unreliable, specially with manual searching and excel sheets. While the impact is evident, its only valuable if the data can be accessed well in advance and in a comprehensive manner.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for hotels & other accomodation providers.",
  },
  {
    id: "restaurants",
    image: Restaurant,
    text: "Serve More Tables",
    // blurColor: "linear-gradient(to bottom, #8DDF0340, #E4D7BE20)",
    blurColor:
      "linear-gradient(180deg, rgba(141, 223, 3, 0.2) 10%, rgba(228, 215, 190, 0.5) 53%)",
    opacity: "20%",
    subtext:
      "Besides rent, almost all of a restaurant recurring cost requires better planning & demand forecasting. Access onground event demand intel to better forecast potential demand, need for staffing and inventory requirement, and imporve operational efficiency.",
    problem:
      "Most restuarants in the vicinity of event venues have seen unexpected increase in footfall on some days and later found out that there was an event happening. But what if there was not one big events, but a bunch of small events?",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for reataurants and QSR.",
  },
  {
    id: "activityplanners",
    image: ActivityPlanners,
    // blurColor: "#C2BDC1",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(194, 189, 193, 0.5) 53%)",
    opacity: "50%",
    text: "Activate Onground Demand ",
    subtext:
      "Unlock forecasted inbound tourist or business professionals traffic for event or design your activity in-line with the theme of upcoming events to increase bookings and better manage workforce.",
    problem:
      "Events form a big chunk of Incoming tourists for a large number of cities around the world. While this audience is prime target for activity planners, there is little insight or bandwidth to track, analyze and plan for potential impact of events or designing activities linked to large events.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for activity planners.",
  },
  {
    id: "aviation&airport",
    image: Aviation,
    // blurColor: "#D6DDF3",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(214, 221, 243, 0.5) 53%)",
    opacity: "60%",
    text: "Fly with Events",
    subtext:
      "Events are major reason for flying, cause sharp demand increase. Dont just notice the sharp spike or decline. Leverage the demand by unlocking forecasted trends around events. Plan better to monetize and give a better flyer experience.",
    problem:
      "Events of all types, from forecasted weather, planned holidays to scheduled events, drive people to travel around the world. Identifying and leveraging factors that make the historcial pattern redundant, is hard, time consuming and filled with unpredictability. ",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for airlines and airports.",
  },

  {
    id: "enterprise",
    image: CorporateAndBrand,
    // blurColor: "#BBCDDA",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(187, 205, 218, 0.5) 53%)",
    opacity: "100%",
    text: "Event is Everyones’ Business",
    subtext:
      "Travel Advisory for risk management teams. Companies need to know track any risks involved when their employees are traveling.",
    problem:
      "Not accounting for all business travel, business events alone drives over 500 million professionals to travel for events.For large enterprise, whose workforce is constantly moving to participate in events, its a big challenege to optimize where, why and when people are going for events, to manage risk and/or optimize return.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares) across different zones and pincodes to enable large companies to monitor potential opportunity or risk. ",
  },
  {
    id: "transportation",
    image: Transportation,
    // blurColor: "#B3E0F1",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(179, 224, 241, 0.5) 53%)",
    opacity: "50%",
    text: "Events Move People",
    subtext:
      "Not just people visiting a city for event, but also local event-goers increasingly depend on local transportation to reach their venue. With growing dependence on shared mobility, transportation industry need data for better planning.",
    problem:
      "As events grows so does the need to commute. However, unlike regular daily commuters, rides for events are volatile and negatively impacts the available supply, unless spike in demand is taken into consideration",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for transportation providers.",
  },
  {
    id: "oohmarketing",
    image: OOHMarketing,
    // blurColor: "#BBBBB2",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(230, 218, 206, 0.5) 53%)",
    opacity: "100%",
    text: "Monetize the Eyeballs",
    subtext:
      "Unlock premium out of home advertising inventory to target intent driven audience. Targeted, time sensitive and high value ad space to push curated brand messaging around defined event audience.",
    problem:
      "While venues for event are known, evaluating the value of the inventory in relation to the forecated event audience and interested advertisers requires lead-time for creating a vibrant ad marketplace.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes upto 12 months in future. Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for ad space sellers and buyers",
  },
  {
    id: "retailcommerce",
    image: RetailCommerce,
    // blurColor: "#E6DACE",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(230, 218, 206, 0.5) 53%)",
    opacity: "100%",
    text: "Real World, Real Commerce",
    subtext:
      "Events are an integral part of all bustling cities and any commerce in its periphery is impacted by footfall it brings or disrupts. From managing inventory to workforce, a reliable event forecast can help improve the retail commerce revenue.",
    problem:
      "Both attended and not attended events impacts retail commerce and not knowing whats coming and could impact the business leaves room for ambiguity and chance for loss of potential business",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for retail commerce business",
  },
  {
    id: "parking",
    image: Parking,
    // blurColor: "#D7E8EA",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(215, 232, 234, 0.5) 53%)",
    opacity: "100%",
    text: "Lots for Parking",
    subtext:
      "Better spots and fair pricing is essential to run a succesful parking business. Drive revenue growth with onground event demand intel",
    problem:
      "Demand from event is not consistent and can vary with high volatility. To build any reliable business model around onground demand requires not just a reliable access to future demand, but also an estimate for what percent of the audience would be local and could be traveling in persoinal vehicle to the venue.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares). Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for parking business.",
  },
  {
    id: "DMO&DMC",
    image: DemoDMC,
    // blurColor: "#BFA78D",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(191, 167, 141, 0.5) 53%)",
    opacity: "50%",
    text: "Destinations Drivers",
    subtext:
      "DMOs primarily assist in showing planners all their locale has to offer, DMCs are often more involved in helping planners manage all destination-related elements of their events",
    problem:
      "Destination Marketing Organisation (DMO) and Destination Management Company are aligned to drive more visitors to a destination. To be able to offer smooth service to their client they need to able to track whats forecated for their destination and past trends. This can be a very tedious task and often filled with leaks and gaps in the data, but not having this data is like shooting in the dark",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares) in a specfic destination or competing destinations. Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for DMOs and DMCs",
  },
  {
    id: "venueoperators",
    image: VenueOperator,
    // blurColor: "#C3BFBE",
    // blurColor: "linear-gradient(to bottom, #ffffff, #C3BFBE)",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(195, 191, 190, 0.5) 53%)",
    opacity: "100%",
    text: "Transform Your Venue with Data-Driven Insights",
    subtext:
      "Venues form the backbone of onground attended events. Having data intel can help improve planning, operation streamling and unlock new stratgic opportunities for growth.",
    problem:
      "Venues do not operate in isolation. They are impacted by everything else going on in the city, nearby venues and those in competing geographies. From large events to political unrest to forecasted weather warning, being able to foresee potential disruptions and opportunities can make venues more resilient, serve their customers better and improve profit margins.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares) across geographies. Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for venue operators to take informed decision.",
  },
  {
    id: "hyperlocal&quickcommerce",
    image: QuickCommerce,
    // blurColor: "#D6D3D2",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(214, 211, 210, .5) 53%)",
    opacity: "100%",
    text: "Let Quick Commerce Stay Quick",
    subtext:
      "Hyperlocal commerce depends on prediction of demand to provide fast local delivery. To improve efficiency, unlock onground events that make existing demand move and brings in unexpected external demand. ",
    problem:
      "Hyperlocal commerce business hinges on predictability. Onground events that could have high impact individually or together, breakdown the business promise of speed and also causes losses due to inventory stock-out and unplanned workforce management.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares) across different zones and pincodes. Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for hyperlocal & quick commerce business.",
  },
  {
    id: "localgovernment",
    image: LocalGovernment,
    // blurColor: "#FFFFF",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.5) 53%)",
    opacity: "10%",
    text: "Local Security and Convenience ",
    subtext:
      "To minimize security risks, inconvenience and improve experience for both local citizens and visitors, the local city governing body need to plan in advance. Having access to ongrorund event forecasting & impact, enables the officials/ representative to take proactive measures to minimize risk & manage crowds",
    problem:
      "A lot is always happening and planned in a city, both good and bad. For local authorities to find, verify and manage all these forecasted events and access how it might impact day to day over a long duration is extremely challenging. This makes most local governing bodies more reactive than taking proactive measures to address predicted demand.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares) across different zones and pincodes. Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for local governing bodies. ",
  },
  {
    id: "manpoweragency",
    image: ManPower,
    // blurColor: "#D9DEE9",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(217, 222, 233, 0.5) 53%)",
    opacity: "50%",
    text: "Events Create Jobs",
    subtext:
      "Events bring together people, but it also creates million of direct jobs across different expertise. From booth hosts, conference moderators to caterers, designers, security personel, the list goes on and on",
    problem: "",
    solution: "",
  },

  {
    id: "eventplanners",
    image: EventPlanner,
    // blurColor: "#D9DEE9",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(217, 222, 233, 0.5) 53%)",
    opacity: "50%",
    text: "Event Planning Made Intelligent",
    subtext:
      "Events bring together people, but it also creates million of direct jobs across different expertise. From booth hosts, conference moderators to caterers, designers, security personel, the list goes on and on",
    problem:
      "Event dates are decided on average 6 months in advance. While expereinced planners might have some data from their previous years, mostly decisions are made with limited insight on what could be happening during, before and post the event date at a specific location. With limited intel, identifying suitable destination, venue, dates is more of a 'shoot in the dark' mission than a clearly planned strategy",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast (for both attended and non-attended events like weather and health scares) across destination and venues of interest. Addiitonally, it should consolidate the aggregate impact, filter whats relevant and visualizes expected spikes to make it actionable for event planners to decide more confidently and also track future changes until event date.",
  },
];
