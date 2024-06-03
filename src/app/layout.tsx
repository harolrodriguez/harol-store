import "@/presentation/assets/styles/tailwind.css";
import "@/presentation/assets/styles/index.sass";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

// -- CONFIG
import { siteConfig } from "@/presentation/config/site";
import { fontMono, fontSans } from "@/presentation/config/fonts";
// Fin Config
// -- LAYOUT
import MainLayout from "@/presentation/components/ui/layout";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={clsx(fontSans.variable, fontMono.variable)}
      lang="en"
    >
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <MainLayout>{children}</MainLayout>
          {/* <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div> */}
        </Providers>
      </body>
    </html>
  );
}
