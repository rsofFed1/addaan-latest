"use client"
import { useState } from 'react';
import ContactUsAITCForm from './ContactFormAITC';
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import RequestQuoteForm from './RequestQuoteForm';

interface RequestQuoteModelProps {
    trigger: React.ReactNode
    title: string
}

export function RequestQuoteModel({
    trigger,
}: RequestQuoteModelProps) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="cursor-pointer"> {trigger} </div>
            </DialogTrigger>
            <DialogContent className="md:max-w-[600px]">
                <RequestQuoteForm />
            </DialogContent>
        </Dialog>
    )
}
