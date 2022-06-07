import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";

describe("Given a NavigationComponent", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a NavigationComponent with four list components", () => {
      render(
        <BrowserRouter>
          <NavigationComponent />
        </BrowserRouter>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(2);
    });
  });
});
