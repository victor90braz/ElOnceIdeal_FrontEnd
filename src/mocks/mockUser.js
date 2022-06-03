import { rest } from "msw";

export const mockUserLogin = {
  username: "buffon",
  password: "buffon1977",
};

export const handlres = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mockUserLogin,
      })
    );
  }),
];
