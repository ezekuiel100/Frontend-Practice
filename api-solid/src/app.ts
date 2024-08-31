import fastify from "fastify";
import { register } from "./http/controllers/register";
import { authenticate } from "./http/controllers/authenticate";
import { createGym } from "./http/controllers/createGym";

export const app = fastify();

app.post("/users", register);
app.post("/auth", authenticate);
app.post("/createGym", createGym);
