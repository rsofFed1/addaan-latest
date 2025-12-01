import z from "zod";

export const RequestQuoteFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(100),
  description: z
    .string()
    .trim()
    .min(1, { message: "Description is required" })
    .max(2000, { message: "Description must be under 2000 characters" }),
});

export type RequestQuoteFormData = z.infer<typeof RequestQuoteFormSchema>;
