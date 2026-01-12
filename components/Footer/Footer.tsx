"use client";
import Logo from "../Logo/Logo";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import formSchema from "@/schema/formSchema";
import z from "zod";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-6 items-center justify-between border p-10 my-20 bg-black/10 rounded-xl">
        <div className="col-span-2 ">
          <Logo />
          <div className="mt-3 w-2xs space-y-3">
            <p className="text-sm">
              Empower your teams streamlined your process and achive your goals
              with
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-black/10 rounded-full w-full flex items-center justify-between p-1.5"
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
                          placeholder="Enter Email"
                          className="w-full border-none outline-none pl-3"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="rounded-full">
                  Subscribe
                  <ArrowUpRight />
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">Product</h3>
          <div className="flex flex-col gap-3 mt-5">
            <Link href={"/"}>Pricing </Link>
            <Link href={"/"}>Intregation </Link>
            <Link href={"/"}>Features </Link>
            <Link href={"/"}>Features </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">Company</h3>
          <div className="flex flex-col gap-3 mt-5">
            <Link href={"/"}>Pricing </Link>
            <Link href={"/"}>Intregation </Link>
            <Link href={"/"}>Features </Link>
            <Link href={"/"}>Features </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">Resourse</h3>
          <div className="flex flex-col gap-3 mt-5">
            <Link href={"/"}>Pricing </Link>
            <Link href={"/"}>Intregation </Link>
            <Link href={"/"}>Features </Link>
            <Link href={"/"}>Features </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-center mb-10">
            Download App
          </h3>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex items-center w-52 bg-black/10 px-8 py-1 rounded-full">
              <Image
                height={25}
                width={25}
                src={"/apple.png"}
                alt="apple logo"
              />
              <div className="-space-y-2">
                <p className="text-xs pt-1">Download on the</p>
                <h3 className="text-xl font-semibold">App Store</h3>
              </div>
            </div>
            <div className="flex items-center w-52 gap-1 bg-black/10 px-8 py-1 rounded-full">
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
      </div>
      <div className="border-2 border-b"></div>
      <div className="mb-5 flex items-center justify-between">
        <p>CopyRight @ Task Manager 2025, All Right Resolver</p>
        <div>
          <Link href={"/"}>Your Privacy | </Link>
          <Link href={"/"}>Terms And Condition</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
