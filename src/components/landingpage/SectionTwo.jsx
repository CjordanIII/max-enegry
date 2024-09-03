"use client";
import Button from "../button/Button";
import {
  handleseeMoreStorysButtion,
  seeMoreStorys,
  svg,
} from "../button/buttonMetadata";
import Paper from "../paper/Paper";
import { babyBluePaper } from "../paper/paperMetadata";

const SectionTwo = () => {
  return (
    <>
      <div className="flex  justify-center">
        <div className="flex-col justify-between">
          <div className="-mt-5 flex justify-center gap-96">
            <div className="mt-24 mb-0 p-0 self-center  ">
              <h1 className="font-bold text-4xl mb-0 p-0">Our Stories</h1>
              <p className="mt-5 mb-0 p-0">
                Energy efficiency programs to help you save.
              </p>
            </div>
            <Paper
              width={"506px"}
              height={"449px"}
              style={babyBluePaper.style}
              label={babyBluePaper.paperLabel}
            />
          </div>
          <div className="flex justify-end  gap-8 mt-8">
            <div className="flex-col ">
              <div className="mb-5">
                <Paper
                  style={babyBluePaper.style}
                  height={"180px"}
                  width={"900px"}
                  label={babyBluePaper.paperLabel}
                />
              </div>
              <Paper
                style={babyBluePaper.style}
                height={"180px"}
                width={"900px"}
                label={babyBluePaper.paperLabel}
              />
            </div>
            <div className="flex gap-9">
              <Paper
                style={babyBluePaper.style}
                width={"230px"}
                height={"375px"}
                label={babyBluePaper.paperLabel}
              />
              <Paper
                style={babyBluePaper.style}
                width={"230px"}
                height={"375px"}
                label={babyBluePaper.paperLabel}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 ">
        <Button
          style={seeMoreStorys.style}
          btnLabel={seeMoreStorys.btnLabel}
          svg={svg}
          handleButtion={handleseeMoreStorysButtion}
        />
      </div>
    </>
  );
};

export default SectionTwo;
