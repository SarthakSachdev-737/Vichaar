import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SessionWrapper from "@/components/SessionWrapper";
import { AuthProvider } from "@/context/AuthContext";
import { SessionProvider } from "@/context/SessionContext";
import { Playfair_Display, Lora, Courier_Prime } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
});

export const metadata = {
  title: "Vichar",
  description: "AI powered learning platform",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} ${courierPrime.variable}`}
      >
        <SessionWrapper session={session}>
          <AuthProvider>
            <SessionProvider>{children}</SessionProvider>
          </AuthProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
