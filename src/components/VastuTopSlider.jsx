import "./VastuTopSlider.css";

export default function VastuTopSlider() {

const message =
"Does your growth feel stuck despite doing everything right?     |     If Deals Keep Failing and Cash Flow Is Unstable, Read This.";

const loopText = `${message} | ${message} | ${message} | ${message}`;

return (

<div className="vastu-stripe-wrapper">

<div className="vastu-stripe-text">

{loopText}

</div>

</div>

);

}