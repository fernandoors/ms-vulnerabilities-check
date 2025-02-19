import "./global.css";
import type { Metadata } from "next";
import { Karla, Roboto } from "next/font/google";

export const metadata: Metadata = {
    title: "(Alltech - M. S.) Vulnerabilities Checker",
    description: "This is a code test for a job application",
};

const roboto = Roboto({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    variable: "--font-roboto",
});
const karla = Karla({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-karla",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${roboto.variable} ${karla.variable}`}>
            <body className="bg-gray-100 text-gray-900 antialiased">
                {children}
            </body>
        </html>
    );
}
