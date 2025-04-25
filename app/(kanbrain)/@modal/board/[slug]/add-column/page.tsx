'use client';

import ModalLayout from "../../../layout";
import { ICreateColumnRequest } from "@/types/column";
import CreateColumnForm from "@/app/(kanbrain)/(board)/board/[slug]/add-column/page";
import { createColumn } from "@/lib/api/column";

interface ModalCreateColumnProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    boardSlug: string;
    onCreated?: () => void;
}

export default function ModalCreateColumn({
    open,
    setOpen,
    boardSlug,
    onCreated
}: ModalCreateColumnProps) {

    const handleCreateColumn = async (data: ICreateColumnRequest) => {
        await createColumn(data, boardSlug);
        onCreated?.();
        setOpen(false);
    };

    return (
        <ModalLayout
            title="Criar um novo status"
            description="Crie aqui um status"
            open={open}
            onClose={() => setOpen(false)}
        >
            <CreateColumnForm onSubmit={handleCreateColumn} />
        </ModalLayout>
    );
}
