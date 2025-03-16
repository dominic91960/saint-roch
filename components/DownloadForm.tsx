"use client";

import React, { useContext, useRef, useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { ToastContext } from "@/store/toast-context";
import { DownloadFormSchema, DownloadFormType } from "@/lib/validation";

const DownloadForm: React.FC<{ link: string }> = ({ link }) => {
  const { addToast } = useContext(ToastContext);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const [isAgreed, setIsAgreed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DownloadFormType>({
    resolver: zodResolver(DownloadFormSchema),
  });

  const onFormSubmit = async (submitData: DownloadFormType) => {
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        body: JSON.stringify({ ...submitData, catalog: link.slice(1) }),
      });

      const { message } = await res.json();

      if (!res.ok) {
        addToast("ERROR", message);
        return;
      }

      addToast("SUCCESS", message);
      if (linkRef.current) linkRef.current.click();
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send message.";
      addToast("ERROR", errorMessage);
    }
  };

  return (
    <form
      className="flex flex-col gap-[1.5em]"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <p>Please provide the following information before download.</p>

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

      {/* Company name */}
      <div>
        <input
          type="text"
          className="w-full border border-black/20 p-[1em] focus:border-black/40 focus:outline-none"
          {...register("companyName")}
          placeholder="Company name"
        />
        {errors.companyName && (
          <p className="mt-[0.2em] text-[0.9em] text-primary">
            {errors.companyName.message}
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

      <div className="flex items-center gap-[0.3em]">
        <Checkbox
          id="download-privacy-checkbox"
          checked={isAgreed}
          onCheckedChange={(checked: boolean | "indeterminate") => {
            if (checked !== "indeterminate") setIsAgreed(checked);
          }}
        />
        <label htmlFor="download-privacy-checkbox">
          I have read and agree to the{" "}
          <Link
            href="/terms-and-conditions"
            className="underline hover:text-primary"
          >
            terms and conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="underline hover:text-primary">
            privacy policy
          </Link>
        </label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        className="rounded-none py-[1em] uppercase after:bg-white/10 after:duration-1000"
        disabled={!isAgreed || isSubmitting}
      >
        Download
      </Button>

      <Link
        ref={linkRef}
        href={link}
        target="_blank"
        download
        className="hidden"
      ></Link>
    </form>
  );
};

export default DownloadForm;
