import React from "react";
import { render, screen } from "@testing-library/react";
import EditPage from "./EditPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

describe("Given a EditPage component", () => {
  describe("When it's rendered and the noteId param matches with a note", () => {
    test("Then it should show the text 'Agility'", () => {
      const expectedText = "Agility";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPage />
          </BrowserRouter>
        </Provider>
      );

      const element = screen.getByLabelText(expectedText);

      expect(element).toBeInTheDocument();
    });
  });
});
