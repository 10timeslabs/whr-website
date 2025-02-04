import Icon1  from '/public/GtmProductHowIcons/GTM-01.svg'
import Icon2  from '/public/GtmProductHowIcons/GTM-02.svg'
import Icon3  from '/public/GtmProductHowIcons/GTM-03.svg'
import Icon4  from '/public/GtmProductHowIcons/GTM-04.svg'
import Icon5  from '/public/GtmProductHowIcons/GTM-05.svg'
import Icon6  from '/public/GtmProductHowIcons/GTM-06.svg'
import Icon7  from '/public/GtmProductHowIcons/GTM-07.svg'
import Icon8  from '/public/GtmProductHowIcons/GTM-08.svg'
import Icon9  from '/public/GtmProductHowIcons/GTM-09.svg'
import Icon10  from '/public/GtmProductHowIcons/GTM-10.svg'
import Icon11  from '/public/GtmProductHowIcons/GTM-11.svg'
import Icon12  from '/public/GtmProductHowIcons/GTM-12.svg'
import Icon13  from '/public/GtmProductHowIcons/GTM-13.svg'
import Icon14  from '/public/GtmProductHowIcons/GTM-14.svg'
import Icon15  from '/public/GtmProductHowIcons/GTM-15.svg'
import Icon16  from '/public/GtmProductHowIcons/GTM-16.svg'
import Icon17  from '/public/GtmProductHowIcons/GTM-17.svg'
import Icon18  from '/public/GtmProductHowIcons/GTM-18.svg'
import Icon19  from '/public/GtmProductHowIcons/GTM-19.svg'
import Icon20  from '/public/GtmProductHowIcons/GTM-20.svg'
import Icon21  from '/public/GtmProductHowIcons/GTM-21.svg'

