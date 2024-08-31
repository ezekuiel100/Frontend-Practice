import fastify from "fastify";
import { register } from "./http/controllers/register";
import { authenticate } from "./http/controllers/authenticate";

export const app = fastify();

app.post("/users", register);
app.post("/auth", authenticate);
