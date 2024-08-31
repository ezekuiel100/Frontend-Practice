import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export async function createGym(request: FastifyRequest, reply: FastifyReply) {
  const { name, description, phone, latitude, longitude } = request.body as {
    name: string;
    description?: string;
    phone: string;
    latitude: string;
    longitude: string;
  };

  try {
    await prisma.gym.create({
      data: {
        name,
        description,
        phone,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
    });
  } catch (error: any) {
    return reply.status(500).send({ message: error.message });
  }

  return reply.status(201).send();
}