export const gtmProductJsonData = [
    {
        id: "event-search",
        text: "Find What’s Relevant",
        subtext:
            "Filter events the way you want—by products, audience, size, or location.",
        problem:
            "Millions of events occur yearly, each tailored to specific audiences. An event name alone doesn’t reveal if it’s right for you.",
        solution:
            "Better event matching beyond just category—discover events suited to your needs, budget, and availability.",
        how: [
            {icon : Icon1, content :  "Use Filters: Narrow by product, audience, size, or location"},
            {icon : Icon2, content :  "Pre-Set Options: Quickly apply proven filters built from 100M+ signals" },
            {icon : Icon3, content :  "Direct Company/Web Info: Provide your site or details to auto-match events."}],
        highlights : ["Avoid random guesswork", "Streamlined search & compare", "Maximize ROI by focusing on relevant events"],
        conclusion : {
            heading : "Don’t Just Go—Know Where",
            subheading : "Maximize the value of your time and budget by choosing events that truly fit your goals." 
        }
    },
    {
        id: "ai-assistant",
        text: "Get Timely Notifications with AI",
        subtext:
            "Found relevant events? Get reminders & updates to never miss potential opportunities.",
        problem:
            "Events evolve over time—new speakers, changed schedules—without timely notification, you might miss critical updates.",
        solution:
            "Our AI assistant watches each event’s lifecycle, sending relevant updates or reminders so you can act at the best moment.",
        how: [
            {icon : Icon4, content :  "Ongoing Tracking: Watches your saved events for new announcements"},
            {icon : Icon5, content :  "Contextual Relevance: Only sends notifications if changes affect your goals"},
            {icon : Icon6, content :   "Easy Setup: Flag or unflag events you want monitored"}],
        highlights : ["Timely, curated updates", "Reduced chance of missing an important event detail", "Less manual event re-checking"],
        conclusion : {
            heading : "Never Miss a Signal",
            subheading : "Let the AI keep watch and optimize event ROI without manual effort." 
        }
    },
    {
        id: "smart-tracker",
        text: "Don’t Miss an Opportunity",
        subtext:
            "Why rely on redundant searches? Define your own trackers to receive curated event leads that match your needs.",
        problem:
            "Stumbling on events or one-off searches won’t guarantee the best fit, nor can you ensure you’ve covered all relevant options.",
        solution:
            "Select pre-set trackers or build custom ones that crawl the web to find the best opportunities automatically—no more missed events.",
        how: [
            {icon : Icon7, content : "Define Goals: Choose competitor or prospect-based trackers"},
            {icon : Icon8, content : "AI Refines: Learns from your usage patterns, rating events by relevance"},
            {icon : Icon9, content : "Multiple Use Cases: Product launches, brand expansions, competitor tracking."}],
        highlights : ["Automated discovery", "Saves time & energy", " AI scoring helps you rank event priority"],
        conclusion : {
            heading : "Why Depend on Chance?",
            subheading : "Pre-set your trackers so no opportunity is lost." 
        }
    },
    {
        id: "coordinate",
        text: "Bring Your Team Together",
        subtext:
            "Events touch every department, but internal coordination is tough. Share and align event plans to maximize value without silos.",
        problem:
            "Companies grow, so do their event touches. No single place to see which department is going where or measure overall ROI.",
        solution:
            "A single platform to propose, share, and approve event participation. Everyone sees event-related data, removing guesswork and friction.",
        how: [
            {icon : Icon10, content :"Comprehensive Database: Each team member sees relevant events"},
            {icon : Icon11, content : "Approval Flow: Route event participation requests to the right stakeholders."},
            {icon : Icon12, content : "Collaborative Notes: Keep everyone aligned with in-panel updates."}],
        highlights : ["Simplifies event strategy across departments", "Enhances ROI measurement", "Reduces duplication of efforts"],
        conclusion : {
            heading : "One Unified Approach",
            subheading : "Stop siloed event planning—keep your entire organization on the same page." 
        }
    },
    {
        id: "outreach",
        text: "Faster Response from Organizers",
        subtext:
            "Why wait for answers? Streamline your questions and get decisions faster.",
        problem:
            "Event organizers are lean and pressed for time—repeated follow-ups or unclear contact points lead to slow responses, delaying decisions.",
        solution:
            "An integrated communication layer that routes your inquiries directly to the right organizer contact, prompting quicker, organized responses.",
        how: [
            {icon : Icon13, content :"Unified Portal: Single place to send queries"},
            {icon : Icon14, content : "Organizer Directory: Verified contact data for minimal chasing"},
            {icon : Icon15, content : "Auto-Follow Ups: System reminders if no response in set timeframe"}],
        highlights : ["Quicker responses = faster decisions", "No more lost emails or disorganized question threads", "Central channel for all communications"],
        conclusion : {
            heading : "Streamline Organizer Communication",
            subheading : "Fast answers mean better planning and improved event outcomes." 
        }
    },
    {
        id: "prospect",
        text: "Identify & Set Up Meetings",
        subtext:
            "Discover who’s attending, plan effective meetings, and turn events into lead-generating opportunities.",
        problem:
            "Knowing the right attendees or companies at an event can be guesswork, making it hard to plan strategic meetings that matter.",
        solution:
            "Identify potential leads or partners in advance and schedule time. Turn events into structured meetups or pitch sessions.",
        how: [
            {icon : Icon16, content :"Event Intel: Filter who’ll be there (by job titles, companies, etc.)"},
            {icon : Icon17, content : "Set Schedules: Book meeting slots ahead of time"},
            {icon : Icon18, content :"Centralize Leads: Sync with your CRM for immediate follow-up."}],
        highlights : ["Turn events into closed deals", "Clear scheduling ensures success", "Align your staff around purposeful meetings"],
        conclusion : {
            heading : "Elevate Your Prospecting",
            subheading : "Identify, schedule, and convert high-value leads at the right events." 
        }
    },
    {
        id: "trends-monitor",
        text: "Monitor Industry Signals",
        subtext:
            "Track broader market changes and outliers to stay on top of emerging trends, competition, or shifting audience preferences.",
        problem:
            "The industry is crowded—without comprehensive monitoring, you may miss emerging event categories, new audience shifts, or competitive expansions.",
        solution:
            "A central watchtower that quantifies anomalies in event volume, sponsor presence, or attendance patterns—triggering early alerts for shifts.",
        how: [
            {icon : Icon19, content :"Adjustable Thresholds: Decide what triggers an alert (e.g., new competitor event, large footfall spike)"},
            {icon : Icon20, content : "Visual Dashboards: Graph unusual changes in sponsor or attendee patterns"},
            {icon : Icon21, content : "Email & App Notifications: Get updates when anomalies arise."}],
        highlights : ["Preempt competitor moves", "Spot new market categories", "Data-driven vantage on emerging or shrinking event spaces"],
        conclusion : {
            heading : "Stay Ahead of the Curve",
            subheading : "Monitor and adapt to industry swings, ensuring you never lag behind new trends or competition." 
        }
    }
]