import React from "react";
import "./VastuValueStack.css";
import { usePopup } from "../context/PopupContext";

export default function VastuValueStack() {

const valueList = [
{
icon:"fa-video",
text:"Inside Business Vastu Masterclass (LIVE)",
value:"Real Value: ₹5,000"
},
{
icon:"fa-gift",
text:"Bonus #1: Vastu Growth E-Book Pack",
value:"Real Value: ₹2,000"
},
{
icon:"fa-gift",
text:"Bonus #2: Ready to Use Checklists",
value:"Real Value: ₹2,000"
},
{
icon:"fa-gift",
text:"Bonus #3: Exclusive Community Access",
value:"Real Value: ₹1,000"
}
];
const { openPopup } = usePopup();
return (

<section className="v-val-stack">

<div className="v-val-container">

<div className="v-val-box">

<div className="v-val-head">
<h2>
What Will You Get If You Register Right Now?
</h2>
</div>

{valueList.map((item,index)=>(
<div className="v-val-row" key={index}>

<div className="v-val-left">

<i className={`fa-solid ${item.icon}`}></i>

<p>{item.text}</p>

</div>

<div className="v-val-price">
{item.value}
</div>

</div>
))}

<div className="v-total-bar">
<span>TOTAL VALUE</span>
<span>₹10,000</span>
</div>

</div>


<div className="v-price-section">

<div className="v-offer-lbl">
Limited Offer Price
</div>

<div className="v-tier v-tier-active">

<div className="v-tier-txt">

<h4>First 100 Seats</h4>

<p>with All Bonuses!</p>

</div>

<div className="v-price-tag">
FREE
</div>

</div>

<div className="v-tier v-tier-next">

<p style={{margin:0,fontWeight:700,color:"#444"}}>
Next 200 Seats: ₹499
</p>

</div>

<div className="v-tier v-tier-reg">

<p style={{margin:0,fontWeight:700,color:"#444"}}>
Regular Price: ₹1,999
</p>

</div>

<p className="v-price-today">
Price Today: <span>FREE</span>
</p>

<button
  className="v-speed-btn v-pulse v-lightning-btn"
  onClick={openPopup}
>
RESERVE YOUR SPOT NOW!
</button>
</div>

</div>

</section>

);

}