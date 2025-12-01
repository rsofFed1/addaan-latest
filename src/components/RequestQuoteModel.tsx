"use client"
import { useState } from 'react';
import RequestQuoteForm from './RequestQuoteForm';
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

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
