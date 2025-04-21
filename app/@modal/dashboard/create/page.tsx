'use client';

import { useState } from "react";

import CreateBoardPage from "@/app/(dashboard)/dashboard/create/page";
import ModalLayout from "../../layout";
import { createBoard } from "@/lib/api/boards";
import { CreateBoardRequest } from "@/types/board";

export default function ModalCreateBoard() {
    const [open, setOpen] = useState(true);

    const handleCreateBoard = async (data: CreateBoardRequest) => {
        const teste = await createBoard(data);

        console.log("teste", teste);

        setOpen(false);
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
