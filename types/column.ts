export interface IColumn {
    id: number;
    title: string;
    color: string;
}

export interface ICreateColumnRequest {
    title: string;
    color: string;
}