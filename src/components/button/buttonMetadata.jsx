export const svg = true;

export const lightBlueBtn = {
  style: `bg-sky-400 px-4 py-2 rounded-md text-white hover:bg-sky-300 active:bg-sky-950 ${
    svg && "flex justify-center gap-2 items-center"
  }`,
  btnLabel: "Start today",
};

export const handleButtion = () => {
  "use client";
  console.log("working");
};
