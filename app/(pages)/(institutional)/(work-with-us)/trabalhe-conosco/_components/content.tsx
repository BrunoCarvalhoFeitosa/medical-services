"use client"

import Image from "next/image"

export const Content = () => {
    return (
        <section className="mx-auto px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <h2 className="text-2xl font-semibold text-cyan-500">
                Healthcare Centro Médico
            </h2>
            <p className="text-sm text-zinc-900">
                Um centro médico de excelência que desde 2014 vem se expandindo e melhorando processos
                internos que alcançam mais de 20.000 pacientes espalhados por todo o Brasil.
            </p>
            <div className="my-8 w-full">
                <div className="relative w-full h-[400px] md:h-[900px] overflow-hidden">
                    <Image
                        src="/images/work-with-us/image-our-office.jpg"
                        alt="Nosso escritório"
                        fill
                        layout="fill"
                        width={0}
                        height={0}
                        className="w-full h-full object-cover object-center transition-transform duration-200 hover:scale-110 cursor-zoom-in"
                    />
                </div>
                <div className="mt-2 w-full flex flex-col items-end">
                    <p className="text-xs text-gray-400">
                        Foto de uma colaboradora tirada em 2023.
                    </p>
                    <p className="text-xs text-gray-400">
                        Escritório da Avenida Paulista, 1054 - São Paulo.
                    </p>
                </div>
            </div>
            <div className="mb-8 w-full">
                <h2 className="text-2xl font-semibold text-cyan-500">
                    Nosso trabalho
                </h2>
                <p className="text-sm text-zinc-900">
                    Com 32 centros médicos espalhados por todo o Brasil, atendemos desde 2014 mais 
                    de 20.000 pacientes. Nossa equipe médica atende as especialidades cardiologia, pediatria, 
                    geriatria, neurologia, ginecologia e muitas outras. Nosso corpo médico é altamente especializado, 
                    todos os médicos possuem pós-doutorado, certificações e artigos importantes.
                </p>
            </div>
            <div className="mb-8 w-full">
                <h3 className="text-2xl font-semibold text-cyan-500">
                    Missão
                </h3>
                <p className="text-sm text-zinc-900">
                    A nossa missão é atender com excelência nossos clientes/pacientes, seguindo as normas determinadas
                    pela vigilância sanitária e todos os outros orgãos competentes. Queremos atender nossos pacientes 
                    seguindo um mesmo padrão organizacional e de infraestrutura, ou seja, termos a mesma quantidade de
                    médicos especializados, mesma quantidade de consultórios, salas de UTI, fisioterapia, salas para
                    realização de exames de raio-x, ultrassonografias e equipamentos tecnológicos que auxiliarão em 
                    procedimentos médicos.
                </p>
            </div>
            <div className="mb-8 w-full">
                <h3 className="text-2xl font-semibold text-cyan-500">
                    Visão
                </h3>
                <p className="text-sm text-zinc-900">
                    Seguindo esta padronização, será possível expandir nossa rede médica pelo mundo, pretendemos iniciar nossa
                    expansão pela américa latina e em um prazo de 15 anos, expandir para a europa. Queremos revolucionar a medicina
                    e a humanização no atendimento das pessoas, sabemos que cada vida é preciosa e entedemos o cuidado que você tem
                    por você mesmo e sua família.
                </p>
            </div>
        </section>
    )
}