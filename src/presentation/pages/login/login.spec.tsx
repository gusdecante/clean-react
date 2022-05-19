import React from "react";
import { render } from "@testing-library/react";
import Login from "./login";

describe("Login Component", () => {
  test("Should start with initial state", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);
    const submitButton = getByTestId("submit") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = getByTestId("email-status") as HTMLButtonElement;
    expect(emailStatus.title).toBe("Campo obrigatório");
    expect(emailStatus.textContent).toBe("&#9899;");
    const passwordStatus = getByTestId("password-status") as HTMLButtonElement;
    expect(passwordStatus.title).toBe("Campo obrigatório");
    expect(passwordStatus.textContent).toBe("&#9899;");
  });
});
