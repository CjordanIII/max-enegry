// button redners
// correct button label
// onClick works
import Paper from "@/components/paper/Paper";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import { babyBluePaper } from "@/components/paper/paperMetadata";

describe("Papper Componet test", () => {
  it("renders papper", async () => {
    render(
      <Paper
        style={babyBluePaper.style}
        paperLabel={babyBluePaper.paperLabel}
      />
    );
    const papper = screen.getByText(babyBluePaper.paperLabel);

    await waitFor(() => expect(papper).toBeInTheDocument());
  });
});
