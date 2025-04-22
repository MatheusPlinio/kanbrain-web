import { CreateBoardRequest, CreateBoardResponse } from "@/types/board"
import api from "../axios"
import { ApiResponse, postRequest } from "../api"

export const fetchBoards = async () => {
    const response = await api.get('/api/boards')
    return response.data
}

export const createBoard = async (data: CreateBoardRequest) => {
    const response = await postRequest<CreateBoardRequest, ApiResponse<CreateBoardResponse>>('/api/boards/store', data)
    return response
};