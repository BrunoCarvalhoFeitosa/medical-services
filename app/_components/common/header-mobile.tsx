"use client"
import { useState } from "react"
import Link from "next/link"
import { headerNavItems } from "@/constants"
import { CgMenuGridR } from "react-icons/cg"
import { IoIosClose } from "react-icons/io"
import { HealthcareLogoSvg } from "@/public/svg/healthcare-logo-svg"
import { RiSeparator } from "react-icons/ri"

export const HeaderMobile = ()  => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const handleOpenOrCloseMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <header className="py-6 px-5 sticky top-0 lg:hidden bg-white z-50">
            <div className="flex justify-between items-center">
                <div className="box-border">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <div>
                            <HealthcareLogoSvg width="50" height="50" />
                        </div>
                        <div className="-translate-x-1 flex flex-col text-lg">
                            <div className="text-2xl font-semibold leading-none">
                                Health<strong className="font-semibold text-cyan-500">care</strong>
                            </div>
                            <div className="-translate-y-1 text-sm">
                                Centro médico
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <button
                        className="cursor-pointer"
                        onClick={handleOpenOrCloseMenu}
                    >
                        <CgMenuGridR className="w-10 h-10 text-cyan-500" />
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 ${isOpenMenu ? "translate-x-0" : "translate-x-full"} w-full h-[100dvh] bg-black/80 transition-transform duration-500 z-40`}
                onClick={handleOpenOrCloseMenu}
            />
            <div className={`py-4 px-7 fixed top-0 right-0 ${isOpenMenu ? "translate-x-0" : "translate-x-full"} flex flex-col justify-between w-[85%] h-[100dvh] bg-white transition-transform duration-500 z-50`}>
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <div className="box-border">
                            <Link
                                href="/"
                                className="flex items-center gap-2"
                            >
                                <div>
                                    <HealthcareLogoSvg width="50" height="50" />
                                </div>
                                <div className="-translate-x-1 flex flex-col text-lg">
                                    <div className="text-2xl font-semibold leading-none">
                                        Health<strong className="font-semibold text-cyan-500">care</strong>
                                    </div>
                                    <div className="-translate-y-1 text-sm">
                                        Centro médico
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                type="button"
                                className="bg-cyan-500"
                                onClick={handleOpenOrCloseMenu}
                            >
                                <IoIosClose className="w-12 h-12 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div>
                        <nav>
                            <ul className="flex flex-col gap-4">
                                {headerNavItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className="py-2 md:py-3 px-6 flex justify-center items-center gap-2 bg-cyan-500"
                                        >
                                            <div className="text-base md:text-2xl text-white">
                                                {item.name}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-2">
                    <div className="text-sm md:text-xl font-bold uppercase text-zinc-900">
                        Entre
                    </div>
                    <div className="text-zinc-900">
                        <RiSeparator className="w-7 h-7 md:w-12 md:h-12" />
                    </div>
                    <div className="text-sm md:text-xl font-bold uppercase border-b-[2px] border-cyan-500 text-cyan-500">
                        Cadastre-se
                    </div>
                </div>
            </div>
        </header>
    )
}