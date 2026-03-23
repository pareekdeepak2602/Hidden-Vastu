import { useState, useEffect } from "react";
import "./VastuPopup.css";

export default function VastuPopup({ isOpen, closePopup }) {

const [step,setStep] = useState(1)
const [noSubmitted,setNoSubmitted] = useState(false)

const [formData,setFormData] = useState({
name:"",
number:"",
city:"",
gmail:"",
category:""
})

const [noFormData,setNoFormData] = useState({
name:"",
email:"",
phone:""
})


useEffect(()=>{

if(isOpen){
document.body.style.overflow = "hidden"
}else{
document.body.style.overflow = "auto"
}

return ()=> document.body.style.overflow="auto"

},[isOpen])


const handleStatus = (value)=>{

if(value === "yes" || value === "planning"){
setStep(2)
}else{
setStep(3)
}

}
const handleChange = (e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
})
}

const handleNoChange = (e)=>{
setNoFormData({
...noFormData,
[e.target.name]:e.target.value
})
}
const handleSubmit = async (e)=>{
e.preventDefault()

const webhookURL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzNDA0MzY1MjZmNTUzMTUxM2Ei_pc"

const utm = getUTMParams()

const data = {
name: formData.name,
number: formData.number,
city: formData.city,
gmail: formData.gmail,
business_category: formData.category,

utm_source: utm.utm_source,
utm_medium: utm.utm_medium,
utm_campaign: utm.utm_campaign,
utm_term: utm.utm_term,
utm_content: utm.utm_content
}

await fetch(webhookURL,{
method:"POST",
mode:"no-cors",
body:JSON.stringify(data)
})

window.location.href="https://vastuwithsomiil.com/vip-page/"

}
const handleNoSubmit = async (e)=>{
e.preventDefault()

const webhookURL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMTA0M2M1MjZhNTUzNzUxMzUi_pc"

const utm = getUTMParams()

const data = {
name: noFormData.name,
email: noFormData.email,
phone: noFormData.phone,

utm_source: utm.utm_source,
utm_medium: utm.utm_medium,
utm_campaign: utm.utm_campaign,
utm_term: utm.utm_term,
utm_content: utm.utm_content
}

await fetch(webhookURL,{
method:"POST",
mode:"no-cors",
body:JSON.stringify(data)
})

setNoSubmitted(true)

}
const getUTMParams = ()=>{

const params = new URLSearchParams(window.location.search)

return {
utm_source: params.get("utm_source") || "",
utm_medium: params.get("utm_medium") || "",
utm_campaign: params.get("utm_campaign") || "",
utm_term: params.get("utm_term") || "",
utm_content: params.get("utm_content") || ""
}

}
if(!isOpen) return null

return (

<div
className="v-popup-overlay v-active"
onClick={(e)=>{ if(e.target.classList.contains("v-popup-overlay")) closePopup() }}
>

<div className="v-popup-modal">

<div className="v-popup-head">

<button
className="v-popup-close"
onClick={closePopup}
>
<i className="fa-solid fa-xmark"></i>
</button>

<h2>Reserve Your Seat</h2>

<p>
Fill this form to confirm your registration.
You’ll receive details on WhatsApp & Email.
</p>

</div>


<div className="v-popup-body">

{/* STEP 1 */}

{step === 1 && (

<div className="v-step-one">

<label className="v-question-label">

Are you currently a Business Owner / Superpreneur / Entrepreneur?

<span className="v-required">*</span>

</label>

<div className="v-radio-group">

<label className="v-radio-item">
<input
type="radio"
name="business"
onChange={()=>handleStatus("yes")}
/>
<span>Yes</span>
</label>

<label className="v-radio-item">
<input
type="radio"
name="business"
onChange={()=>handleStatus("no")}
/>
<span>No</span>
</label>

<label className="v-radio-item">
<input
type="radio"
name="business"
onChange={()=>handleStatus("planning")}
/>
<span>Planning to Start</span>
</label>

</div>

</div>

)}

{/* YES FORM */}

{step === 2 && (

<form className="v-registration-form" onSubmit={handleSubmit}>

<div className="v-form-grid">

<div className="v-form-field">
<label>NAME</label>
<input
name="name"
placeholder="Enter your full name"
onChange={handleChange}
required
/>
</div>

<div className="v-form-field">
<label>NUMBER</label>
<input
name="number"
placeholder="Enter mobile number"
onChange={handleChange}
required
/>
</div>

<div className="v-form-field">
<label>CITY</label>
<input
name="city"
placeholder="Enter your city"
onChange={handleChange}
required
/>
</div>

<div className="v-form-field">
<label>GMAIL</label>
<input
name="gmail"
placeholder="Enter gmail address"
onChange={handleChange}
required
/>
</div>

<div className="v-form-field v-full-row">

<label>BUSINESS CATEGORY</label>

<select
name="category"
onChange={handleChange}
required
>

<option>Select your business category</option>

<option>Manufacturing</option>
<option>Retail / Trading</option>
<option>Service Business</option>
<option>Consultant</option>
<option>Real Estate / Construction</option>
<option>Hotel / Restaurant / Café</option>
<option>Other</option>

</select>

</div>

</div>

<button className="v-submit-btn">
SUBMIT & RESERVE SEAT
</button>

<p className="v-form-note">
⚠️ Limited seats. Please submit accurate details.
</p>

</form>

)}

{/* NO FORM */}

{step === 3 && (

<div>

{!noSubmitted && (

<form
className="v-no-form"
onSubmit={handleNoSubmit}
>

<div className="v-form-field">
<label>Name</label>
<input name="name" onChange={handleNoChange} required/>
</div>

<div className="v-form-field">
<label>Email</label>
<input name="email" onChange={handleNoChange} required/>
</div>

<div className="v-form-field">
<label>Phone</label>
<input name="phone" onChange={handleNoChange} required/>
</div>

<button className="v-submit-btn">
Save My Seat
</button>

</form>

)}

{noSubmitted && (

<div className="v-no-message">

<h3 style={{color:"red"}}>No problem at all.</h3>

<p>
Right now, we work exclusively with active business owners responsible for operational outcomes.
</p>

<p>
If and when you step into that role — we’ll be here.
</p>

<p>
Growth isn’t built overnight. It’s built brick by brick, with direction and structure.
</p>

<p style={{fontWeight:"600"}}>
Wishing you clarity and momentum on your journey ahead.
</p>

</div>

)}

</div>

)}

</div>

</div>

</div>

)

}