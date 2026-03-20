import React from "react";
import "./VastuBonusSection.css";
import { usePopup } from "../context/PopupContext";
const bonuses = [
{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/02/bonus_1_somil.webp",
tag:"Bonus: #1",
title:"Vastu Growth E-Book Pack",
desc:"Identify the exact Vastu points blocking your growth"
},

{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/02/Bonus_2_somil.webp",
tag:"Bonus: #2",
title:"Ready to Use Checklists",
desc:"Spot business vastu issues most owners miss."
},

{
image:"https://vastuwithsomiil.com/wp-content/uploads/2026/02/bonus_3_somil.webp",
tag:"Bonus: #3",
title:"Exclusive Community Access",
desc:"Ask questions, get clarity & implement with support."
}
];

export default function VastuBonusSection(){
const { openPopup } = usePopup();
return(

<section className="v-bonus-section">

<div className="v-bonus-container">

<div className="v-bonus-head">
<h2>Also, The High-Value Add-Ons</h2>
</div>

<div className="v-bonus-grid">

{bonuses.map((item,index)=>{

return(

<div className="v-bonus-card" key={index}>

<img
src={item.image}
alt="Bonus"
className="v-bonus-img"
/>

<div className="v-bonus-tag">
<i className="fa-solid fa-gift"></i>
{item.tag}
</div>

<h4>{item.title}</h4>

<p>{item.desc}</p>

</div>

)

})}

</div>

<div className="v-bonus-cta-wrap">


<button
  className="v-speed-btn v-pulse v-bonus-btn"
  onClick={openPopup}
>
Register Today & Get These FREE Bonuses (Worth ₹5,000)
</button>
</div>

</div>

</section>

)

}
