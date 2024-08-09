"use client"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { getAddress } from "@/utils/get-address"
import { cepFormatMask, phoneFormatMask } from "@/utils/formatters"
import { MdEmail, MdHomeWork } from "react-icons/md"
import { RiLoader4Line, RiPhoneFill, RiUserAddFill } from "react-icons/ri"

interface HireContactFormProps {
    title?: string
    subtitle?: string
}

const schema = yup.object({
    user_completeName:
        yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Por favor, insira um nome válido.")
        .min(10, "O campo nome completo é obrigatório.")
        .max(70)
        .required("O campo nome completo é obrigatório."),
    user_email:
        yup
        .string()
        .email("Insira um endereço de e-mail válido.")
        .min(10, "O campo e-mail é obrigatório.")
        .max(100, "Insira um endereço de e-mail válido.")
        .required("O campo e-mail é obrigatório."),
    user_phone:
        yup
        .string()
        .min(14,"O campo número telefônico é obrigatório.")
        .max(15, "Por favor, insira um número telefônico válido.")
        .required("O campo número telefônico é obrigatório."),
    user_addressPostalCode:
        yup
        .string()
        .max(9)
        .required("O campo código postal é obrigatório."),
    user_addressState:
        yup
        .string()
        .max(50)
        .required("O campo estado é obrigatório."),
    user_addressCity:
        yup
        .string()
        .max(50)
        .required("O campo cidade é obrigatório."),
    user_addressNeighborhood:
        yup
        .string()
        .max(50)
        .required("O campo bairro é obrigatório."),
    user_addressStreet:
        yup
        .string()
        .max(50)
        .required("O campo rua é obrigatório."),
    user_message:
        yup
        .string()
        .min(10, "O mínimo de caracteres é 10.")
        .max(1000, "O máximo de caracteres é 1000.")
        .required("O campo mensagem é obrigatório.")
})

export const HireContactForm = ({ title, subtitle }: HireContactFormProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [charCount, setCharCount] = useState<number>(0)
    const formRef = useRef<HTMLFormElement>(null)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY!

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handlePostalCodeAutocomplete = async (ev: any) => {
        cepFormatMask(ev)
        const postalCode = ev.target.value.replace(/\D/g, "")

        if (postalCode.length <= 7) {
            setValue("user_addressState", "")
            setValue("user_addressCity", "")
            setValue("user_addressNeighborhood", "")
            setValue("user_addressStreet", "")
        }
        else {
            const search = await getAddress(postalCode)

            if (search) {
                setValue("user_addressState", search.uf)
                setValue("user_addressCity", search.localidade)
                setValue("user_addressNeighborhood", search.bairro)
                setValue("user_addressStreet", search.logradouro)
            }
        }
    }

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCharCount(event.target.value.length)
    }

    const onSubmit = async () => {
        setIsLoading(true)

        try {
            if (formRef.current) {
                await emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)

                toast.success("Mensagem enviada com sucesso, entraremos em contato.", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })

                reset()
            }
        } catch (error) {
            console.error("Error while send form", error)
            toast.error("Ocorreu um erro ao enviar sua mensagem, tente novamente.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            reset()
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full">
            {title && subtitle && (
                <div className="mb-8 w-full">
                    <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                        {title}
                    </h4>
                    <p className="text-sm text-zinc-900">
                        {subtitle}
                    </p>
                </div>
            )}
            <form
                ref={formRef}
                className="flex flex-col gap-4 text-sm"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex-1">
                        {errors.user_completeName && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_completeName.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <RiUserAddFill className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_completeName")}
                                type="text"
                                className="pl-12 pr-5 w-full h-14 border border-gray-100 outline-none"
                                placeholder="Nome completo"
                            />
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        {errors.user_email && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_email.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdEmail className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_email")}
                                type="email"
                                className="pl-12 pr-5 w-full h-14 border border-gray-100 outline-none"
                                placeholder="E-mail para contato"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex-1">
                        {errors.user_phone && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_phone.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <RiPhoneFill className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_phone")}
                                type="text"
                                className="pl-12 pr-5 w-full h-14 border border-gray-100 outline-none"
                                placeholder="Telefone para contato"
                                onKeyUp={(ev) => phoneFormatMask(ev)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        {errors.user_addressPostalCode && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_addressPostalCode.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdHomeWork className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_addressPostalCode")}
                                type="text"
                                className="pl-12 pr-5 w-full h-14 border border-gray-100 outline-none"
                                placeholder="Endereço postal"
                                onKeyUp={handlePostalCodeAutocomplete}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex-1">
                        {errors.user_addressState && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_addressState.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdHomeWork className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_addressState")}
                                disabled
                                type="text"
                                className="pl-12 pr-5 w-full h-14 text-gray-400 border border-gray-100 outline-none cursor-not-allowed"
                                placeholder="Estado"
                            />
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        {errors.user_addressCity && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_addressCity.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdHomeWork className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_addressCity")}
                                disabled
                                type="text"
                                className="pl-12 pr-5 w-full h-14 text-gray-400 border border-gray-100 outline-none cursor-not-allowed"
                                placeholder="Cidade"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full flex-1">
                        {errors.user_addressNeighborhood && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_addressNeighborhood.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdHomeWork className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_addressNeighborhood")}
                                disabled
                                type="text"
                                className="pl-12 pr-5 w-full h-14 text-gray-400 border border-gray-100 outline-none cursor-not-allowed"
                                placeholder="Bairro"
                            />
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        {errors.user_addressStreet && (
                            <p className="mb-2 text-xs text-red-600">
                                {errors.user_addressStreet.message}
                            </p>
                        )}
                        <div className="relative">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdHomeWork className="w-6 h-6 text-cyan-500" />
                            </div>
                            <input
                                {...register("user_addressStreet")}
                                disabled
                                type="text"
                                className="pl-12 pr-5 w-full h-14 text-gray-400 border border-gray-100 outline-none cursor-not-allowed"
                                placeholder="Rua"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="mb-2">
                        <p className="text-xs text-zinc-900">
                            <strong>{charCount}</strong>/1000 caracteres
                        </p>
                    </div>
                    {errors.user_message && (
                        <p className="mb-2 text-xs text-red-600">
                            {errors.user_message.message}
                        </p>
                    )}
                    <div className="w-full">
                        <textarea
                            {...register("user_message")}
                            className="p-3 w-full h-44 resize-none border border-gray-100 outline-none"
                            placeholder="Deixe sua mensagem..."
                            onKeyUp={(event: any) => handleTextareaChange(event)}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button className="px-5 w-full lg:w-2/4 h-14 bg-cyan-500 text-base md:text-lg font-semibold text-white transition-opacity duration-300 hover:opacity-75">
                        {isLoading ? (
                            <div className="flex justify-center items-center gap-2">
                                <RiLoader4Line className="w-8 h-8 text-white animate-spin" />
                                <span className="">Enviando sua mensagem agora...</span>
                            </div>
                        ) : (
                            <span>Enviar minha mensagem agora</span>
                        )}
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}