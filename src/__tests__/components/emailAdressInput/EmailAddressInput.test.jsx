import EmailAddressInput from "@/components/emailAddressInput/EmailAddressInput";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  lightGrayEmailBox,
  placeholderClass,
} from "../../../components/emailAddressInput/emailAddressInputMetadata";

describe("Email text box test", () => {
  it("renders", async () => {
    render(
      <EmailAddressInput
        emailBoxLabel={lightGrayEmailBox.emailBoxLabel}
        style={lightGrayEmailBox.style}
        placeholderClass={placeholderClass.className}
      />
    );
    const input = screen.getByPlaceholderText(lightGrayEmailBox.emailBoxLabel);
    await waitFor(() => expect(input).toBeInTheDocument());
  });

  it("should have the same input and output value", () => {
    const userValue = "example@gmail.com";

    render(
      <EmailAddressInput
        emailBoxLabel={lightGrayEmailBox.emailBoxLabel}
        style={lightGrayEmailBox.style}
        placeholderClass={placeholderClass.className}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      lightGrayEmailBox.emailBoxLabel
    );

    fireEvent.change(inputElement, { target: { value: userValue } });

    expect(inputElement.value).toBe(userValue);
  });
});
