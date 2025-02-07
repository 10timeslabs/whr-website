import React from "react";
import BrandBuilding from "../data/solutionAnimationData/Brandbuilding.json"
import CompetitorTracking from "../data/solutionAnimationData/competitortracking.json"
import ExhibitorAndSponsor from "../data/solutionAnimationData/Exhibitandsponsor.json"
import ProductMatching from "../data/solutionAnimationData/Productmatching.json"
import ProspectMapping from "../data/solutionAnimationData/Prospectsmapping.json"
import Recruitement from "../data/solutionAnimationData/Recruitmentanddevrel.json"
import SpeakingOpportunity from "../data/solutionAnimationData/Speakingopportunity.json"
import { GTM_UseCase_1, GTM_UseCase_10, GTM_UseCase_11, GTM_UseCase_12, GTM_UseCase_13, GTM_UseCase_14, GTM_UseCase_15, GTM_UseCase_2, GTM_UseCase_3, GTM_UseCase_4, GTM_UseCase_5, GTM_UseCase_6, GTM_UseCase_7, GTM_UseCase_8, GTM_UseCase_9 } from "../svgicons/icons";
const imageURL = "https://c1.10times.com/whr/gtm/static/image/solution"
export const gtmSolutionsjsonData = [
  {
    id: "brand-building",
    image: BrandBuilding,
    imageAltText:"",
    text: "Brand Alignment",
    subtext:
      "Events open the door for brand building. From influencing new audience to reinforcing your message to targeted set of users",
    problem:
      "Identifying all the events that meets & understands your branding goals can be a challenege. It could be all the events in a certain geography or spread across the world. Knowing event opportunity in advance is critical to plan for them, pitch your brand as a sponsor or a speaker",
    solution:
      "With a brand goal defined, you need a solution that would identify, evaluate and recommend the right events for your goals. This solution needs to be comprehensive in its coverage and be able to match your goals with what the event offers",
    how: `Dont completely depend on your digital footprint, when your can meet your audience in the real-world. Empower your marketing & branding team, by making all events you attend across the organisation to be either in-line with your brand focus or leverage all them events to ensure making brand value. Here is how we can help:

a. Set brand narrative - reiterate brand visibility to same audience or spread the net wide
b. Define the geograhy and audience demographic
c. Set budget and ways you want to partiicpate
d. Get curated list of events to meet your goal
e. Get a whole years plan to maximize your ROI
f. Get informed when new events meet your criteria or stay ahead with forecated dates
g. Easily coordinate internally and even directly outreach to the event organiser from a single panel
h. Access and track all event footprint to access impact`,
usecases: [
  {
    topic: "Marketing",
    content:
      "Align brand messaging with the perfect event audiences to maximize sponsorship ROI and brand recall.",
    icon: <GTM_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
  },
  {
    topic: "Brand Agency",
    icon: <GTM_UseCase_8 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
    content:
      "Curate events that fit client brand ethos, ensuring consistent storytelling across real-world activations.",
  },
  {
    topic: "CSR",
    icon: <GTM_UseCase_5 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
    content:
      "Discover socially aligned festivals or community gatherings to enhance your corporate social responsibility footprint.",
  },
  {
    topic: "Venue",
    icon: <GTM_UseCase_10 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Promote your venue’s rebranding or unique experience by joining forces with events echoing your brand values.",
  },
],  
metaData:{
  title:"Brand Alignment - whr.ai GTM",
  description:"Align your brand goals with the right events using whr.ai GTM's Brand Alignment solutions for maximum impact and ROI.",
  image:`${imageURL}/Brandbuilding.png`,
}
},
  {
    id: "competitor-tracking",
    image: CompetitorTracking,
    imageAltText:"",
    text: "Competitor Tracking",
    subtext:
      "Dont just go, know where your competitors are joing and tend to go",
    problem:
      "Aggregating and tracking all your competitor and potential competitor can be nightmare, let alone identifying what sort of events they participate and in what form",
    solution:
      "A single channel like a Google for the real-world, that tracks physcial footprints of companies at events from exhibiting, speaking, sponsoring or attending. Leverage this intel by mapping your competitor list to always stay informed",
    how: `a. Add your list of competitors
b. Enable AI to identify and continously enrich your list of potential customers
c. Get updated when competitor action is identified
d. Leverage smart recommendation based on your brand mandate and our AI's ability to look at the whole picture and not just a single data point`,
usecases: [
  {
    id: "restaurant",
    topic: "Sales & Biz Dev",
    content:
      "Spot competitor presence at real-world events to refine your sales approach and target new opportunities.",
    icon: <GTM_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
  },
  {
    id: "restaurant",
    topic: "Marketing",
    icon: <GTM_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Track rival brand strategies offline to adjust campaigns for maximum impact where your competitors appear.",
  },
  {
    id: "geomarketing",
    topic: "Procurement",
    icon: <GTM_UseCase_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      " Keep tabs on competitor vendor relationships at trade shows to negotiate better supply deals.",
  },
  {
    id: "eventprospecting",
    topic: "Brand Agency",
    icon: <GTM_UseCase_8 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Discover competitor client activations at events to propose more compelling brand strategies for your clients.",
  },
  {
    id: "dynamicpricing",
    topic: "Tech Team",
    icon: <GTM_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Monitor competitor product launches or developer meetups, aligning your own DevRel or feature roadmap accordingly.",
  },
],   
metaData:{
  title:"Competitor Tracking - whr.ai GTM",
  description:"Stay ahead of rivals with whr.ai GTM's competitor tracking. Monitor where competitors are exhibiting, sponsoring, or speaking at events.",
  image:`${imageURL}/CompetitorTracking.png`,
}
},
  {
    id: "exhibit-sponsor",
    image: ExhibitorAndSponsor,
    imageAltText:"",
    text: "Exhibit & Sponsor",
    subtext:
      "With number of events being hosted growing and new formats emerging, choosing the right fit for events to exhibit or sponsor can boost the potential ROI and drive the real-world marketing spend strategy.",
    problem:
      "Have a comprehensive view of all possible events and data around them is still quite challenging and currently done by manual searching, list making and enrichment of data points. Yet, it remain mostly inadequete to do advance matching in todays data driven economy",
    solution:
      "A solution is needed that agreegates all events, looks beyond the surface level information of an event, takes into account a brands core goals and audience focus, in order to match with the relevance, budget, timelines to give a strategic blueprint on how to best maxmize the potential ROi from event participation in the form of exhibting & sponsoring",
    how: `Use a mix of strategy to identify the most relevant events to sponsor.

a. set basic filters like geography & category
b. add advance filters like competitors and potential prospects
c. set additional product keywords and event format
d. define the timeline or other preference

Get a list of events that are upcoming & forecasted. Additionally, get updates whenever an event is founfd that meets the goal`,
usecases: [
  {
    topic: "Sales & Biz Dev",
    content:
      " Target the most profitable exhibitions or sponsor deals by evaluating footfall, competitor presence, and audience fit.",
    icon: <GTM_UseCase_2 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
  },
  {
    topic: "Brand Agency",
    icon: <GTM_UseCase_8 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Recommend ideal expos or sponsorships that cater to clients’ brand goals, optimizing event marketing ROI.",
  },
  {
    topic: "Venue",
    icon: <GTM_UseCase_10 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "If you exhibit at other fairs or do cross-promotions, spot high-value gatherings for improved brand synergy.",
  },
  {
    topic: "Marketing",
    icon: <GTM_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Select exhibitions or sponsorship packages driven by real-time event data, yielding stronger audience connections.",
  },
],   
metaData:{
  title:"Exhibit & Sponsor Matching - whr.ai GTM",
  description:"Maximize ROI on event participation with whr.ai GTM's Exhibit & Sponsor Matching. Choose the right events to exhibit or sponsor strategically.",
  image:`${imageURL}/Exhibit&Sponsor.png`,
}
},
  {
    id: "product-matching",
    image: ProductMatching,
    imageAltText:"",
    text: "Product Matching",
    subtext:
      "Dont just go by the name, go deeper. Find what you are looking for or be where find the right audience based on products or topics of relevance.",
    problem:
      "Most people end up participating in an event based on surface level research, as the name often is ambigious or they followed the buzz around the event. But later it turned out to not be a good for their product or service mandate.",
    solution:
      "No matter if you are trying to buy, sell, find partner, influence a certain audience, getting list of event recommendation based on the products or topics of interest, sorted for match score, can help you make a more informed decision.",
    how: `Our AI prowered solution doesnt just at the event name & location, rather it takes all the direct and indirect information around the event and its anticipated audience, creates an event knowledge graph, sorts it in ways that matching closely with product or topic keywords can become possible. So how can you use this: 

a. simply provide a set of keywords that are relevant for you
b. further add all your other criteria for filtering the events like location, timeline, size, etc.
c. save your smart product matching tracker

Get list of events and all future identified events that our AI thinks would be a great fit for your requirement. Continue to train it to improve its recommendation to be in-line with your company focus`,
usecases: [
  {
    topic: "Sales & Biz Dev",
    content:
      "Identify expos and trade shows where your products truly resonate, driving better lead generation.",
    icon: <GTM_UseCase_2 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
  },
  {
    topic: "Procurement",
    icon: <GTM_UseCase_7 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Focus on relevant vendor fairs that match your procurement needs, improving supply chain relations.",
  },
  {
    topic: "Research & Consultancy",
    icon: <GTM_UseCase_11 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
    content:
      "Analyze upcoming summits or niche conferences containing topics pertinent to your client research.",
  },
  {
    topic: "Brand Agency",
    icon: <GTM_UseCase_8 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
    content:
      "Pair client products with thematically aligned gatherings to foster successful brand collaborations.",
  },
],   
metaData:{
  title:"Product Matching - whr.ai GTM",
  description:"Find events that perfectly match your products or topics with whr.ai GTM's Product Matching solutions for deeper engagement.",
  image:`${imageURL}/ProductMatching.png`,
}
},

  {
    id: "prospects-mapping",
    image: ProspectMapping,
    imageAltText:"",
    text: "Prospect Mapping",
    subtext:
      "Its all about the signals. Link your sales CRM or upload a list of prospective companies to identify the best events for you to attend",
    problem:
      "Everyone is mass emailing, calling or creating content with AI.This noise is only expected to explode and events provide an opportunity that is curated and high on intention. But, tracking which events would be relavent for you and where you are likely to find propsects can be extremely hard. Waiting till post commiting to an event can be a huge risk",
    solution:
      "Every event is a great fit for someone, but it does not have to be for you. Instead of blaming the event, its better to identify events that best map to your potential prospects and which event they would be attending. You need a solution that understands your brand brief, focus and target audience you want to influence. On the basis of your goal it identifies, tracks and scores event that are best fit for you",
    how: `a. Create your brand brief and goals
b. Set multiple goals across your teams - from sales, marketing to recruitement
c. Create smart trackers that works for your goals 
d. Provide sample prospects or link to your sales CRM
e. Set scoring criteria for ranking events
f. See current upcoming event list and also get notified when new events match your prospect focus`,
usecases: [
  {
    topic: "Sales & Biz Dev",
    content:
      " Link your CRM leads to offline events they attend, ensuring high-intent engagement and faster deal cycles.",
    icon: <GTM_UseCase_2 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
  },
  {
    topic: "Marketing",
    icon: <GTM_UseCase_3 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      " Focus marketing efforts at events where your ideal audience or potential leads show up in person.",
  },
  {
    topic: "Human Resource Team",
    icon: <GTM_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      " Identify career fairs or conferences with potential job candidates already in your prospect pipeline.",
  },
  {
    topic: "Event Planners & M&A",
    icon: <GTM_UseCase_13 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Discover potential partnership leads or acquisition targets by mapping prospects to relevant gatherings",
  },
],   
metaData:{
  title:"Prospect Mapping - whr.ai GTM",
  description:"Turn prospects into real-world wins with whr.ai GTM's Prospect Mapping. Identify and target the best events for your business objectives.",
  image:`${imageURL}/Prospectmapping.png`,
}
},
  {
    id: "recruitement-devrel",
    image: Recruitement,
    imageAltText:"",
    text: "Recruitement & DevRel",
    subtext:
      "Hiring is changing and becoming challenging. Getting inbound is becoming spam applications. Meet candidates in the real-world",
    problem:
      "Online application is a long and drawn out process eating up time of your most costly resources. The best candidates are gettign exposed to your brand & what you are trying to achieve. Their intent cannot be guaged from bulk applications they undergo everytime they are out looking for a change. Also, the best fitting candidates might not always be looking for a job.",
    solution:
      "Meet your next hire at events where they are most likely to be. Exhibit, speak, sponsor or just attendee events where you come face to face with potential candidates to find those that might fit your job openings. Best way to influence them to join your mission is to meet and talk to them",
    how: `Hiring is not just the receruitors job, its every managers requirement and they might need to be at events they can influence and bring onboard the best candidates. E.g: marketing manager could speak at an event where they could find a good hire. So how do you do this:

a. Create hiring mandates for roles that you need to hire for
b. Identify events where your target hire could be in participation
c. Find a way to get a speaker position or sponsor such events
d. If you have limited budget, just attend them as a delegate
e. Your tracker would update you on events that could be good to acheive your goals`,
usecases: [
  {
    topic: "Human Resource Team",
    content:
      " Locate top talent at conferences and job fairs that match your hiring needs, fueling more personal interactions.",
    icon: <GTM_UseCase_1 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
  },
  {
    topic: "Tech Team",
    icon: <GTM_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Zero in on developer meetups or hackathons that align with your stack, boosting DevRel success.",
  },
  {
    topic: "Manpower Agency",
    icon: <GTM_UseCase_14 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      " Pinpoint event staffing opportunities by matching positions with relevant event designations or roles.",
  },
  {
    topic: "Event Suppliers",
    icon: <GTM_UseCase_9 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Find skilled labor or specialized contractors through gatherings that attract the right workforce profile.",
  },
],   
metaData:{
  title:"Recruitment & DevRel - whr.ai GTM",
  description:"Meet top talent face-to-face with whr.ai GTM's Recruitment & DevRel solutions. Enhance your hiring strategy with event intelligence.",
  image:`${imageURL}/Recruitement&DevRel.png`,
}
},
  {
    id: "speaking-opportunity",
    image: SpeakingOpportunity,
    imageAltText:"",
    text: "Speaking Opportunity",
    subtext:
      "Make your highly qualified set of C-level executives brand embassadors by getting them speaking positions in front of the audinece that matter to your company",
    problem:
      "From a small startup to a large enterprise, every company has people who should be out there speaking and spreading the message of the company in one form of the other. Challege is in identifying events where you could get in, would be a good fit and also ensuring that there is enough time before the event agenda is made to get an opportunity to justify why your candidate would be a good speaker fit for the event",
    solution:
      "Solution to the dilemma of getting speaker position start with better matching- events should fit your audience profile, but also there should be possibility of the event being interested in what you have to offer. Post matching, we need timing, because if you reach out after agenda is frozen, it might be too late to get in ",
    how: `a. Starting point is to map your companies potential speakers
b. Provide the speaker profile or Linkedin URL and our AI auto creates a speaker profile
c. Set criteria for geography, audience, event size, etc. to get best recommendation

Speaker`,
usecases: [
  {
    topic: "Marketing",
    content:
      "Elevate brand leadership by securing speaker slots at targeted industry events before agendas lock in.",
    icon: <GTM_UseCase_3 color="#6750a4" color2="#FFF6E6"width="62" height="62" />,
  },
  {
    topic: "Tech Team",
    icon: <GTM_UseCase_6 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Place your engineers or CTO on stage at key developer conferences, enhancing company credibility.",
  },
  {
    topic: "Event Planners & M&A",
    icon: <GTM_UseCase_13 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Attract high-profile speakers (or place your own) when orchestrating large conferences or evaluating acquisitions.",
  },
  {
    topic: "Influencers",
    icon: <GTM_UseCase_4 color="#6750a4"color2="#FFF6E6" width="62" height="62" />,
    content:
      "Expand personal reach by identifying events open to influencer panels or keynote opportunities.",
  },
], 
metaData:{
  title:"Speaking Opportunity - whr.ai GTM",
  description:"Secure speaking slots at key events with whr.ai GTM's Speaking Opportunity. Amplify your brand voice and influence the right audience.",
  image:`${imageURL}/SpeakingOpportunity.png`,
}

  },
];
