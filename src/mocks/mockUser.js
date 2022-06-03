import { rest } from "msw";

export const mockUserLogin = {
  username: "buffon",
  password: "buffon1977",
};

export const mockUserRegister = {
  username: "maicol",
  password: "maicol1998",
  name: "maikemaike",
};

export const handlres = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          mockUserRegister,
        })
      );
    }
  ),
];
