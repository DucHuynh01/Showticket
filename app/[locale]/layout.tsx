import Footer from "../[locale]/components/Footer";
import { useRouter, usePathname } from "next/navigation";
import Header from "../[locale]/components/Header";
import ScrollToTop from "../[locale]/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import "@/styles/ckeditor.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Chat from "./components/Chat/ChatIcon";
import ChatIcon from "./components/Chat/ChatIcon";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import CssBaseline from "@mui/material/CssBaseline";
export const metadata: Metadata = {
    // title: "65 điều hành doanh nghiệp",
    title: "Công ty TNHH một thành viên công nghệ và truyền thông 3I",
    description:
        "Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng với những sản phẩm công nghệ hiện đại và phù hợp với các doanh nghiệp trong nước và các đối tác nước ngoài như Hàn Quốc , Nhật Bản , Trung Quốc.",
};
export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params?: any;
}) {
    return (
        <html>
            {/* <CssBaseline /> */}
            <body className={`!overflow-x-hidden dark:bg-black`}>
                <Providers>
                    {/* <Header /> */}
                    {children}
                    {/* <Footer /> */}
                    <ScrollToTop />
                </Providers>
            </body>
        </html>
    );
}
