import { getServerSession } from "next-auth";
import SessionWrapper from "@/components/SessionWrapper";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "aiLearner",
  description: "AI powered learning platform",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionWrapper session={session}>
          <AuthProvider>{children}</AuthProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
