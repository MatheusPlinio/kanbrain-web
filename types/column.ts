export interface IColumn {
    id: number;
    title: string;
}

export interface ICreateColumnRequest {
    title: string;
    color: string;
}