import { Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const rubik = Rubik({ subsets: ["arabic", "latin"], weight: ["400", "700", "800"] })

export const metadata = {
  title: "TelePort",
  description:" تعتبر TelePort وكالة تطوير الويب الرائدة في سوريا، حيث تقدم حلولاً مبتكرة ومخصصة لتلبية احتياجات العملاء المتنوعة. تتمثل رؤيتنا في استخدام أحدث التقنيات لبناء مواقع إلكترونية متطورة وسهلة الاستخدام، مما يعزز من وجود العملاء على الشبكة الرقمية. يضم فريقنا من المحترفين المهرة خبرات متنوعة في التصميم والتطوير، مما يضمن تحقيق أهداف عملائنا بكفاءة واحترافية. ",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${rubik.className} antialiased bg-[#E9F2FA] `} >
        {children}
      </body>
    </html>
  );
}