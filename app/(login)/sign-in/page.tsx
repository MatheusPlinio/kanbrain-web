'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function SignInPage() {

    const formValidate = z.object({
        email: z.string(),
        password: z.string()
    })

    type formAuthSchema = z.infer<typeof formValidate>

    const { register, handleSubmit } = useForm<formAuthSchema>({
        resolver: zodResolver(formValidate)
    })

    const handleLogin = async (data: formAuthSchema) => {
        await signIn("credentials", data);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold mb-6">Entrar na sua conta</h1>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 mb-6">
                    <div className="text-left">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Senha</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                    >
                        Entrar
                    </button>
                </form>

                <p>Ou</p>

                <button
                    onClick={() => signIn('google')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mb-4 transition"
                >
                    Entrar com Google
                </button>

                <button
                    onClick={() => signIn('github')}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
                >
                    Entrar com GitHub
                </button>
            </div>
        </div>
    );
}
