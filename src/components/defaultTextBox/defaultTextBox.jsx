"use client";

const DefaultTextBox = ({ textBoxLabel, style, placeholderClass }) => {
    return (
        <form>
            <input
                type="text"
                className={`${style} ${placeholderClass}`}
                placeholder={`${textBoxLabel}`}
            />
        </form>
    );
};

export default DefaultTextBox;
