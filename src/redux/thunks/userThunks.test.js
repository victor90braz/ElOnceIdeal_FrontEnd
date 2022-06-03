import { mockUserLogin } from "../../mocks/mockUser";

import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "buffon",
  password: "buffon1977",
}));

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const thunk = loginThunk(mockUserLogin);
      await thunk(dispatch).catch();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
