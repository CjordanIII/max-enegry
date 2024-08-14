// button redners
// correct button label
// onClick works
import Button from "@/components/button/Button.jsx";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  handleButtion,
  startToday,
  svg,
} from "../../../components/button/buttonMetadata";

describe("Buttion Componet test", () => {
  it("renders buttion", async () => {
    render(
      <Button
        style={startToday.style}
        btnLabel={startToday.btnLabel}
        svg={svg}
        handleButtion={handleButtion}
      />
    );
    const buttion = screen.getByText(startToday.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("function works", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={startToday.style}
        btnLabel={startToday.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever

    fireEvent.click(getByText(startToday.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());

  });
});
