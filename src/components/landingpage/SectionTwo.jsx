import Paper from "../paper/Paper";
import { babyBluePaper } from "../paper/paperMetadata";

const SectionTwo = () => {
  return (
    <div className="flex  justify-around">
      <div className="mt-24 mb-0 p-0 ">
        <h1 className="font-bold text-4xl mb-0 p-0">Our Stories</h1>
        <p className="mt-5 mb-0 p-0">
          Energy efficiency programs to help you save.
        </p>
      </div>
      <div className="-mt-5 flex-col ">
        <div className="flex justify-end">
          <Paper
            width={"506px"}
            height={"449px"}
            style={babyBluePaper.style}
            label={babyBluePaper.paperLabel}
          />
        </div>
        <div className="flex  gap-8 mt-8">
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
  );
};

export default SectionTwo;
