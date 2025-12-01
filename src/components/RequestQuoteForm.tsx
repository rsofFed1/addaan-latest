import { RequestQuoteFormData, RequestQuoteFormSchema } from '@/validators/requestQuoteForm.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from './ui/button';

const RequestQuoteForm = () => {

    const initialValues = {
        name: "",
        email: "",
        description: "",
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RequestQuoteFormData>({
        resolver: zodResolver(RequestQuoteFormSchema),
        defaultValues: initialValues,
    });

    const onSubmit = async (data: RequestQuoteFormData) => {
        setIsSubmitted(true);
        const response = await axios.post<{ message: string, success: boolean }>('/api/request-a-quote-form', data);
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
            <div>
                <h2 className='text-2xl text-center mb-4'>Request a Quote</h2>
            </div>
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
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
                            <label htmlFor="description" className="block text-sm font-medium text-black">Description <span className="text-red-600 text-md">*</span></label>
                            <textarea
                                id="description"
                                required
                                rows={5}
                                placeholder="Enter your description"
                                {...register("description")}
                                aria-invalid={!!errors.description}
                                className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            />
                            {errors.description && (
                                <p className="text-sm text-red-600">{errors.description.message}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <Button disabled={isSubmitting} type="submit" className="bg-black w-full font-medium text-md text-white py-6 rounded-md hover:bg-black/90 transition-colors cursor-pointer">
                            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default RequestQuoteForm;
