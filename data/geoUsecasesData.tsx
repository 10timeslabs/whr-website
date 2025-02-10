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
const imageURL = "https://c1.10times.com/whr/geo/static/image/usecases"
export const geoUsecasesjsonData = [
  {
    id: "hotel-lodging",
    image:
      `${imageURL}/geo_usecase_hotel&lodging_cropped.png`,
    imageAltText: "Sunset over the ocean with a sail-shaped skyscraper reflecting golden light, evoking a serene atmosphere.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Pinpoint relevant events up to a year ahead, helping you anticipate demand and plan inventory."]
        },
        {
          heading: "Smart Scores",
          points: [" Measure event impact using metrics like Inbound Score to refine pricing strategies and optimize staff allocation."]
        },
        {
          heading: "Custom Trackers",
          points: ["Monitor competitor catchment areas or your own properties for event-driven changes and get notified in real time."
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Visualize how events affect bookings over specific timeframes or geographies, aiding strategic planning."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Receive proactive updates on upcoming events that could influence occupancy, reducing guesswork."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "demand_forecasting",
        topic: "Demand Forecasting",
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "event_prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "dyanamic_pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand. ",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "workforce_management",
        topic: "Workforce Managemant",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
        href: "/geo/solutions/workforce-management",
      },
      {
        id: "inventory_planning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
        href: "/geo/solutions/inventory-planning",
      },
      {
        id: "strategic_planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_8 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Besides unlocking value for sales, marketing & operation team, event intel is highly critical to be factored in by teams working on expansion or acquisition strategy. Use onground demand intel to identify geographies with higher demand than supply or a growing demand. Identify strategic locations closer to hubs for gathering or venues, that would give your hotel an edge. ",
          href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Hotel & Lodging Usecase - whr.ai GEO",
      description:
        "Optimize hotel pricing and revenue by forecasting inbound event-driven demand with whr.ai's demand forecasting.",
      image:
        `${imageURL}/geo_usecase_hotel&lodging_cropped.png`,
    },
  },
  {
    id: "restaurants",
    image:
      `${imageURL}/geo_usecase_restaurants.jpg`,
    imageAltText: "Outdoor café with wooden tables, chairs, and lush potted plants, creating a warm, inviting, and peaceful vibe.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Discover both major and minor events that could suddenly boost foot traffic, allowing you to prepare."]
        },
        {
          heading: "Smart Scores",
          points: ["Gauge economic impact to forecast staffing needs and manage inventory effectively."]
        },
        {
          heading: "Custom Trackers",
          points: ["Keep tab on event-prone areas or competitor locales, ensuring you don’t miss sudden spikes."
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Track patterns of increased footfall over time to fine-tune resource allocation."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Get automated alerts on new or changing events, so you’re never caught off guard."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "demand_forecasting",
        topic: "Demand Forecasting",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "geo_marketing",
        topic: "Geo Marketing",

        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
        href: "/geo/solutions/geo-marketing",
      },
      {
        id: "event_prospecting",
        topic: "Event Prospecting",
        // icon: <Geo_Soln_3 color="#6750a4" width="62" height="62" />,
        // icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "workforce_management",
        topic: "Workforce Management",
        // icon: <Geo_Soln_4 color="#6750a4" width="62" height="62" />,
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
          href: "/geo/solutions/workforce-management",
      },
      {
        id: "inventory_planning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Unlike a hotel, where the inventory can be a lot more non-perishable, a food joint business is highly suseptable to change in demand that isnt taken into consideration. With signals around volatity in demand, that would not be considered medium or normal expected level, can help flag potential scenario of inventory glut or over supply. Using the demand intel in the internal models, restaurants can take preventive measures that can minimize loss linked to inventory.  ",
        href: "/geo/solutions/inventory-planning",
      },
      {
        id: "strategic_planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Restaurant business requires constant flow of footfall and getting located near by growing event hotspots is a jackpot. Strategy team and consultants helping a restaurant identify new location to grow, can leverage event data trend and geo mapping to narrow down on great locations for expansion",
          href: "/geo/solutions/inventory-planning",
      },
      // {
      //   id: "traveladvisory",
      //   topic: "Travel Advisory",
      //   icon: (
      //     <Geo_Soln_8 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
      //   ),
      //   content:
      //     "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      // },
    ],
    metaData: {
      title: "Restaurants Usecase - whr.ai GEO",
      description:
        "Plan workforce and inventory effectively by forecasting event-driven demand in the restaurant industry with whr.ai.",
      image:
        `${imageURL}/geo_usecase_restaurants.jpg`,
    },
  },
  {
    id: "activity-planners",
    image:
      `${imageURL}/geo_usecase_activityplanner.jpg`,
    imageAltText: "A silver pen on an open planner with dated pages, beside a blurred smartphone and mug, conveying productivity.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Identify tourist-heavy events months in advance to schedule activities and promotions."]
        },
        {
          heading: "Smart Scores",
          points: ["Understand inbound vs. local attendance to tailor marketing and offerings."]
        },
        {
          heading: "Custom Trackers",
          points: ["Keep a close watch on events central to your target destinations or themes."
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Analyze how specific events drive tourist volumes over time, guiding better itinerary planning."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Get quick recommendations on which events to prioritize for maximum engagement and revenue."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "demand_forecasting",
        topic: "Demand Forecasting",
        content:
          "Location specific activity & experience providers, catering to incoming tourists can leverage demand intelligence around inbound event traffic. Our forecasted data can help drive optimize onground marketing, collaboration, offer designing and workforce management. Better forecasting can improve revenue and profitability.",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "geo_marketing",
        topic: "Geo Marketing",
        // icon: <Geo_Soln_2 color="#6750a4" width="62" height="62" />,
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Inbound traffic into a city tends to do more than just attend the event. Both business and casual visitors are ripe audience for promoting local activities and experiences. Activity and experience providers can use the forecasted event intel to leverage geo-focused marketing and activations to reach the right audience at the right time. ",
        href: "/geo/solutions/geo-marketing",
      },
      {
        id: "event_prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "In a world where the line between business and entertainment is quickly getting blurred, activities outside the event are becoming an important part of the event itself. With activities providers fighting for market share, collaborating with event planners to become part of their event schedule can be a game changer. From pre-event to post-event official activity, it opens opportunities for visitors to extend their stays in the city and include activity in their itinerary. To achieve this, Eventeli provides activity planners a way to identify events that have the audience focus in a timely manner. ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "dynamic_pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Most destination specific activities are not designed for local audience. If its catering to inbound tourists and travelers, the highly unpredictable demand comes from events. Being able to foresee and model for future demand, activity planners can strategically align their pricing strategy. They can give early bird offers or hold the inventory if the expected demand around specific dates are higher. ",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "workforce_management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
        href: "/geo/solutions/workforce-management",
      },
      // {
      //   id: "inventory_planning",
      //   topic: "Inventory Planning",
      //   icon: (
      //     <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
      //   ),
      //   content:
      //     "Unlike a hotel, where the inventory can be a lot more non-perishable, a food joint business is highly suseptable to change in demand that isnt taken into consideration. With signals around volatity in demand, that would not be considered medium or normal expected level, can help flag potential scenario of inventory glut or over supply. Using the demand intel in the internal models, restaurants can take preventive measures that can minimize loss linked to inventory.  ",
      // },
      {
        id: "strategic_planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Restaurant business requires constant flow of footfall and getting located near by growing event hotspots is a jackpot. Strategy team and consultants helping a restaurant identify new location to grow, can leverage event data trend and geo mapping to narrow down on great locations for expansion",
          href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Activity Planners Usecase - whr.ai GEO",
      description:
        "Enhance revenue and profitability for activity planners by leveraging forecasted demand intelligence from whr.ai.",
      image:
        `${imageURL}/geo_usecase_activityplanner.jpg`,
    },
  },
  {
    id: "aviation-airport",
    image:
      `${imageURL}/geo_usecase_aviation&airport.jpg`,
    imageAltText: "A red and white Air Berlin airplane ascends against fluffy, dramatic clouds, symbolizing freedom and travel.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Spot upcoming holidays, large gatherings, and weather-related events that could impact flight demand."]
        },
        {
          heading: "Smart Scores",
          points: ["Evaluate inbound passenger flows or potential volatility for better route planning and resource allocation."]
        },
        {
          heading: "Custom Trackers",
          points: ["Monitor critical travel corridors or competitor airports for sudden event-driven changes."
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Identify time-based passenger volume shifts to optimize staffing and scheduling."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Receive instant notifications about new events or changes in travel trends, enabling proactive operations."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "demand_forecasting",
        topic: "Demand Forecasting",
        content:
          "Events are major factor for volatility in travelers from outside the city. Knowing trends and predictions based upcoming & forecasted events, can help airlines and airports to better manage spikes in passengers. From price optimization to manpower management, use the data API with priprietory scores to take informed decisions or run better data models.  ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "risk_identification",
        topic: "Risk Identification",
        icon: (
          <Geo_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Major spike in inbound traffic into a city can lead to a security nightmare for airport management. It can compromise security and lead to the airport being under-staffed. Being informed about expetec spikes can help with risk mitigation.",
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "event_prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Airports & Airlines are a major channel for out of home advertising. With prime real-estate at the airport or in business class flight, with millions of events happening every year, it becomes a lucrative market to sell ad space for the aviation industry. Identify what events have a large foot print, meets your geographical scope, traveler routes, in order to reach out to them for paid marketing and/or collaborations. ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "dynamic_pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Destination specific demand linked to events can make pricing model for airlines more resilient. It can fill the missing holes in the season demand based modeling which relies on historical patterns, with a forecasted demand. Eventually you get a model which better maps demand with pricing and prevent under pricing or selling out inventory in advance due to lack of knowledge around upcoming events in a city. ",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "workforce_management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "No one likes to be at an airport and have to stand in long line for security checks or deal with dirty restrooms. If multiple events happen to happening in a single city at the same time, driving high inbound traffic, it can lead to an unexpected stress on airport manpower. This can be avoided with demand intel for forecasted and upcoming events. ",
        href: "/geo/solutions/workforce-management",
      },
      {
        id: "strategic_planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "If a billion people are forecasted to travel for events every year, strategy team and investors in the aviation space need data intel for which new destinations they should be flying to or building airports for. To decide they need past and future trends on events and how much inbound traffic they bring in and possible from which geographies. Unlock event intel to mix with other data intel to make your strategy more sound.",
          href: "/geo/solutions/inventory-planning",
        // href: "/geo/solutions/demand-forecasting",
      },
    ],
    metaData: {
      title: "Aviation & Airport Usecase - whr.ai GEO",
      description:
        "Manage passenger spikes and optimize airport operations with event-driven demand forecasting from whr.ai.",
      image:
        `${imageURL}/geo_usecase_aviation&airport.jpg`,
    },
  },
  {
    id: "enterprise",
    image:
      `${imageURL}/geo_usecase_corporate&brands.jpg`,
    imageAltText: "Skyline of modern skyscrapers under a clear blue sky, featuring diverse architecture and palm trees for greenery.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Spot major conferences, trade shows, or industry gatherings early, aligning travel and budget plans."]
        },
        {
          heading: "Smart Scores",
          points: ["Gauge event impact and volatility, aiding in risk management and ROI optimization."]
        },
        {
          heading: "Custom Trackers",
          points: ["Follow relevant locations and link with geographies where you team is traveling to access risk."
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Pinpoint peak travel periods or anything that could cause an issue around popular location your team travel to."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Link your company travel itinerary to automatically receive alerts any forecasted volatility in specific geo."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "risk_identification",
        topic: "Risk Identification",
        content:
          "Business travel is bigger than casual traveling. Large companies have their employees flying in and around cities & coutries all the time. Have a central dashboard to monitor any risk zone can help prevent or take precautions against anyone negative scenario that could have been avoided. Some examples of these risks are: avoiding travel & meeting around time and area with major spikes in onground activity to early detection of health, weather and terrorist warning. Our onground risk identifiction model can prevent avoidable risks associated with corporate travel. ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "geo_marketing",
        topic: "Geo Marketing",
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Events are labelled for type and category, besdies projected scored around footfall and economic impact. Enterprise can use this audience filtering at scale to identify strategic time and geo-location to leverage onground marketing and activation activities. For example, an auto expo would be an opportunity for car manufacturers to build brand visibility with a very targeted audience outside of the event ",
        href: "/geo/solutions/geo-marketing",
      },
      {
        id: "event_prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Event sponsoring is a major marketing channel for both small and large enterprise to reach target audience. Eventeli helps to indentify events which are forecated or upcoming and might be a good fit for an enterprise to sponsor. Create custom trackers and our AI agent will find and notify you to relevant event that match your criteria.  ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "workforce_management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Large companies have major event footprint. Employees across department and seniority levels are constantly attending events. If company human resource manegement has visibility on workforce event participation, it could ensure better planning, compliance requirements, etc.arising from such engagements. ",
        href: "/geo/solutions/workforce-management",
      },
    ],
    metaData: {
      title: "Enterprise Usecase - whr.ai GEO",
      description:
        "Integrate event intelligence into corporate planning to optimize operations and maximize ROI with whr.ai's solutions.",
      image:
        `${imageURL}/geo_usecase_corporate&brands.jpg`,
    },
  },
  {
    id: "transportation",
    image:
      `${imageURL}/geo_usecase_transportation.jpg`,
    imageAltText: "A sleek train winds along coastal tracks with lush greenery, cliffs, and ocean views, as walkers stroll nearby.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Pinpoint events that create surges in demand, giving you time to adjust fleet and routes"]
        },
        {
          heading: "Smart Scores",
          points: ["Measure the potential magnitude of ride requests for better surge management."]
        },
        {
          heading: "Custom Trackers",
          points: ["Track key hubs or venues to stay updated on expected passenger volume."
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Observe daily, weekly, or seasonal patterns triggered by various events, aiding forecasting."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Get real-time alerts when last-minute event changes could affect supply and demand."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "demand_forecasting",
        topic: "Demand Forecasting",
        content:
          "Local commute is the life-line of a city. Volatity and poor planning derails the schedule for local people and creates poor experience for visitors . Major events or many coinciding events dont follow set calendar and our comprehensive event intel solution address this gap for various transportation providers from cab services to bus and railways. Better match demand with superios planning on the supply side.  ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "event_prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Guests coming into town for an event need transportation. From airport rides to commute within the city. Transportation companies offering single rides or group shuttle have potential business to be unclocked by partnering with event planners to offer their solution early and generate more business. Using Eventeli, they can identify prospective events in advance. ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "dynamic_pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "For on demand cab providers like Uber, surge pricing is a major component of their revenue strategy. With forecasted event data, along with impact, it can help better strategies dynamic pricing or address questions in real-time for whats causing significant increase in demand. Either ways it can help transportation companies from cabs to buses to trains, to rethink their dynamic pricing strategy",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "workforce_management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "While 'surge pricing' can be a strategic business model, often its not the best or only way to grow revenue from local transportation. When supply is flexible, having demand spike signals, can help transportation companies like cab, train, buses to pre-plan for increasing or decreasing workforce to meet the increase or decrease in demand due to people traveling locally for events or coming from outside to attend them. ",
          href: "/geo/solutions/workforce-management",
      },
      {
        id: "inventory_planning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Inventory management for transportation deals with availability of buses, cabs, metros, railways, etc. and how its utlized across different routes in conjunction with expected demand. Without foresight into change in demand in advance, managing the availability in different city zones is difficult. Unlike factors which change slowly like economic growth, population density, urbanisation, events are temporary, but the impact is significant. Having access to forecasted onground event demand can help better utilize available inventory. ",
        href: "/geo/solutions/inventory-planning",
      },
      {
        id: "strategic_planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Observing past and forecasted event demand, helps staretgy teams in companies involved with transportation to design their strategy. This includes but not limited to identifing need for more automotive in specfic geography, expanding or opening new geographies to grow the business or identifying ways to best utilize available inventory to improve profitibility.",
          href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Transportation Usecase - whr.ai GEO",
      description:
        "Align transportation supply with event-driven demand for better service and customer experience using whr.ai's forecasting.",
      image:
        `${imageURL}/geo_usecase_transportation.jpg`,
    },
  },
  {
    id: "ooh-marketing",
    image:
      `${imageURL}/geo_usecase_OOH-marketing.jpg`,
    imageAltText: "Hands hold a pen, pointing at a document with charts on remote work, with a phone, notebook, coffee, and highlighter.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Identify where and when significant events will occur, guiding your ad placement or space monetization strategies."]
        },
        {
          heading: "Smart Scores",
          points: ["Assess an event’s audience size and spending power to price inventory effectively."]
        },
        {
          heading: "Custom Trackers",
          points: ["Follow specific venues or competitor ad spaces for timely market insights."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Map overlapping events across geographies for strategic ad positioning."]
        },
        {
          heading: "AI Assist",
          points: [" Receive quick insights on which events could maximize ROI, simplifying decision-making."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "demand_forecasting",
        topic: "Demand Forecasting",
        content:
          "OOH Marketing is a significant portion of non-digital marketing. While traditionally they had minimul insights in dynamic demand change and pricing, they primarily charged for ad placements like on billboards and bus stands with availabel seasonal information. However, events play a major role in people movement in a city and identifing these key pockets. Using onground demand forecasting can lead to better pricing, space negotiation and increase in profit marginr",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Geo Marketing",
        topic: "Geo Marketing",
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Out of home marketing firms have a large inventory of advertising space and service they sell to potential customers. Having onground event intel for future can help better price the inventory and justify the increased rates. This can lead to significant increase in their revenue and data-driven proposals to their potential customers. Having Eventeli data can also prevent selling out premium inventory and static rates. ",
        href: "/geo/solutions/geo-marketing",
      },
      {
        id: "Event Prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Events are a large spender in outdoor adverstising and branding. Its a must do for them and can also be offered as a service by them to their sponsors. For marketing firms offering advertising space outside of the venue, events are a lucrative customers. Identifying relevant upcoming & forecasted events can help OOH marketing companies to share unique strategy and opportunity to the events to drive up the buzz in the city before the event dates. ",
          href: "/geo/solutions/event-prospecting",          
      },
      {
        id: "Dynamic Pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "As out of home advertising is going through a digital rennaisance of its own, ther is huge leverage to enable dynamic pricing. While digitalization could shink the lock-in period from months to minutes, knowing forecasted event demand and expected footfall, can help better price future inventory and not having information descripency with the demand side (which might know about some major upcoming events in future). ",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Out of home advertising companies trying to increase their inventory or evaluate the actual value of the location, need reliable event data in advance. Strategic teams can use Eventeli to spot achieve their goals to spot undervalued locations and also negotiate better rates in their favor.  ",
          href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "OOH Marketing Usecase - whr.ai GEO",
      description:
        "Maximize OOH ad ROI with forecasted event footfall and audience insights from whr.ai.",
      image:
        `${imageURL}/geo_usecase_OOH-marketing.jpg`,
    },
  },
  {
    id: "retail-commerce",
    image:
      `${imageURL}/geo_usecase_retail-commerce.jpg`,
    imageAltText: "A small shopping cart with colorful bottles next to a white bag with a red 'SALE' tag, symbolizing discount shopping.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Know which upcoming events might drive sudden foot traffic or online sales, helping plan inventory."]
        },
        {
          heading: "Smart Scores",
          points: ["Quantify potential revenue impact for better resource allocation."]
        },
        {
          heading: "Custom Trackers",
          points: ["Monitor high-footfall areas around key event or venues to get notifications"
          ]
        },
        {
          heading: "Trend Visualizer",
          points: ["Spot long-term fluctuations in event-driven traffic and adapt your sales strategy."
          ]
        },
        {
          heading: "AI Assist",
          points: ["Stay updated on evolving event details to prevent stock-outs or missed opportunities."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "Demand Forecasting",
        topic: "Demand Forecasting",
        content:
          "Both attended and non-attended event have significant imapct on local retail commerce. From single stores to chains, any business catering to walkin customers can unlock significant advantage with better stock management, manpower planning and also, marketing strategy with forecasted demand intelligence. Basis expected footfall, economic impact and inbound scores, retail commerce stakeholder can identify events of impact or include data in internal models. ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Risk Identification",
        topic: "Risk Identification",
        icon: (
          <Geo_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Whats considered risk varies from business to business. For retail commerce, if its located within an area of event impact, it must take into consideration how it could impact its business in various ways. Firstly, events are not limited to attended live-events, it also includes political unrest, terorist attacks, severe weather, major road diversions, Eventeli provides a single dashboard to visualize what can be forecasted and action can be planned. Use live event data to access risk around how it could impact your usual walk-in customers, parking issues, store timings, etc. ",
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "Geo Marketing",
        topic: "Geo Marketing",
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "From supermarkets to consumer brands trying to increase visibility or footfall into their stores can use the event data to plan onground marketing strategy to reach targeted audience persona. Unlike malls which are becoming ghost venues, live events open a new opportunity to reach audience that might be more condusive to spending, fresh and unique for retail commerce and brand building. ",
        href: "/geo/solutions/geo-marketing",
      },
      {
        id: "Workforce Management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "For any retail commerce that happens to be in the periphery of venue hot-spots, seeing swings in walkins was considered normal. However, with better event demand intel, retail commerce stores can manage their workforce more efficiently. This can provide a better customer experience or reduce businesses losses due to inefficicient manpower planning. From store operation timing to additional staff on the counter, Eventeli can help better decisions making in manpwoer planning. ",
          href: "/geo/solutions/workforce-management",
      },
      {
        id: "Inventory Planning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "If a store is located near an event venue or within busy areas, it gets impacted by event of any form. From weather to politican unrest to planned events. Having onground demand intel forecasting would help with better inventory planning to ensure business is not lost due to stock out and prevent loss due to over stocking. ",
        href: "/geo/solutions/inventory-planning",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "If a store wants more footfall or be close to certain flow of new traffic, identifying such spots is strategic for retail commerce business. Events happen to be an extremely unique and valuable source of this audience and having this data can help in store location change, expansion and revenue forecasting.",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Retail Commerce Usecase - whr.ai GEO",
      description:
        "Optimize stock and manpower planning in retail commerce with whr.ai's event-driven demand intelligence.",
      image:
        `${imageURL}/geo_usecase_retail-commerce.jpg`,
    },
  },
  {
    id: "parking",
    image:
      `${imageURL}/geo_usecase_parking.jpg`,
    imageAltText: "A white SUV parked under solar panel canopies in a sunlit lot, surrounded by green trees, conveying sustainability.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["See which future events could spike parking demand or lead to unexpected vacancies."]
        },
        {
          heading: "Smart Scores",
          points: ["Gauge volatility to optimize pricing and capacity based on attendance figures."]
        },
        {
          heading: "Custom Trackers",
          points: ["Keep tabs on competing lots or targeted venues to stay ahead of demand changes."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Track usage patterns and demand fluctuations over time, informing revenue models."]
        },
        {
          heading: "AI Assist",
          points: ["Get automated alerts for new or altered events, refining daily and long-term parking strategies."
          ]
        }
      ]
    },
    usecases: [
      {
        id: "Demand Forecasting",
        topic: "Demand Forecasting",
        content:
          "Big citiies tend to be the hub for events and busy areas within the cities become hot spots for all forms of gathering. Parking space providers depend on demand intel to better manage pricing and manpower during peak and lean periods. Changing & forecasted event data can be the differentiator that cannot be predicted like morning & evening push. ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Dynamic Pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Regular business commuters are not the cause of sudden volatility in demand for parking. Often spikes are linked to some ongoing event/s onground that leads to higher demand than supply. With parking business model quickly adopting digitalization and dynamic pricing, having data on upcoming events and its impact, can help price to better match demand on ground.  ",
          href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "Workforce Management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Parking spaces are not always automated and often have valet in-house. With intel around demand spikes due to events in their area, they can better plan around having more valets and workforce to assist their customers. ",
        href: "/geo/solutions/workforce-management",
      },
      {
        id: "Inventory Planning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Knowing potential demand forecast can help with growing parking lot space to accomodate demand that could be volatile but lucrative. With Eventeli onground demand intel, parking space business can identify opportunity for better managing their inventory or finding additional temporary inventory for days demand is forecasted to be higher",
        href: "/geo/solutions/inventory-planning",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "For parking business to grow, expension team has to be constantly looking for either new lots or expending their existing space with technology. Having onground demand intel in the projection model can help estimate time to profitability for any longterm investment. ",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Parking Usecase - whr.ai GEO",
      description:
        "Manage parking demand and pricing dynamically based on event forecasts with whr.ai's intelligence solutions.",
      image:
        `${imageURL}/geo_usecase_parking.jpg`,
    },
  },
  {
    id: "dmo-dmc",
    image:
      `${imageURL}/geo_usecase_dmo-dmc.jpg`,
    imageAltText: "A hand points to a line graph on a wooden table, with a bar chart above labeled 'Our Company,' showing data.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Aggregate data on events that will draw visitors to your destination, streamlining your marketing efforts."]
        },
        {
          heading: "Smart Scores",
          points: ["Quickly interpret economic and inbound impacts to shape promotional campaigns."]
        },
        {
          heading: "Custom Trackers",
          points: ["Monitor your city’s event pipeline, adjusting itineraries and promotions as needed."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Reveal seasonal or regional travel patterns, refining your destination’s offerings."]
        },
        {
          heading: "AI Assist",
          points: ["Get automated notifications for important events and changes, ensuring proactive engagement with prospective visitors"
          ]
        }
      ]
    },
    usecases: [
      {
        id: "Demand Forecasting",
        topic: "Demand Forecasting",
        content:
          "Destination management companies & organisation work with a mandate to promote and increase inbound traffic to a city. With access to event linked demand forecasting, they can collaborate with local hospitality partners on pricing and availability. Additionally, they can source new inventory in advance, depending on the expected events and linked inbound scores.",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Risk Identification",
        topic: "Risk Identification",
        icon: (
          <Geo_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "If there is a sudden rise in demand in nearly or competing destination, its a risk to the business of DMOs and DMCs. Additionally, if there are warnings issues by countries or organisation for travel, health restriction, staying updated is crucial for the destination linked companies and the visitors. Eventeli help monitor all such onground risk indicators for a destination.",
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "Event Prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Event participation is on the rise. With people wanting more expereinces and human connections, its becoming a leading factor in driving business for a destination. For destination management companies, having access to upcoming & forecasted events data can help them with early partnerships. Additionally, this data across other competing geographies can help them win more business for their destination for events that have not finalized their destination. ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Destinations are always competing for a share of the potential business. In order to grow, stratregy teams need to explore which destinations are growing, upcoming and would become a threat to their market share. Additionally, they can monitor which destination is on a decline and how they can use this information to their advantage. ",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "DMO & DMC Usecase - whr.ai GEO",
      description:
        "Collaborate with hospitality partners and manage inbound traffic using whr.ai's event forecasting for DMO & DMC.",
      image:
        `${imageURL}/geo_usecase_dmo-dmc.jpg`,
    },
  },
  {
    id: "venue-operators",
    image:
      `${imageURL}/geo_usecases_venue-operator.jpg`,
    imageAltText: "Rooftop event at sunset with elegant tables, string lights, servers in white, and a stunning city skyline.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Identify all citywide or nearby events that could influence foot traffic to your venue."]
        },
        {
          heading: "Smart Scores",
          points: ["Evaluate the size and potential impact of each event, guiding operational plans and revenue strategies."]
        },
        {
          heading: "Custom Trackers",
          points: [" Monitor competitor venues or strategic events and get alerts on notable changes."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Understand how simultaneous events or disruptions affect profitability, enabling proactive measures."]
        },
        {
          heading: "AI Assist",
          points: [" Automate notifications on emerging challenges or opportunities, helping you stay ahead."]
        }
      ]
    },
    usecases: [
      {
        id: "Demand Forecasting",
        topic: "Demand Forecasting",
        content:
          "Venues need tracking of past event trend for a geography, forecasted demand for what events could happen, how likley it would be rehosted, which event planners host events in a certain geoprahy. All this data is extremely crticial for venues operators for planning and forecastign their own business metrics.",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Risk Identification",
        topic: "Risk Identification",
        icon: (
          <Geo_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Every venue competes with other venues in the same geography or those in competing destination. By tracking all onground forecasts and trends within their own city, but also competing destination is important for early identification of growing risk and opportunities.",
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "Event Prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "In a perfect scenario a venue would be booked 365 days of the year, but identifying and converting events is tedious work. It starts with prospecting and having an engine that makes it easy to identify, track and reach out to the potential event planners. Waiting till event dates are announced is often too late, as venues get dedicated before date announcement. In such a scenario, a venue needs access to forecasted events basis historicals and patters both in their own geography and that in competing geo-locations. ",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "If a venue is looking to grow, it can explore strategic geographies with growing demand forecast or expand existing facilities. These are big ticket decisions and any data that can sustantiate their hypothesis can be extremely valuable in furthering the research efforts. ",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Venue Operators Usecase - whr.ai GEO",
      description:
        "Fill your venue calendar early by identifying relevant events and optimizing scheduling with whr.ai's event intelligence.",
      image:
        `${imageURL}/geo_usecases_venue-operator.jpg`,
    },
  },
  {
    id: "hyperlocal-quick-commerce",
    image:
      `${imageURL}/geo_usecase_quick-commerce.jpg`,
    imageAltText: "A delivery cyclist in a tan jacket rides past a dark building, carrying a yellow insulated backpack.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Pinpoint large and small on-ground events that could disrupt deliveries or drive sudden local demand."]
        },
        {
          heading: "Smart Scores",
          points: ["Assess which events might significantly alter traffic flow or consumer behavior."]
        },
        {
          heading: "Custom Trackers",
          points: ["Follow high-impact areas or competitor zones for immediate alerts."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Observe spikes and dips over time, aiding in inventory and workforce planning."]
        },
        {
          heading: "AI Assist",
          points: ["Get instant notifications on event-related disruptions or surges, keeping fulfillment efficient."]
        }
      ]
    },
    usecases: [
      {
        id: "Demand Forecasting",
        topic: "Demand Forecasting",
        content:
          "With quick commerce on the rise, delivery providers need visibility on forecasted demand for better inventory & manpower planning. The fulcrum for delivery & logistics business is minimum time / on-time delivery and availability of products, with onground demand data in the model, higher efficiency can be acheived.",
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Geo Marketing",
        topic: "Geo Marketing",
        content:
          "When people visit a city for event, its an opportunity for marketing for quick commerce brands. While it could be to introduce new customers to their service, but it can also spread brand awareness and adoption in future areas.  ",
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/geo-marketing",
      },
      {
        id: "Dynamic Pricing",
        topic: "Dynamic Pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Like local cabs, quick commerce also tends to levy extra charges on their customers during peak hours. However, having advance intel on what might create an anomaly in their usual demand pattern, can help design dynamic pricing more strategically. ",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "Workforce Management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Quick commerce isnt limited to local residents. With growing movement of humans from other cities, countries and even within a city to attend events, hyperlocal commerce providers need to be ready to quickly move their available workforce around to meet demand where it arises. Not getting this signal can lead to mismatch in demand & supply, which is a major leakage in profitability, but more importantly, their business model around quick deliverary. ",
        href: "/geo/solutions/workforce-management",
      },
      {
        id: "Inventory Planning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "With growing adoption of hyperlocal & quick commerce across major citities, when there is movement of demand from one area to another, or there is an unexpected increase in external demand, it can lead to inventory issues. Out of stock inventory leads to both business loss and poor customer experience. With onground event demand intel in the mix of other variables, quick commerce business can better strategies their inventory decisions. ",
        href: "/geo/solutions/inventory-planning",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Hyperlocal & quick commerce business need to identify areas to expand. Having onground demand from events can be a good indicator for growth potential in a city.  Additionally, to provide seamless experience to their customers, they want to identify destination most visited by their core audience to get signals for city/country expansion.",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Hyperlocal & Quick Commerce Usecase - whr.ai GEO",
      description:
        "Optimize deliveries and inventory in hyperlocal and quick commerce sectors with event-driven demand intelligence from whr.ai.",
      image:
        `${imageURL}/geo_usecase_quick-commerce.jpg`,
    },
  },
  {
    id: "local-government",
    image:
      `${imageURL}/geo_usecase_local-government.jpg`,
    imageAltText: "Ornate parliament hall with a blue stained-glass dome ceiling and rows of wooden seats, exuding grandeur.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Consolidate data on events, from expos to parades, festivals, and even political rallies to plan city services more effectively."]
        },
        {
          heading: "Smart Scores",
          points: ["Gauge risk or economic benefits, helping prioritize resource allocation."]
        },
        {
          heading: "Custom Trackers",
          points: ["Keep watch on recurring or high-impact events, ensuring prompt updates for civic planning."]
        },
        {
          heading: "Trend Visualizer",
          points: ["See how events overlap across the city and adjust transport, security, and other services accordingly."]
        },
        {
          heading: "AI Assist",
          points: ["Stay informed on new permits or last-minute changes, promoting proactive rather than reactive governance."]
        }
      ]
    },
    usecases: [
      {
        id: "Risk Identification",
        topic: "Risk Identification",
        content:
          "Most local government, security teams, traffic controllers have limited forecast on whats coming, changing or critical in specific areas. While big events often are easy to track but a set of smaller events coincding can lead to similar onground risks. They are usually not identified on time, if at all, leading to disruptions in city management (example: controling traffic). Having onground demand intel can help local authorities better plan security and resource deployment. ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "Event Prospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Some events are so infleuntial that it can make major imapct on a city's image and future business opportuntiies. Often cities are seen jostling to get influencers like Taylor Swift which brings in not just revenue to the tune of $1billion, but also media coverage and recognition for a city. Similarly, countries compete to get events like Olympics, Grand Prix, etc. to make a statement.",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "Workforce Management",
        topic: "Workforce Management",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Onground police and other amenities provided by local government can be under stress or lack efficiency due to volatility in inbound traffic to a city. This is extremely relevant for citiies considered tourists hubs and areas that have concentration of event venues and footfall. With forecasted event demand data and estimates on inbound traffic, local authorities can manage their workforce more efficiently and creatively. From traffic police to emergency prepardnes to street cleaning, much can be improved with better data modeling",
        href: "/geo/solutions/workforce-management",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          " e best the city has to offer. To unlock this intel, authorities need onground event data and filter out the noise. ",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Local Government Usecase - whr.ai GEO",
      description:
        "Enhance city management and resource deployment with real-time event forecasts and demand intelligence from whr.ai.",
      image:
        "imageURL/geo_usecase_local-government.jpg",
    },
  },
  {
    id: "manpower-agency",
    image:
      `${imageURL}/geo_usecase_manpower.jpg`,
    imageAltText: "A worker in a safety vest operates a yellow forklift, moving packages into a loading area with focus and efficiency.",
    // blurColor: "#D9DEE9",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(217, 222, 233, 0.5) 53%)",
    opacity: "50%",
    text: "Events Create Jobs",
    subtext:
      "Events bring together people, but it also creates million of direct jobs across different expertise. From booth hosts, conference moderators to caterers, designers, security personel, the list goes on and on",
    problem: "",
    solution: "",
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Discover upcoming events that require specific staffing, giving you time to recruit and schedule."]
        },
        {
          heading: "Smart Scores",
          points: ["Measure an event’s potential size and impact, informing manpower forecasts."]
        },
        {
          heading: "Custom Trackers",
          points: ["Track priority regions or clients with recurring staffing needs, staying ahead of demand shifts."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Identify recurring patterns or seasonal demand surges, streamlining workforce planning."]
        },
        {
          heading: "AI Assist",
          points: ["Automatically receive updates on new or changed events, reducing last-minute chaos and improving service delivery."]
        }
      ]
    },
    usecases: [
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: (
          <Geo_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing",
        icon: (
          <Geo_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Our demand forecasting can split uocal vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
          href: "/geo/solutions/geo-marketing",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: (
          <Geo_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same.",
        href: "/geo/solutions/event-prospecting",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: (
          <Geo_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
        href: "/geo/solutions/dynamic-pricing",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Managemant",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
        href: "/geo/solutions/workforce-management",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: (
          <Geo_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
        href: "/geo/solutions/inventory-planning",
      },
      // {
      //   id: "traveladvisory",
      //   topic: "Travel Advisory",
      //   icon: (
      //     <Geo_Soln_8 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
      //   ),
      //   content:
      //     "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
      // },
    ],
    metaData: {
      title: "Manpower Agency Usecase whr.ai - GEO",
      description: "Anticipate staffing needs for live events using GTM’s demand prediction, ensuring optimal resource deployment and boosting client satisfaction.",
      image:
        `${imageURL}/geo_usecase_manpower.jpg`,
    },
  },

  {
    id: "event-planners",
    image:
      `${imageURL}/geo_useacase_eventplanner.jpg`,
    imageAltText: "A hand writes in a spiral notebook, with open planners and a to-do list, evoking a sense of organization.",
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
    how: {
      heading: "Unlock Onground Event Intel",
      subheading: "Gain real-time insights, track key metrics, and make data-driven event decisions",
      content: [
        {
          heading: "Advanced Search",
          points: ["Uncover overlapping or conflicting events, helping you secure the best dates and venues."]
        },
        {
          heading: "Smart Scores",
          points: ["Gauge attendance and economic impact to optimize planning and budgeting."]
        },
        {
          heading: "Custom Trackers",
          points: ["Keep track of multiple venues, dates, and potential scheduling shifts."]
        },
        {
          heading: "Trend Visualizer",
          points: ["Compare different timeframes or locations to see where attendance peaks."]
        },
        {
          heading: "AI Assist",
          points: ["Receive real-time updates on newly announced events or scheduling changes, enabling agility in planning."]
        }
      ]
    },
    usecases: [
      {
        id: "Demand Forecasting",
        topic: "Demand Forecasting",
        content:
          "Event planners play a high stake game. They plan their events months in advance with limited insight on what could be happening onground in future. With demand forecasting they can see upcoming & forecasted events for months ahead, before deciding on the city & venue to host the event at. Additionally, they can track change in demand forecasting for specific dates, to adjust strategy on informing audience and making arrangements. ",
        icon: (
          <Geo_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        href: "/geo/solutions/demand-forecasting",
      },
      {
        id: "Risk Identification",
        topic: "Risk Identification",
        icon: (
          <Geo_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Once events are scheduled and venues booked, its often impossible change the dates. Not knowing of potential change in onground reality can lead to major business losses. With Eventeli risk identifier, event planners can take action in advance. From notifying participants about heather or weather warning, to making stay & travel arrangments in scenario of high spike in demand. ",
        href: "/geo/solutions/risk-identification",
      },
      {
        id: "Strategic Planning",
        topic: "Strategic Planning",
        icon: (
          <Geo_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />
        ),
        content:
          "Any event planner looking to grow their event business, needs to identify new geographies and demand to identify opportunities to expand. From taking the event ip to another geography to launching another event in the same city. Having onground demand intel data, enriched with estimated audience size, audience demographics and other tags, can unlock a tressure trove of opportunities. ",
        href: "/geo/solutions/inventory-planning",
      },
    ],
    metaData: {
      title: "Event Planners Usecase - whr.ai GEO",
      description:
        "Select optimal event locations and adjust strategies with months-ahead event forecasts from whr.ai.",
      image:
        `${imageURL}/geo_useacase_eventplanner.jpg`,
    },
  },
];
