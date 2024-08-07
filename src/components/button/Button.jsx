"use client";
import { ArrowRight } from "../../assets/icons/arrowRight.jsx";

const Button = ({ style, btnLabel, svg, handleButtion }) => {
  return (
    <button role="button" onClick={handleButtion} className={style}>
      {btnLabel}
      {svg && <ArrowRight />}
    </button>
  );
};

export default Button;
