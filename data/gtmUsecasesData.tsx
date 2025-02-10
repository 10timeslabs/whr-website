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
const imageURL = "https://c1.10times.com/whr/gtm/static/image/usecases";
export const gtmUsecasesjsonData = [
  {
    id: "csr",
    image: `${imageURL}/gtm_usecase_csr.jpg`,
    imageAltText:"Two masked volunteers in blue shirts, one holding a basket of greens, symbolizing community and care.",
    //#ECEEE9
    text: "Find Strategic Initiatives",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "20%",
    subtext:
      "Amplify Your Corporate Social Responsibility Initiatives by Connecting with Events Aligned to Your Mission.Discover opportunities to support causes that resonate with your values, build meaningful partnerships, and make a lasting impact.",
    problem:
      "Discovering events that truly focus on social initiatives isn’t easy. There’s often a gap between the causes companies want to support and the available opportunities to make a genuine impact.",
    solution:
      "A solution that can find and evaluate events aligned with your CSR goals. Whether the focus is diversity, climate action, or humanitarian aid, our platform ensures you back the right causes to drive real-world change and strengthen your brand’s social commitment.",
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
        topic: "Brand Building",
        content:
          "Discover socially aligned festivals or community gatherings to enhance your corporate social responsibility footprint.",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
    ],
    metaData:{
      title:"CSR Team - GTM by whr.ai",
      description:"Align your social initiatives with meaningful events, leveraging GTM’s event impact data to maximize your brand’s positive footprint and community engagement.",
      image:`${imageURL}/gtm_usecase_csr.jpg`,
    }
  },
  {
    id: "event-suppliers",
    image: `${imageURL}/gtm_usecase_eventsuppliers.jpg`,
    imageAltText:"",
    //#ECEEE9
    text: "Don’t Miss an Event",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "20%",
    subtext:
      "Events are like perishable goods – their value diminishes if not discovered and acted upon at the right time. Missing them means missing out on opportunities that may never come again.",
    problem:
      "The market is ripe with new events, but also rife with fake listings, duplicates, and outdated details. Traditional prospecting tools like ZoomInfo or Apollo can’t always offer the nuanced, historical data you need to qualify leads effectively, let definitely not help find and track events.",
    solution:
      "A solution built with deep understanding of the event space, ability to seperate fake from real, is extensive coverage across category and region is needed to provide a reliable event prospecting solution. A single source of truth for past & upcoming events that can utilize advanced AI and machine learning, is needed to help suppliers spot genuine opportunities. This solution should be able to forecast repeated events, provide proprietary scores, and simplify lead qualification—ensuring you invest effort only where it counts.",
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
        topic: "Recruitment & DevRel",
        content:
          "Find skilled labor or specialized contractors through gatherings that attract the right workforce profile.",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
    ],
    metaData:{
      title:"Event Suppliers - GTM by whr.ai",
      description:"Uncover high-potential events to pitch your services using GTM’s event forecasting, ensuring you’re always first to win new business opportunities.",
      image:`${imageURL}/gtm_usecase_eventsuppliers.jpg`,
    }
  },
  {
    id: "marketing",
    image: `${imageURL}/gtm_usecase_marketing.jpg`,
    imageAltText:"Handwritten 'Marketing Strategy' with an arrow pointing right on a white background.",
    //#FFFFFF
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 53%)",
    opacity: "50%",
    text: "Capture Real Attention",
    subtext:
      "Context is the fuel that drives marketing. Event creates an opportunity for marketing teams to create context to engage potential audiene.",
    problem:
      "Millions of events occur every year, but the most expensive ones aren’t always the most profitable. Finding relevant events that align with your goals and fit your schedule is hard. Participation decisions often lack data because event intel is cumbersome to gather and compare.",
    solution:
      "A smart solution that empowers marketing teams to leverage the event channel strategically. From early discovery and relevance checks to ROI-driven planning, a platform that can help you pick the right events, match with relevance score and maximize potential return.",
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
        topic: "Competitor Tracking",
        content:
          "Track rival brand strategies offline to adjust campaigns for maximum impact where your competitors appear.",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Prospect Mapping",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Focus marketing efforts at events where your ideal audience or potential leads show up in person.",
      },
      {
        topic: "Brand Building",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Align brand messaging with the perfect event audiences to maximize sponsorship ROI and brand recall.",
      },
      {
        topic: "Speaking Opportunity",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Elevate brand leadership by securing speaker slots at targeted industry events before agendas lock in.",
      },
      {
        topic: "Exhibit & Sponsor",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Select exhibitions or sponsorship packages driven by real-time event data, yielding stronger audience connections.",
      },
    ],
    metaData:{
      title:"Marketing Team - GTM by whr.ai",
      description:"Capture real-time event insights for smarter marketing strategies, capitalizing on on-ground demand and driving brand visibility where it matters most.",
      image:`${imageURL}/gtm_usecase_marketing.jpg`,
    }
  },
  {
    id: "sales-bizdev",
    image: `${imageURL}/gtm_usecase_sales&biz.jpg`,
    imageAltText:"Two people review charts and graphs on paper and a laptop at a table.",
    //#ECEEE9
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "60%",
    text: "Right Place, Right Time",
    subtext:
      "Sales has evolved. In today’s world, building trust is no longer optional—it’s essential. Relationships drive decisions, and authenticity builds lasting connections.",
    problem:
      "Cold emails and calls are losing impact, and AI has commoditized outreach. If everyone can access the same data, craft perfect emails, and automate calls, how does your pitch stand out?",
    solution:
      "For B2B, meeting prospects in person is essential. A real handshake and authentic conversation build trust more effectively than automated outreach. Once they see genuine human engagement, they’re far more likely to respond—because real relationships can’t be faked.A handshake goes a long way!",
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
        topic: "Competitor Tracking",
        content:
          "Spot competitor presence at real-world events to refine your sales approach and target new opportunities.",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Prospect Mapping",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Link your CRM leads to offline events they attend, ensuring high-intent engagement and faster deal cycles.",
      },
      {
        topic: "Product Matching",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Identify expos and trade shows where your products truly resonate, driving better lead generation.",
      },
      {
        topic: "Exhibit & Sponsor",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Target the most profitable exhibitions or sponsor deals by evaluating footfall, competitor presence, and audience fit.",
      },
    ],
    metaData:{
      title:"Sales & Biz Dev - GTM by whr.ai",
      description:"Drive deal-making with GTM’s demand intelligence and event impact insights, pinpointing real-world opportunities to boost pipeline and revenue growth.",
      image:`${imageURL}/gtm_usecase_sales&biz.jpg`,
    }
  },
  {
    id: "tech-team",
    image: `${imageURL}/gtm_usecase_tech.jpg`,
    imageAltText:"A person in a gray hoodie wearing a VR headset, clapping hands under a blue sky with clouds, evoking wonder.",
    //#ECEEE9
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(236, 238, 233, 0.5) 53%)",
    opacity: "100%",
    text: "Finding the Right Talent",
    subtext:
      "What you’re seeking isn’t always seeking you in return. To bridge the gap, you need to be where your future employee is most likely to be. Whether it’s a networking event, a professional gathering, or an industry conference, positioning yourself in the right places creates opportunities to connect with the talent you need",
    problem:
      "Tech conferences, hackathons, and meetups are everywhere, each promising valuable connections. Smaller companies use them for network, while larger firms seek sponsorships or speaking slots. But building relationship with qualified tech-talent is core. With so many choices, it’s tough to pinpoint which ones truly matter.",
    solution:
      "A solution that can help you identify and approach the right tech events for hiring, marketing, and collaboration. From measuring audience relevance to securing timely partnerships, we streamline your decision-making so you can build a stronger tech community and boost your employer brand.Be infront of and create influence targeting the type of candidates you want to hire. ",
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
        topic: "Competitor Tracking",
        content:
          "Monitor competitor product launches or developer meetups, aligning your own DevRel or feature roadmap accordingly.",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Recruitment & DevRel",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Zero in on developer meetups or hackathons that align with your stack, boosting DevRel success.",
      },
      {
        topic: "Speaking Opportunity",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Place your engineers or CTO on stage at key developer conferences, enhancing company credibility.",
      },
    ],
    metaData:{
      title:"Tech Team - GTM by whr.ai",
      description:"Discover tech-focused gatherings and developer hotspots with GTM’s event forecasting, fueling DevRel success and real-time intelligence for product launches.",
      image:`${imageURL}/gtm_usecase_tech.jpg`,
    }
  },
  {
    id: "brand-agency",
    image: `${imageURL}/gtm_usecase_brand.jpg`,
    imageAltText:"Flat lay of a laptop, eyeglasses, gold clips, pink stapler, and a clipboard with a branding diagram, exuding professionalism.",
    //#FDFDFD
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(253, 253, 253, 0.5) 53%)",
    opacity: "100%",
    text: "Data Backed Recommendations",
    subtext:
      "20% of b2b marketing spend goes to events, advise your client with data intel. Let events be the secret sauce that makes your agency stand out.",
    problem:
      "Events can rapidly boost brand awareness, yet they’re often overlooked or under-managed because budgets sit in multiple departments. Agencies advising them, lack a universal tool to guide clients with deep, quantifiable insights on event participation. ",
    solution:
      "A solution that can provide a holistic view on brand leverage via event channel. From evaluating existing participation to recommending new events for exhibiting, high-impact sponsorships or strategic speaking opportunities. With real-time data and performance tracking, agencies can lead clients to smarter event decisions and prove true ROI.",
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
        topic: "Competitor Tracking",
        content:
          "Discover competitor client activations at events to propose more compelling brand strategies for your clients.",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Brand Building",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Curate events that fit client brand ethos, ensuring consistent storytelling across real-world activations.",
      },
      {
        topic: "Product Matching",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Pair client products with thematically aligned gatherings to foster successful brand collaborations.",
      },
      {
        topic: "Exhibit & Sponsor",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Recommend ideal expos or sponsorships that cater to clients’ brand goals, optimizing event marketing ROI.",
      },
    ],
    metaData:{
      title:"Brand Agency - GTM by whr.ai",
      description:"Amplify client campaigns with GTM’s event data, discovering real-world brand alignment opportunities and maximizing sponsor ROI at key gatherings.",
      image:`${imageURL}/gtm_usecase_brand.jpg`,
    }
  },
  {
    id: "community-groups",
    image: `${imageURL}/gtm_usecase_community.jpg`,
    imageAltText:"A group of hands stacked together, symbolizing unity and support, with a blurred background highlighting connection.",
    //#CDCDCD
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(205, 205, 205, 0.5) 53%)",
    opacity: "100%",
    text: "Where To Go",
    subtext:
      "Help your groups leverage events as opportunities to meet, connect, and grow together. Foster deeper relationships, spark collaboration, and build a stronger sense of belonging.",
    problem:
      "Business attend events for knowledge-sharing and networking, but it’s hard to discover the right ones. Members in business communities often rely on internal group chats, messages, but without a structured approach, communities do not solve this problem for their members.",
    solution:
      "A solution that powers your community with an event engine that captures all relevant gatherings and updates them in real time as per your selected filters & criteria. Members can show interest, share plans, and exchange insights in one place—eliminating the guesswork and boosting collective value unlock. Drive engagement and connect your community with minimal effort.",
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
        topic: "",
        content:
          "",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
    ],
    metaData:{
      title:"Community & Groups - GTM by whr.ai",
      description:"Strengthen social ties and coordinate group outings with GTM’s event insights, discovering gatherings that match shared interests.",
      image:`${imageURL}/gtm_usecase_community.jpg`,
    }
  },
  {
    id: "human-resource",
    image: `${imageURL}/gtm_usecase_human-resources.jpg`,
    imageAltText:"Two people at a table with coffee; one holds a clipboard and pen, seemingly leading an interview.",
    //#DEE4E8
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(222, 228, 232, 0.5) 53%)",
    opacity: "100%",
    text: "Improve Inbound Application",
    subtext:
      "Attract top talent effortlessly by building a brand that leaves a lasting impression. Showcase your values, culture, and vision to stand out in a competitive market.When your brand is memorable, hiring becomes simple",
    problem:
      "Jobs are increasingly aspirational, and this trend will keep growing. Employees want to work for companies that lead and make the right kind of noise. They’re more likely to engage if they’ve experienced the brand in a real-world setting.",
    solution:
      "Events present the perfect opportunity for large-scale hiring or headhunting. They let you showcase your brand to potential candidates, creating a lasting impression. By connecting face-to-face, you establish credibility and spark genuine interest, helping you secure top talent.",
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
        topic: "Prospect Mapping",
        content:
          "Identify career fairs or conferences with potential job candidates already in your prospect pipeline.",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Recruitment & DevRel",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Locate top talent at conferences and job fairs that match your hiring needs, fueling more personal interactions.",
      },
    ],
    metaData:{
      title:"Human Resource Team - GTM by whr.ai",
      description:"Optimize hiring with GTM’s event intelligence, connecting you to top talent through demand forecasting and real-time event data for strategic recruitment.",
      image:`${imageURL}/gtm_usecase_human-resources.jpg`,
    }
  },
  {
    id: "influencers",
    image: `${imageURL}/gtm_usecase_influencer.jpg`,
    imageAltText:"Young woman with red hair smiles and waves at a smartphone on a stand in a cozy, minimal home interior.",
    //#BBBEB7
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(187, 190, 183, 0.5) 53%)",
    opacity: "100%",
    text: "Expand Influence",
    subtext:
      "Target the people who matter most, build meaningful connections, and amplify your message where it resonates the strongest. Reaching the right audience isn’t just about visibility—it’s about creating impact and driving real results.",
    problem:
      "Experts, creators, and influencers seek platforms to share knowledge and grow their reach. Time is limited, so finding the right events aligned with your niche is crucial. However, fakes and duplicates can waste precious effort.",
    solution:
      "A solution that curates relevant gatherings and enriches each with proprietary scores, so you know which events are worth your while and can either amplify or monetize your influence. By filtering out fake or low-quality listings, matching your topic of interest, we ensure you focus on opportunities that best match your expertise.",
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
        topic: "Speaking Opportunity",
        content:
          " Expand personal reach by identifying events open to influencer panels or keynote opportunities.",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
    ],
    metaData:{
      title:"Influencers - GTM by whr.ai",
      description:"Engage with relevant audiences by spotting events that match your niche, thanks to GTM’s demand planning and real-time event intelligence.",
      image:`${imageURL}/gtm_usecase_influencer.jpg`,
    }
  },
  {
    id: "manpower-agency",
    image: `${imageURL}/gtm_usecase_manpower.jpg`,
    imageAltText:"Two construction workers in hard hats and vests walk under a bridge with yellow scaffolding, city skyline behind.",
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(187, 205, 218, 0.5) 53%)",
    opacity: "100%",
    text: "Events Create Jobs",
    subtext:
      "Events bring together people, but it also creates million of direct jobs across different expertise. From booth hosts, conference moderators to caterers, designers, security personel, the list goes on and on",
    problem:
      "Events operate more like the gig economy than full-time jobs. Knowing when and where they happen, who is coming—and who’s in charge—matters. Without reliable leads, agencies risk missing out on time sensitive opportunities to pitch their services. ",
    solution:
      "A solution that captures events of all sizes and types across multiple regions, tagging and scoring them for precise matching. You can coordinate internally, reach out to key decision-makers, and manage communications seamlessly—ensuring you never miss the perfect staffing opportunity from providing hosts, speakers, ushers to security guards. ",
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
        topic: "Recruitment & DevRel",
        content:
          " Pinpoint event staffing opportunities by matching positions with relevant event designations or roles.",
        icon: <GTM_Soln_3 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
     
    ],
    metaData:{
      title:"Manpower Agency - GTM by whr.ai",
      description:"Anticipate staffing needs for live events using GTM’s demand prediction, ensuring optimal resource deployment and boosting client satisfaction.",
      image:`${imageURL}/gtm_usecase_manpower.jpg`,
    }
  },
  {
    id: "media-news",
    image: `${imageURL}/gtm_usecase_news&media.jpg`,
    imageAltText:"A person holds an open magazine with articles and images, a cup of black coffee on a white table, evoking calm.",
    //#E7E7E5
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(231, 231, 229, 0.5) 53%)",
    opacity: "100%",
    text: "Find the Next Story",
    subtext:
      "Events bring together the experts and movers & shakers across industries. it drive new product launches and debates on the most critical topics. Chase the stories that matter",
    problem:
      "Events vary in scope and scale, and sifting through them to find relevant angles or notable attendees can be daunting. Manual research is time-consuming and often misses key details, making coverage incomplete or outdated for journalists and reporters",
    solution:
      "A solutions that provides real-time event updates, filtering out irrelevant or duplicate listings. Our enriched data includes speakers, audience demographics, and industry trends, empowering journalists to identify, plan and track key events to get valuable news bites for their stories or news coverage.",
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
        topic: "",
        content:
          "",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
    ],
    metaData:{
      title:"Media & News - GTM by whr.ai",
      description:"Get the scoop on upcoming events with GTM’s demand forecasting, ensuring timely coverage and exclusive stories shaped by real-time intelligence.",
      image:`${imageURL}/gtm_usecase_news&media.jpg`,
    }
  },
  {
    id: "procurement",
    image: `${imageURL}/gtm_usecase_procurement.jpg`,
    imageAltText:"Smiling man in a white T-shirt points up with both hands, wearing a smartwatch against a light gray background.",
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
        topic: "Competitor Tracking",
        content:
          "Keep tabs on competitor vendor relationships at trade shows to negotiate better supply deals.",
        icon: <GTM_Soln_1 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Product Matching",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "Focus on relevant vendor fairs that match your procurement needs, improving supply chain relations.",
      },
     
    ],
    metaData:{
      title:"Procurement - GTM by whr.ai",
      description:"Source new suppliers at relevant expos and trade shows, guided by GTM’s demand predictions and real-time event insights for better contract negotiation.",
      image:`${imageURL}/gtm_usecase_procurement.jpg`,
    }
  },
  {
    id: "research-consultancy",
    image: `${imageURL}/gtm_usecase_research&consulting.jpg`,
    imageAltText:"Abstract image with transparent layers, blue patterns, dots, and circles, symbolizing data flow and tech.",
    //#E7E7E5
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(231, 231, 229, 0.5) 53%)",
    opacity: "100%",
    text: "Window to the World Economy",
    subtext:
      "If there is an industry, there are events for it. Events are a window to peer into the world economy and how its changeing",
    problem:
      "Gloabl trade is noisy, with changing dynamics. With millions of events each year, many vanish while new ones appear, often exaggerating their size or influence and reflection on changing industry & trade trends. Adding fakes, duplicates, and cancellations makes it even harder to compile accurate, actionable data for research or strategy around real-world footprint of companies through events.",
    solution:
      "A solution that can cut through the noise by consolidating and verifying event data worldwide. This platform need to provide reliable metrics like size, event host credibility, participant quality and overall influence scores, letting you focus on deeper analysis instead of data cleanup. Get ready to use data of events that can be linked with other datasets around trade & commerce to identify valubale trends. ",
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
        topic: "Product Matching",
        content:
          "Analyze upcoming summits or niche conferences containing topics pertinent to your client research.",
        icon: <GTM_Soln_6 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
    ],
    metaData:{
      title:"Research & Consultancy - GTM by whr.ai",
      description:"Generate forward-looking market reports and track emerging industry trends with GTM’s event data, unlocking deep insights for strategic advisories.",
      image:`${imageURL}/gtm_usecase_research&consulting.jpg`,
    }
  },
  {
    id: "venue",
    image: `${imageURL}/gtm_usecase_venue.jpg`,
    imageAltText:"Outdoor amphitheater with red seats and a metallic structure, set against skyscrapers under a clear sky.",
    //#F4E8EB
    blurColor:
      "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(244, 232, 235, 0.5) 53%)",
    opacity: "100%",
    text: "More Days of Events",
    subtext:
      "Identify New Prospects, Track Potential Customers, and Empower Your Venue Sales Team with Smart Coordination.Leverage cutting-edge tools to uncover fresh opportunities, monitor leads in real-time, and streamline communication for seamless teamwork.",
    problem:
      "Finding, verifying, and updating event planner information is tedious, never-ending, and prone to human error. There’s no single source of truth to catch new launches, rehosts, or shifts in dates, geography and venues. Identifying new opportunities requires extensive and reliable tracking",
    solution:
      "A solution that delivers a unified feed that constantly tracks and verifies events, enriched with size, history, location, event type and associated companies. Filter by the criteria that matter to your venue, streamlining sales, scheduling, and resource allocation. No more manual searching and excel sheet mapping to find new prospects or past customers",
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
        topic: "Brand Building",
        content:
          "Promote your venue’s rebranding or unique experience by joining forces with events echoing your brand values.",
        icon: <GTM_Soln_4 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Exhibit & Sponsor",
        icon: <GTM_Soln_7 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          "If you exhibit at other fairs or do cross-promotions, spot high-value gatherings for improved brand synergy.",
      },
    ],
    metaData:{
      title:"Venue - GTM by whr.ai",
      description:"Fill your calendar with top-tier events using GTM’s demand insights and footfall data, optimizing booking strategies for maximum revenue.",
      image:`${imageURL}/gtm_usecase_venue.jpg`,
    }
  },
  {
    id: "event-planners-and-ma",
    image: `${imageURL}/gtm_usecase_m&a.jpg`,
    imageAltText:"Close-up of wooden puzzle pieces with one missing, revealing a dark blue background, symbolizing unfinished work.",
    //#CBA88B
    blurColor:
      "linear-gradient(180deg, rgba(203, 168, 139, 0.5) 10%, rgba(203, 168, 139, 0.5) 53%)",
    opacity: "100%",
    text: "Benchmark & Identify Opportunities",
    subtext:
      "In order to grow its essential to both benchmark against existing competion and identy gaps in the market to either sclae, launch new events, expand into new markets or acquire other event IPs",
    problem:
      "Mapping events within a category or region is often unreliable, and identifying complementary segments or new markets requires heavy research. Without structured, credible data, growth or acquisition strategies is challenging. Depending on manual excel sheet and self-reported data can be misleading",
    solution:
      "A solution that has years of historical tracking and continuously updates a global database of events, enriched with advanced scoring and demand signals. Planners and M&A teams can filter, benchmark, and uncover new opportunities for partnerships, expansions, or strategic takeovers—all in one unified platform. Avoid the grunt work and narrow down on the real-value. ",
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
        topic: "Prospect Mapping",
        content:
          "Discover potential partnership leads or acquisition targets by mapping prospects to relevant gatherings.",
        icon: <GTM_Soln_2 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
      },
      {
        topic: "Speaking Opportunity",
        icon: <GTM_Soln_5 color="#6750a4" color2="#FFF6E6" width="62" height="62" />,
        content:
          " Attract high-profile speakers (or place your own) when orchestrating large conferences or evaluating acquisitions.",
      },
      
    ],
    metaData:{
      title:"Event Planners & M&A - GTM by whr.ai",
      description:"Align your event portfolio and potential acquisitions with GTM’s footfall data, competitor analysis, and demand insights for strategic expansion.",
      image:`${imageURL}/gtm_usecase_m&a.jpg`,
    }
  },
];
