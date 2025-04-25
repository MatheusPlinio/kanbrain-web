'use client';

import CreateBoardPage from "@/app/(kanbrain)/(dashboard)/dashboard/create/page";
import ModalLayout from "../../layout";
import { createBoard } from "@/lib/api/boards";
import { CreateBoardRequest } from "@/types/board";

interface ModalCreateBoardProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onCreated?: () => void;
}

export default function ModalCreateBoard({
    open,
    setOpen,
    onCreated
}: ModalCreateBoardProps) {
    const handleCreateBoard = async (data: CreateBoardRequest) => {
        await createBoard(data);
        setOpen(false);
        onCreated?.();
    };

    return (
        <ModalLayout
            title="Criar um novo quadro"
            description="Preencha as informações abaixo para criar um novo quadro."
            open={open}
            onClose={() => setOpen(false)}
        >
            <CreateBoardPage onSubmit={handleCreateBoard} />
        </ModalLayout>
    );
}
