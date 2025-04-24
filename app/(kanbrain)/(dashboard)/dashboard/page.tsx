'use client';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { fetchBoards } from '@/lib/api/boards';
import { Board } from '@/types/board';
import ModalCreateBoard from '@/app/(kanbrain)/@modal/dashboard/create/page';
import { useState } from 'react';

export default function DashboardPage() {
    const { data: boards = [], isLoading } = useQuery<Board[]>({
        queryKey: ['boards'],
        queryFn: fetchBoards,
        retry: false,
    });

    const [open, setOpen] = useState(false);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Your Boards</h2>
                <Button onClick={() => setOpen(true)} className='cursor-pointer'>+ New Board</Button>
                {open && <ModalCreateBoard />}
            </div>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {boards.map((board: Board) => (
                        <Link href={`/board/${board.slug}`} key={board.id}>
                            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-4">
                                    <CardTitle>{board.title}</CardTitle>
                                    <p className="text-muted-foreground text-sm">{board.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}

                    <Link href="/board/create">
                        <Card className="flex items-center justify-center h-full cursor-pointer hover:shadow-lg transition-shadow border-dashed">
                            <CardContent className="p-4 text-center text-muted-foreground">
                                + Create New Board
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            )}
        </div>
    );
}
