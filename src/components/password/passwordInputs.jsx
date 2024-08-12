"use client";

const PasswordInput = ({ label, inputClassName, labelClassName }) => {
    return (
        <div>
            {label && (
                <label className={`${labelClassName} block text-sm`}>
                    {label}
                </label>
            )}
            <input
                type="password"
                className={inputClassName}
                required
            />
        </div>
    );
};

export default PasswordInput;
