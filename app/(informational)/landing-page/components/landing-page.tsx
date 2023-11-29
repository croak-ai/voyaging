"use client";

import { firaSansLogo } from "@/lib/fonts";
// import { RocketIcon } from "@radix-ui/react-icons";
// import { PiChalkboardTeacher, PiChatTeardropDots } from "react-icons/pi";
// import { Icons } from "@/components/ui/icons";
// import { AiOutlineQrcode, AiOutlinePlus } from "react-icons/ai";
// import { SlLocationPin } from "react-icons/sl";
// import { IoAnalyticsOutline } from "react-icons/io5";
// import { BsPatchExclamation } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "@/assets/ship-on-water.json";
import WaitlistForm from "./wait-list-entry";
export default function LandingPage() {
  return (
    <>
      <section className="space-y-6 pt-6 py-12 md:pt-10 lg:py-24">
        <div className="container flex max-w-[124rem] flex-col lg:flex-row items-center space-x-12 lg:space-x-0 lg:space-y-12">
          <div className="flex flex-col items-start gap-8">
            <h1
              className={`${firaSansLogo.className} font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              10x Your Company's Communication With AI
            </h1>
            <p className=" leading-normal sm:text-xl sm:leading-8">
              Supercharge your organization with daily AI-generated updates
              across all of your teams, experience seamless status tracking, and
              absorb your company's knowledge effortlessly.
            </p>

            <WaitlistForm />
          </div>
          <div className="block lg:order-first">
            <Lottie
              animationData={animationData}
              style={{ width: "90%", height: "90%" }}
              className=""
            />
          </div>
        </div>
      </section>
      {/* <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            How It Works
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <Icons.canvas className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Self Host</h3>
                <p className="text-sm text-muted-foreground">
                  Own your data and do whatever you want with it.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <div className="flex space-x-4">
                <AiOutlineQrcode className="h-12 w-12" />
                <div className="flex items-center">
                  <AiOutlinePlus className="h-6 w-6" />
                </div>
                <SlLocationPin className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">QR Codes + Geolocation</h3>
                <p className="text-sm text-muted-foreground">
                  Take attendance quickly with QR codes and geolocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
