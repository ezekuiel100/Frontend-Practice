import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";

import { register } from "./http/controllers/register";
import { authenticate } from "./http/controllers/authenticate";
import { createGym } from "./http/controllers/createGym";
import { profile } from "./http/controllers/profile";
import { verifyJWT } from "./meddleware/varify-jwt";

import "dotenv/config";
import { env } from "process";

export const app = fastify();

if (!env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

app.register(fastifyJwt, { secret: env.JWT_SECRET });

app.post("/users", register);
app.post("/auth", authenticate);
app.post("/createGym", createGym);

app.get("/profile", { onRequest: [verifyJWT] }, profile);
