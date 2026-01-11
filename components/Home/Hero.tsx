"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import formSchema from "@/schema/formSchema";
import z from "zod";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex mt-20 gap-10 min-h-screen w-full">
      <div className="flex-1 bg-green-70 space-y-5">
        <div className="flex items-center gap-2 rounded-full bg-black/10 p-1 w-2xs">
          <Image
            className="h-5 w-5 object-cover"
            height={5}
            width={5}
            src={"/logo.png"}
            alt="logo"
          />
          <p className="text-sm">Start Time Tracking Built To Simplify</p>
        </div>
        <h2 className="text-4xl font-bold w-md">
          Track Every Second Boost Every Project
        </h2>
        <p className="text-md w-sm">
          Tracking task and projects real time the insightfull report
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-black/10 rounded-full w-sm flex items-center justify-between p-1.5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      required
                      {...field}
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full border-none outline-none pl-5"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="rounded-full">
              Start Today
              <ArrowUpRight />
            </Button>
          </form>
        </Form>
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-black/10 px-8 py-1 rounded-full">
            <Image height={25} width={25} src={"/apple.png"} alt="apple logo" />
            <div className="-space-y-2">
              <p className="text-xs pt-1">Download on the</p>
              <h3 className="text-xl font-semibold">App Store</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-black/10 px-8 py-1 rounded-full">
            <Image
              height={25}
              width={25}
              src={"/microsoft.png"}
              alt="apple logo"
            />
            <div className="-space-y-2">
              <p className="text-xs pt-1">Get it from</p>
              <h3 className="text-xl font-semibold">Microsoft</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <Image
          className=""
          width={600}
          height={600}
          priority
          src={"/hero-image.png"}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
