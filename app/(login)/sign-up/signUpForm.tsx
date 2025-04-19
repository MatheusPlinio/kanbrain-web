'use client';

import { signIn } from 'next-auth/react';

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold mb-6">Criar uma conta</h1>

                <p className="text-sm text-gray-400 mb-6">
                    Escolha um dos provedores para continuar:
                </p>

                <button
                    onClick={() => signIn('google')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mb-4 transition"
                >
                    Continuar com Google
                </button>

                <button
                    onClick={() => signIn('github')}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
                >
                    Continuar com GitHub
                </button>
            </div>
        </div>
    );
}
