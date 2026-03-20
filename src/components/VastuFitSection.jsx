import React from "react";
import "./VastuFitSection.css";
import { usePopup } from "../context/PopupContext";
const perfectList = [
"You're a business owner, founder, or managing partner (final decision-maker)",
"You've been working hard but feel stuck at a revenue ceiling despite effort",
"You're open to Vastu & Astrology — not blind belief, but a diagnostic system",
"You want practical corrections without unnecessary demolition or drama",
"You’re tired of trying harder and want to solve the root cause of business blocks",
"You’re ready to invest 90 minutes to potentially unlock years of stuck growth"
];

const notForList = [
"You're looking for a “get rich quick” scheme or something magical",
"You think Vastu & Astrology are “nonsense” and won't consider them",
"You're not the decision-maker in your business",
"You want someone to “fix everything” without your involvement",
"You expect results without corrections or follow-through",
"You want only free content but have no intention of implementing"

];

export default function VastuFitSection(){
const { openPopup } = usePopup();
return(

<section className="v-fit-area">

<div className="container">

<h2>
WHO IS THIS FOR (AND WHO IT'S NOT FOR)
</h2>

<div className="v-fit-grid">

{/* YES CARD */}

<div className="v-fit-card v-card-yes">

<h3>
This Webinar is PERFECT for you if:
</h3>

<ul className="v-fit-list">

{perfectList.map((item,index)=>{

return(
<li key={index}>
<span className="v-fit-bullet v-bullet-yes">✓</span>
{item}
</li>
)

})}

</ul>

</div>


{/* NO CARD */}

<div className="v-fit-card v-card-no">

<h3>
This Webinar is NOT for you if:
</h3>

<ul className="v-fit-list">

{notForList.map((item,index)=>{

return(
<li key={index}>
<span className="v-fit-bullet v-bullet-no">✕</span>
{item}
</li>
)

})}

</ul>

</div>

</div>


{/* CTA */}

<div className="v-fit-cta">


<button
  className="v-fit-btn"
  onClick={openPopup}
>
Yes, I'm Ready to Remove My Business Blocks
</button>

</div>


<p className="v-seat-line">

<span className="v-seat-top">
Only 100 Seats Available...
</span>

<span className="v-seat-bottom">
First Come, First Served
</span>

</p>

</div>

</section>

)

}