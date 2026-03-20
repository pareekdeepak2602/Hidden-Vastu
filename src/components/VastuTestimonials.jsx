import React, { useState } from "react";
import "./VastuTestimonials.css";

const defaultVideos = [
  {
    video_type: "standard",
    youtube_url: "https://www.youtube.com/embed/F9ePvOrWflM",
    video_thumbnail:
      "https://vastuwithsomiil.com/wp-content/uploads/2026/03/thumb1-1.webp",
    button_style: "default",
  },
  {
    video_type: "standard",
    youtube_url: "https://www.youtube.com/embed/DwNYi9yEIwQ",
    video_thumbnail:
      "https://vastuwithsomiil.com/wp-content/uploads/2026/03/thumb-2-1.webp",
    button_style: "gold",
  },
  {
    video_type: "short",
    youtube_url: "https://www.youtube.com/embed/aPXyFClaaO8",
    video_thumbnail:
      "https://vastuwithsomiil.com/wp-content/uploads/2026/03/thumb-3-1.webp",
    button_style: "gold",
  },
  {
    video_type: "short",
    youtube_url: "https://youtube.com/embed/VbhIxauqLHw?si=P5G2wgqmt0VWZ1GF",
    video_thumbnail:
      "https://vastuwithsomiil.com/wp-content/uploads/2026/03/thumb5-1.webp",
    button_style: "gold",
  },
  {
    video_type: "short",
    youtube_url: "https://youtube.com/embed/w_sr7i84q3E?si=TiUDQ_c8b8y7DuAx",
    video_thumbnail:
      "https://vastuwithsomiil.com/wp-content/uploads/2026/03/thumb-4-1.webp",
    button_style: "gold",
  },
  {
    video_type: "short",
    youtube_url: "https://youtube.com/embed/OZupEKVG0RA?si=Jkn0iEv58CMshBxO",
    video_thumbnail:
      "https://vastuwithsomiil.com/wp-content/uploads/2026/03/OZupEKVG0RA-SD.webp",
    button_style: "gold",
  }
];

export default function VastuTestimonials({
  intro = `They all said the same thing: <span style="font-weight:500;">"Something wasn't working in our favor</span>, but we couldn’t pinpoint what."`,
  heading = `Then they discovered their Vastu blocks. Made simple corrections. And This Happened:`,
  videos = defaultVideos,
}) {
  const [playing, setPlaying] = useState(null);

  return (
    <section className="vastu-testi-section">
      <div className="container">
        <h3
          className="vastu-testi-intro"
          dangerouslySetInnerHTML={{ __html: intro }}
        />

        <h2
          className="vastu-testi-heading"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        <div className="vastu-testi-grid">
          {videos.map((item, index) => {
            const isShort = item.video_type === "short";
            const isPlaying = playing === index;

            return (
              <div
                key={index}
                className={`vastu-facade ${
                  isShort ? "vastu-short-wrap" : ""
                }`}
                onClick={() => setPlaying(index)}
              >
                {isPlaying ? (
                  <iframe
                    src={`${item.youtube_url}?autoplay=1&rel=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="testimonial video"
                  />
                ) : (
                  <>
                    {isShort ? (
                      <div className="vastu-short-inner">
                        <img
  src={item.video_thumbnail}
  className="vastu-thumb"
  alt="Short Review"
  loading="lazy"
  decoding="async"
  width="360"
  height="640"
/>
                      </div>
                    ) : (
<img
  src={item.video_thumbnail}
  className="vastu-thumb"
  alt="Testimonial"
  loading={index === 0 ? "eager" : "lazy"}
  decoding="async"
  width="640"
  height="360"
/>
                    )}

                    <div
                      className={`vastu-overlay ${
                        item.button_style === "gold"
                          ? "vastu-overlay-gold"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}