import LogoutButton from "@/components/LogoutButton";
import Providers from "@/lib/providers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <div>
      <Providers>
        <div className="flex flex-col items-center h-full">
          <nav className="w-full flex justify-center border-b border-b-foreground/10">
            <div className="max-w-6xl flex grow justify-end items-center text-sm text-foreground">
              <div className="flex flex-row grow">
                <Link
                  href="/"
                  className="py-4 px-6 cursor-pointer hover:bg-slate-100 font-bold"
                >
                  <svg
                    width="20px"
                    height="20px"
                    version="1.1"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m11.906 46.43c-1.7852 1.4883-4.168 0.89453-5.0586-1.1914-1.1914-2.082-0.59375-4.7617 1.1914-5.9531l40.18-30.355c1.1914-0.89453 2.6797-0.89453 3.8672 0l40.18 30.355c1.4883 1.1914 2.082 3.8672 0.89453 5.9531-0.89453 2.082-3.2734 2.6797-5.0586 1.1914l-38.094-28.867-38.094 28.867z" />
                      <path
                        d="m83.633 48.809v37.5c0 2.9766-2.3828 5.6562-5.6562 5.6562h-15.773v-28.57c0-2.9766-2.3828-5.0586-5.0586-5.0586h-13.988c-2.9766 0-5.0586 2.082-5.0586 5.0586v28.57h-16.07c-2.9766 0-5.6562-2.6797-5.6562-5.6562v-37.5l33.633-25.297 33.633 25.297z"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                </Link>
                {user && (
                  <>
                    <Link
                      href="/app/files"
                      className="py-4 px-6 cursor-pointer hover:bg-slate-100 font-bold"
                    >
                      Files
                    </Link>
                    <Link
                      href="/app/chat"
                      className="py-4 px-6 cursor-pointer hover:bg-slate-100 font-bold"
                    >
                      Chat
                    </Link>
                  </>
                )}
              </div>
              <div className="flex flex-row">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block">Hey, {user.email}!</div>
                  <LogoutButton />
                </div>
              </div>
            </div>
          </nav>
          <main className="w-full grow bg-background flex flex-col items-center h-[calc(100%-5rem)]">
            {children}
          </main>
        </div>
      </Providers>
    </div>
  );
}
