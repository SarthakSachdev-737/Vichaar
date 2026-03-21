import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "select_account consent"
                },
            },
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`, {
                        name: user.name,
                        email: user.email,
                        avatar: user.image,
                        googleId: account.providerAccountId,
                    });

                    if (res.data?.success) {
                        // Mutate the user object to pass data to the jwt callback
                        user.backendToken = res.data.token;
                        user.role = res.data.user.role;
                        user.id = res.data.user._id; // backend _id
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.error("Backend sync failed:", error);
                    return false;
                }
            }
            return true;
        },

        async jwt({ token, user, account }) {
            // `user` and `account` are only populated on the first sign-in call
            if (account && user) {
                token.googleId = account.providerAccountId;
                token.avatar = user.image;
                token.id = user.id; // from our mutated user object in signIn
                token.role = user.role;
                token.accessToken = user.backendToken;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.googleId = token.googleId;
                session.user.avatar = token.avatar;

                // Expose to client
                session.user.id = token.id;
                session.user.role = token.role;
                session.accessToken = token.accessToken;
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