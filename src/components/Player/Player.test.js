import { render, screen } from "@testing-library/react";
import { mockPlayer } from "../../mocks/playerMock";

import Player from "./Player";

describe("Given the Player component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading h2 element", () => {
      const expectedResult = "PAC";

      render(<Player player={mockPlayer} />);

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
