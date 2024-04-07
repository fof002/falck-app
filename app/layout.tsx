import type { Metadata } from "next";
import { NavBarComponent } from "./navbar/Index";
import "./custom.scss";

export const metadata: Metadata = {
  title: "Familien Falck",
  description: "Laget av Frithjof Falck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBarComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
