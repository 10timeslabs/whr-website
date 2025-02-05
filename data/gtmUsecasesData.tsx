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
    id: "csr",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_csr.jpg",
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
    how: {
      heading: "Amplify Impact with Events",
      subheading: "Do More Good with Better Event Alignment",
      content: [
        {
          heading: "Keyword & Cause Filters",
          points: ["Create a “CSR mandate” by defining causes (e.g., diversity, climate) and track relevant events automatically."]
        },
        {
          heading: "Event Size & Audience Profile",
          points: ["Narrow results by event scale and attendee demographics that fit your social objectives."]
        },
        {
          heading: "Stay Updated & Collaborate",
          points: ["Get regular notifications about newly added or changed events that match your filters.",
            "Use our event concierge to reach organizers, manage follow-ups, and coordinate in one panel."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_csr.jpg",
    }
  },
  {
    id: "event-suppliers",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_eventsuppliers.jpg",
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
    how: {
      heading: "High-Value Events",
      subheading: "Find High-Value Events for Your Services",
      content: [
        {
          heading: "Refine by Size & Format",
          points: ["Filter by event type (trade shows, summits, festivals) and size to focus on viable leads",
            "Limit by region if your offering is location-dependent."
          ]
        },
        {
          heading: "Qualify with History",
          points: ["Check event background and past attendance to ensure credibility."]
        },
        {
          heading: "Track & Collaborate",
          points: ["Set up trackers to get updates when new or rehosted events match your criteria.",
            "Collaborate in a shared dashboard, manage outreach, and keep follow-ups organized."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_eventsuppliers.jpg",
    }
  },
  {
    id: "marketing",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_marketing.jpg",
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
    how: {
      heading: "Maximize ROI",
      subheading: "Maximize ROI by Targeting the Right Events",
      content: [
        {
          heading: "Audience Matching",
          points: ["Filter by category, location, dates, and go deeper with event reputation, impact, or demographics.", "Over 40 unique filters let you zoom in on what truly matters."
          ]
        },
        {
          heading: "Streamline Participation",
          points: ["Consolidate cross-departmental event plans into a unified marketing strategy.",
            "Turn each event into a brand-building opportunity with consistent messaging."
          ]
        },
        {
          heading: "Competitor & Audience Tracking",
          points: ["Monitor competitor participation and map where your target audience is gathering.",
            "Use AI to spot hidden opportunities early, securing sponsorships or speaker slots."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_marketing.jpg",
    }
  },
  {
    id: "sales-bizdev",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_sales&biz.jpg",
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
    how: {
      heading: "Close More Deals",
      subheading: "Close More Deals with Real-World Event Intelligence",
      content: [
        {
          heading: "Smart Event Discovery",
          points: ["Use industry or keyword filters; upload prospect lists to find where your customers or similar audiences congregate.", " Focus on relevant designations or seniority levels to meet decision-makers face-to-face."
          ]
        },
        {
          heading: "AI Trackers & Match Scores",
          points: ["Enable AI trackers for automatic updates on new, matching events.",
            "Review match scores to prioritize which events to attend or sponsor."
          ]
        },
        {
          heading: "Geographic Targeting",
          points: ["Limit searches by region and receive alerts only for locations that matter to your business."]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_sales&biz.jpg",
    }
  },
  {
    id: "tech-team",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_tech.jpg",
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
    how: {
      heading: "Elevate Client Brands with Events",
      subheading: "Conquer DevRel Overload with Precise Event Filters",
      content: [
        {
          heading: "Find the Right Tech Events",
          points: ["Set keyword filters (e.g., specific programming languages) or audience profiles for your hiring or outreach goals.", "Filter by event size and geography to focus on local user groups or major conferences."
          ]
        },
        {
          heading: "Stay in the Loop",
          points: ["Receive automatic updates on new or rescheduled events, along with AI-driven recommendations.",
            "Collaborate with your team via a shared dashboard for notes and planning."
          ]
        },
        {
          heading: "Single Panel Management",
          points: ["Reach out to organizers, manage follow-ups, and coordinate your tech presence all in one place."]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_tech.jpg",
    }
  },
  {
    id: "brand-agency",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_brand.jpg",
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
    how: {
      heading: "Brand Visibility with Events",
      subheading: "Boost Client Brand Visibility Through Events",
      content: [
        {
          heading: "Curate Events by Brand Goals",
          points: ["Filter by client product keywords or brand strategy to pinpoint ideal opportunities.", "Consider size, audience profile, and format for tailored recommendations."
          ]
        },
        {
          heading: "Track Competitors & Geography",
          points: ["Watch your clients’ rivals and see where they invest in events.",
            "Set geographic parameters to narrow down or expand the search as needed."
          ]
        },
        {
          heading: "All-in-One Dashboard",
          points: ["Get real-time updates, coordinate internally, and reach out to organizers to secure speaking slots or sponsorships.",
            "Track ROI for each event in one place."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_brand.jpg",
    }
  },
  {
    id: "community-groups",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_community.jpg",
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
    how: {
      heading: "Enhance Community with Events",
      subheading: "Elevate Your Community with Built-In Event Discovery",
      content: [
        {
          heading: "Tailor the Event Enginels",
          points: ["Define goals to ensure only relevant events appear for your members.", "Embed our event widget on your website or social channel for easy access."
          ]
        },
        {
          heading: "Member Collaboration",
          points: [" Let members show interest in upcoming events and ask questions in a shared space.",
            " Encourage knowledge-sharing and coordination for better group engagement."
          ]
        },
        {
          heading: "One-Stop Experience",
          points: ["Provide valuable notifications, organizer contacts, and community insights—all from a single platform."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_community.jpg",
    }
  },
  {
    id: "human-resource",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_human-resources.jpg",
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
    how: {
      heading: "Recruit Smarter",
      subheading: "Recruit Smarter with Data-Driven Event Targeting",
      content: [
        {
          heading: "Target by Jobs & Skills",
          points: [" Filter events by industry or keywords if you need candidates with specific expertise.",
            "Narrow down by designation or seniority to find the right talent pool."
          ]
        },
        {
          heading: "Combine Trackers & Match Scores",
          points: ["Create multiple trackers for different roles and see a match score for each event.",
            "Set notifications so you never miss new or updated events that fit your hiring needs."
          ]
        },
        {
          heading: "Leverage AI Agent",
          points: ["Save your search filters and let our AI agent continuously monitor the best event matches for you."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_human-resources.jpg",
    }
  },
  {
    id: "influencers",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_influencer.jpg",
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
    how: {
      heading: "Focus Your Influence",
      subheading: "Focus Your Influence on the Right Stages",
      content: [
        {
          heading: "Custom Keyword & Category Filters",
          points: ["Include relevant topics, exclude irrelevant ones, and narrow results by region.",
            "Filter by audience profile or experts you already admire for similar event matches."
          ]
        },
        {
          heading: "AI Trackers & Notifications",
          points: ["Save filters as trackers so the AI Co-pilot runs 24/7.",
            "Get notified immediately when new or forecasted events match your criteria."
          ]
        },
        {
          heading: "Simple Outreach & Concierge",
          points: ["Contact organizers from your dashboard. Keep notes and follow-ups centralized.",
            "Enable event concierge to handle communications on your behalf."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_influencer.jpg",
    }
  },
  {
    id: "manpower-agency",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_manpower.jpg",
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
    how: {
      heading: "Lead the Event Gig Economy",
      subheading: "Win the Gig Economy of Events",
      content: [
        {
          heading: "Identify Relevant Events",
          points: ["Filter by event type, region, size, or audience to match staffing specialties.",
            "Bookmark or tag high-potential events for quick reference."
          ]
        },
        {
          heading: "Team Coordination",
          points: ["Assign event leads to different sales members, manage notes, and centralize discussion.",
          ]
        },
        {
          heading: "Smart Trackers",
          points: ["Get alerts when new or rehosted events appear or when dates change.",]
        },
        {
          heading: "Direct Outreach",
          points: ["Send proposals to organizers from the same dashboard.",
            "Keep all follow-ups and communication in one streamlined system."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_manpower.jpg",
    }
  },
  {
    id: "media-news",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_news&media.jpg",
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
    how: {
      heading: "Newsworthy Events",
      subheading: "Discover Newsworthy Events Instantly",
      content: [
        {
          heading: "Tailored Keyword & Region Search",
          points: ["Specify focus areas and exclude irrelevant terms to find story-worthy gatherings.",
            "Limit or expand by region to align with your coverage scope."
          ]
        },
        {
          heading: "Leverage Known Influencers & Events",
          points: ["Provide a sample set of notable experts or events. The system uncovers similar leads.",
          ]
        },
        {
          heading: "24/7 AI Monitoring",
          points: ["Save filters as trackers; get alerts on newly added or changed events.",
            "Reach organizers from the same platform, centralizing your research and follow-ups."
          ]
        },
        {
          heading: "Historical & Future Context",
          points: ["Explore past events for background info and stay on top of future ones to break news first",
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_news&media.jpg",
    }
  },
  {
    id: "procurement",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_procurement.jpg",
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
    how: {
      heading: "Data-Driven Logic to Event",
      subheading: "Bring Data-Driven Logic to Event Spend",
      content: [
        {
          heading: "Focused Search",
          points: ["Set keyword filters to find events that address your product needs or pain points.",
            "Narrow by event size, seller type, or format for precise targeting."
          ]
        },
        {
          heading: "Geo & Competitor Tracking",
          points: ["Limit searches to your feasible regions.",
            "Monitor where your competitors or preferred vendors appear, and let AI suggest comparable options"
          ]
        },
        {
          heading: "Team Coordination & Outreach",
          points: ["Receive periodic recommendations and track everything in a shared dashboard.",
            " Engage organizers or request proposals directly, managing follow-ups in one system."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_procurement.jpg",
    }
  },
  {
    id: "research-consultancy",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_research&consulting.jpg",
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
    how: {
      heading: "Enhance Event Analysis",
      subheading: "Power Your Event Analysis & Strategic Insights",
      content: [
        {
          heading: "Robust Filtering",
          points: ["Search by category, keywords, location, size, or format to capture exactly what you need.",
            "Include or exclude certain job roles to refine your dataset."
          ]
        },
        {
          heading: "Trend & Tracker Tools",
          points: ["Monitor changes or newly launched events in your focus area. Compare historical data to identify emerging patterns"
          ]
        },
        {
          heading: "Deeper Intelligence",
          points: ["Export raw data for deeper modeling or rely on our Event AI Co-pilot for quick insights.",
            "Request white-glove research for advanced metrics like event revenue estimates."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_research&consulting.jpg",
    }
  },
  {
    id: "venue",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_venue.jpg",
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
    how: {
      heading: "Pitch the Perfect Event Space",
      subheading: "Pitch the Perfect Space to the Right Events",
      content: [
        {
          heading: "Tailor Your Filters",
          points: ["Choose event size, type, or format to match your venue’s capacity and capabilities.",
            "Define geographic constraints if you only book certain cities or regions."
          ]
        },
        {
          heading: "Forecasted & TBA Events",
          points: ["Target events with upcoming or tentative dates and verify their past success to gauge fit."
          ]
        },
        {
          heading: "Save & Track",
          points: ["Convert filters into trackers. Get notified about new events, changes, or rehosts.",
            "Use a shared dashboard for team coordination, proposals, and RFP management—all in one panel"
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_venue.jpg",
    }
  },
  {
    id: "event-planners-and-ma",
    image: "https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_m&a.jpg",
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
    how: {
      heading: "High-Value Events",
      subheading: "Find High-Value Events for Your Services",
      content: [
        {
          heading: "Refine by Size & Format",
          points: ["Filter by event type (trade shows, summits, festivals) and size to focus on viable leads.",
            "Limit by region if your offering is location-dependent."
          ]
        },
        {
          heading: "Qualify with History",
          points: ["Check event background and past attendance to ensure credibility."
          ]
        },
        {
          heading: "Track & Collaborate",
          points: ["Set up trackers to get updates when new or rehosted events match your criteria.",
            "Collaborate in a shared dashboard, manage outreach, and keep follow-ups organized."
          ]
        }
      ]
    },
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
    metaData:{
      title:"",
      description:"",
      image:"https://c1.10times.com/whr/gtm/static/image/usecases/gtm_usecase_m&a.jpg",
    }
  },
];
