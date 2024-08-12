import DefaultTextBox from "@/components/defaultTextBox/defaultTextBox.jsx";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";


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
});

