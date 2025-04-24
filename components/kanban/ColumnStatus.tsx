import { useColumnTasks } from "@/hooks/useColumnTasks";
import { Card } from "../ui/card";
import { IColumn } from "@/types/column";
import { ITask } from "@/types/task";

export default function Column({ column }: { column: IColumn }) {
    const { data: tasks, isLoading } = useColumnTasks(column.id);

    return (
        <Card className="w-64 p-4 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">{column.title}</h3>

            {isLoading ? (
                <p className="text-sm text-muted-foreground">Carregando tarefas...</p>
            ) : (
                <div className="space-y-2">
                    {tasks.map((task: ITask) => (
                        <div
                            key={task.id}
                            className="bg-white p-2 rounded shadow text-sm"
                        >
                            {task.title}
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
}