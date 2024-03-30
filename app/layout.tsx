import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto flex flex-col bg-white  dark:bg-black">
        <Provider>
          <Navbar />
          <main className="flex flex-col w-full h-auto  ">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
