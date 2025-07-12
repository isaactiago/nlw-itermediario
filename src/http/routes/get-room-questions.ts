import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { desc, eq } from "drizzle-orm";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { z } from "zod/v4";

export const getRoomQuestionsRoute:FastifyPluginCallbackZod = (app) => {
    app.get('/api/v1/rooms/:id/questions', {
        schema: {
            params: z.object({
                id: z.string(),
            })
        }
    }, async (request) => {
        const {id} = request.params

        const results = await db
        .select({
            id: schema.questions.roomId,
            question: schema.questions.question,
            answer: schema.questions.answer,
            createAt: schema.questions.createdAt,
        })
        .from(schema.questions)
        .where(eq(schema.questions.roomId, id))
        .orderBy(desc(schema.questions.createdAt))

        return results

    })
}
