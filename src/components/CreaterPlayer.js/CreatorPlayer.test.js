import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreatorPlayer from "./CreatorPlayer";

const mockUseNavigate = jest.fn();
const mockUseDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate("/home"),
  useDispatch: () =>
    mockUseDispatch({
      name: "",
      image: "",
      speed: "",
      shoot: "",
      pass: "",
      agility: "",
      defense: "",
      strength: "",
    }),
}));

describe("Given a CreatorPlayer component", () => {
  describe("When the word 'Pelé' is written to the name input field", () => {
    test("Then the value of the name input field should be 'Pelé'", () => {
      const labelToFind = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatorPlayer />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should render a text 'Pelé'", () => {
      const nameLabel = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatorPlayer />
          </BrowserRouter>
        </Provider>
      );

      const name = screen.getByLabelText(nameLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(name, inputText);
      userEvent.click(submitButton);

      expect(name).toHaveValue("Pelé");
    });
  });

  describe("When the label Name has a value but one of the others fields are empties and the submit is clicked", () => {
    test("Then the label name should rendered an input with value ''", async () => {
      const nameLabel = "Name";
      const inputText = "Pelé";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatorPlayer />
          </BrowserRouter>
        </Provider>
      );

      const name = screen.getByLabelText(nameLabel);

      const submitButton = screen.getByRole("button");

      userEvent.type(name, inputText);

      await userEvent.click(submitButton);

      expect(name).toHaveValue(inputText);
    });
  });

  describe("When it's invoked", () => {
    test("Then it should render the text 'New Player'", () => {
      const expectedText = "New Player";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <CreatorPlayer />
            </BrowserRouter>
          </Provider>
        </>
      );

      const result = screen.getByRole("heading", { level: 2 });
      expect(result.textContent).toBe(expectedText);
    });
  });

  describe("Given a CreatorPlayer", () => {
    describe("When its called to be rendered", () => {
      test("Then it should create a CreatorPlayer with four list components", () => {
        const listItem = 8;

        render(
          <Provider store={store}>
            <BrowserRouter>
              <CreatorPlayer />
            </BrowserRouter>
          </Provider>
        );

        const displayHeader = screen.getAllByRole("listitem");
        expect(displayHeader).toHaveLength(listItem);
      });
    });
  });

  test("Then the two inputs should render a text '/home'", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreatorPlayer />
        </BrowserRouter>
      </Provider>
    );

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    expect(mockUseNavigate).toHaveBeenCalledWith("/home");
  });
});
