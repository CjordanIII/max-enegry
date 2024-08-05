"use client";

import { useEffect, useState } from "react";

export default function APITestPage() {
  const [name, setName] = useState();

  useEffect(() => {
    fetch("/api/whoAmI")
      .then((res) => res.json())
      .then((data) => setName(data.next));
  }, []);

  return (
    <div>
      <div>
        <p>API Route From </p>{" "}
        <span className="font-bold underline">Client</span>
        <div>Name: {name}</div>
      </div>
    </div>
  );
}
