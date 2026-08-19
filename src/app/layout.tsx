import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "KS LTD | Next-Gen Technology, AI & Software Engineering Agency",
  description:
    "KS LTD is a premier technology agency engineering enterprise-grade web applications, AI automation agents, mobile platforms, and scalable cloud architectures for high-growth businesses worldwide.",
  keywords: [
    "KS LTD",
    "Technology Agency",
    "Software Development",
    "AI Solutions",
    "Web Application",
    "Next.js Development",
    "Mobile Apps",
    "Cloud Architecture",
  ],
  authors: [{ name: "KS LTD Team" }],
  openGraph: {
    title: "KS LTD | Enterprise Technology & AI Product Agency",
    description:
      "Transforming ambitious ideas into scalable digital products, AI systems, and cloud architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} font-sans antialiased bg-background text-foreground selection:bg-indigo-500/20 selection:text-indigo-400 min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}


