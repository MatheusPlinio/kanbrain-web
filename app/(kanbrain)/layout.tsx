// app/dashboard/layout.tsx

import { getServerSession } from "next-auth";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function KanbrainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect("/");
    }

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
    );
}
