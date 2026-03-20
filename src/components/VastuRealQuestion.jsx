import React from "react";
import "./VastuRealQuestion.css";
import { usePopup } from "../context/PopupContext";

export default function VastuRealQuestion() {
const { openPopup } = usePopup();
const questions = [
<>
Are you going to spend another <span className="vastu-rq-gold">6 months</span> guessing what's wrong?
</>,

<>
Or are you going to invest <span className="vastu-rq-gold">90 minutes</span> to finally diagnose the root cause?
</>
];

return (

<section className="vastu-rq-section">

<div className="vastu-rq-container">

<div className="vastu-rq-card">

<h2 className="vastu-rq-title">
SO HERE'S THE REAL QUESTION:
</h2>

{questions.map((item,index)=>(
<p className="vastu-rq-line" key={index}>
{item}
</p>
))}

<p className="vastu-rq-choice">
The choice is yours.
</p>

<p className="vastu-rq-strong">
Because the risk isn't in attending. The risk is in staying stuck.
</p>

<div style={{marginTop:"2.2rem"}}>


 <button
  className="v-speed-btn v-pulse vastu-rq-btn"
  onClick={openPopup}
>
 YES, I'M READY TO IDENTIFY MY BUSINESS BLOCKS
</button>

</div>

</div>

</div>

</section>

);

}