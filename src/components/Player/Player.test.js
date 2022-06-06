import { render, screen } from "@testing-library/react";
import { mockPlayer } from "../../mocks/mockPlayer";

import Player from "./Player";

describe("Given the Player component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading h3 element", () => {
      const expectedResult = "Goalkeeper";

      render(<Player player={mockPlayer} />);

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
