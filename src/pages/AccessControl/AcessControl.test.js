import { render, screen } from "@testing-library/react";
import AccessControl from "./AccessControl";

const mockUseNavigate = jest.fn();
let mockLogged;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  useSelector: () => ({ logged: mockLogged }),
}));

describe("Given a 'AccessControl' component", () => {
  describe("When 'logged' it's false", () => {
    test("Then it should call navigate and it should return null", () => {
      mockLogged = false;

      render(<AccessControl />);

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When 'logged' it's true and it has a heading children", () => {
    test("Then it should render the heading children", () => {
      mockLogged = true;

      render(
        <AccessControl>
          <h1>El Once Ideal</h1>
        </AccessControl>
      );
      const receivedHeading = screen.getByRole("heading", {
        level: 1,
        name: /El Once Ideal/i,
      });

      expect(receivedHeading).toBeInTheDocument();
    });
  });
});
