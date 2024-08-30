"use client"
import Button from "../button/Button";
import { handleReportOutageButtion, reportOutage,svg } from "../button/buttonMetadata";
import Paper from "../paper/Paper";
import { babyBluePaper } from "../paper/paperMetadata";

const SectionThree = () => {
    return (
        <div className="bg-blue-900 text-white flex justify-around p-10">
      <div className="self-center">
        <h1 className="font-bold text-4xl mb-2">Report your outage</h1>
        <h1 className="font-bold text-4xl mb-4">or emergency!</h1>
        <p className="mb-10">
          Your safety is important to us. If you experience an interruption in service or need to contact us due to an emergency, click the button below.
        </p>
        <Button
          style={reportOutage.style}
          btnLabel={reportOutage.btnLabel}
          handleButtion={handleReportOutageButtion}
          svg={svg}
        />
      </div>
      <div className="self-center">
        <Paper
          style={babyBluePaper.style}
          width={"300px"}
          height={"200px"}
          label={babyBluePaper.paperLabel}
        />
      </div>
    </div>
  );
};

export default SectionThree;

