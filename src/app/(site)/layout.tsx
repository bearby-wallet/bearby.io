import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import NextTopLoader from "nextjs-toploader";
import "../../styles/animate.css";
import "../../styles/prism-vsc-dark-plus.css";
import "../../styles/star.css";
import "../../styles/tailwind.css";
// Убираем AuthProvider, так как он закомментирован
import ToasterContext from "../context/ToastContext"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#8646F4"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        {/* Убираем AuthProvider */}
        <ToasterContext />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
