import { rest } from "msw";

import { mockToken, mockUserRegister } from "./mockUser";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    (req, res, context) => {
      return res(context.status(200), context.json({ token: mockToken }));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    (req, res, context) => {
      return res(
        context.status(200),
        context.json({
          mockUserRegister,
        })
      );
    }
  ),
];
