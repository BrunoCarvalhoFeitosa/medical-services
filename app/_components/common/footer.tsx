"use client"
import Link from "next/link"
import { MdEmail } from "react-icons/md"
import { RiMapPinFill, RiPhoneFill } from "react-icons/ri"
import { HealthcareLogoSvg } from "@/public/svg/healthcare-logo-svg"
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti"
import { FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
    return (
        <footer className="mt-16 lg:mt-32 py-10 px-5 md:px-10 xl:px-0 w-full bg-gray-100">
            <div className="mx-auto flex flex-col xl:flex-row justify-between gap-20 w-full xl:w-2/3">
                <div className="flex-1">
                    <div className="box-border">
                        <div className="xl:-translate-x-3 box-border">
                            <Link
                                href="/"
                                className="w-fit flex items-center gap-2"
                            >
                                <div>
                                    <HealthcareLogoSvg width="60" height="60" />
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
                        <div className="mb-8 w-full">
                            <p className="text-sm text-gray-400">
                                Centro médico especializado no cuidado e 
                                bem-estar familiar, cuidar para preservar o que é
                                mais precioso, a vida.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
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
                            <div className="flex items-center gap-1">
                                <div>
                                    <MdEmail className="w-6 h-6 text-cyan-500" />
                                </div>
                                <div className="text-sm text-gray-400">
                                    contato@healthcare.com.br
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <strong className="text-xl font-semibold text-zinc-900">
                        Links úteis
                    </strong>
                    <div className="mt-4 flex justify-between items-center gap-6">
                        <div className="flex-1">
                            <ul className="flex flex-col gap-4">
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/">
                                        Início
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/departamentos">
                                        Departamentos
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/doutores">
                                        Doutores
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/servicos">
                                        Serviços
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/contato">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul className="flex flex-col gap-4">
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/planos">
                                        Planos
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/trabalhe-conosco">
                                        Trabalhe conosco
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/sac">
                                        Ouvidoria/Sac
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/termos-de-uso">
                                        Termos de uso
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/politica-de-cookies">
                                        Política de cookies
                                    </Link>
                                </li>
                                <li className="text-sm text-gray-400 hover:text-cyan-500">
                                    <Link href="/politica-de-privacidade">
                                        Política de privacidade
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <strong className="text-xl font-semibold text-zinc-900">
                        Horários de funcionamento
                    </strong>
                    <div className="mt-4">
                        <ul className="flex flex-col gap-5">
                            <li className="pb-2 flex justify-between items-center w-full border-b border-gray-200">
                                <div className="text-sm text-gray-400">
                                    Segunda - Sexta
                                </div>
                                <div className="text-sm font-semibold text-cyan-500">
                                    24 horas
                                </div>
                            </li>
                            <li className="pb-2 flex justify-between items-center w-full border-b border-gray-200">
                                <div className="text-sm text-gray-400">
                                    Sábado - Domingo
                                </div>
                                <div className="text-sm font-semibold text-cyan-500">
                                    24 horas
                                </div>
                            </li>
                            <li className="pb-2 flex justify-between items-center w-full border-b border-gray-200">
                                <div className="text-sm text-gray-400">
                                    Feriados
                                </div>
                                <div className="text-sm font-semibold text-cyan-500">
                                    04:00 Am - 23:00 Pm
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 pt-5 flex flex-col xl:flex-row justify-between gap-3 w-full xl:w-2/3 xl:border-t xl:border-gray-200">
                <div>
                    <p className="text-sm text-gray-400">
                        © Healthcare Centro Médico.
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex justify-center items-center w-9 h-9 bg-cyan-500 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                            <TiSocialFacebook className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex justify-center items-center w-9 h-9 bg-cyan-500 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                            <FaXTwitter className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex justify-center items-center w-9 h-9 bg-cyan-500 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                            <TiSocialLinkedin className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}