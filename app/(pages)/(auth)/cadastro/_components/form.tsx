"use client"
import { useState } from "react"
import Link from "next/link"
import { HeaderTitle } from "@/app/(pages)/(auth)/_components/header-title"
import { MdEmail } from "react-icons/md"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"
import { RiUserAddFill } from "react-icons/ri"
import { AiFillPicture } from "react-icons/ai"

export const Form = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    } 

    return (
        <div className="mx-auto w-full xl:w-[60%]">
            <HeaderTitle
                title="Cadastre-se"
                subtitle="Crie sua conta e proteja a saúde da sua família."
            />
            <div className="w-full">
                <form className="flex flex-col gap-3 w-full">
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-28 md:h-36 border-2 border-gray-300 border-dashed bg-gray-50 hover:bg-gray-100 cursor-pointer"
                    >
                        <div className="flex flex-col items-center justify-center py-3">
                            <AiFillPicture className="w-9 h-9 text-cyan-500" />
                            <p className="flex items-center gap-1 text-sm text-zinc-900">
                                <span className="font-semibold">
                                    Clique ou arraste
                                </span>
                                <span>
                                    sua foto aqui
                                </span>
                            </p>
                            <p className="text-xs text-gray-400">
                                PNG, JPG ou GIF.
                            </p>
                        </div>
                        <input
                            type="file"
                            id="dropzone-file"
                            className="hidden"
                        />
                    </label>
                </div> 
                    <div className="w-full relative">
                        <div className="absolute top-2/4 -translate-y-2/4 left-5">
                            <RiUserAddFill className="w-7 h-7 text-cyan-500" />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="py-2 pl-14 pr-5 w-full h-14 text-sm text-zinc-900 border border-gray-100 bg-gray-100 outline-none"
                                placeholder="Nome completo"
                            />
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="absolute top-2/4 -translate-y-2/4 left-5">
                            <MdEmail className="w-7 h-7 text-cyan-500" />
                        </div>
                        <div className="w-full">
                            <input
                                type="email"
                                className="py-2 pl-14 pr-5 w-full h-14 text-sm text-zinc-900 border border-gray-100 bg-gray-100 outline-none"
                                placeholder="E-mail"
                            />
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="absolute top-2/4 -translate-y-2/4 left-4">
                            <button
                                type="button"
                                className="flex justify-center items-center bg-none border-none outline-none"
                                onClick={handleShowOrHidePassword}
                            >
                                {showPassword ? (
                                    <IoIosEyeOff className="w-8 h-8 text-cyan-500" />
                                ) : (
                                    <IoIosEye className="w-8 h-8 text-cyan-500" />
                                )}
                            </button>
                        </div>
                        <div className="w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="py-2 pl-14 pr-5 w-full h-14 text-sm text-zinc-900 border border-gray-100 bg-gray-100 outline-none"
                                placeholder="Senha"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href="/login"
                            className="text-sm border-b text-gray-400"
                        >
                            Já tenho cadastro, fazer login
                        </Link>
                    </div>
                    <div className="mt-2 flex justify-end w-full">
                        <button className="w-full xl:w-2/4 h-14 bg-cyan-500 text-base text-white transition-opacity duration-300 hover:opacity-75">
                            Criar minha conta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}