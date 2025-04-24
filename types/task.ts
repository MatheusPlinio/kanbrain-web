export interface ITask {
    id: number;
    title: string;
    description?: string;
    order: number;
    sprint_points: number;
    priority: Priority;
    estimated_time: string;
    elapsed_time: string;
    due_date: Date;
}

enum Priority {
    Low,
    Medium,
    High,
    Urgent
}