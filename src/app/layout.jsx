import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
    title: "Stock Clubs",
    description: "By M.Noman for Softlix",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
