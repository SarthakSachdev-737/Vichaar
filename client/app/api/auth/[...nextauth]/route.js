import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {
            try {
                await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`, {
                    name: user.name,
                    email: user.email,
                    avatar: user.image,
                    googleId: account?.providerAccountId,
                });
                return true;
            } catch (error) {
                console.error("Backend sync failed:", error);
                return false;
            }
        },

        async jwt({ token, account, user }) {
            if (account && user) {
                token.googleId = account.providerAccountId;
                token.avatar = user.image;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.googleId = token.googleId;
                session.user.avatar = token.avatar;
            }
            return session;
        },
    },

    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };