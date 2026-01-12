"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import formSchema from "@/schema/formSchema";
import z from "zod";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const FooterAction = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-between border bg-black/10 px-10 rounded-xl">
      <div className="flex-1 space-y-10">
        <h2 className="text-4xl font-bold w-md">
          Track Your Time Grow Your Business
        </h2>
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
              Subscribe
              <ArrowUpRight />
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex-1">
        <div className=" rounded-xl m-5">
          <Image
            width={600}
            height={600}
            src={"/laptop-dashboard.png"}
            alt="dashboard"
            className="p-3 w-full rounded-2xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default FooterAction;
