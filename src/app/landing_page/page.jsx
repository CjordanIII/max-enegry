"use client";
import Button from "../../components/button/Button";
import {
  findYourSavings,
  handlefindYourSavingsButtion,
  svg,
} from "../../components/button/buttonMetadata";
import Paper from "../../components/paper/Paper";
import { babyBluePaper } from "../../components/paper/paperMetadata";

const LandingPage = () => {
  return (
    <div className="bg-yellow-500 text-blue-950 flex gap-56 justify-around ">
      <div className=" self-center">
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
      <Paper style={babyBluePaper.style} label={babyBluePaper.paperLabel} />
    </div>
  );
};

export default LandingPage;
