export interface Board {
    id: number;
    title: string;
    description?: string;
    is_public?: boolean;
    slug?: string;
}

export interface CreateBoardRequest {
    title: string;
    description?: string;
    is_public?: boolean;
};

export interface CreateBoardResponse {
    message: string;
    status: 200 | 201 | 400 | 401 | 422 | 500;
}