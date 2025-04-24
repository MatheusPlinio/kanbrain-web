'use client';

import { useState } from "react";
import ModalLayout from "../../../layout";
import { ICreateColumnRequest } from "@/types/column";
import CreateColumnForm from "@/app/(kanbrain)/(board)/board/[slug]/add-column/page";
import { useParams } from "next/navigation";
import { createColumn } from "@/lib/api/column";

export default function ModalCreateColumn() {
    const [open, setOpen] = useState(true);
    const params = useParams();
    const boardSlug = String(params.slug);

    const handleCreateColumn = async (data: ICreateColumnRequest) => {
        await createColumn(data, boardSlug);

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
