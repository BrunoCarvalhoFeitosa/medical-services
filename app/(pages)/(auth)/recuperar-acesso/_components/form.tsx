"use client"
import { useEffect, useRef, useState } from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { HeaderTitle } from "@/app/(pages)/(auth)/_components/header-title"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/app/_components/ui/input-otp"
import { MdEmail } from "react-icons/md"
import { RiSeparator } from "react-icons/ri"

const schema = yup.object({
    user_email:
        yup
        .string()
        .email("Insira um endereço de e-mail válido.")
        .min(10, "O campo e-mail é obrigatório.")
        .max(100, "Insira um endereço de e-mail válido.")
        .required("O campo e-mail é obrigatório.")
})

export const Form = () => {
    const seconds = 300
    const [showCode, setShowCode] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(seconds)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | undefined

        if (showCode) {
            setCounter(seconds)

            timer = setInterval(() => {
                setCounter((time) => {
                    if (time === 0) {
                        clearInterval(timer)
                        return 0
                    } else {
                        return time - 1
                    }
                })
            }, 1000)
        }

        return () => {
            if (timer) {
                clearInterval(timer)
            }
        }
    }, [showCode])

    useEffect(() => {
        if (counter === 0) {
            setShowCode(false)
        }
    }, [counter])

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async () => {
        try {
            if (formRef.current) {
                setShowCode(true)
            }
        } catch (error) {

        }
    }

    return (
        <div className="mx-auto w-full xl:w-[60%]">
            {!showCode ? (
                <div className="w-full">
                    <HeaderTitle
                        title="Recuperar acesso"
                        subtitle="Recupere sua senha e tenha acesso novamente."
                    />
                    <div className="w-full">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full"
                        >
                            <div className="w-full">
                                {errors.user_email && (
                                    <p className="mb-2 text-xs text-red-600">
                                        {errors.user_email.message}
                                    </p>
                                )}
                                <div className="relative">
                                    <div className="absolute top-2/4 -translate-y-2/4 left-5">
                                        <MdEmail className="w-7 h-7 text-cyan-500" />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            {...register("user_email")}
                                            type="email"
                                            className="py-2 pl-14 pr-5 w-full h-14 text-sm text-zinc-900 border border-gray-100 bg-gray-100 outline-none"
                                            placeholder="E-mail"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-end w-full">
                                <button
                                    type="submit"
                                    className="w-full xl:w-2/4 h-14 bg-cyan-500 text-base text-white transition-opacity duration-300 hover:opacity-75"
                                >
                                    Recuperar acesso
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    <HeaderTitle
                        title="Verificação OTP"
                        subtitle={`Enviamos um código no e-mail`}
                        complement={`${getValues("user_email")}.`}
                    />
                        <div className="flex justify-end">
                            <span className="mr-1 text-sm">
                                O código expira em:
                            </span>
                            <strong className="text-sm">
                                {`${Math.floor(counter / 60)}`.padStart(2, "0")}:{`${counter % 60}`.padStart(2, "0")}
                            </strong>
                        </div>
                    <form className="flex flex-col gap-3">
                        <div className="w-full">
                            <InputOTP maxLength={6} className="w-full">
                                <InputOTPGroup className="w-full">
                                    <InputOTPSlot index={0} className="flex-1" />
                                    <InputOTPSlot index={1} className="flex-1" />
                                    <InputOTPSlot index={2} className="flex-1" />
                                </InputOTPGroup>
                                <RiSeparator className="w-14 h-14 md:w-24 md:h-24" />
                                <InputOTPGroup className="w-full">
                                    <InputOTPSlot index={3} className="flex-1" />
                                    <InputOTPSlot index={4} className="flex-1" />
                                    <InputOTPSlot index={5} className="flex-1" />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <div className="mt-2 flex justify-end w-full">
                            <button
                                type="submit"
                                className="w-full xl:w-2/4 h-14 bg-cyan-500 text-base text-white transition-opacity duration-300 hover:opacity-75"
                            >
                                Recuperar acesso
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}