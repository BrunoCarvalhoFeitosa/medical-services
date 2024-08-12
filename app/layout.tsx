import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { HeaderDesktop } from "@/app/_components/common/header-desktop"
import { HeaderMobile } from "@/app/_components/common/header-mobile"
import { ScrollTopButton } from "./_components/common/scroll-top-button"
import "react-toastify/dist/ReactToastify.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./globals.css"

const font = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Healthcare Centro Médico",
  description: "Centro médico especializado no cuidado e bem-estar familiar, cuidar para preservar o que é mais precioso, a vida.",
    icons: {
        icon: "/favicon/favicon.svg",
        shortcut: "/favicon/favicon.svg"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
        <body className={`${font.className}`}>
            <HeaderDesktop />
            <HeaderMobile />
            {children}
            <ScrollTopButton />
        </body>
    </html>
  )
}