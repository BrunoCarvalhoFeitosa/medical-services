"use client"
import Image from "next/image"
import { FaUserGroup } from "react-icons/fa6"
import { FaMap, FaStar } from "react-icons/fa"

interface DoctorResumeProps {
    picture: string
    name: string
    title: string
    age: string
    history: string
}

export const DoctorResume = ({ picture, name, title, history }: DoctorResumeProps) => {
    return (
        <section className="mx-auto lg:my-16 px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="mb-4 w-full">
                <h2 className="text-xl md:text-3xl font-semibold text-cyan-500">
                    Biografia
                </h2>
                <p className="text-sm text-zinc-900">
                    Conheça a história do Doutor {name}.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                    <div>
                        <p className="text-sm text-zinc-900">
                            {history}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}