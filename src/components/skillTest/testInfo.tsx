"use client";

import Image from "next/image";
import { type Control, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../layout/button";
import { Input } from "../layout/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../layout/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../layout/form";
import { FormSchema, formSchema } from "@/pages/form";
import { FCProps } from "@/pages/types";
import { initialState, useStoreActions } from "@/pages/store";
import { useRef } from "react";

export const TestInfo = () => {
  return (
    <section className="w-full lg:h-28 h-20 flex justify-between lg:items-start gap-2 items-center lg:p-4 pl-1 p-2 text-black border-slate-200 rounded-lg border-2">
      <div className="h-full flex items-center gap-2">
        <div className="relative lg:h-16 h-10 aspect-square">
          <Image src="/html.png" alt="html" fill className="absolute" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold md:text-lg md:font-bold text-xs">
            Hyper Text Markup Language
          </h1>
          <p className="text-slate-700 md:text-sm text-[0.5rem]">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-900 hover:bg-blue-700 border-2 border-black text-white text-[0.5rem] md:text-base font-bold md:px-5 md:py-2 p-2 md:h-10 h-8 md:rounded-md rounded-md">
            Update
          </Button>
        </DialogTrigger>
        <Modal />
      </Dialog>
    </section>
  );
};

const Modal = () => {
  const { updateState } = useStoreActions();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: initialState,
  });

  function onSubmit(values: FormSchema) {
    updateState(values);
    closeBtnRef.current?.click();
  }

  return (
    <DialogContent removeCloseIcon>
      <DialogHeader>
        <div className="flex w-full justify-between items-center">
          <DialogTitle className="font-bold text-2xl">
            Update scores
          </DialogTitle>
          <div className="relative h-12 aspect-square">
            <Image src="/html.png" alt="html" fill className="absolute" />
          </div>
        </div>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Field control={form.control} name="rank" index={1}>
            Update your <span className="font-bold">Rank</span>
          </Field>
          <Field control={form.control} name="percentile" index={2}>
            Update your <span className="font-bold">Percentile</span>
          </Field>
          <Field control={form.control} name="score" index={3}>
            Update your{" "}
            <span className="font-bold">Current Score (out of 15)</span>
          </Field>
          <DialogFooter className="flex gap-2">
            <DialogClose asChild>
              <Button
                ref={closeBtnRef}
                variant="outline"
                className="border-blue-900 text-blue-900 hover:text-blue-950 border-2"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="group bg-blue-900 hover:bg-blue-700 border-2 border-black text-white font-bold px-5 py-2 rounded-lg"
            >
              Update
              <span className="translate-x-1 group-hover:translate-x-2 transition-all motion-safe:duration-100">
                -&gt;
              </span>
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

const Field: FCProps<{
  control: Control<FormSchema>;
  name: keyof FormSchema;
  index: number;
}> = ({ control, name, index, children }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-4 w-3/5 h-full">
          <div className="min-w-6 min-h-6 rounded-full flex items-center justify-center text-base text-white bg-blue-900">
            {index}
          </div>
          <FormLabel className="md:text-base text-sm">{children}</FormLabel>
        </div>
        <div className="w-2/5">
          <FormControl>
            <Input
              {...field}
              onChange={({ target }) => {
                const value = +target.value;
                if (isNaN(value)) return;
                field.onChange(value);
              }}
              className="focus:ring-0 border-blue-600"
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </div>
      </FormItem>
    )}
  />
);
