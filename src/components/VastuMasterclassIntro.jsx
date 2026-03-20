import React from "react";
import "./VastuMasterclassIntro.css";
import { usePopup } from "../context/PopupContext";

const points = [
  "The directional energy system: North, South, East, West, and what each zone controls",
  "How to diagnose your office/factory layout in 10 minutes",
  "5 common Vastu errors that block cash flow and deal closures",
  "How your bedroom direction affects decision clarity",
];

export default function VastuMasterclassIntro() {
  const { openPopup } = usePopup();
  return (
    <section className="vastu-masterclass-intro-area">

      <div className="container">

        <div className="master-head-top">
          <h2>The Business Vastu Masterclass</h2>
        </div>

        <div className="intro-wrap-box">

          <div className="intro-left-c">
            <div className="intro-thumb-frame">
              <img
                src="https://vastuwithsomiil.com/wp-content/uploads/2026/03/Somil-Gupta-2-scaled-1.webp"
                alt="Masterclass"
              />
            </div>
          </div>

          <div className="intro-right-c">

            <h4>In Just 90 Minutes, You'll Learn:</h4>

            <ul className="intro-l-list">
              {points.map((item, index) => {
                const num = String(index + 1).padStart(2, "0");

                return (
                  <li key={index}>
                    <span>{num}.</span>
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>

          </div>

        </div>
        

        <div className="intro-cta-outer-wrap">
           <button
  className="v-speed-btn v-pulse btn-ditto"
  onClick={openPopup}
>
  Register Now
</button>
        </div>

        <p className="intro-outside-line">
          Here is everything that we will cover in this 90-minute Workshop
        </p>

      </div>

    </section>
  );
}