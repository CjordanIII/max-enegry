"use client";

import { useState } from "react";

export default function WhoAmIButton({ whoAmIAction }) {
  const [name, setName] = useState();
  return (
    <div>
      <button
        onClick={async () => {
          setName(await whoAmIAction());
        }}
      >
        who am I
      </button>
      {name && <div> you are {name}</div>}
    </div>
  );
}
