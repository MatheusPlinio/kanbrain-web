import { CreateBoardRequest } from "@/types/board"
import api from "../axios"
import { AxiosError } from "axios"

export const fetchBoards = async () => {
    const response = await api.get('/api/boards')
    return response.data
}

export interface ApiResponse<T> {
    status: number;
    message: string;
    data?: T;
}

export const createBoard = async (
    data: CreateBoardRequest
): Promise<ApiResponse<undefined>> => {
    try {
        const response = await api.post("/boards", data);

        return {
            status: response.status,
            message: "Board criado com sucesso",
            data: response.data,
        };
    } catch (error: unknown) {
        let message = "Erro desconhecido";
        let status = 500;

        if (error instanceof AxiosError) {
            message = error.response?.data?.message ?? error.message;
            status = error.response?.status ?? 500;
        } else if (error instanceof Error) {
            message = error.message;
        }

        return {
            status,
            message,
        };
    }
};