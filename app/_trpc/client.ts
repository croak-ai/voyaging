import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/trpcServer/init/root';
 
export const trpc = createTRPCReact<AppRouter>();