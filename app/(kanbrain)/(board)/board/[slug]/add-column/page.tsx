'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCustomToast } from "@/lib/hooks/useToastCustom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HexColorPicker } from "react-colorful";
import { useForm } from "react-hook-form";

const columnBaseSchema = z.object({
    title: z.string().min(1, { message: "É preciso de um título" }).max(100),
});

const columnSchema = columnBaseSchema.extend({
    color: z.string().default("#ffffff")
});

export type ColumnFormData = z.infer<typeof columnSchema>;

interface CreateAddColumnFormProps {
    onSubmit: (data: ColumnFormData) => void;
}

export default function CreateColumnForm({ onSubmit }: CreateAddColumnFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm({
        resolver: zodResolver(columnSchema),
        defaultValues: {
            color: "#A3E635"
        }
    });

    const color = watch("color");

    const { showToast } = useCustomToast();

    const onSubmitHandler = (data: ColumnFormData) => {
        showToast({
            title: "Quadro criado com sucesso!",
            description: "O seu quadro foi criado com sucesso.",
            variant: "success",
        });
        onSubmit(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
            <div>
                <Label htmlFor="title">Nome</Label>
                <Input
                    id="title"
                    type="text"
                    placeholder="Coloque o título do quadro"
                    {...register('title')}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
                <Label>Cor da coluna</Label>
                <HexColorPicker
                    color={color}
                    onChange={(newColor) => setValue("color", newColor)}
                    className="rounded-md shadow"
                />
                <Input
                    value={color}
                    onChange={(e) => setValue("color", e.target.value)}
                />
            </div>

            <Button type="submit" className="cursor-pointer">Criar Status</Button>
        </form>
    );
}