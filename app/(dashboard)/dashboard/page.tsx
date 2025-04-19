'use client';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <Button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
                <LogOut /> Logout
            </Button>
            <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
    );
}