import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "(Alltech - M. S.) Vulnerabilities Checker",
    description: "This is a code test for a job application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
