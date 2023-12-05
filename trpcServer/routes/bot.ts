import { z } from 'zod';
import { publicProcedure, router } from '../init/trpc';
import { supabase } from '@/supabase/client';
 
export const botRouter = router({
  botUser: publicProcedure
    .input(z.string().nullish())
    .query(async (opts) => {
      const { input } = opts;
      // Retrieve the user with the given ID
      //const user = await supabase.auth.getSession();
      return 'Walsh';
    }),
});