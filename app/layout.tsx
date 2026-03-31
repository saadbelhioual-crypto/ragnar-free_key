import type { Metadata } from "next";
import "./globals.css"; // تأكد من إنشاء ملف فارغ باسم globals.css أو حذفه من هنا

export const metadata: Metadata = {
  title: "Ragnar Redeem | Legendary",
  description: "Secure Code Vault",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
