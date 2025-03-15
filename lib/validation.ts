import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string({ message: "Name is required" }).min(1, {
    message: "Name is required",
  }),
  companyName: z.string({ message: "Company name is required" }).min(1, {
    message: "Company name is required",
  }),
  email: z
    .string({ message: "Email address is required" })
    .email({
      message: "Invalid email address",
    })
    .min(1, {
      message: "Email is required",
    }),
  phoneNumber: z
    .string({ message: "Phone number is required" })
    .min(1, {
      message: "Phone number is required",
    })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message:
        "Invalid phone number. Please enter a valid phone number in international format (e.g., +1234567890).",
    }),
  discoveryMedium: z.string({ message: "Medium is required" }).min(1, {
    message: "Medium is required",
  }),
  message: z
    .string({ message: "Message is required" })
    .min(1, {
      message: "Message is required",
    })
    .min(20, {
      message: "Message is too short",
    })
    .max(400, {
      message: "Message is too long",
    }),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
