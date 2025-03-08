import React from "react";

export const AdventureSection = () => {
  return (
    <section className="adventure">
      <div className="adventure__content">
        <p className="adventure__description">
          With SPACED, you can get a sense of high-end fast & safe space
          travelling. Most of what space agencies consider to be long distance
          trips can be completed in one day. Consider how much time and money we
          were spending in the past to travel to another worlds.
        </p>
        <div className="adventure__cards">
          <div className="adventure__card">
            <h3 className="adventure__card-title">Explore</h3>
            <p className="adventure__card-desc">
              BASEJUMP FROM EUROPAS STEEP CLIFFS
            </p>
          </div>
          <div className="adventure__card">
            <h3 className="adventure__card-title">View</h3>
            <p className="adventure__card-desc">
              DISCOVER THE EARTH FROM ABOVE
            </p>
          </div>
          <div className="adventure__card adventure__card--active">
            <h3 className="adventure__card-title">Relax</h3>
            <p className="adventure__card-desc">OBSERVE THE SUNSET ON MARS</p>
          </div>
          <div className="adventure__card adventure__card--active">
            <h3 className="adventure__card-title">Inspect</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
