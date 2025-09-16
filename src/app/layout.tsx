import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col text-gray-900">
        <Header />
        <main className="flex-grow mx-auto p-6">
          <div className="bg-inherit pt-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
