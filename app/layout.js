import localFont from "next/font/local";
import "./globals.css";
import MobileBottomNav from "@/components/common/MobileBottomNav";

const solaimanLipi = localFont({
  src: "../public/fonts/SolaimanLipi.ttf",
  variable: "--font-solaiman-lipi",
  display: 'swap',
});

export const metadata = {
  title: "Bangla Star News | সর্বশেষ সংবাদ ও ব্রেকিং নিউজ",
  description: "বাংলাদেশের অন্যতম নির্ভরযোগ্য অনলাইন সংবাদ মাধ্যম। সর্বশেষ জাতীয়, রাজনীতি, আন্তর্জাতিক, খেলাধুলা ও বিনোদন সংবাদ পেতে আমাদের সাথেই থাকুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${solaimanLipi.variable} font-sans`}>
      <body className="antialiased bg-gray-50 pb-16 md:pb-0">
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
