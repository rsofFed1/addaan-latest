'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactConversion() {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        products: '',
        description: '',
        originZip: '',
        destinationZip: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            products: '',
            description: '',
            originZip: '',
            destinationZip: '',
            email: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDownloadBrochure = () => {
        const url = 'https://addaaninternational.com/company-profile-2019.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/images/artwork/artwork-8.jpg')" }}
            >
            </div>
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col h-full"
                    >
                        <div
                            className="w-full h-64 lg:h-100 flex-shrink-0"
                            style={{
                                backgroundImage: 'url(/images/brochure.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />

                        <div className="p-8 flex flex-col flex-grow items-start">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
                                DOWNLOAD OUR BROCHURE
                            </h2>

                            <div className="space-y-4 mb-6 flex-grow">
                                <p className="text-gray-700 leading-relaxed">
                                    Learn more about us, our services and new company locations in our new brochure. Download our annual brochure 2019.
                                </p>
                            </div>

                            <motion.button
                                onClick={handleDownloadBrochure}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-[#222222] text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                            >
                                DOWNLOAD NOW
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Quick Quote Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute top-4 left-4 right-4 bg-green-50 border border-green-200 rounded-xl p-4 z-10"
                                >
                                    <div className="flex items-center space-x-2 text-green-800">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">{t('ContactConversion.form.successMessage')}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>

                            <div className="relative">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        QUICK QUOTE
                                    </h3>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1">
                                        <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-2">
                                            Required Products
                                        </label>
                                        <select
                                            id="products"
                                            name="products"
                                            value={formData.products}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Select a product</option>
                                            <option value="diamond-drilling">Diamond Drilling</option>
                                            <option value="concrete-cutting">Concrete Cutting</option>
                                            <option value="demolition">Demolition</option>
                                            <option value="other">Other</option>
                                        </select>
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="originZip" className="block text-sm font-medium text-gray-700 mb-2">
                                                Origin ZIP:
                                            </label>
                                            <input
                                                type="text"
                                                id="originZip"
                                                name="originZip"
                                                value={formData.originZip}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                placeholder="Enter origin ZIP"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="destinationZip" className="block text-sm font-medium text-gray-700 mb-2">
                                                Destination ZIP:
                                            </label>
                                            <input
                                                type="text"
                                                id="destinationZip"
                                                name="destinationZip"
                                                value={formData.destinationZip}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                                placeholder="Enter destination ZIP"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your email:
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

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className="w-full bg-[#222222] text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                                    >
                                        <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                            GET RATE QUOTE
                                        </span>
                                        {isSubmitting && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            </motion.div>
                                        )}
                                        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200"></div>
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}