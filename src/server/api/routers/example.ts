import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getAllPets: publicProcedure
    .input(z.object({text: z.string() }))
    .query(({}) => {
      return {
        results: [{id: 123, name: 'Jay Cabasag'}, {id: 12345, name: 'Jay Cabsag 2'}]
      }
    })
});
