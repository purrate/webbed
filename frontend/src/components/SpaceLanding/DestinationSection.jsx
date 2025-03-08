import React from "react";

export const DestinationSection = () => {
  return (
    <section className="destinations">
      <div className="destinations__grid">
        <div className="destinations__card">
          <div className="destinations__content">
            <span className="destinations__label">NEXT VOYAGE</span>
            <h2 className="destinations__title">MARS</h2>
            <span className="destinations__number">9</span>
            <p className="destinations__date">17 July, California</p>
            <button className="destinations__book">BOOK</button>
          </div>
        </div>
        <div className="destinations__card">
          <div className="destinations__content">
            <span className="destinations__label">
              UPCOMING NEW DESTINATION
            </span>
            <h2 className="destinations__title">SATURN</h2>
            <p className="destinations__date">Coming Soon</p>
            <span className="destinations__alert">ALERT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
