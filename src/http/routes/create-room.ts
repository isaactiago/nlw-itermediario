import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createRoomRoute:FastifyPluginCallbackZod = (app) => {
    app.post('/api/v1/create-room', {
        schema: {
            body: z.object({
                name: z.string().min(2),
                description: z.string().optional(),
            }),
        },
    }, async (request, reply) => {
        const { name, description } = request.body

        const result = await db.insert(schema.rooms).values({
            name,
            description
        }).returning()

        const insertedRoom = result[0]

        if(! insertedRoom) {
            throw new Error("erro ao criar room")
        }

        return reply.status(201).send({ roomID: insertedRoom.id })
    })
}
