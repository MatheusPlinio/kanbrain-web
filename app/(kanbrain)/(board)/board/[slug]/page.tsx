'use client'
import ModalCreateColumn from "@/app/(kanbrain)/@modal/board/[slug]/add-column/page";
import Column from "@/components/kanban/ColumnStatus";
import { Button } from "@/components/ui/button";
import { useBoard } from "@/hooks/useBoard";
import { IColumn } from "@/types/column";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BoardPage() {
    const params = useParams();
    const boardSlug = String(params.slug);

    const { data: board, isLoading, refetch } = useBoard(boardSlug);

    const [open, setOpen] = useState(false);

    if (isLoading) return <p>Carregando quadro...</p>;

    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Your Boards</h2>
                <Button onClick={() => setOpen(true)}>+ New Status</Button>
                <ModalCreateColumn
                    open={open}
                    setOpen={setOpen}
                    boardSlug={boardSlug}
                    onCreated={refetch}
                />
            </div>

            <div className="flex gap-4 overflow-x-auto">
                {board.columns.map((col: IColumn) => (
                    <Column key={col.id} column={col} />
                ))}
            </div>
        </div>
    );
}
