import { useState } from "react";
import "./VastuFaq.css";

export default function VastuFaq() {

const [activeIndex,setActiveIndex] = useState(null);

const faqs = [
{
question:"Q1: What exactly will I learn in this 90-minute masterclass?",
answer:"You will learn the exact framework to identify Vastu blocks in your office and home, how directional energies affect your cash flow, and simple 48-hour corrections to boost your business growth."
},
{
question:"Q2: Who should attend this webinar?",
answer:"This is specifically for business owners, founders, and decision-makers who are working hard but feel stuck at a revenue ceiling despite their best efforts."
},
{
question:"Q3: I'm not sure I believe in Vastu. Should I still attend?",
answer:"Yes. We treat Vastu as a diagnostic science, not a blind belief. If your current strategies aren't giving results, it's worth 90 minutes to look at the Space variable."
},
{
question:"Q3: I'm not sure I believe in Vastu. Should I still attend?",
answer:"Yes. We treat Vastu as a diagnostic science, not a blind belief. If your current strategies aren't giving results, it's worth 90 minutes to look at the Space variable."
},
{
question:"Q4: Will I need to do major demolition or construction?",
answer:"Absolutely not. Our focus is on No-Demolition corrections. We use colors, object placements, and directional shifts that don't require breaking walls."
},
{
question:"Q5: Where will the webinar be held?",
answer:"The masterclass is held live on Zoom. You will receive the link via email and WhatsApp once you register."
},
{
question:"Q6: Will there be a recording if I can't attend live?",
answer:"This is a live interactive session for serious business owners. We highly recommend attending live to get your specific questions answered by Somil Gupta."
},
{
question:"Q7: When will I receive the bonuses?",
answer:"The bonuses will be shared during the live masterclass and sent to your registered email address immediately following the session."
}

];

const toggleFaq = (index)=>{
setActiveIndex(activeIndex === index ? null : index)
}

return (

<section className="footer-faq-premium">

<div className="container">

<h2>FAQs</h2>

<div className="faq-accordion-wrap">

{faqs.map((faq,index)=>(

<div
className={`faq-item-premium ${activeIndex === index ? "active" : ""}`}
key={index}
>

<button
className="faq-question-premium"
onClick={()=>toggleFaq(index)}
>

<span>{faq.question}</span>

<i className="fa-solid fa-chevron-down"></i>

</button>

<div className="faq-answer-premium">

{faq.answer}

</div>

</div>

))}

</div>

</div>

</section>

);

}