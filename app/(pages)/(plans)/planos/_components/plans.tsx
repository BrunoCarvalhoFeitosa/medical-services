"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { FaCheck } from "react-icons/fa6"

export const Plans = () => {
    return (
        <section className="w-full">
            <div className="mx-auto px-5 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
                <Tabs defaultValue="individual" className="w-full flex flex-col xl:flex-row gap-10 text-zinc-900">
                    <div className="flex-1 order-2 xl:order-1">
                        <TabsContent value="individual">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Plano completo que cobre apenas uma pessoa.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Cobertura nacional.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Desconto em farmácias credenciadas.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Desconto em procedimentos estéticos específicos.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Consulta online com um doutor.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Quarto compartilhado
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Enfermaria compartilhada
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="couple">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Plano completo que cobre apenas duas pessoas.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Cobertura nacional.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Desconto em farmácias credenciadas.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Desconto em procedimentos estéticos específicos.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Consulta online com um doutor.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Quarto compartilhado
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Enfermaria compartilhada
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="family">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Plano completo que cobre até quatro pessoas.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Cobertura internacional.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Desconto em todas as farmácias.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Desconto em todos os procedimentos estéticos.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Consulta online com um doutor.
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Quarto particular
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="order-2 md:order-1 flex-1">
                                        <p className="text-sm text-zinc-900">
                                            Enfermaria particular
                                        </p>
                                    </div>
                                    <div className="order-1 md:order-2 flex justify-center items-center w-6 h-6 rounded-full bg-cyan-500">
                                        <FaCheck className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                    <div className="flex-1 order-1 xl:order-2">
                        <TabsList className="flex flex-col gap-4">
                            <TabsTrigger value="individual" className="w-full bg-gray-100 rounded-none">
                                <div className="p-3 w-full flex flex-col md:flex-row items-center gap-8 text-zinc-900">
                                    <div className="md:text-left text-sm">
                                        <h2 className="text-xl font-semibold">
                                            Individual
                                        </h2>
                                        <p>
                                            Plano completo que cobre apenas uma pessoa.
                                        </p>
                                    </div>
                                    <div className="w-full flex-1 flex justify-center items-center">
                                        <div className="text-2xl font-semibold">
                                            R$540
                                        </div>
                                        <div className="text-sm">
                                            /mês
                                        </div>
                                    </div>
                                    <div className="w-full flex-1">
                                        <div className="bg-cyan-500 py-3 px-5 text-base font-semibold text-white">
                                            Selecionar plano
                                        </div>
                                    </div>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="couple" className="w-full bg-gray-100 rounded-none">
                                <div className="p-3 w-full flex flex-col md:flex-row items-center gap-8 text-zinc-900">
                                    <div className="md:text-left text-sm">
                                        <h2 className="text-xl font-semibold">
                                            Casal
                                        </h2>
                                        <p>
                                            Plano completo que cobre apenas duas pessoas.
                                        </p>
                                    </div>
                                    <div className="w-full flex-1 flex justify-center items-center">
                                        <div className="text-2xl font-semibold">
                                            R$990
                                        </div>
                                        <div className="text-sm">
                                            /mês
                                        </div>
                                    </div>
                                    <div className="w-full flex-1">
                                        <div className="bg-cyan-500 py-3 px-5 text-base font-semibold text-white">
                                            Selecionar plano
                                        </div>
                                    </div>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="family" className="w-full bg-gray-100 rounded-none">
                                <div className="p-3 w-full flex flex-col md:flex-row items-center gap-8 text-zinc-900">
                                    <div className="md:text-left text-sm">
                                        <h2 className="text-xl font-semibold">
                                            Família
                                        </h2>
                                        <p>
                                            Plano completo que cobrem até quatro pessoas.
                                        </p>
                                    </div>
                                    <div className="w-full flex-1 flex justify-center items-center">
                                        <div className="text-2xl font-semibold">
                                            R$1540
                                        </div>
                                        <div className="text-sm">
                                            /mês
                                        </div>
                                    </div>
                                    <div className="w-full flex-1">
                                        <div className="bg-cyan-500 py-3 px-5 text-base font-semibold text-white">
                                            Selecionar plano
                                        </div>
                                    </div>
                                </div>
                            </TabsTrigger>
                        </TabsList>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}