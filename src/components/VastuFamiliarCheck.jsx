import React from "react";
import "./VastuFamiliarCheck.css";
import { usePopup } from "../context/PopupContext";

const defaultPainPoints = [
  "You're putting in 12-hour days, doing everything you're supposed to do, but your business feels like it's running on a treadmill.",
  "Deals reach the final stage, contract drafted, terms agreed, client interested, and then... silence. You don’t know what’s wrong.",
  "Your sales are decent. Billing is happening. But somehow, cash never stays.",
  'Everything was flowing smoothly in your old office or factory, even if it was smaller, even if it wasn\'t "premium."',
  "You hire good people. You treat them well. Fair salary. Decent environment. But they don't stay.",
  "You watch your competitors make moves, and they just work. Meanwhile, you make the same moves... and they flop."
];

export default function VastuFamiliarCheck({
  heading = "Ask Yourself Honestly, Does This Sound Familiar?",
  painPoints = defaultPainPoints,
  nodHeading = "If You Nodded to Even 2 of These... You Need to Hear This....",
  ctaText = "I Want to Know the Invisible Blocks in My Business"
}) {
  const { openPopup } = usePopup();

  return (
    <section className="vastu-fam-check">

      <div className="container">

        <h2>{heading}</h2>

        <div className="v-pain-container">
          {painPoints.map((point, index) => (
            <div className="v-pain-item" key={index}>
              <span>❌</span>
              <p>{point}</p>
            </div>
          ))}
        </div>

        <h3 className="v-nodded-head">{nodHeading}</h3>
 <button
  className="v-speed-btn v-pulse"
  onClick={openPopup}
>
  {ctaText}
</button>

      </div>

    </section>
  );
}