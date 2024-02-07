import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { DashboardIcon } from "@radix-ui/react-icons";



const Hero = () => {
  return (
    <main>
      <section className="mb-10">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl  ">
            Quick,Easy & minimal
            <br />
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Streamline Your Day, Boost Productivity – Your Personal Command
            Center for Effortless To-Do List Mastery!"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild>
              <Link href='/dashboard'>
                <DashboardIcon className="mr-2 h-4 w-4" /> Open App
                </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/thefool76/ZapNote">
                <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
