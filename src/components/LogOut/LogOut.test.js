import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import LogOut from "./LogOut";
import store from "../../redux/store/store";

describe("Given a LogOut component", () => {
  describe("When its invoked", () => {
    test("Then it should render a button with a text LogOut", async () => {
      const textToFind = "LogOut";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LogOut />
          </BrowserRouter>
        </Provider>
      );
      const result = screen.getByRole("button", { name: textToFind });
      expect(result.textContent).toBe(textToFind);
    });
  });
});
