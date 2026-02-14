import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
});

export const metadata = {
  title: "Bangla Star News | সর্বশেষ সংবাদ ও ব্রেকিং নিউজ",
  description: "বাংলাদেশের অন্যতম নির্ভরযোগ্য অনলাইন সংবাদ মাধ্যম। সর্বশেষ জাতীয়, রাজনীতি, আন্তর্জাতিক, খেলাধুলা ও বিনোদন সংবাদ পেতে আমাদের সাথেই থাকুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
