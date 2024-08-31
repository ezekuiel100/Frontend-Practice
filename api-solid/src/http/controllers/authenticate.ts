import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { email, password } = request.body as {
    email: string;
    password: string;
  };

  const userEmail = await prisma.user.findUnique({
    where: { email },
  });

  if (!userEmail || userEmail?.password != password) {
    return reply.status(400).send({ message: "User or password invalid!" });
  }

  return reply.status(200).send();
}
