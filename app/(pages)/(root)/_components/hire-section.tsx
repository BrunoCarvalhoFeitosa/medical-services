"use client"
import { useRef, useState } from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { getAddress } from "@/utils/get-address"
import { cepFormatMask, phoneFormatMask } from "@/utils/formatters"
import { MdEmail, MdHomeWork } from "react-icons/md"
import { RiPhoneFill, RiUserAddFill } from "react-icons/ri"
import { HireContactForm } from "@/app/_components/common/hire-contact-form"

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

export const HireSection = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [charCount, setCharCount] = useState<number>(0)
    const formRef = useRef<HTMLFormElement>(null)

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
        try {
            if (formRef.current) {

            }
        } catch (error) {

        }
    }

    return (
        <section id="contato" className="mx-auto my-16 px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
            <HireContactForm
                title="Entre em contato"
                subtitle="Quer contratar um plano médico? Entre em contato conosco agora mesmo."
            />
        </section>
    )
}