'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductDetailModelProps = {
    product: {
        name: string;
        description: string;
        image: string;
        pdfImage: string;
        link?: string;
    }
}

export function ProductDetailModel({ product: { name, description, image, pdfImage, link } }: ProductDetailModelProps) {
    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <Button className="bg-black w-full text-white py-6 font-medium text-md rounded-md hover:bg-black/90 transition-colors cursor-pointer">
                    Learn More
                    <ArrowRight className="h-6 w-6 text-white cursor-pointer" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/1">
                            <Image
                                src={pdfImage ? pdfImage : image}
                                className="rounded-md shadow object-cover w-full h-[250px] md:h-[450px]"
                                alt={name}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
                            <div>
                                <DialogTitle className="text-xl md:text-2xl font-semibold mb-2">
                                    {name}
                                </DialogTitle>
                                <DialogDescription>
                                    {description}
                                </DialogDescription>
                            </div>
                            <div>
                                <Link href={link || '#'} target="_blank" className="w-full">
                                    <Button className="bg-black w-full font-medium text-md text-white px-4 py-6 rounded-md hover:bg-black/90 transition-colors cursor-pointer">
                                        More Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
