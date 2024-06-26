import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { primaryFont } from "@/theme/typography";
import { ThemeProvider } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "@/lib/providers/providers";
import { Snackbar } from "@mui/material";
import { SnackbarProvider } from "@/contexts/Snackbar";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <Providers>
          <ThemeProvider>
              <SnackbarProvider>{children}</SnackbarProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
