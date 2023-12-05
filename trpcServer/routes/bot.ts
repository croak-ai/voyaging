import { z } from 'zod';
import { publicProcedure, router } from '../init/trpc';
//import { supabase } from '@/supabase/client';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Database } from '@/supabase/functions/_lib/database';

//This is huge. This allows uus to call supabase functions from trpc
//Tomorrow lets maybe package this up better and then put our server in a
//docker container
//const supabase = createRouteHandlerClient<Database>({cookies})
 
export const botRouter = router({
  botUser: publicProcedure
    .input(z.string().nullish())
    .query(async (opts) => {
      const { input } = opts;
      // Retrieve the user with the given ID

      //Create a function that will call this when invoked.
      //For some reason calling this funciton too early will cause an async storage bug
      const supabase = createRouteHandlerClient<Database>({cookies})
      const user = await supabase.auth.getSession();
      return user;
    }),
});