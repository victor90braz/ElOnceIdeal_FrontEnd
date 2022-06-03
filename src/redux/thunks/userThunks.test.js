import { mockUserLogin } from "../../mocks/mockUser";
import { server } from "../../mocks/server";

import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "buffon",
  password: "buffon1977",
}));

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      try {
        const thunk = loginThunk(mockUserLogin);
        await thunk(dispatch);
      } catch (error) {}

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
