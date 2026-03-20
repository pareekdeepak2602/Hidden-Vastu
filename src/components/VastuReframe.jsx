import React from "react";
import "./VastuReframe.css";

export default function VastuReframe({
  title = "Most of the Business Owners Don’t Realize…..But",
  subtitle1 = "These aren't random problems.These aren't \"just how business is.”",
  subtitle2 = "These aren't about your capability, your effort, or your intent.",
  highlight = "These are pattern-based symptoms of invisible Vastu and Astro misalignments in your business space and timing.",
  outsideText = "But What If You Could Diagnose Root Cause by Spending Just 90 Minutes…..",
}) {
  return (
    <section className="vastu-reframe-wrapper">
      <div className="container">

        <div className="vastu-reframe-box">

          <h2 className="vastu-reframe-title">
            {title}
          </h2>

          <p className="vastu-reframe-sub">
            {subtitle1}
          </p>

          <p className="vastu-reframe-sub2">
            {subtitle2}
          </p>

          <div className="vastu-reframe-pill">
            {highlight}
          </div>

        </div>

        <p className="vastu-reframe-outside">
          {outsideText}
        </p>

      </div>
    </section>
  );
}