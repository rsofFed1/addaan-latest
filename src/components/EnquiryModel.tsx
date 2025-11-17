'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import EnquiryForm from "./EnquiryForm";

type EnquiryModelProps = {
    product: {
        name: string;
        description: string;
        image: string;
        pdfImage: string;
        link?: string;
    }
}

export function EnquiryModel({ product: { name, description, image, pdfImage } }: EnquiryModelProps) {
    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <Button className="bg-black w-full text-white py-6 font-medium text-md rounded-md hover:bg-black/90 transition-colors cursor-pointer">
                    Request for Enquiry
                    <ArrowRight className="h-6 w-6 text-white cursor-pointer" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <div className="flex flex-col md:flex-row gap-6 py-5">
                        <div className="w-full md:w-1/2">
                            <Image
                                src={pdfImage ? pdfImage : image}
                                className="rounded-md shadow object-cover w-full h-[250px] md:h-[450px]"
                                alt={name}
                                width={600}
                                height={600}
                            />
                            <DialogTitle className="text-xl md:text-2xl font-semibold my-2">
                                {name}
                            </DialogTitle>
                            <DialogDescription>
                                {description}
                            </DialogDescription>
                        </div>
                        <div className="w-full md:w-1/2">
                            <EnquiryForm categoryName={name} />
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
