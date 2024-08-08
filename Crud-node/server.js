import Fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const fastify = Fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

fastify.get("/videos", async (request, reply) => {
  const query = request.query.search;

  const videos = database.list(query);
  return videos;
});

fastify.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

fastify.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  const { title, description, duration } = request.body;

  await database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

fastify.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

fastify.listen({ port: 3005 });
