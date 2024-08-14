"use client";

const PasswordInput = ({ label, inputClassName, labelClassName, inputId }) => {
    return (
        <div>
            {label && (
                <label htmlFor={inputId} className={`${labelClassName} block text-sm`}>
                    {label}
                </label>
            )}
            <input
                type="password"
                id={inputId}
                className={inputClassName}
                required
            />
        </div>
    );
};

export default PasswordInput;
