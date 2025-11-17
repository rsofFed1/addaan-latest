import z from "zod";

export const ProductInquiryFormSchema = z.object({
  categoryName: z
    .string()
    .trim()
    .min(1, { message: "Category name is required" })
    .max(100, { message: "Category name must be under 100 characters" }),

  inquiryMessage: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be under 2000 characters" }),

  senderEmail: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(100),

  senderPhoneNumber: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{7,15}$/, { message: "Enter a valid phone number" })
    .optional(), // Optional if phone number isn't mandatory
});

export type ProductInquiryFormData = z.infer<typeof ProductInquiryFormSchema>;
