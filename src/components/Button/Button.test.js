/* eslint-disable no-undef */
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import React from "react";

describe("Button test cases", () => {
    test("if button rendered succesfully", () => {
        const { getByTestId } = render(<Button />);
        expect(getByTestId("button-test-id")).toBeTruthy;
    });

    test("if onClick is triggered once", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button handleClick={handleClick} />);
        fireEvent.click(getByTestId("button-test-id"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test("if onClick is triggered not more than once", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button handleClick={handleClick} />);
        fireEvent.click(getByTestId("button-test-id"));
        expect(handleClick).not.toHaveBeenCalledTimes(2);
    });
    test("if snapshot is matching", () => {
        const handleClick = jest.fn();
        const { baseElement } = render(
            <Button
                type="button"
                label="button"
                style={{ color: "white" }}
                handleClick={handleClick}
            />
        );
        expect(baseElement).toMatchSnapshot();
    });
});
