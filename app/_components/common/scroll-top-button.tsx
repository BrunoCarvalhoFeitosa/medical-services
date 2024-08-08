"use client"
import { useScrollTop } from "@/app/hooks/use-scroll-top"
import { HiOutlineArrowNarrowUp } from "react-icons/hi"

export const ScrollTopButton = () => {
    const scrolled = useScrollTop()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="fixed bottom-9 right-9 z-[99999]">
            <button
                className={`${scrolled ? "block" : "hidden"} p-4 bg-cyan-500 dark:bg-white cursor-pointer`}
                onClick={scrollToTop}
            >
                <HiOutlineArrowNarrowUp className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}