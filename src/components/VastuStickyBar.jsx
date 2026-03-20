import { useEffect, useState } from "react";
import "./VastuStickyBar.css";
import { usePopup } from "../context/PopupContext";
export default function VastuStickyBar() {

const initialMinutes = 9;
const initialSeconds = 27;

const initialTime = initialMinutes * 60 + initialSeconds;

const [time,setTime] = useState(initialTime);

useEffect(()=>{

const interval = setInterval(()=>{

setTime(prev=>{
if(prev <= 0){
return initialTime; // restart timer like Elementor
}
return prev - 1;
})

},1000)

return ()=>clearInterval(interval)

},[])

const minutes = String(Math.floor(time/60)).padStart(2,"0")
const seconds = String(time%60).padStart(2,"0")
const { openPopup } = usePopup();
return (

<div className="v-sticky-bar-fixed">

<div className="v-sticky-flex">

<div className="v-sticky-l">

<span className="v-sticky-lbl">
Free Offer Ending Soon:
</span>

<span className="v-sticky-timer">
{minutes}:{seconds}
</span>

</div>

<div className="v-sticky-r">


 <button
  className="v-speed-btn v-pulse v-sticky-btn"
  onClick={openPopup}
>
BOOK MY SEAT NOW
</button>
</div>

</div>

</div>

)

}