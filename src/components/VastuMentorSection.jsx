import React from "react";
import "./VastuMentorSection.css";
import { usePopup } from "../context/PopupContext";

const achievements = [
"Diagnosed and corrected 200+ business spaces across India",
"Helped 120+ business owners achieve measurable results",
"Trained 100+ professionals in Mahavastu and KB Astrology",
"Successfully applied diagnostic science approach over 120+ times"
];

const philosophy = [
"His approach: Diagnosis, not overview. Science, not superstition. Results, not belief.",
"He doesn't speak like a guru. He speaks like someone who understands P&L statements and operational pressure.",
"When you attend this masterclass, you're learning from someone who's diagnosed and solved this 120+ times."
];

export default function VastuMentorSection(){
const { openPopup } = usePopup();
return(

<section className="v-mentor-section">

<div className="v-mentor-container">

<h2 className="v-mentor-top-head">
Meet Your Mentor
</h2>


<div className="v-mentor-grid">

<div className="v-mentor-img-frame">
<img
src="https://vastuwithsomiil.com/wp-content/uploads/2026/01/4x5.webp"
alt="Somil Gupta"
/>
</div>


<div className="v-mentor-info">

<h2>SOMIL GUPTA</h2>

<h4>
From Designing Spaces to Diagnosing Business Blocks
</h4>

<div className="v-bio-p">

<p>
Most people stay in their lane. Somil Gupta didn't.
</p>

<p>
He started as an interior designer, creating beautiful offices and premium layouts. But he noticed something disturbing: his clients' spaces looked amazing, but their businesses weren't growing.
</p>

<p>
This question led him to Mahavastu, Astrology, and Vedic sciences. He trained under Dr. Khushdeep Bansal, studied the Bhagavad Gita, and started testing these principles on real businesses. The results were undeniable.
</p>

</div>

</div>

</div>


<div className="v-achievements-box">

<h3>
Over 7+ years, SOMIL GUPTA has:
</h3>


<ul className="v-achieve-list">

{achievements.map((item,index)=>{

return(

<li className="v-achieve-item" key={index}>

<i className="fa-solid fa-check"></i>

<span>{item}</span>

</li>

)

})}

</ul>


{philosophy.map((quote,index)=>{

return(

<div className="v-philosophy-quote" key={index}>
"{quote}"
</div>

)

})}


</div>


<div className="v-mentor-cta-wrap">
    <button
  className="v-speed-btn v-pulse v-mentor-btn"
  onClick={openPopup}
>
RESERVE MY SEAT
</button>
</div>

</div>

</section>

)

}