'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
});

type FormData = z.infer<typeof formSchema>;

export default function SignInForm() {
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const handleLogin = async (data: FormData) => {
        const res = await signIn("credentials", {
            ...data,
            redirect: true,
            callbackUrl: "/dashboard",
        });

        if (!res?.ok) {
            setError("Email ou senha inválidos");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold mb-6">Entrar na sua conta</h1>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 mb-6">
                    <div className="text-left">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" {...register("email")} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="text-left">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" {...register("password")} />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <Button type="submit" className="w-full bg-blue-600 cursor-pointer">Entrar</Button>
                </form>

                <p className="text-sm text-gray-400 mb-2">Ou continue com</p>

                <Button onClick={() => signIn("google")} className="w-full mb-2 bg-red-500 cursor-pointer">Google</Button>
                <Button onClick={() => signIn("github")} className="w-full bg-gray-600 cursor-pointer">GitHub</Button>
            </div>
        </div>
    );
}
