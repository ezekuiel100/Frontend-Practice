import Fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const fastify = Fastify();

const database = new DatabaseMemory();

fastify.get("/videos", (request, reply) => {
  const videos = database.list();
  console.log(videos);
  return videos;
});

fastify.post("/videos", (request, reply) => {
  const { title, duration } = request.body;

  database.create({
    title,
    duration,
  });

  return reply.status(201).send();
});

fastify.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  const { title, duration } = request.body;

  database.update(videoId, {
    title,
    duration,
  });

  return reply.status(204).send();
});

fastify.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

fastify.listen({ port: 3005 });
