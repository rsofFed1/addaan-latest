import { ContactUsAITCFormData, ContactUsAITCFormSchema } from '@/validators/conatcUsAITC.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from './ui/button';

const ContactUsAITCForm = () => {

    const initialValues = {
        name: "",
        companyName: "",
        inquiryMessage: "",
        email: "",
        phone: "",
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactUsAITCFormData>({
        resolver: zodResolver(ContactUsAITCFormSchema),
        defaultValues: initialValues,
    });

    const onSubmit = async (data: ContactUsAITCFormData) => {
        setIsSubmitted(true);
        const response = await axios.post<{ message: string, success: boolean }>('/api/contact-us-aitc-form', data);
        if (response.data.success) {
            setIsSubmitted(false);
            toast.success(response.data.message);
            reset();
        } else {
            setIsSubmitted(false);
            toast.error(response.data.message);
        }
    };

    if (isSubmitted) {
        return (
            <div className="w-full h-full my-4 flex flex-col justify-between bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
                <div>
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">Thank You!</h3>
                    <p className="text-black text-lg mb-2"> Your inquiry has been received successfully. </p>
                    <p className="text-black"> Our team will contact you within 24-48 hours. </p>
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
            {/* Header Section */}
            <div className="text-center my-8">
                <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                    Contact Us
                </h2>
                <div className="w-40 h-1 bg-[#13A7DC] mx-auto mb-4 rounded-full"></div>
                <p className="text-md text-white max-w-2xl mx-auto leading-relaxed">
                    Get in Touch with AITC – We&apos;ll respond within 24-48 hours.
                </p>
            </div>
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                    {/* Name & Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-md font-medium text-black mb-2"> Name <span className="text-red-600 text-md">*</span> </label>
                            <input
                                id="name"
                                required
                                placeholder="Enter your name"
                                {...register("name")}
                                aria-invalid={!!errors.name}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="companyName" className="block text-md font-medium text-black mb-2"> Company Name <span className="text-red-600 text-md">*</span> </label>
                            <input
                                id="companyName"
                                required
                                placeholder="Enter your company name"
                                {...register("companyName")}
                                aria-invalid={!!errors.companyName}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.companyName && (
                                <p className="text-sm text-red-600">{errors.companyName.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email <span className="text-red-600 text-md">*</span></label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                {...register("email")}
                                aria-invalid={!!errors.email}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-black">Phone <span className="text-red-600 text-md">*</span></label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                {...register("phone")}
                                aria-invalid={!!errors.phone}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.phone && (
                                <p className="text-sm text-red-600">{errors.phone.message}</p>
                            )}
                        </div>
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
                    <div>
                        <Button disabled={isSubmitting} type="submit" className="bg-black w-full font-medium text-md text-white py-6 rounded-md hover:bg-black/90 transition-colors cursor-pointer">
                            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                    </div>
                </form>
            </div >
            {/* Additional Info */}
            <div className="text-center my-4 w-full">
                <div className="flex justify-center items-center w-full text-gray-600 bg-gray-50 rounded-2xl px-4 py-2">
                    <svg className="w-4 h-4 mr-2 text-[#13A7DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-black">Response time: 24-48 hours</span>
                </div>
            </div>
        </div >
    );
};

export default ContactUsAITCForm;
