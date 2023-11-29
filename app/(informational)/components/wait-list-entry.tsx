"use client";

import { ContinueButton } from "@/components/general/continue-button";
import Loading from "@/components/general/loading";
import { Button } from "@/components/ui/button";
import { Suspense, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import animationData from "@/assets/check-mark.json";

import Lottie from "lottie-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/supabase/functions/_lib/database";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
});

export const WaitlistForm = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const supabase = createClientComponentClient<Database>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSending(true);

      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/email-waitlist-entry/${values.email}`;
      const res = await fetch(url);

      console.log(res);

      setSending(false);

      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }

      setSuccess(true);
      setOpen(true);
    } catch (e) {
      setSending(false);
      form.reset();
      const error = e as Error;

      toast({
        title: "Error",
        variant: "destructive",
        description: error.message,
      });
    }
  };

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="sm:w-[475px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              You're In The Waitlist!
            </DialogTitle>
            <DialogDescription className="text-lg">
              We'll let you know when we're ready to launch.
            </DialogDescription>
          </DialogHeader>
          <Lottie animationData={animationData} loop={false} />
          <DialogFooter>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="w-full md:w-[600px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="">
                  <div className="space-x-4 rounded-lg border border-primary bg-primary p-2  ">
                    <div className="flex justify-between items-center space-x-4 ">
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Enter Your Email"
                            {...field}
                            disabled={sending || success}
                          />
                        </FormControl>
                      </FormItem>
                      {sending || success ? (
                        <Button
                          variant={"secondary"}
                          disabled={true}
                          className="w-[175px]"
                        >
                          {success ? "Your In!" : <Loading name="Sending" />}
                        </Button>
                      ) : (
                        <ContinueButton
                          type="submit"
                          className="w-[175px]"
                          name="Join The Waitlist"
                          variant="secondary"
                        />
                      )}
                    </div>
                  </div>
                  <FormMessage />
                </div>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  );
};

export default WaitlistForm;
