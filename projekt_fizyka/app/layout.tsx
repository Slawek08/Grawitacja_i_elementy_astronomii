import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Grawitacja – centrum obliczeń",
  description: "Interaktywne narzędzia do obliczeń grawitacyjnych",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <script
          id="mathjax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        ></script>
      </head>
      <body> <Navbar />{children}</body>
    </html>
  );
}
