import "./globals.css";
import Nav from "./ui/Nav/Navbar";

export const metadata = {
  title: "E-Commerce Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
              
      <body className="">{children}</body>

    </html>
  );
}
