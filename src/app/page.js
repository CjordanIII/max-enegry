"use client";
import { getServerSession } from "next-auth";
import Button from "../components/button/Button.jsx";
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
  noSvg,
  payNow,
  reportOutage,
  save,
  send,
  signInRegister,
  SignUp,
  startToday,
  svg,
  tryTaskeyFree,
} from "../components/button/buttonMetadata.jsx";
1;

import EmailAddressInput from "../components/emailAddressInput/EmailAddressInput.jsx";
import {
  lightGrayEmailBox,
  placeholderClass,
} from "../components/emailAddressInput/emailAddressInputMetadata.jsx";
import "../styles/emailAddressInput.css";

import Paper from "../components/paper/Paper.jsx";
import {
  babyBluePaper,
  darkBluePaper,
} from "../components/paper/paperMetadata.jsx";

import "../styles/defaultTextBox.css";

import DefaultTextBox from "../components/defaultTextBox/defaultTextBox.jsx";
import {
  lightGrayTextBox,
  placeholderColor,
} from "../components/defaultTextBox/defaultTextBoxMetadata.jsx";
import "../styles/defaultTextBox.css";

import PasswordInput from "../components/password/passwordInputs.jsx";
import {
  lightGrayBox,
  passwordConfirm,
} from "../components/password/passwordInputsMetadata.jsx";
import "./globals.css";
export default function Home() {
  const session = async () => {
    const session = await getServerSession();
    return session;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <p>getServerSession Result</p>
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>not logged in</div>
      )}
      <div className="absolute top-15 left-40">
        {/* style 1 */}
        <Button
          style={startToday.style}
          btnLabel={startToday.btnLabel}
          svg={svg}
          handleButtion={handleStartTodayButtion}
        />
        <Button
          style={contactUs.style}
          btnLabel={contactUs.btnLabel}
          svg={noSvg}
          handleButtion={handleContactUsButtion}
        />
        <Button
          style={reportOutage.style}
          btnLabel={reportOutage.btnLabel}
          svg={svg}
          handleButtion={handleReportOutageButtion}
        />
        <Button
          style={tryTaskeyFree.style}
          btnLabel={tryTaskeyFree.btnLabel}
          svg={svg}
          handleButtion={handleTryTaskeyFreeButtion}
        />
        <Button
          style={save.style}
          btnLabel={save.btnLabel}
          svg={noSvg}
          handleButtion={handleSaveButtion}
        />
        <Button
          style={send.style}
          btnLabel={send.btnLabel}
          svg={noSvg}
          handleButtion={handleSendButtion}
        />
        <Button
          style={payNow.style}
          btnLabel={payNow.btnLabel}
          svg={noSvg}
          handleButtion={handlePayNowButtion}
        />
        <Button
          style={signInRegister.style}
          btnLabel={signInRegister.btnLabel}
          svg={noSvg}
          handleButtion={handleSigInRegisterButtion}
        />

        <Button
          style={SignUp.style}
          btnLabel={SignUp.btnLabel}
          svg={noSvg}
          handleButtion={handleSignUpButtion}
        />
      </div>

      <div className="space-y-4">
        <Paper
          style={babyBluePaper.style}
          paperLabel={babyBluePaper.paperLabel}
        />
        <Paper
          style={darkBluePaper.style}
          paperLabel={darkBluePaper.paperLabel}
        />
      </div>

      <div className="absolute top-15 right-40 space-y-4">
        <PasswordInput
          label={lightGrayBox.label}
          inputClassName={lightGrayBox.inputClassName}
          labelClassName={lightGrayBox.labelClassName}
        />
        <PasswordInput
          label={passwordConfirm.label}
          inputClassName={passwordConfirm.inputClassName}
          labelClassName={passwordConfirm.labelClassName}
        />
      </div>

      <div className="space-y-4">
        <Paper
          style={babyBluePaper.style}
          paperLabel={babyBluePaper.paperLabel}
        />
        <Paper
          style={darkBluePaper.style}
          paperLabel={darkBluePaper.paperLabel}
        />
      </div>

      <div className="absolute top-15 right-40">
        <DefaultTextBox
          textBoxLabel={lightGrayTextBox.textBoxLabel}
          style={lightGrayTextBox.style}
          placeholderClass={placeholderColor.className}
        />
      </div>
      <div className="absolute top-15 right-40">
        <EmailAddressInput
          emailBoxLabel={lightGrayEmailBox.emailBoxLabel}
          style={lightGrayEmailBox.style}
          placeholderClass={placeholderClass.className}
        />
      </div>
    </div>
  );
}
