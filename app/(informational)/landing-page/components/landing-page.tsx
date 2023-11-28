"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { firaSansLogo } from "@/lib/fonts";
import {
  CheckCircledIcon,
  ClockIcon,
  RocketIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import { PiChalkboardTeacher, PiChatTeardropDots } from "react-icons/pi";
import { Icons } from "@/components/ui/icons";
import { AiOutlineQrcode, AiOutlinePlus } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsPatchExclamation } from "react-icons/bs";
import { ContinueButton } from "@/components/general/continue-button";
import Lottie from "lottie-react";
import animationData from "@/assets/ship-on-water.json";
export default function LandingPage() {
  return (
    <>
      <section className="space-y-6 pt-6 py-12 md:pt-10 lg:py-24">
        <div className="container flex max-w-[64rem] flex-row items-center space-x-12">
          <div className="flex flex-col items-start gap-8">
            <h1
              className={`${firaSansLogo.className} font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              10x Your Team's Communication With AI
            </h1>
            <p className=" leading-normal sm:text-xl sm:leading-8">
              Enhance your organization with daily AI-generated updates across
              all of your teams, experience seamless status tracking, and absorb
              your company's knowledge effortlessly.
            </p>
            <div className="space-x-4 rounded-lg border border-primary bg-primary p-2 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border rounded-md w-[300px] "
              />
              <ContinueButton name="Join The Waitlist" />
            </div>
          </div>
          <Lottie
            animationData={animationData}
            style={{ width: "90%", height: "90%" }}
          />
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-3">
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
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <IoAnalyticsOutline className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Understand your attendance data at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto justify-center md:max-w-[64rem] border rounded-lg border-black">
          <div className="pt-6 px-6">Coming Soon...</div>
          <div className=" p-6 grid  gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[230px] flex-col justify-between rounded-md p-6">
                <PiChatTeardropDots className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Syllabus Chat Bot</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your syllabus and let your students manage their
                    attendance with our chat bot according to your policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 ">
              <div className="flex h-[230px] flex-col justify-between rounded-md p-6">
                <BsPatchExclamation className="h-12 w-12" />

                <div className="space-y-2 pb-10">
                  <h3 className="font-bold">Daily AI Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll update you daily with AI, so you know what's going on
                    in your class.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[230px] flex-col justify-between rounded-md p-6">
                <div className="flex space-x-4 justify-between">
                  <RocketIcon
                    className="h-12 w-12"
                    style={{ minWidth: "48px" }}
                  />
                  <div className="px-4">
                    {/* 
                    <Link href="/demo">
                      <ContinueButton size="sm" name="Learn More" />
                    </Link>
                    */}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold">Calendar, Tasks and Messaging</h3>
                  <p className="text-sm text-muted-foreground">
                    Attendance is the first phase in our mission. We are
                    building an entire AI-powered dashboard to manage your
                    classroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
