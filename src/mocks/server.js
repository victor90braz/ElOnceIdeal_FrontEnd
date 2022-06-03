import { setupServer } from "msw/node";
import { handlres } from "./mockUser";

export const server = setupServer(...handlres);
