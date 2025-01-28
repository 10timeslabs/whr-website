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

import {
  Geo_Soln_1,
  Geo_Soln_2,
  Geo_Soln_3,
  Geo_Soln_4,
  Geo_Soln_5,
  Geo_Soln_6,
  Geo_Soln_7,
  Geo_Soln_8,
  Geo_UseCase_1,
  Geo_UseCase_2,
  Geo_UseCase_3,
  Geo_UseCase_4,
  Geo_UseCase_5,
  Geo_UseCase_6,
  Geo_UseCase_7,
  Geo_UseCase_8,
} from "../svgicons/icons";
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Activity Planner",
        content:
          "Location specific activity & experience providers, catering to incoming tourists can leverage demand intelligence around inbound event traffic. Our forecasted data can help drive optimize onground marketing, collaboration, offer designing and workforce management. Better forecasting can improve revenue and profitability.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Inbound traffic into a city tends to do more than just attend the event. Both business and casual visitors are ripe audience for promoting local activities and experiences. Activity and experience providers can use the forecasted event intel to leverage geo-focused marketing and activations to reach the right audience at the right time. ",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "In a world where the line between business and entertainment is quickly getting blurred, activities outside the event are becoming an important part of the event itself. With activities providers fighting for market share, collaborating with event planners to become part of their event schedule can be a game changer. From pre-event to post-event official activity, it opens opportunities for visitors to extend their stays in the city and include activity in their itinerary. To achieve this, Eventeli provides activity planners a way to identify events that have the audience focus in a timely manner. ",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "In a world where the line between business and entertainment is quickly getting blurred, activities outside the event are becoming an important part of the event itself. With activities providers fighting for market share, collaborating with event planners to become part of their event schedule can be a game changer. From pre-event to post-event official activity, it opens opportunities for visitors to extend their stays in the city and include activity in their itinerary. To achieve this, Eventeli provides activity planners a way to identify events that have the audience focus in a timely manner. .",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Most destination specific activities are not designed for local audience. If its catering to inbound tourists and travelers, the highly unpredictable demand comes from events. Being able to foresee and model for future demand, activity planners can strategically align their pricing strategy. They can give early bird offers or hold the inventory if the expected demand around specific dates are higher. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
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
    usecases: [
      {
        id: "hotel&lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Access a calendar of high-inbound events within specified coordinates to connect with event planners or craft targeted marketing strategies.",
        icon: <Geo_Soln_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <Geo_Soln_5 color="#6750a4" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: <Geo_Soln_6 color="#6750a4" width="62" height="62" />,
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <Geo_Soln_7 color="#6750a4" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
      {
        id: "traveladvisory",
        topic: "Travel Advisory",
        icon: <Geo_Soln_8 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      },
    ],
  },
];
