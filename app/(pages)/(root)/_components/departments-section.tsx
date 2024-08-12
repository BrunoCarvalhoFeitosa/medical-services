"use client"
import { FaHospital } from "react-icons/fa"
import { FaPersonPregnant } from "react-icons/fa6"
import { GiBarefoot } from "react-icons/gi"
import { MdLocalPharmacy } from "react-icons/md"

export const DepartmentsSection = () => {
    return (
        <section id="departamentos" className="relative mx-auto px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="p-8 w-full lg:min-h-64 bg-cyan-500">
                <div className="mx-auto lg:w-[90%]">
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-white">
                        Departamentos
                    </h2>
                    <p className="mt-2 text-sm text-white">
                        Especializados em todas as áreas da medicina, estamos prontos para diagnosticar
                        e tratar todo e qualquer tipo de doença que você ou sua família tenha, bem como 
                        podemos prestar serviços diários referentes à fisioterapia, desde uma lesão leve à grave
                        possuímos farmácias em cada centro médico, os medicamentos são vendidos por um preço popular, 
                        obviamente com prescrição médica.
                    </p>
                </div>
                <div className="xl:absolute xl:-bottom-28 xl:left-2/4 xl:-translate-x-2/4 mt-7 xl:mt-0 mx-auto w-full xl:w-[94%] flex flex-col lg:flex-row items-center gap-5">
                    <div className="flex-1 py-6 px-10 lg:px-2 xl:px-7 w-full bg-gray-100">
                        <div className="mb-6 flex justify-center">
                            <FaHospital className="w-10 h-10 text-cyan-500" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-base lg:text-sm xl:text-lg font-semibold text-center text-zinc-900">
                                Serviços gerais
                            </h3>
                            <p className="mt-2 text-sm text-center text-gray-400">
                                Cardiologia, pediatria, geriatria, neurologia, ginecologia, psiquiatria e muito mais.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 py-6 px-10 lg:px-2 xl:px-7 w-full bg-gray-100">
                        <div className="mb-6 flex justify-center">
                            <FaPersonPregnant className="w-10 h-10 text-cyan-500" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-base lg:text-sm xl:text-lg font-semibold text-center text-zinc-900">
                                Suporte à gestantes
                            </h3>
                            <p className="mt-2 text-sm text-center text-gray-400">
                                Suporte a pacientes gestantes com ou sem comorbidades preexistentes.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 py-6 px-10 lg:px-2 xl:px-7 w-full bg-gray-100">
                        <div className="mb-6 flex justify-center">
                            <GiBarefoot className="w-10 h-10 text-cyan-500" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-base lg:text-sm xl:text-lg font-semibold text-center text-zinc-900">
                                Suporte fisioterapeutico
                            </h3>
                            <p className="mt-2 text-sm text-center text-gray-400">
                                Suporte fisioterapeutico diário para pacientes acometidos de fraturas leves ou graves.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 py-6 px-10 lg:px-2 xl:px-7 w-full bg-gray-100">
                        <div className="mb-6 flex justify-center">
                            <MdLocalPharmacy className="w-10 h-10 text-cyan-500" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-base lg:text-sm xl:text-lg font-semibold text-center text-zinc-900">
                                Suporte farmaceutico
                            </h3>
                            <p className="mt-2 text-sm text-center text-gray-400">
                                Farmácia popular integrada aos centros médicos, venda sob prescrição médica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}