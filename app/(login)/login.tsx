'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AuthOptionsPage() {
    const router = useRouter();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Bem-vindo ao Kanbrain</h1>
                <p className="text-center text-sm text-gray-500 mb-8">
                    Escolha como deseja acessar a plataforma
                </p>

                <div className="flex flex-col space-y-4">
                    <Button className="w-full" onClick={() => router.push('/sign-in')}>
                        Fazer login
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => router.push('/sign-up')}>
                        Criar conta
                    </Button>
                </div>
            </div>
        </div>
    );
}
