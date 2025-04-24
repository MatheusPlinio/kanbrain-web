'use client'
import Column from "@/components/kanban/ColumnStatus";
import { Card, CardContent } from "@/components/ui/card";
import { useBoard } from "@/hooks/useBoard";
import { IColumn } from "@/types/column";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BoardPage() {
    const params = useParams();
    const boardId = params.slug;

    const { data: board, isLoading } = useBoard(boardId as string);

    if (isLoading) return <p>Carregando quadro...</p>;

    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-end">
                <Link href={`/${boardId}/add-column`}>
                    <Card className="flex items-center justify-center h-full cursor-pointer hover:shadow-lg transition-shadow border-dashed">
                        <CardContent className="p-4 text-center text-muted-foreground">
                            + Create New Board
                        </CardContent>
                    </Card>
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto">
                {board.columns.map((col: IColumn) => (
                    <Column key={col.id} column={col} />
                ))}
            </div>
        </div>
    );
}
