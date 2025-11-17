"use client"
import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface RequestQuoteModelProps {
    trigger: React.ReactNode
    title: string
}

export function RequestQuoteModel({
    trigger,
}: RequestQuoteModelProps) {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        products: '',
        description: '',
        originZip: '',
        destinationZip: '',
        email: '',
        name: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setFormData({
            products: '',
            description: '',
            originZip: '',
            destinationZip: '',
            email: '',
            name: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="cursor-pointer"> {trigger} </div>
            </DialogTrigger>
            <DialogContent className="md:max-w-[600px]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 relative overflow-hidden">
                            <div className="relative">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        QUICK QUOTE
                                    </h3>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                                            placeholder="Describe your requirements..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#222222] text-white py-6 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                    >
                                        <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                            GET RATE QUOTE
                                        </span>
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200"></div>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </form>

            </DialogContent>
        </Dialog>
    )
}
