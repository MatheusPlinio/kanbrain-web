import { login } from "@/lib/api/auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Senha", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const user = await login(
                        credentials!.email,
                        credentials!.password
                    );
                    return user;
                } catch {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})