import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = request.body;

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return reply.status(201).send();
}
