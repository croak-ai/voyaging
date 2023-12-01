import Link from "next/link";
import dynamic from "next/dynamic";

import SignUpForm from "./components/SignUpForm";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <>
      <div className="relative h-screen">
        <div className="flex items-center justify-center h-screen relative z-10">
          <div className="lg:p-8 p-4 border rounded-xl">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Sign up for Voyaging
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your credentials to get started
                </p>
              </div>
              <SignUpForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Button variant="link">
                  <Link href="/signin">Sign in</Link>
                </Button>{" "}
              </p>
              {/* <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{' '}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Privacy Policy
                </Link>
                .
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
