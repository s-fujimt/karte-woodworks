import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const noto_sans_jp = Noto_Sans_JP({
  variable: "--font-noto_sans_jp",
  subsets: ["latin-ext"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(noto_sans_jp.variable)}>
      <body className="text-gray-800 antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
