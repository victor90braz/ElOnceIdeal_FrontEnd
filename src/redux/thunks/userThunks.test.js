import { mockUserLogin, mockUserRegister } from "../../mocks/mockUser";
import { server } from "../../mocks/server";

import { loginThunk, registerThunk } from "./userThunks";

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

      const thunk = loginThunk(mockUserLogin);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it's called", () => {
    test("then It should dispatch the loginThunk with the new user data", async () => {
      const dispatch = jest.fn();

      const thunk = registerThunk(mockUserRegister);
      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
