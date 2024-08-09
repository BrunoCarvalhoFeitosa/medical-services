"use client"
import { GoArrowUpRight } from "react-icons/go"

export const Positions = () => {
    return (
        <section className="pt-8 mx-auto px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-cyan-500">
                    Oportunidades de trabalho
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900">
                            Engenheiro Front-end (React)
                        </h4>
                        <p className="text-sm text-gray-400">
                            Presencial / Remoto
                        </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                        <GoArrowUpRight className="w-10 h-10" />
                    </div>
                </div>
                <div className="group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900">
                            Engenheiro Back-end (Java)
                        </h4>
                        <p className="text-sm text-gray-400">
                            Presencial / Remoto
                        </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                        <GoArrowUpRight className="w-10 h-10" />
                    </div>
                </div>
                <div className="group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900">
                            UX Designer Pleno
                        </h4>
                        <p className="text-sm text-gray-400">
                            Presencial / Remoto
                        </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                        <GoArrowUpRight className="w-10 h-10" />
                    </div>
                </div>
                <div className="group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900">
                            QA Sênior
                        </h4>
                        <p className="text-sm text-gray-400">
                            Presencial / Remoto
                        </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                        <GoArrowUpRight className="w-10 h-10" />
                    </div>
                </div>
                <div className="group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900">
                            Analista de Infraestrutura de Redes
                        </h4>
                        <p className="text-sm text-gray-400">
                            Presencial
                        </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                        <GoArrowUpRight className="w-10 h-10" />
                    </div>
                </div>
                <div className="group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900">
                            Account Executive Sênior
                        </h4>
                        <p className="text-sm text-gray-400">
                            Presencial
                        </p>
                    </div>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                        <GoArrowUpRight className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}