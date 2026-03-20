import React from "react";
import "./VastuIndustries.css";

const industriesData = [
  { icon: "fa-solid fa-industry", label: "Manufacturing Plants" },
  { icon: "fa-solid fa-handshake", label: "Trading Houses" },
  { icon: "fa-solid fa-ship", label: "Export Units" },
  { icon: "fa-solid fa-stethoscope", label: "Clinics" },
  { icon: "fa-solid fa-hotel", label: "Hotels" },
  { icon: "fa-solid fa-building", label: "Real Estate Firms" },
  { icon: "fa-solid fa-store", label: "Retail Chains" },
  { icon: "fa-solid fa-briefcase", label: "Service Businesses" },
];

export default function VastuIndustries({
  heading = "Industries Served",
  industries = industriesData,
}) {
  return (
    <section className="v-industries-section">
      <div className="container">

        <h2 className="v-industries-title">{heading}</h2>

        <div className="v-industries-grid">
          {industries.map((item, index) => (
            <div className="v-industry-card" key={index}>
              <div className="v-industry-icon">
                <i className={item.icon}></i>
              </div>

              <h4>{item.label}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}