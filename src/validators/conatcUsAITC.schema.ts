import z from "zod";

export const ContactUsAITCFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be under 100 characters" }),
  companyName: z
    .string()
    .trim()
    .min(1, { message: "Company name is required" })
    .max(100, { message: "Company name must be under 100 characters" }),

  inquiryMessage: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be under 2000 characters" }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(100),

  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{7,15}$/, { message: "Enter a valid phone number" })
    .optional(),
});

export type ContactUsAITCFormData = z.infer<typeof ContactUsAITCFormSchema>;
