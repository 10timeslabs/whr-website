import Hotelandlodging from "/public/GeoUsecasesBanners/geo_usecase_hotel&lodging_cropped.png";
import Restaurant from "/public/GeoUsecasesBanners/geo_usecase_restaurants.jpg";
import ActivityPlanners from "/public/GeoUsecasesBanners/geo_usecase_activityplanner.jpg";
import Aviation from "/public/GeoUsecasesBanners/geo_usecase_aviation&airport.jpg";
import Transportation from "/public/GeoUsecasesBanners/geo_usecase_transportation.jpg";
import OOHMarketing from "/public/GeoUsecasesBanners/geo_usecase_OOH marketing.jpg";
import RetailCommerce from "/public/GeoUsecasesBanners/geo_usecase_retail commerce.jpg";
import Parking from "/public/GeoUsecasesBanners/geo_usecase_parking.jpg";
import DemoDMC from "/public/GeoUsecasesBanners/geo_usecase_dmo dmc.jpg";
import VenueOperator from "/public/GeoUsecasesBanners/geo_usecases_venue operator.jpg";
import QuickCommerce from "/public/GeoUsecasesBanners/geo_usecase_quick commerce.jpg";
import LocalGovernment from "/public/GeoUsecasesBanners/geo_usecase_local government.jpg";
import ManPower from "/public/GeoUsecasesBanners/geo_usecase_manpower.jpg";

import CorporateAndBrand from "/public/GeoUsecasesBanners/geo_usecase_corporate & brands .jpg";

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
  },
];
