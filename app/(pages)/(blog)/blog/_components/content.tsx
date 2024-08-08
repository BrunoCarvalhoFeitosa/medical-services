"use client"

import Image from "next/image"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti"

export const Content = () => {
    return (
        <div className="sticky my-16 mx-auto px-5 md:10 xl:px-0 w-full xl:w-2/3">
            <div className="flex items-start justify-between gap-5">
                <div className="w-[85%]">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold text-zinc-900">
                            Veja as 10 doenças neurológicas que mais acometem os pacientes que não fazem exames e não se previnem.
                        </h3>
                        <p className="mt-5 text-sm text-zinc-900">
                            A falta de exames regulares e a ausência de medidas preventivas podem contribuir para o desenvolvimento e agravamento de várias doenças neurológicas. Aqui estão dez condições neurológicas que frequentemente acometem pacientes que não adotam cuidados preventivos:
                        </p>
                        <ul className="mt-5 list-decimal ml-5 md:ml-10">
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Acidente Vascular Cerebral (AVC):</strong> O AVC, ou derrame cerebral, pode ser causado por bloqueios ou hemorragias nos vasos sanguíneos do cérebro. Fatores de risco como hipertensão, diabetes e colesterol elevado podem ser identificados e geridos através de exames regulares. Sem monitoramento, o AVC pode ocorrer sem aviso prévio e ter consequências graves, como paralisia e perda de habilidades cognitivas.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Doença de Alzheimer:</strong> A Doença de Alzheimer é uma forma comum de demência que afeta a memória e outras funções cognitivas. Embora não haja cura, a detecção precoce pode ajudar a gerenciar os sintomas e retardar a progressão da doença. Exames neurológicos e avaliações cognitivas podem ajudar na identificação precoce de sinais de demência.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Doença de Parkinson:</strong> Caracterizada por tremores, rigidez muscular e dificuldade de movimento, a Doença de Parkinson pode ser tratada de forma mais eficaz se diagnosticada precocemente. A ausência de exames neurológicos pode levar ao agravamento dos sintomas e à perda de qualidade de vida.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Esclerose Múltipla (EM):</strong> A EM é uma doença autoimune que afeta o sistema nervoso central e pode causar uma ampla gama de sintomas, incluindo fraqueza muscular, problemas de visão e dificuldades de coordenação. Exames neurológicos e ressonâncias magnéticas são importantes para o diagnóstico e manejo adequado da condição.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Enxaqueca Crônica:</strong> A enxaqueca crônica pode ser debilitante e ter um impacto significativo na qualidade de vida. A falta de acompanhamento pode levar a um controle inadequado da condição. Avaliações neurológicas podem ajudar a identificar padrões e gatilhos das enxaquecas e orientar opções de tratamento eficazes.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Epilepsia:</strong> A epilepsia é caracterizada por convulsões recorrentes. Sem diagnóstico e tratamento adequados, as convulsões podem se tornar mais frequentes e graves. Exames como eletroencefalogramas (EEG) são cruciais para a detecção e gerenciamento da epilepsia.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Hidrocefalia:</strong> A hidrocefalia é uma condição em que há acúmulo excessivo de líquido cefalorraquidiano no cérebro, o que pode causar aumento da pressão intracraniana. Sem acompanhamento adequado, a condição pode levar a danos cerebrais e problemas de desenvolvimento. Exames de imagem, como tomografia e ressonância magnética, são importantes para o diagnóstico e tratamento.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Ataxia:</strong> A ataxia é uma condição neuromuscular que afeta a coordenação e o equilíbrio. Pode ser causada por uma variedade de fatores, incluindo condições genéticas e adquiridas. Exames neurológicos são essenciais para identificar a causa subjacente e para o manejo dos sintomas.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Doença de Huntington:</strong> A Doença de Huntington é uma doença neurodegenerativa hereditária que causa movimentos involuntários, problemas cognitivos e alterações de comportamento. A ausência de exames neurológicos pode retardar o diagnóstico, tornando o manejo e suporte ao paciente mais desafiadores.
                            </li>
                            <li className="mb-5 text-sm text-zinc-900">
                                <strong>Neurite Óptica:</strong> A neurite óptica é a inflamação do nervo óptico, que pode causar perda de visão e dor ocular. Pode estar associada a condições como a esclerose múltipla. Exames oftalmológicos e neurológicos são importantes para o diagnóstico e tratamento precoce para minimizar o impacto na visão.
                            </li>
                        </ul>
                        <p className="mt-5 text-sm text-zinc-900">
                            A prevenção e o monitoramento regular são fundamentais para a detecção precoce e o manejo eficaz dessas condições neurológicas. A realização de exames neurológicos periódicos e a adoção de um estilo de vida saudável podem ajudar a identificar problemas antes que se tornem graves e a manter uma melhor qualidade de vida.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row md:items-end gap-2">
                        <div className="flex justify-center items-center w-28 h-28 lg:w-20 lg:h-20 bg-gray-100 overflow-hidden">
                            <Link href="/doutores/doutor/2">
                                <Image
                                    src="/images/our-team/doctor-02.png"
                                    width={120}
                                    height={120}
                                    alt=""
                                    className="w-full h-full"
                                />
                            </Link>
                        </div>
                        <div>
                            <p className="text-sm text-zinc-900">
                                Chefe de neurologia
                            </p>
                            <p className="text-sm font-semibold text-zinc-900">
                                Publicado por Doutor Christian Figueiredo
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sticky top-32 xl:top-56 flex flex-1 flex-col items-end gap-2">
                    <div className="flex justify-center items-center w-12 h-12 border cursor-pointer">
                        <TiSocialFacebook className="w-7 h-7 text-gray-500" />
                    </div>
                    <div className="flex justify-center items-center w-12 h-12 border cursor-pointer">
                        <FaXTwitter className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex justify-center items-center w-12 h-12 border cursor-pointer">
                        <TiSocialLinkedin className="w-8 h-8 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}