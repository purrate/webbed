import React from "react";

export const HeroSection = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">To space and back, safely.</h1>
      <div className="hero__content">
        <div className="hero__search">
          <div className="hero__search-box">
            <label className="hero__search-label">WHERE</label>
            <input
              type="text"
              className="hero__search-input"
              placeholder="Moon"
              aria-label="Destination search"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9da87186fc7bf132709effc039b4a49d519eea85ff75ca1d54da060fe990c62d?placeholderIfAbsent=true"
            className="hero__search-image"
            alt="Space destination"
          />
        </div>
        <button className="hero__book-btn">
          BOOK
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3b33b4de0d686f7997157afcde2cc57f101a180f3c466eab3a3492daf37512?placeholderIfAbsent=true"
            className="hero__book-icon"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="hero__mars">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee56616491c2ce6de21f8b539e52f5953d529200c8717fb1e65f79c5eba86dbc?placeholderIfAbsent=true"
          className="hero__mars-bg"
          alt="Mars surface"
        />
        <span className="hero__mars-text">MARS</span>
      </div>
    </section>
  );
};
