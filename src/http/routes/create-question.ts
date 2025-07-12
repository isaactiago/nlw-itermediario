import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createQuestionRoute:FastifyPluginCallbackZod = (app) => {
    app.post('/api/v1/rooms/:roomId/create-question', {
        schema: {
            params: z.object({
                roomId: z.string(),
            }),
            body: z.object({
                question: z.string().min(1),
            }),
        },
    }, async (request, reply) => {
        const { roomId } = request.params
        const { question } = request.body

        const result = await db
        .insert(schema.questions)
        .values({roomId, question})
        .returning()

        const insertedQuestion = result[0]

        if(! insertedQuestion) {
            throw new Error("erro ao criar room")
        }

        return reply.status(201).send({ questionID: insertedQuestion.id })
    })
}
