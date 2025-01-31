import React from "react";
import DemandForeCasting from "/public/geo_soln_illustrations/demand forecasting.svg";
import DynamicPricing from "/public/geo_soln_illustrations/Dynamic Pricing.svg";
import EventProspecting from "/public/geo_soln_illustrations/Event Prospecting.svg";
import GeoMarketing from "/public/geo_soln_illustrations/Geo Marketing.svg";
import InventoryPlanning from "/public/geo_soln_illustrations/Inventory Planning..svg";
import RiskIdentification from "/public/geo_soln_illustrations/Risk Identification.svg";
import TravelAdvisory from "/public/geo_soln_illustrations/Travel Advisory.svg";
import WorkforceManagement from "/public/geo_soln_illustrations/Workforce Management.svg";
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

    usecases: [
      {
        id: "Hotel & Lodging",
        topic: "Hotel & Lodging",
        content:
          "Our demand forecasting can split local vs. inbound audience to help estimate incoming traffic to a geography. it could be a single large attended event or a group of small events, see its impact in conjunction with other season events like holidays and observances. This can improve pricing and have a significant increase in revenue",
        icon: <Geo_UseCase_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4" width="62" height="62" />,
        content:
          "Food joints in periphery of event venues can better plan with forecasted demand. Use the data to optimize onground marketing, work force planning, inventory and offer to drive maximum traffic",
      },
      {
        id: "Activity Planners",
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4" width="62" height="62" />,
        content:
          "Location specific activity & experience providers, catering to incoming tourists can leverage demand intelligence around inbound event traffic. Our forecasted data can help drive optimize onground marketing, collaboration, offer designing and workforce management. Better forecasting can improve revenue and profitability.",
      },
      {
        id: "Aviation & Airport",
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4" width="62" height="62" />,
        content:
          "Events are major factor for volatility in travelers from outside the city. Knowing trends and predictions based upcoming & forecasted events, can help airlines and airports to better manage spikes in passengers. From price optimization to manpower management, use the data API with priprietory scores to take informed decisions or run better data models.  ",
      },
      {
        id: "Transportation ",
        topic: "Transportation ",
        icon: <Geo_UseCase_5 color="#6750a4" width="62" height="62" />,
        content:
          "Local commute is the life-line of a city. Volatity and poor planning derails the schedule for local people and creates poor experience for visitors . Major events or many coinciding events dont follow set calendar and our comprehensive event intel solution address this gap for various transportation providers from cab services to bus and railways. Better match demand with superios planning on the supply side.  ",
      },
      {
        id: "OOH Marketing",
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4" width="62" height="62" />,
        content:
          "OOH Marketing is a significant portion of non-digital marketing. While traditionally they had minimul insights in dynamic demand change and pricing, they primarily charged for ad placements like on billboards and bus stands with availabel seasonal information. However, events play a major role in people movement in a city and identifing these key pockets. Using onground demand forecasting can lead to better pricing, space negotiation and increase in profit marginr",
      },
      {
        id: "Retail Commerce",
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4" width="62" height="62" />,
        content:
          "Both attended and non-attended event have significant imapct on local retail commerce. From single stores to chains, any business catering to walkin customers can unlock significant advantage with better stock management, manpower planning and also, marketing strategy with forecasted demand intelligence. Basis expected footfall, economic impact and inbound scores, retail commerce stakeholder can identify events of impact or include data in internal models. ",
      },
      {
        id: "Parking",
        topic: "Parking",
        icon: <Geo_UseCase_8 color="#6750a4" width="62" height="62" />,
        content:
          "Big citiies tend to be the hub for events and busy areas within the cities become hot spots for all forms of gathering. Parking space providers depend on demand intel to better manage pricing and manpower during peak and lean periods. Changing & forecasted event data can be the differentiator that cannot be predicted like morning & evening push. ",
      },
      {
        id: "DMO & DMC",
        topic: "DMO & DMC",
        icon: <Geo_UseCase_9 color="#6750a4" width="62" height="62" />,
        content:
          "Destination management companies & organisation work with a mandate to promote and increase inbound traffic to a city. With access to event linked demand forecasting, they can collaborate with local hospitality partners on pricing and availability. Additionally, they can source new inventory in advance, depending on the expected events and linked inbound scores.",
      },
      {
        id: "Event Planners",
        topic: "Event Planners",
        icon: <Geo_UseCase_10 color="#6750a4" width="62" height="62" />,
        content:
          "Event planners play a high stake game. They plan their events months in advance with limited insight on what could be happening onground in future. With demand forecasting they can see upcoming & forecasted events for months ahead, before deciding on the city & venue to host the event at. Additionally, they can track change in demand forecasting for specific dates, to adjust strategy on informing audience and making arrangements. ",
      },
      {
        id: "Hyperlocal & Quick Commerce",
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_11 color="#6750a4" width="62" height="62" />,
        content:
          "With quick commerce on the rise, delivery providers need visibility on forecasted demand for better inventory & manpower planning. The fulcrum for delivery & logistics business is minimum time / on-time delivery and availability of products, with onground demand data in the model, higher efficiency can be acheived.",
      },
    ],
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
    usecases: [
      {
        id: "Hotel & Lodging",
        topic: "Hotel & Lodging",
        content:
          "Room pricing for hotels is never constant. Its constantly changing to mimic expected demand. However, currently most models rely on competitor pricing or past trends. This approach is broken as future demand isnt constant, doesnt follow any preset norms and isnt aware of its combined effect on supply way ahead in future. By having Eventeli's AI-powered, human checked data, hotels can build better dynamic pricing models & strategy. They can hold on to inventory, when they know demand could significantly increase or offload early, if they expect a sharp decline in demand. ",
        icon: <Geo_UseCase_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "Activity Planners",
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4" width="62" height="62" />,
        content:
          "Most destination specific activities are not designed for local audience. If its catering to inbound tourists and travelers, the highly unpredictable demand comes from events. Being able to foresee and model for future demand, activity planners can strategically align their pricing strategy. They can give early bird offers or hold the inventory if the expected demand around specific dates are higher.",
      },
      {
        id: "Aviation & Airport",
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4" width="62" height="62" />,
        content:
          "Destination specific demand linked to events can make pricing model for airlines more resilient. It can fill the missing holes in the season demand based modeling which relies on historical patterns, with a forecasted demand. Eventually you get a model which better maps demand with pricing and prevent under pricing or selling out inventory in advance due to lack of knowledge around upcoming events in a city. ",
      },
      {
        id: "Transportation",
        topic: "Transportation ",
        icon: <Geo_UseCase_5 color="#6750a4" width="62" height="62" />,
        content:
          "For on demand cab providers like Uber, surge pricing is a major component of their revenue strategy. With forecasted event data, along with impact, it can help better strategies dynamic pricing or address questions in real-time for whats causing significant increase in demand. Either ways it can help transportation companies from cabs to buses to trains, to rethink their dynamic pricing strategy",
      },
      {
        id: "OOH Marketing",
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4" width="62" height="62" />,
        content:
          "As out of home advertising is going through a digital rennaisance of its own, ther is huge leverage to enable dynamic pricing. While digitalization could shink the lock-in period from months to minutes, knowing forecasted event demand and expected footfall, can help better price future inventory and not having information descripency with the demand side (which might know about some major upcoming events in future). ",
      },
      {
        id: "Parking",
        topic: "Parking",
        icon: <Geo_UseCase_8 color="#6750a4" width="62" height="62" />,
        content:
          "Regular business commuters are not the cause of sudden volatility in demand for parking. Often spikes are linked to some ongoing event/s onground that leads to higher demand than supply. With parking business model quickly adopting digitalization and dynamic pricing, having data on upcoming events and its impact, can help price to better match demand on ground.  ",
      },
      {
        id: "Hyperlocal & Quick Commerce",
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4" width="62" height="62" />,
        content:
          "Like local cabs, quick commerce also tends to levy extra charges on their customers during peak hours. However, having advance intel on what might create an anomaly in their usual demand pattern, can help design dynamic pricing more strategically. ",
      },
    ],
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
    usecases: [
      {
        id: "Hotel & Lodging",
        topic: "Hotel & Lodging",
        content:
          "Looking for group bookings? Hotels can identify all upcoming and forecasted events that have high inbound score (expected visitors from outside the city). See a calendar-wise list of events within a specified geographic coordinates. Use this data to reach the event planners or build marketing strategy around the same. ",
        icon: <Geo_UseCase_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4" width="62" height="62" />,
        content:
          "Food joints or fine-dining, if a restaurant is located near event venue, footfall is significantly impacted by expected events and associated footfall. Having access to upcoming & forecasted events can help restaurants to propsect event planners to become food partners, offer special offers or market directly to the incoming audience. They can go a step deeper with prospecting large groups coming for the events to lock-in reservations. ",
      },
      {
        id: "Activity Planners",
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4" width="62" height="62" />,
        content:
          "In a world where the line between business and entertainment is quickly getting blurred, activities outside the event are becoming an important part of the event itself. With activities providers fighting for market share, collaborating with event planners to become part of their event schedule can be a game changer. From pre-event to post-event official activity, it opens opportunities for visitors to extend their stays in the city and include activity in their itinerary. To achieve this, Eventeli provides activity planners a way to identify events that have the audience focus in a timely manner. ",
      },
      {
        id: "Transportation ",
        topic: "Transportation",
        icon: <Geo_UseCase_5 color="#6750a4" width="62" height="62" />,
        content:
          "Guests coming into town for an event need transportation. From airport rides to commute within the city. Transportation companies offering single rides or group shuttle have potential business to be unclocked by partnering with event planners to offer their solution early and generate more business. Using Eventeli, they can identify prospective events in advance. ",
      },
    
      {
        id: "OOH Marketing",
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4" width="62" height="62" />,
        content:
          "Events are a large spender in outdoor adverstising and branding. Its a must do for them and can also be offered as a service by them to their sponsors. For marketing firms offering advertising space outside of the venue, events are a lucrative customers. Identifying relevant upcoming & forecasted events can help OOH marketing companies to share unique strategy and opportunity to the events to drive up the buzz in the city before the event dates. ",
      },
      {
        id: "DMO & DMC",
        topic: "DMO & DMC",
        icon: <Geo_UseCase_9 color="#6750a4" width="62" height="62" />,
        content:
          "Event participation is on the rise. With people wanting more expereinces and human connections, its becoming a leading factor in driving business for a destination. For destination management companies, having access to upcoming & forecasted events data can help them with early partnerships. Additionally, this data across other competing geographies can help them win more business for their destination for events that have not finalized their destination. ",
      },
      {
        id: "Venue Operators",
        topic: "Venue Operators",
        icon: <Geo_UseCase_11 color="#6750a4" width="62" height="62" />,
        content:
          "In a perfect scenario a venue would be booked 365 days of the year, but identifying and converting events is tedious work. It starts with prospecting and having an engine that makes it easy to identify, track and reach out to the potential event planners. Waiting till event dates are announced is often too late, as venues get dedicated before date announcement. In such a scenario, a venue needs access to forecasted events basis historicals and patters both in their own geography and that in competing geo-locations. ",
      },
      {
        id: "Enterprise",
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4" width="62" height="62" />,
        content:
          "Event sponsoring is a major marketing channel for both small and large enterprise to reach target audience. Eventeli helps to indentify events which are forecated or upcoming and might be a good fit for an enterprise to sponsor. Create custom trackers and our AI agent will find and notify you to relevant event that match your criteria.  ",
      },
    ],
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
    usecases: [
      {
        id: "restaurant",
        topic: "Restaurants",
        content:
          "Events play a big role in driving footfall to restaurants. When event audience are coming from outside the city, its an opportunity to strategcially target the marketing to reach relevant eyeballs. From hoardings to foot on the ground promotion, event data intel can help with better planning time and geo sensitive marketing strategy.",
        icon: <Geo_UseCase_2 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "Activity Planners",
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4" width="62" height="62" />,
        content:
          "Inbound traffic into a city tends to do more than just attend the event. Both business and casual visitors are ripe audience for promoting local activities and experiences. Activity and experience providers can use the forecasted event intel to leverage geo-focused marketing and activations to reach the right audience at the right time. ",
      },
      {
        id: "OOH Marketing",
        topic: "OOH Marketing",
        icon: <Geo_UseCase_6 color="#6750a4" width="62" height="62" />,
        content:
          "Out of home marketing firms have a large inventory of advertising space and service they sell to potential customers. Having onground event intel for future can help better price the inventory and justify the increased rates. This can lead to significant increase in their revenue and data-driven proposals to their potential customers. Having Eventeli data can also prevent selling out premium inventory and static rates. ",
      },
      {
        id: "Retail Commerce",
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4" width="62" height="62" />,
        content:
          "From supermarkets to consumer brands trying to increase visibility or footfall into their stores can use the event data to plan onground marketing strategy to reach targeted audience persona. Unlike malls which are becoming ghost venues, live events open a new opportunity to reach audience that might be more condusive to spending, fresh and unique for retail commerce and brand building. ",
      },
      {
        id: "Hyperlocal & Quick Commerce",
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4" width="62" height="62" />,
        content:
          "When people visit a city for event, its an opportunity for marketing for quick commerce brands. While it could be to introduce new customers to their service, but it can also spread brand awareness and adoption in future areas.  ",
      },
      {
        id: "Enterprise",
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4" width="62" height="62" />,
        content:
          "Events are labelled for type and category, besdies projected scored around footfall and economic impact. Enterprise can use this audience filtering at scale to identify strategic time and geo-location to leverage onground marketing and activation activities. For example, an auto expo would be an opportunity for car manufacturers to build brand visibility with a very targeted audience outside of the event ",
      },
    ],
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
    usecases: [
      {
        id: "Hotel & Lodging",
        topic: "Hotel & Lodging",
        content:
          "Besides the actual inventory of rooms and booking, any accomodation have a long list of inventory that needs to be maintained to serve their guests. Having insight of expected demand onground, specially major spikes, can help take early measures to beat any disruptions.",
        icon: <Geo_UseCase_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4" width="62" height="62" />,
        content:
          "Unlike a hotel, where the inventory can be a lot more non-perishable, a food joint business is highly suseptable to change in demand that isnt taken into consideration. With signals around volatity in demand, that would not be considered medium or normal expected level, can help flag potential scenario of inventory glut or over supply. Using the demand intel in the internal models, restaurants can take preventive measures that can minimize loss linked to inventory.  ",
      },
      {
        id: "Hyperlocal & Quick Commerce",
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4" width="62" height="62" />,
        content:
          "With growing adoption of hyperlocal & quick commerce across major citities, when there is movement of demand from one area to another, or there is an unexpected increase in external demand, it can lead to inventory issues. Out of stock inventory leads to both business loss and poor customer experience. With onground event demand intel in the mix of other variables, quick commerce business can better strategies their inventory decisions. ",
      },
    ],
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
    usecases: [
      {
        id: "Aviation & Airport",
        topic: "Aviation & Airport",
        content:
          "Major spike in inbound traffic into a city can lead to a security nightmare for airport management. It can compromise security and lead to the airport being under-staffed. Being informed about expetec spikes can help with risk mitigation.",
        icon: <Geo_UseCase_4 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "Retail Commerce",
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4" width="62" height="62" />,
        content:
          "Whats considered risk varies from business to business. For retail commerce, if its located within an area of event impact, it must take into consideration how it could impact its business in various ways. Eventeli provides a single dashboard to visualize what can be forecasted and action can be planned. Use live event data to access risk around how it could impact your usual walk-in customers, parking issues, store timings, etc. ",
      },
      {
        id: "Event Planners",
        topic: "Event Planners",
        icon: <Geo_UseCase_10 color="#6750a4" width="62" height="62" />,
        content:
          "Once events are scheduled and venues booked, its often impossible change the dates. Not knowing of potential change in onground reality can lead to major business losses. With Eventeli risk identifier, event planners can take action in advance. From notifying participants about heather or weather warning, to making stay & travel arrangments in scenario of high spike in demand. ",
      },
      {
        id: "Local Government",
        topic: "Local Government",
        icon: <Geo_UseCase_13 color="#6750a4" width="62" height="62" />,
        content:
          "Most local government, security teams, traffic controllers have limited forecast on whats coming, changing or critical in specific areas. While big events often are easy to track but a set of smaller events coincding can lead to similar onground risks. They are usually not identified on time, if at all, leading to disruptions in city management (example: controling traffic). Having onground demand intel can help local authorities better plan security and resource deployment. ",
      },
      {
        id: "Enterprise",
        topic: "Enterprise",
        icon: <Geo_UseCase_5 color="#6750a4" width="62" height="62" />,
        content:
          "Business travel is bigger than casual traveling. Large companies have their employees flying in and around cities & coutries all the time. Have a central dashboard to monitor any risk zone can help prevent or take precautions against anyone negative scenario that could have been avoided. Some examples of these risks are: avoiding travel & meeting around time and area with major spikes in onground activity to early detection of health, weather and terrorist warning. Our onground risk identifiction model can prevent avoidable risks associated with corporate travel. ",
      },
    ],
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
    usecases: [
      {
        id: "Hotel & Lodging",
        topic: "Hotel & Lodging",
        content:
          "Get warning signals around your location or in the city, in order to take early action on behalf of your guests. If there is expected traffic, you can send early warning or assistance to your guests. ",
        icon: <Geo_UseCase_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "Aviation & Airport",
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your different travel routes or citiies, in order to take early action on behalf of your travel customers. If there is expected traffic, weather warning, holiday crazyness or all of it together, you can send early warning or assistance to your travel users or atleast inform them at the time of arrival. ",
      },
      {
        id: "Event Planners",
        topic: "Event Planners",
        icon: <Geo_UseCase_3 color="#6750a4" width="62" height="62" />,
        content:
          "Get warning signals around your event location or in the city, in order to take early action. If there is expected high traffic, bad weather or some form of disruption expected, take note to prepare internally, but also to inform your event participants & delegates. Dont wait till the last minute to get surprised. Be informed, stay informed",
      },
      {
        id: "Enterprise",
        topic: "Enterprise",
        icon: <Geo_UseCase_14 color="#6750a4" width="62" height="62" />,
        content:
          "Your team members from the CEO to the sales person, all travel for various work related engagement. There safety is your utmost priority. Having a single panel where you can track who is going where and tracking those locations for onground uncertainties can help you prevent mishap, enable them to plan better or take timely action to ensure business does not suffer or jeoperdized",
      },
    ],
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
    usecases: [
      {
        id: "Hotel & Lodging",
        topic: "Hotel & Lodging",
        content:
          "Hospitality industry is a major employer. However, it comes with the challenege of managing workforce efficiently. With demand being volatile, to provide best possible service, they need demand signals  as much in advance as possible. While, relying on past patterns helps, however, to normalize past spikes and to plan for futures volality, they need forecasted events data with relevancy filters. This data can help them increase manpower, or plan to move existing team around when expecting significant demand change. ",
        icon: <Geo_UseCase_1 color="#6750a4" width="62" height="62" />,
      },
      {
        id: "restaurant",
        topic: "Restaurants",
        icon: <Geo_UseCase_2 color="#6750a4" width="62" height="62" />,
        content:
          "Most restaurants do not get booking months in advance. Majority of business is walk-ins. With clear view on upcoming events in their area of influence (geo boundry), they can get signals for what could lead to higher walk-ins and vic-e-versa. Without this data intel, they can end up with either being over staffed or under. Both these scenarios can lead to loss of business and revenue, eating into their profit margins.",
      },
      {
        id: "Activity Planners",
        topic: "Activity Planners",
        icon: <Geo_UseCase_3 color="#6750a4" width="62" height="62" />,
        content:
          "Very few activities are always sold out and are able to increase sales when demand is high. However, unlike inventory that might be able to accomodate higher demand, having sufficient manpower is important to absorb potential business. When activity planners are working on their strategy, having Eventeli data dashboard and visualizer can help identify potantial opportunities and corresponsing signals for better managing workforce. ",
      },
      {
        id: "Aviation & Airport",
        topic: "Aviation & Airport",
        icon: <Geo_UseCase_4 color="#6750a4" width="62" height="62" />,
        content:
          "No one likes to be at an airport and have to stand in long line for security checks or deal with dirty restrooms. If multiple events happen to happening in a single city at the same time, driving high inbound traffic, it can lead to an unexpected stress on airport manpower. This can be avoided with demand intel for forecasted and upcoming events. ",
      },
      {
        id: "Transportation ",
        topic: "Transportation ",
        icon: <Geo_UseCase_5 color="#6750a4" width="62" height="62" />,
        content:
          "While 'surge pricing' can be a strategic business model, often its not the best or only way to grow revenue from local transportation. When supply is flexible, having demand spike signals, can help transportation companies like cab, train, buses to pre-plan for increasing or decreasing workforce to meet the increase or decrease in demand due to people traveling locally for events or coming from outside to attend them. ",
      },
      {
        id: "Retail Commerce",
        topic: "Retail Commerce",
        icon: <Geo_UseCase_7 color="#6750a4" width="62" height="62" />,
        content:
          "For any retail commerce that happens to be in the periphery of venue hot-spots, seeing swings in walkins was considered normal. However, with better event demand intel, retail commerce stores can manage their workforce more efficiently. This can provide a better customer experience or reduce businesses losses due to inefficicient manpower planning. From store operation timing to additional staff on the counter, Eventeli can help better decisions making in manpwoer planning. ",
      },
      {
        id: "Parking",
        topic: "Parking",
        icon: <Geo_UseCase_8 color="#6750a4" width="62" height="62" />,
        content:
          "Parking spaces are not always automated and often have valet in-house. With intel around demand spikes due to events in their area, they can better plan around having more valets and workforce to assist their customers. ",
      },
      {
        id: "Hyperlocal & Quick Commerce",
        topic: "Hyperlocal & Quick Commerce",
        icon: <Geo_UseCase_12 color="#6750a4" width="62" height="62" />,
        content:
          "Quick commerce isnt limited to local residents. With growing movement of humans from other cities, countries and even within a city to attend events, hyperlocal commerce providers need to be ready to quickly move their available workforce around to meet demand where it arises. Not getting this signal can lead to mismatch in demand & supply, which is a major leakage in profitability, but more importantly, their business model around quick deliverary. ",
      },
      {
        id: "Local Government",
        topic: "Local Government",
        icon: <Geo_UseCase_13 color="#6750a4" width="62" height="62" />,
        content:
          "Onground police and other amenities provided by local government can be under stress or lack efficiency due to volatility in inbound traffic to a city. This is extremely relevant for citiies considered tourists hubs and areas that have concentration of event venues and footfall. With forecasted event demand data and estimates on inbound traffic, local authorities can manage their workforce more efficiently and creatively. From traffic police to emergency prepardnes to street cleaning, much can be improved with better data modeling",
      },
    
    ],
  },
];
