"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { discoveryMediumData } from "@/lib/constants";
import { ContactFormSchema, ContactFormType } from "@/lib/validation";
import { Button } from "../ui/button";

const ContactForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onFormSubmit = async (submitData: ContactFormType) => {
    console.log(submitData);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-[1.5em]"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      {/* Name */}
      <div>
        <input
          type="text"
          className="w-full border border-black/20 p-[1em] focus:border-black/40 focus:outline-none"
          {...register("name")}
          placeholder="Name"
        />
        {errors.name && (
          <p className="mt-[0.2em] text-[0.9em] text-primary">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="text"
          className="w-full border border-black/20 p-[1em] focus:border-black/40 focus:outline-none"
          {...register("email")}
          placeholder="Email"
        />
        {errors.email && (
          <p className="mt-[0.2em] text-[0.9em] text-primary">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          className="w-full border border-black/20 p-[1em] focus:border-black/40 focus:outline-none"
          {...register("phoneNumber")}
          placeholder="Phone number"
        />
        {errors.phoneNumber && (
          <p className="mt-[0.2em] text-[0.9em] text-primary">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      {/* Medium */}
      <div>
        <Select
          onValueChange={(value: string) =>
            setValue("discoveryMedium", value, { shouldValidate: true })
          }
        >
          <SelectTrigger className="w-full border border-black/20 bg-white p-[1em] focus:border-black/40">
            <SelectValue placeholder="How did you find us?" />
          </SelectTrigger>
          <SelectContent align="center" className="rounded-none">
            {discoveryMediumData.map(({ value, label }) => (
              <SelectItem key={label} value={value} className="rounded-none">
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.discoveryMedium && (
          <p className="mt-[0.2em] text-[0.9em] text-primary">
            {errors.discoveryMedium.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        className="rounded-none py-[1em] uppercase after:bg-white/10 after:duration-1000"
        disabled={isSubmitting}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
