import withAuth from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ token }) => {
            return !!token;
        }
    },
    pages: {
        signIn: "/sign-in",
    }
});

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/boards/:path*"
    ]
}