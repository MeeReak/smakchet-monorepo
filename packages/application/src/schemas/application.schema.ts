import { z } from "zod";

export const formResponseSchema = z.object({
    eventId:z.string(),
    userInfo:z.object({
        name: z.string(),
        email: z.string(),
        phonenumber: z.string(),
        address: z.string()
    }),
    responses: z.array(
        z.object({
            label: z.string(),
            answer: z.union([z.string(), z.array(z.string())]),
        })
    )
});
