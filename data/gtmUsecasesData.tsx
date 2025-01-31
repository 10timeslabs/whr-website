import CSR from "/public/gtm_usecases_banners/gtm_usecase_csr.jpg";
import EventSupplier from "/public/gtm_usecases_banners/gtm_usecase_eventsuppliers.jpg";
import Marketing from "/public/gtm_usecases_banners/gtm_usecase_marketing.jpg";
import SalesAndBiz from "/public/gtm_usecases_banners/gtm_usecase_sales&biz.jpg";
import Tech from "/public/gtm_usecases_banners/gtm_usecase_tech.jpg";
import Brand from "/public/gtm_usecases_banners/gtm_usecase_brand.jpg";
import Community from "/public/gtm_usecases_banners/gtm_usecase_community.jpg";
import HumanResource from "/public/gtm_usecases_banners/gtm_usecase_human-resources.jpg";
import Influencer from "/public/gtm_usecases_banners/gtm_usecase_influencer.jpg";
import ManPower from "/public/gtm_usecases_banners/gtm_usecase_manpower.jpg";
import NewsAndMedia from "/public/gtm_usecases_banners/gtm_usecase_news&media.jpg";
import Procurement from "/public/gtm_usecases_banners/gtm_usecase_procurement.jpg";
import ResearchAndConsulting from "/public/gtm_usecases_banners/gtm_usecase_research&consulting.jpg";
import Venue from "/public/gtm_usecases_banners/gtm_usecase_venue.jpg";
import MandA from "/public/gtm_usecases_banners/gtm_usecase_m&a.jpg";
import {
  GTM_Soln_1,
  GTM_Soln_2,
  GTM_Soln_3,
  GTM_Soln_4,
  GTM_Soln_5,
  GTM_Soln_6,
  GTM_Soln_7,
} from "../svgicons/icons";
export const gtmUsecasesjsonData = [
  {
    id: "CSR",
    image: CSR,
    //#ECEEE9
    text: "Find Strategic Initiatives",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "20%",
    subtext:
      "Amplify Your Corporate Social Responsibility Initiatives by Connecting with Events Aligned to Your Mission.Discover opportunities to support causes that resonate with your values, build meaningful partnerships, and make a lasting impact.",
    problem:
      "Identifying events which are focused on social initiatives are not easy to find. There is a mismatch between demand and supply of these events. ",
    solution:
      "Make your CSR dollar count. Find and back events which are forwarding the cause and driving focus by bringing the right information and people together. From diversity to global warning to hunger and poverty. There are events and community creators focusing on problems that you would want your brand to be aligned with",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "eventsuppliers",
    image: EventSupplier,
    //#ECEEE9
    text: "Don’t Miss an Event",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "20%",
    subtext:
      "Events are like perishable goods – their value diminishes if not discovered and acted upon at the right time. Missing them means missing out on opportunities that may never come again.",
    problem:
      "More new events are launched today than ever before and this trend is expected to continue. From professional event planners to every one with an audience, event is the go to format to bring community together, build relationships and drive business outcome. However, the industry is also plagues with fake events, duplicates, incorrect information, quality concerns. With limited bandwidth and budgets. finding the right event to go after becomes absolutely critical.",
    solution:
      "You could be serving events with catering, housing, design or tech. Finding and prospecting events intelligently isnt optional anymore. Open-ended propsecting solutions like Zoominfo and Apollo lack fine-tuning and historical data to be more than just a contact finder. EventGTM is built on 10+ years of experience tracking, cleaning, verifying events across the web. Our cutting edge AI & Machine learning models help further the endeavor to identify, structure and make events data accesisble to industry stakeholders.Besdies the streamlined process of machine and human verification to have a reliable source of event truth, we persevere to be the first to find the upcoming dates for rehosted events, use intel to forecast the event date and also provide proprietory scores to qualify both the host and the event. ",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "marketing",
    image: Marketing,
    //#FFFFFF
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 53%)",
    opacity: "50%",
    text: "Capture Real Attention",
    subtext:
      "Context is the fuel that drives marketing. Event creates an opportunity for marketing teams to create context to engage potential audiene.",
    problem:
      "There are million so events happening and the most expensive event isnt always the right event to generate ROI. Finding most relevant events to reach potential prospects, gives a good return on investment and fits the calendar is hard. Most event participation decision is rarely backed with data because data is hard to find, compile, structure to make any real comparison. ",
    solution:
      "EventGTM gives marketing the superpower to make event channel work in their favor. From early identifcation & relevency check to tools to unlock ROI from events in a more strategic manner.",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "sales&bizdev",
    image: SalesAndBiz,
    //#ECEEE9
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "60%",
    text: "Right Place, Right Time",
    subtext:
      "Sales has evolved. In today’s world, building trust is no longer optional—it’s essential. Relationships drive decisions, and authenticity builds lasting connections.",
    problem:
      "Cold email and calls are becoming less effective and AI was the last nail in the coffin. Assume, all your competitors can find the same prospects, personalize the email, show perfect ads and even make a call, all with the power of AI. Do you think the prospect would take you seriously?",
    solution:
      "If you are into B2B, focus on top of the funnel. Get in front of the prospect, build trust. Your prospect is more likley to respond once they have a sense of familiarity and 'real' personal touch. Not the personal touch AI is generating for all your competitors. A handshake goes a long way!",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },

  {
    id: "techteam",
    image: Tech,
    //#ECEEE9
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "100%",
    text: "Finding the Right Talent",
    subtext:
      "What you’re seeking isn’t always seeking you in return. To bridge the gap, you need to be where your future employee is most likely to be. Whether it’s a networking event, a professional gathering, or an industry conference, positioning yourself in the right places creates opportunities to connect with the talent you need",
    problem:
      "While hiring is everyones problem, tech has been more proactive with a lot of tech focused events, so much so that there is a whole term for it - DevRel (Developer Relationship). From conference on specific topic to hackathon to meetups. There are events attracting tech folks of all type and seniority. However, the problem for tech is that of plenty. How do you identify which events are relevent, reach out to them on-time for collaboration and how to put your best foot forward?",
    solution:
      "Collaborate with relevant events. Create influence at those those. For small companies it might start with just attending them to fnd the first few tech employees but for larger companies it would range from sponsor the event to find a speaking position for your top tech employee.Be infront of and create influence targeting the type of candidates you want to hire. ",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },

  {
    id: "brandagency",
    image: Brand,
    //#FDFDFD
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(253, 253, 253, 0.5) 53%)",
    opacity: "100%",
    text: "Data Backed Recommendations",
    subtext:
      "20% of b2b marketing spend goes to events, advise your client with data intel. Let events be the secret sauce that makes your agency stand out.",
    problem:
      "While businesses put aside a large chunk of budget for events, its scattered across departments and often marketing isnt the owner of the process. No one truly know who is going where in the company and the real ROI. If an agency is involved, event often is an after thought, as there was no off the shelf tool to advise the client with deep knowledge.",
    solution:
      "If brand building is the mandate, event might be lowest hanging fruit. From leveraging existing client event participation to recommendation on speaking position and sponsoring opportuntiies that can be quantified. As an agency, get an advantage by helping your clients make better event decisions and put in place a strategy to track & monitor the ROI",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "community&groups",
    image: Community,
    //#CDCDCD
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(205, 205, 205, 0.5) 53%)",
    opacity: "100%",
    text: "Where To Go",
    subtext:
      "Help your groups leverage events as opportunities to meet, connect, and grow together. Foster deeper relationships, spark collaboration, and build a stronger sense of belonging.",
    problem:
      "Business community members go to events as part of their plans. But they dont often know the right events and other community members can help. See where others are going, ask questions, coordinate for shared benefits. Currently, they spam group messages, chats or play the guessing game",
    solution:
      "Powering the community with an event engine, which captures all the relevant events, ensures it is updated, meets community guidelines, allowed users to show interest, enables members to see community plan, ask questions, and stay on the same page",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "humanresource",
    image: HumanResource,
    //#DEE4E8
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(222, 228, 232, 0.5) 53%)",
    opacity: "100%",
    text: "Improve Inbound Application",
    subtext:
      "Attract top talent effortlessly by building a brand that leaves a lasting impression. Showcase your values, culture, and vision to stand out in a competitive market.When your brand is memorable, hiring becomes simple",
    problem:
      "Jobs are becoming aspirational and this trend is only going to grow. Employees want to work with companies they think are growing, are leaders and making noise in the right ways. At the least, it helps if they have come across the brand in the real world. ",
    solution:
      "Bulk hiring or head hunting, event is an occassion to meet the right candidate or be in front of them. It is an opportunity to make you brand more visible in front of potential candidate you want to hire. It creates influence and helps you stand out. ",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "influencers",
    image: Influencer,
    //#BBBEB7
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(187, 190, 183, 0.5) 53%)",
    opacity: "100%",
    text: "Expand Influence",
    subtext:
      "Target the people who matter most, build meaningful connections, and amplify your message where it resonates the strongest. Reaching the right audience isn’t just about visibility—it’s about creating impact and driving real results.",
    problem:
      "Experts, creators, influencers are always trying to reach relevant audience to share their knowledge, expertise, and grow there arc of infleunce. However, they are often short of time and finding the right events is critical that matches their knowledge.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast what is relevant in a single panel. Additionally, it cleans up fakes, reconciles duplicates, and enriches event data with score matches an experts requirement.",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "manpoweragency",
    image: ManPower,
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(187, 205, 218, 0.5) 53%)",
    opacity: "100%",
    text: "Events Create Jobs",
    subtext:
      "Events bring together people, but it also creates million of direct jobs across different expertise. From booth hosts, conference moderators to caterers, designers, security personel, the list goes on and on",
    problem:
      "Events are time sensitive, seasonal and dont provide the typical permanenent jobs. Rather its similar to gig economy, where knowing when is the event happening, its scale, point of contact is crtical, along with the timing of when to reach out",
    solution:
      "A single tool that map events of all type & format across geograpies. Enriches it with various tagging & scores to help filter down to events which are relevant and matches the requirement. Along with this, provide a CRM to coordinate internally, outreach to the event decision makers and helps smoothen the communication process",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "media&news",
    image: NewsAndMedia,
    //#E7E7E5
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(231, 231, 229, 0.5) 53%)",
    opacity: "100%",
    text: "Find the Next Story",
    subtext:
      "Events bring together the experts and movers & shakers across industries. it drive new product launches and debates on the most critical topics. Chase the stories that matter",
    problem:
      "Events come in all shape, size and form. Finding what is relevant, the audiene and experts attendig them is hard and tough to convert into a tool that is easy to use. Manually finding is time taking taking and tedious.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast what is relevant in a single panel. Additionally, it cleans up fakes, reconciles duplicates, and enriches event data with score matches to a journalists requirement. Track the industry or experts that is relevant, across geography of interest. ",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "procurement",
    image: Procurement,
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(187, 205, 218, 0.5) 53%)",
    opacity: "100%",
    text: "Find the Right Sellers",
    subtext:
      "No matter if you know exactly what you are looking for or exploring for new products that can help you grow, there is an event for it. If not, there soon will be. ",
    problem:
      "Find the right event and then qualifying if its worth your time and money is like looking for a needle in a haystack. Most event decisions are made without much research and based on the narrative made by the event or what you heard in the grapevine. But, this process isnt very reliable or suitable if you want to make your time & money to be better suited.",
    solution:
      "When we can dig deep into our digital spend, map audience to the exact cohort we want to go after, why shouldnt we demand the same for our event spend? Earlier this was not possible and the excuse we gave was event is all about serendipity. However, that not a valid argument, but an excuse for not having any way to compare, evaluate and make a better decision.EventGTM in on a mission to change this. We believe events is the future of human trust building and business engagement. But, it needs to become more data driven. We have to focus on driving right people to the right place, driving higher ROI. ",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "research&consultancy",
    image: ResearchAndConsulting,
    //#E7E7E5
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(231, 231, 229, 0.5) 53%)",
    opacity: "100%",
    text: "Window to the World Economy",
    subtext:
      "If there is an industry, there are events for it. Events are a window to peer into the world economy and how its changeing",
    problem:
      "Gloabl trade is noisy and no wonder the event landscpae reflects the same. Millions are events are hosted every year, but large percent die and new ones are born. Each claim to be bigger, better and most valuable then they really are. Each take creative liberty on how they present themselves or the audience they represent. And then we have the issue of fakes, duplicates and cancellations.Unlocking and researching event is a formidable challenge.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast in a single panel. Cleans up fakes, reconciles duplicates, map them across different languages. Addiitonally, it should enrich event with details like size, history, associated companies, people and overall sphere of infleucne.",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "venue",
    image: Venue,
    //#F4E8EB
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(244, 232, 235, 0.5) 53%)",
    opacity: "100%",
    text: "More Days of Events",
    subtext:
      "Identify New Prospects, Track Potential Customers, and Empower Your Venue Sales Team with Smart Coordination.Leverage cutting-edge tools to uncover fresh opportunities, monitor leads in real-time, and streamline communication for seamless teamwork.",
    problem:
      "Find, verifying and updating a list of relevant event planenrs is a tedious and time consuming task. It needs continious effort and still there is no way to audit to ensure nothing is missed.",
    solution:
      "A reliable single event feed that constantly tracks, verifies and quantifies new event launches, rehosts, date & venue changes and forecast in a single panel. Addiitonally, it should enrich event with details like size, history, associated companies, to help zone in what meets the venues criteria.",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
  {
    id: "eventplannersandM&A",
    image: MandA,
    //#CBA88B
    blurColor:
      "linear-gradient(180deg, rgba(203, 168, 139, 0.5) 10%, rgba(203, 168, 139, 0.5) 53%)",
    opacity: "100%",
    text: "Benchmark & Identify Opportunities",
    subtext:
      "In order to grow its essential to both benchmark against existing competion and identy gaps in the market to either sclae, launch new events, expand into new markets or acquire other event IPs",
    problem:
      "Manual mapping events in existing category, across geograhy is not always realiable and to identify complimentary categories or markets require extensive research and access to reliable data",
    solution:
      "An out of box event intelligence platform that not only maps all events across an industry but also across geography. Keeps it updated with fresh data, enriched with demand signals and cleaned with both AI and human analysts. Additionally, provides a suite of intelligent scores to filter, segment, pinpoint what is relevant for benchmarking and identifying new opportunities. ",
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants & QSR",
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
        icon: <GTM_Soln_1 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Risk Identification",
        icon: <GTM_Soln_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
      },
      {
        id: "geomarketing",
        topic: "Geo Marketing dummy",
        icon: <GTM_Soln_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
      },
      {
        id: "eventprospecting",
        topic: "Event Prospecting",
        icon: <GTM_Soln_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "dynamicpricing",
        topic: "Dynamic pricing",
        icon: <GTM_Soln_5 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand.",
      },
      {
        id: "workforcemanagement",
        topic: "Workforce Management",
        icon: <GTM_Soln_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "inventoryplanning",
        topic: "Inventory Planning",
        icon: <GTM_Soln_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions",
      },
    ],
  },
];
