import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamil Kazi",
  description: "Portfolio of Kamil Kazi a full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
       <link rel="icon" sizes="4x4" href="/K.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
