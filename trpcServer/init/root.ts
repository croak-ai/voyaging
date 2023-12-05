import { router } from "./trpc";
import { botRouter } from "../routes/bot";

export const appRouter = router({
  bot: botRouter,
});

export type AppRouter = typeof appRouter;
