import { ICreateColumnRequest } from "@/types/column";
import { postRequest } from "../api";
import api from "../axios";

export const getTasksByColumn = async (columnId: number) => {
    const response = await api.get(`/api/columns/${columnId}/tasks`);
    return response.data;
};

export const createColumn = async (data: ICreateColumnRequest, slug: string) => {
    const response = await postRequest(`/api/columns/store/${slug}`, data);
    return response.data;
};