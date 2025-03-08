import React from "react";

export const TechnologySection = () => {
  return (
    <section className="tech">
      <div className="tech__content">
        <h2 className="tech__title">
          Ultimate flight experience in high-end tech.
        </h2>
        <div className="tech__showcase">
          <div className="tech__text">
            <span className="tech__highlight">fast</span>
            <div className="tech__details">
              <span className="tech__label">THE VEHICLE</span>
              <span className="tech__name">RE-L</span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab1dac1aa5cd2a5bc3ab68a7c45f68175cb44f761da4fec7104db2271e583f0?placeholderIfAbsent=true"
            className="tech__image"
            alt="Space vehicle RE-L"
          />
        </div>
      </div>
    </section>
  );
};
