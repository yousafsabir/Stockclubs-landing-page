import Navbar from "./_components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Stock Clubs",
    description: "By M.Noman for Softlix",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
