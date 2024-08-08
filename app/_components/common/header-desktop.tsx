"use client"
import Link from "next/link"
import { headerNavItems } from "@/constants"
import { LuSearch } from "react-icons/lu"
import { RiMapPinFill, RiPhoneFill } from "react-icons/ri"
import { HealthcareLogoSvg } from "@/public/svg/healthcare-logo-svg"

export const HeaderDesktop = () => {
    return (
        <div className="hidden lg:block pt-5 sticky top-0 w-full bg-white z-50">
            <header className="mx-auto px-5 py-3 translate-y-5 lg:w-[98%] 2xl:w-2/3 bg-white shadow-sm">
                <div className="flex justify-between items-center">
                    <div className="box-border">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <div>
                                <HealthcareLogoSvg width="64" height="64" />
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
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1">
                            <div>
                                <RiMapPinFill className="w-6 h-6 text-cyan-500" />
                            </div>
                            <div className="text-sm text-gray-400">
                                1054, Avenida Paulista, SP - Brasil
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div>
                                <RiPhoneFill className="w-6 h-6 text-cyan-500" />
                            </div>
                            <div className="text-sm text-gray-400">
                                +55 (11) 4099-9940
                            </div>
                        </div>
                        <div className="relative w-60 h-12">
                            <div className="absolute w-full h-full bg-cyan-400 xl:animate-ping z-10" />
                            <Link href="/planos">
                                <button className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 w-[96%] py-2 px-6 border border-cyan-500 bg-cyan-500 transition-all duration-300 hover:bg-cyan-400 hover:border-cyan-400 text-sm font-semibold uppercase text-white z-10">
                                    Contratar serviços
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 py-4 lg:px-0 xl:px-16 flex justify-between items-center border-t border-gray-100">
                    <div>
                        <nav>
                            <ul className="flex items-center gap-8">
                                {headerNavItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className="flex items-center gap-5 text-sm text-gray-400 hover:text-cyan-500"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        href="/login"
                                        className="flex items-center gap-5 text-sm text-gray-400 hover:text-cyan-500"
                                    >
                                        Entrar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cadastro"
                                        className="flex items-center gap-5 text-sm text-gray-400 hover:text-cyan-500"
                                    >
                                        Cadastrar-me
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <form className="flex items-center gap-2">
                            <button type="submit">
                                <LuSearch className="w-6 h-6 text-cyan-500" />
                            </button>
                            <input
                                type="form"
                                className="w-fit text-sm text-gray-400 border-none outline-none"
                                placeholder="Doutor Dráuzio Boccele..."
                            />
                        </form>
                    </div>
                </div>
            </header>
        </div>
    )
}