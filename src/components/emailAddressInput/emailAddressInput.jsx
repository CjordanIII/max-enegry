"use client";

const EmailAddressInput = ({ emailBoxLabel, style, placeholderClass }) => {
  return (
    <form>
      <input
        type="email"
        className={`${style} ${placeholderClass}`} // Use the classes here
        placeholder={emailBoxLabel}
        required
      />
    </form>
  );
};

export default EmailAddressInput;
