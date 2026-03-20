import "./VastuModules.css";

const modules = [
{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/03/M01_1080x1080.webp",
title:"Module 1: The Invisible Blocks Framework",
features:[
"Why capable business owners stay stuck despite doing everything right.",
"The 3 invisible layers: Home Vastu → Office Vastu →  (Timing Astro)",
"Case study: How one misalignment blocked ₹2 crore in revenue for a Pune manufacturer",
"Real examples: Before-and-after corrections (without demolition)"
]
},

{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/03/M02_1080x1080.webp",
title:"Module 2: Vastu Diagnosis",
features:[
"The directional energy system: North, South, East, West, and what each zone controls",
"How to diagnose your office/factory layout in 10 minutes",
"5 common Vastu errors that block cash flow and deal closures",
"Why your sitting position as an owner affects decision-making quality"
]
},
{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/03/M03_1080x1080.webp",
title:"Module 3: Home Vastu's Hidden Impact on Business",
features:[
"Why your business doesn't just run from the office, it starts at home",
"How your bedroom direction affects your decision clarity and mental energy",
"The sleeping position error that keeps you in constant stress mode",
"Simple home corrections that business owners overlook"
]
},
{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/03/M04_1_1080x1080.webp",
title:"Module 4: Astrology, Timing & Planetary Influence",
features:[
"How planetary positions affect your business cycles (without astro-jargon)",
"Why do some months you feel unstoppable, and others feel blocked, the timing science",
"How to read your business chart for favorable and unfavorable periods",
"Case study: A trader who recovered ₹18L by correcting timing + Vastu together"
]
},
{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/03/M05_1080x1080.webp",
title:"Module 5: The 3 Quick-Win Corrections",
features:[
"Corrections you can implement within 48 hours (no breaking, no demolition)",
"What to move, what to add, what to remove for immediate flow improvement",
"The follow-up system to track changes"
]
},
{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/03/M06_1080x1080.webp",
title:"Module 6: LIVE Q&A with Somil Gupta",
features:[
"Bring your specific business situation",
"Get directional guidance on your blocks",
"Ask about your current challenges"
]
}
];

export default function VastuModules(){

return(

<section className="v-mod-area">

<div className="container">

<p className="v-mod-head">
Here is everything that we will cover in this 90-minute Workshop
</p>

<div className="v-mod-grid">

{modules.map((module,index)=>{

return(

<div className="v-mod-card" key={index}>

<div className="v-mod-img">
<img src={module.image} alt="Module"/>
</div>

<h4>{module.title}</h4>

<ul className="v-mod-list">

{module.features.map((item,i)=>{

return(
<li key={i}>
<i className="fa-solid fa-circle-right"></i>
<span>{item}</span>
</li>
)

})}

</ul>

</div>

)

})}

</div>

</div>

</section>

)

}