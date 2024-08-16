import PasswordInput from "@/components/password/passwordInputs.jsx";
import { render, screen, fireEvent } from "@testing-library/react";

import {
    lightGrayBox,
    passwordConfirm

} from "../../../components/password/passwordInputsMetadata";

describe("PasswordInput component", () => {
  it("should render the Password input", () => {
    render(<PasswordInput {...lightGrayBox} />);

    const inputElement = screen.getByText(lightGrayBox.label);
    expect(inputElement).toBeInTheDocument();

  });

  it("should render the Confirm Password input", () => {
    render(<PasswordInput {...passwordConfirm} inputId="confirm-password-input" />);

    const inputElement = screen.getByText(passwordConfirm.label);
    expect(inputElement).toBeInTheDocument();
  });

//mock test for password
it("should have the same input and output value", () => {
    render(<PasswordInput {...lightGrayBox} inputId="password-input" />);

    const inputElement = screen.getByLabelText(/password/i);

    const passwordValue = "Some characters";

    fireEvent.change(inputElement, { target: { value: passwordValue } });

    expect(inputElement.value).toBe(passwordValue);
  });

  render(<PasswordInput {...passwordConfirm} inputId="password-input" />);

  const inputElement = screen.getByLabelText(/password/i);

  const passwordValue = "Some characters";

  fireEvent.change(inputElement, { target: { value: passwordValue } });

  expect(inputElement.value).toBe(passwordValue);

});
