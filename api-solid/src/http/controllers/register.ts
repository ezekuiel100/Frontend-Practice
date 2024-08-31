import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = request.body as {
    name: string;
    email: string;
    password: string;
  };

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return reply.status(409).send({ message: "Email alredy exist!" });
    }

    throw error;
  }
  return reply.status(201).send();
}
