"use client";
import Link from "next/link";
import * as React from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInForm() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [errorState, setErrorState] = React.useState<Error | null>(null);

  if (errorState) {
    throw errorState;
  }

  const callbackUrl = searchParams
    ? searchParams.get("callbackUrl") || "/"
    : "/";

  const errorType = searchParams ? searchParams.get("error") : null;
  let error: string | null = null;
  if (errorType) {
    switch (errorType) {
      case "CredentialsSignin":
        error = "Invalid credentials";
        break;

      case "Callback":
        error = "OAuth Redirect Error Mismatch.";
        break;

      case "OAuthCallback":
        error = `Third-Party Callback Error.`;
        break;

      case "username":
        error = "Username not found";
        break;

      case "OAuthSignin":
        error = "OAuth Sign In Error.";
        break;

      case "OAuthAccountNotLinked":
        error =
          "There is already an account with that username address and the provider you just tried to sign-in with has Account Linking disabled. ";
        break;

      default:
        error = "Unknown Error";
    }
  }

  return (
    <div className="relative h-screen">
      <Card className="w-full sm:w-[500px] max-h-full overflow-y-auto mx-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-4 ">
        <CardContent className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold font-mono">
              <span className="text-2xl">Sign in to Voyaging!</span>
            </CardTitle>
          </div>

          <div className="flex flex-col gap-4">
            <Alert className="text-center text-red-500 border-0">
              {error && (
                <AlertDescription>Log In Error: {error}</AlertDescription>
              )}
            </Alert>

            <form action="/api/auth/sign-in" method="post">
              <div className="gap-2 space-y-5">
                <CardTitle className="text-center text-sm text-muted-foreground">
                  Enter your email & password below to login
                </CardTitle>

                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold mb-0">Email</div>

                  <Label className="sr-only" htmlFor="username">
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="test@testing.com is a valid email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading.credentials}
                    required
                    className="border flex"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold mb-0">Password</div>
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="test is a valid password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isLoading.credentials}
                    required
                    className="border flex"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <Button variant="outline">Sign In</Button>
                  <Button variant="link" className="mt-2">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
