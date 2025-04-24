'use client';

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ModalLayoutProps {
    title: string;
    description: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ModalLayout({
    title,
    description,
    open,
    onClose,
    children,
}: ModalLayoutProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogTitle>{title}</DialogTitle>
                <p className="text-muted-foreground">{description}</p>
                {children}
            </DialogContent>
        </Dialog>
    );
}
