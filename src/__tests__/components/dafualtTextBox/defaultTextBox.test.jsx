import DefaultTextBox from "@/components/defaultTextBox/defaultTextBox.jsx";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  lightGrayTextBox,
  placeholderColor,
} from "../../../components/defaultTextBox/defaultTextBoxMetadata";

describe("textbox test", () => {
  it("renders", async () => {
    render(
      <DefaultTextBox
        style={lightGrayTextBox.style}
        textBoxLabel={lightGrayTextBox.textBoxLabel}
        className={placeholderColor.className}
      />
    );
    const input = screen.getByPlaceholderText(lightGrayTextBox.textBoxLabel);
    await waitFor(() => expect(input).toBeInTheDocument());
  });

  it("should have the same input and output value", () => {
    const userValue = "Some Name";

    render(
      <DefaultTextBox
        style={lightGrayTextBox.style}
        textBoxLabel={lightGrayTextBox.textBoxLabel}
        className={placeholderColor.className}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      lightGrayTextBox.textBoxLabel
    );

    fireEvent.change(inputElement, { target: { value: userValue } });

    expect(inputElement.value).toBe(userValue);
  });
});
