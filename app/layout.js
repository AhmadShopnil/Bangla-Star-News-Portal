import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["bengali", "latin"],
  variable: "--font-anek-bangla",
  display: 'swap',
});

export const metadata = {
  title: "Bangla Star News | সর্বশেষ সংবাদ ও ব্রেকিং নিউজ",
  description: "বাংলাদেশের অন্যতম নির্ভরযোগ্য অনলাইন সংবাদ মাধ্যম। সর্বশেষ জাতীয়, রাজনীতি, আন্তর্জাতিক, খেলাধুলা ও বিনোদন সংবাদ পেতে আমাদের সাথেই থাকুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${anekBangla.variable} font-sans`}>
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
