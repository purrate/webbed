import React from "react";

export const WorldsSection = () => {
  return (
    <section className="worlds">
      <div className="worlds__content">
        <h2 className="worlds__title">Worlds beyond your imagination.</h2>
        <div className="worlds__images">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd36eefa3368b41396a5b5b651195005d880f50ebc9b382acbdec4e0be267333?placeholderIfAbsent=true"
            className="worlds__image"
            alt="Space world visualization"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff93f5e881fb5263a93f634b4028994e65b9ca76398ed4fa6396a9514838db4?placeholderIfAbsent=true"
            className="worlds__image"
            alt="Space destination"
          />
        </div>
        <div className="worlds__footer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed7e25b4d95062df6efc834398b9e4fc5b573227cd19bf7a0ff9a8337c398232?placeholderIfAbsent=true"
            className="worlds__icon"
            alt=""
            aria-hidden="true"
          />
          <span className="worlds__discover">Discover more</span>
        </div>
      </div>
    </section>
  );
};
