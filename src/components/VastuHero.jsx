import React from "react";
import "./VastuHero.css";
import { usePopup } from "../context/PopupContext";

export default function VastuHero({
  bgImage = "https://vastuwithsomiil.com/wp-content/uploads/2026/02/vastu_background.webp",
  videoImage = "https://vastuwithsomiil.com/wp-content/uploads/2026/01/Top-Image.webp",
  badge = `Dear Business Owners, Strategy and System is Always not the Problem, Sometime <span style="font-weight:900;">"SPACE"</span> is!`,
  titlePrefix = "Remove the ",
  titleHighlight = "Hidden Vastu Blocks",
  titleMid = " and 10X Your Business in ",
  titleSuffixHighlight = "2026",
  subtitle = "Join this FREE 90-minute masterclass to discover how to do that, without breaking anything, just solutions & correction.",
  ctaText = "RESERVE MY SEAT",
}) {
  const { openPopup } = usePopup();
  return (
    <header
      className="v-hero-speed"
      style={{
        backgroundImage: `linear-gradient(rgba(45,27,61,0.94), rgba(45,27,61,0.94)), url(${bgImage})`,
      }}
    >
      <div className="container">
        <div
          className="v-badge-speed"
          dangerouslySetInnerHTML={{ __html: badge }}
        />

        <h1>
          {titlePrefix}
          <span className="text-highlight">{titleHighlight}</span>
          {titleMid}
          <span className="text-highlight">{titleSuffixHighlight}</span>
        </h1>

        <p className="v-hero-sub-speed">{subtitle}</p>

        <div className="v-speed-grid">
          <div className="v-speed-l">
            <div className="v-speed-vid">
              <img src={videoImage} alt="Hero Poster" />
            </div>
          </div>

          <div className="v-speed-r">
            <div className="v-speed-card">
              <h3>Workshop Details</h3>

              <div className="v-speed-det-grid">
                <div className="v-speed-info">
                  <span>📅 Date</span>
                  <p>Sun, 22 March 2026</p>
                </div>

                <div className="v-speed-info">
                  <span>⏰ Time</span>
                  <p>12:00 PM-2:00 PM</p>
                </div>

                <div className="v-speed-info">
                  <span>📡 Live On</span>
                  <p>Zoom Platform</p>
                </div>

                <div className="v-speed-info">
                  <span>🗣️ Language</span>
                  <p>Hindi / English</p>
                </div>
              </div>

              <p className="warning">
                ⚠️ Limited to 100 Serious Owners Only
              </p>
            </div>
          </div>
        </div>

        <div className="cta-wrapper">
         <button
  className="v-speed-btn v-pulse"
  onClick={openPopup}
>
  {ctaText}
</button>
        </div>
      </div>
    </header>
  );
}