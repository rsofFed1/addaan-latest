import { ProductInquiryFormData, ProductInquiryFormSchema } from '@/validators/productInquiry.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from './ui/button';

type EnquiryFormProps = {
    categoryName?: string;
}

const EnquiryForm = ({ categoryName = '' }: EnquiryFormProps) => {

    const initialValues = {
        categoryName: categoryName,
        inquiryMessage: "",
        senderEmail: "",
        senderPhoneNumber: "",
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ProductInquiryFormData>({
        resolver: zodResolver(ProductInquiryFormSchema),
        defaultValues: initialValues,
    });

    const onSubmit = async (data: ProductInquiryFormData) => {
        setIsSubmitted(true);
        const response = await axios.post<{ message: string, success: boolean }>('/api/product-inquiry-form', data);
        if (response.data.success) {
            setIsSubmitted(false);
            toast.success(response.data.message);
            reset({ categoryName: categoryName });
        } else {
            setIsSubmitted(false);
            toast.error(response.data.message);
        }
    };

    if (isSubmitted) {
        return (
            <div className="w-full h-full flex flex-col justify-between bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
                <div>
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">Thank You!</h3>
                    <p className="text-black text-lg mb-2"> Your inquiry has been received successfully. </p>
                </div>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                >
                    Send New Message
                </Button>
            </div>
        );
    }

    return (
        <div>
            {/* Form Section */}
            <div className="rounded-sm shadow p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                    {/* Name & Company Row */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="categoryName" className="block text-md font-medium text-black mb-2"> Category Name <span className="text-red-600 text-md">*</span> </label>
                            <input
                                id="categoryName"
                                required
                                disabled
                                placeholder="Enter your full name"
                                {...register("categoryName")}
                                className="w-full px-4 py-3 text-black bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email <span className="text-red-600 text-md">*</span></label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                {...register("senderEmail")}
                                aria-invalid={!!errors.senderEmail}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.senderEmail && (
                                <p className="text-sm text-red-600">{errors.senderEmail.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-black">Phone <span className="text-red-600 text-md">*</span></label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                {...register("senderPhoneNumber")}
                                aria-invalid={!!errors.senderPhoneNumber}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.senderPhoneNumber && (
                                <p className="text-sm text-red-600">{errors.senderPhoneNumber.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black">Message / Inquiry <span className="text-red-600 text-md">*</span></label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                placeholder="Please describe your inquiry in detail..."
                                {...register("inquiryMessage")}
                                aria-invalid={!!errors.inquiryMessage}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.inquiryMessage && (
                                <p className="text-sm text-red-600">{errors.inquiryMessage.message}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <Button disabled={isSubmitting} type="submit" className="bg-black w-full font-medium text-md text-white py-6 rounded-md hover:bg-black/90 transition-colors cursor-pointer">
                            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;