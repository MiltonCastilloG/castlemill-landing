import "./globals.css";
import type { ReactNode } from "react";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";

const themeScript = `(function() {
  try {
    var key = "theme";
    var stored = localStorage.getItem(key);
    var theme = (stored === "light" || stored === "dark")
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (_) {}
})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="theme-body">
        <div className="theme-page-gradient flex min-h-dvh flex-col">
          <Header />
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
