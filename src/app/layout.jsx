import Navbar from "./_components/Navbar";
import "./globals.css";
import LocalFont from "next/font/local";

const roboto = LocalFont({
    src: "../../public/fonts/roboto.woff2"
});

// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Stock Clubs",
    description: "By M.Noman for Softlix",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} text-primary`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
