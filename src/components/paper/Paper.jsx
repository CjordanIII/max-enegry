"use client";
const Paper = ({ style, paperLabel, width, height }) => {
  // 506
  return (
    <div
      className={`${style}`}
      style={{
        width: width,
        height: height,
      }}
    >
      {paperLabel}
    </div>
  );
};

export default Paper;
