"use client";
import Button from "../button/Button";
import {
  findYourSavings,
  handlefindYourSavingsButtion,
  svg,
} from "../button/buttonMetadata";
import Paper from "../paper/Paper";
import { babyBluePaper } from "../paper/paperMetadata";

const SectionOne = () => {
  return (
    <div className="bg-yellow-500 text-blue-950 flex gap-56 justify-around ">
      <div className=" self-center mt-72 mb-52">
        <h1 className="font-bold text-4xl">Use less.</h1>
        <h1 className="font-bold text-4xl">Save More.</h1>
        <p className="my-10">Energy efficiency programs to help you save.</p>
        <Button
          style={findYourSavings.style}
          btnLabel={findYourSavings.btnLabel}
          svg={svg}
          handleButtion={handlefindYourSavingsButtion}
        />
      </div>
      <div className="mt-72 mb-32 ">
        <Paper
          style={babyBluePaper.style}
          width={"506px"}
          height={"449px"}
          label={babyBluePaper.paperLabel}
        />
      </div>
    </div>
  );
};

export default SectionOne;
