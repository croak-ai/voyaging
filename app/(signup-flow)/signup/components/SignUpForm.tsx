"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignUpForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action="/api/auth/sign-up" method="post">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <div className="text-sm mb-0">First Name</div>
            <Label className="sr-only" htmlFor="firstname">
              First Name
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Rick"
              type="name"
              autoCapitalize="true"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border"
            />
          </div>
          <div className="grid gap-1">
            <div className="text-sm mb-0">Last Name</div>
            <Label className="sr-only" htmlFor="lastname">
              Last Name
            </Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Leinecker"
              type="name"
              autoCapitalize="true"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border"
            />
          </div>
          <div className="grid gap-1">
            <div className="text-sm mb-0">Email</div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="rick@leinecker.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border"
            />
          </div>
          <div className="grid gap-1">
            <div className="text-sm mb-0">Password</div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="********"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border"
            />
          </div>

          <div className="grid gap-1">
            <div className="text-sm mb-0">Repeat your password</div>
            <Label className="sr-only" htmlFor="passwordrepeat">
              PasswordRepeat
            </Label>
            <Input
              id="passwordrepeat"
              placeholder="********"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border"
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
