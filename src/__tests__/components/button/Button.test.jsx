// button redners
// correct button label
// onClick works
import Button from "@/components/button/Button.jsx";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  contactUs,
  handleContactUsButtion,
  handlePayNowButtion,
  handleReportOutageButtion,
  handleSaveButtion,
  handleSendButtion,
  handleSigInRegisterButtion,
  handleSignUpButtion,
  handleStartTodayButtion,
  handleTryTaskeyFreeButtion,
  payNow,
  reportOutage,
  save,
  send,
  signInRegister,
  SignUp,
  startToday,
  svg,
  tryTaskeyFree,
} from "../../../components/button/buttonMetadata";

describe("Button components test", () => {
  it("renders start today", async () => {
    render(
      <Button
        style={startToday.style}
        btnLabel={startToday.btnLabel}
        svg={svg}
        handleButtion={handleStartTodayButtion}
      />
    );
    const buttion = screen.getByText(startToday.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders contact us", async () => {
    render(
      <Button
        style={contactUs.style}
        btnLabel={contactUs.btnLabel}
        svg={svg}
        handleButtion={handleContactUsButtion}
      />
    );
    const buttion = screen.getByText(contactUs.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders report outage", async () => {
    render(
      <Button
        style={reportOutage.style}
        btnLabel={reportOutage.btnLabel}
        svg={svg}
        handleButtion={handleReportOutageButtion}
      />
    );
    const buttion = screen.getByText(reportOutage.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders try taskey free", async () => {
    render(
      <Button
        style={tryTaskeyFree.style}
        btnLabel={tryTaskeyFree.btnLabel}
        svg={svg}
        handleButtion={handleTryTaskeyFreeButtion}
      />
    );
    const buttion = screen.getByText(tryTaskeyFree.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders save", async () => {
    render(
      <Button
        style={save.style}
        btnLabel={save.btnLabel}
        svg={svg}
        handleButtion={handleSaveButtion}
      />
    );
    const buttion = screen.getByText(save.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders send", async () => {
    render(
      <Button
        style={send.style}
        btnLabel={send.btnLabel}
        svg={svg}
        handleButtion={handleSendButtion}
      />
    );
    const buttion = screen.getByText(send.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders payNow", async () => {
    render(
      <Button
        style={payNow.style}
        btnLabel={payNow.btnLabel}
        svg={svg}
        handleButtion={handlePayNowButtion}
      />
    );
    const buttion = screen.getByText(payNow.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders SignUp", async () => {
    render(
      <Button
        style={SignUp.style}
        btnLabel={SignUp.btnLabel}
        svg={svg}
        handleButtion={handleSignUpButtion}
      />
    );
    const buttion = screen.getByText(SignUp.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  it("renders signInRegister", async () => {
    render(
      <Button
        style={signInRegister.style}
        btnLabel={signInRegister.btnLabel}
        svg={svg}
        handleButtion={handleSigInRegisterButtion}
      />
    );
    const buttion = screen.getByText(signInRegister.btnLabel);

    await waitFor(() => expect(buttion).toBeInTheDocument());
  });
  // Button function
  it("function Start tody ", async () => {
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
  it("function contact us", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={contactUs.style}
        btnLabel={contactUs.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(contactUs.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function report outage", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={reportOutage.style}
        btnLabel={reportOutage.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(reportOutage.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function works try taskey free", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={tryTaskeyFree.style}
        btnLabel={tryTaskeyFree.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(tryTaskeyFree.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function save", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={save.style}
        btnLabel={save.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(save.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function send", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={send.style}
        btnLabel={send.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(send.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function payNow", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={payNow.style}
        btnLabel={payNow.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(payNow.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function SignUp", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={SignUp.style}
        btnLabel={SignUp.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(SignUp.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
  it("function signInRegister", async () => {
    // fake function pass though
    const handleButtion = jest.fn();
    const { getByText } = render(
      <Button
        style={signInRegister.style}
        btnLabel={signInRegister.btnLabel}
        svg={svg}
        // fake function
        handleButtion={handleButtion}
      />
    );
    // get the element by what ever
    fireEvent.click(getByText(signInRegister.btnLabel));
    // call fake function
    await waitFor(() => expect(handleButtion).toHaveBeenCalled());
  });
});
