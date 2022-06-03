import { rest } from "msw";

export const mockUserLogin = {
  id: "1977",
  username: "buffon",
  password: "buffon1977",
  name: "gialuiggi",
};

export const mockUserRegister = {
  username: "buffon",
  password: "buffon1977",
  name: "gialuiggi",
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
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          mockUserLogin,
        })
      );
    }
  ),
];
