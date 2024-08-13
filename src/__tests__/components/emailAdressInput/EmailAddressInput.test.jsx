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
    const email = "example@gmail.com";
    const notEmail = "john doe";
    const empty = "";

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

    // email test
    fireEvent.change(inputElement, { target: { value: email } });
    expect(inputElement.value).toBe(email);

    // non-email test
    fireEvent.change(inputElement, { target: { value: notEmail } });
    expect(inputElement.value).toBe(notEmail);

    // empty test
    fireEvent.change(inputElement, { target: { value: empty } });
    expect(inputElement.value).toBe(empty);
  });
});
