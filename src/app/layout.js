import { getServerSession } from "next-auth";

import { Inter } from "next/font/google";
// import NavMenu from "./components/NavMenu.jsx";
import SessionProvider from "./components/SessionProvider.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>
            {/* <NavMenu /> */}

            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
