import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    className="flex items-center gap-2 text-current"
                >
                    <span className="text-default-600">Made with 🩵 by</span>
                    <a href="https://github.com/virtualharsh" className="text-blue-300">Harsh</a> & 
                    <a href="https://github.com/virtualharsh" className="text-blue-300">Jay</a> 

                </Link>
            </footer>
        </div>
    );
}
