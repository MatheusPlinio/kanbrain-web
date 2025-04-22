// components/form/CreateBoardForm.tsx

'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from '@/components/ui/switch';
import { useCustomToast } from '@/lib/hooks/useToastCustom';


const boardBaseSchema = z.object({
    title: z.string().min(1, { message: "É preciso de um título" }).max(100),
    description: z.string().min(1, { message: "É preciso de uma descrição" }).max(300),
    is_public: z.boolean().optional(),
});

const boardSchema = boardBaseSchema.extend({
    is_public: z.boolean(),
});

export type BoardFormData = z.infer<typeof boardSchema>;

interface CreateBoardFormProps {
    onSubmit: (data: BoardFormData) => void;
}

export default function CreateBoardForm({ onSubmit }: CreateBoardFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<BoardFormData>({
        resolver: zodResolver(boardSchema)
    });

    const { showToast } = useCustomToast();

    const onSubmitHandler = (data: BoardFormData) => {
        showToast({
            title: "Quadro criado com sucesso!",
            description: "O seu quadro foi criado com sucesso.",
            variant: "success",
        });
        onSubmit(data);
    };

    const isPublic = watch("is_public");

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
            <div>
                <Label htmlFor="title">Título</Label>
                <Input
                    id="title"
                    type="text"
                    placeholder="Coloque o título do quadro"
                    {...register('title')}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                    id="description"
                    placeholder="Descreva o quadro"
                    {...register('description')}
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div className="flex items-center justify-between">
                <Label htmlFor="is_public">Quadro público?</Label>
                <Switch
                    id="is_public"
                    checked={isPublic}
                    onCheckedChange={(checked) => setValue("is_public", checked)}
                />
            </div>

            <Button type="submit" className="cursor-pointer">Criar Kanban</Button>
        </form>
    );
}
