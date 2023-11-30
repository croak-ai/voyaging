import { Redis } from "upstash_redis";

console.log(`Function "email-waitlist-entry" up and running!`);
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};
Deno.serve(async (_req) => {
  try {
    const url = Deno.env.get("UPSTASH_REDIS_REST_URL");
    const token = Deno.env.get("UPSTASH_REDIS_REST_TOKEN");

    if (!url || !token) {
      return new Response(
        JSON.stringify({
          error: "Missing environment variables.",
        }),
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    const redis = new Redis({
      url: url,
      token: token,
    });

    const urlParts = _req.url.split("/");
    const email = urlParts[urlParts.length - 1]; // get the last element of the array

    // Regular expression for email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!email || !emailRegex.test(email)) {
      console.log(`Invalid email: ${email}`);
      return new Response(JSON.stringify({ error: "Your Email Is Invalid!" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Check if email already exists in email set
    const isMember = await redis.sismember("email-waitlist-set", email);
    if (isMember) {
      console.log(`Email already exists in waitlist: ${email}`);
      return new Response(
        JSON.stringify({ message: `${email} is already in the waitlist!` }),
        {
          status: 200,
          headers: corsHeaders,
        }
      );
    }

    // Add email to email set
    await redis.sadd("email-waitlist-set", email);

    // Add email to waitlist
    const currentTime = new Date().toISOString();
    await redis.sadd("email-waitlist-time-added", {
      email,
      timeAdded: currentTime,
    });

    console.log(`Added ${email} to the waitlist!`);

    return new Response(
      JSON.stringify({ message: `${email} has been added to the waitlist!` }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
