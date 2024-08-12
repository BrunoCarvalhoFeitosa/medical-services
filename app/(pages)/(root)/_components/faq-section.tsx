"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/_components/ui/accordion"

export const FaqSection = () => {
    return (
        <section className="mx-auto my-16 px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="mb-8 w-full">
                <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                    Perguntas frequentes
                </h4>
                <p className="text-sm text-zinc-900">
                    Perguntas que os nossos clientes já fizeram e são comuns.
                </p>
            </div>
            <div className="w-full">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Onde posso encontrar uma unidade
                        </AccordionTrigger>
                        <AccordionContent>
                            Na página de localização você poderá encontrar unidades
                            próximas a você, basta inserir o seu código postal, nosso 
                            sistema fará recomendações de unidades próximas à sua localização. 
                            Caso ainda não consiga, fique a vontade para entrar em contato no número
                            <strong>+55 (11) 4099-9940</strong>, nesta canal iremos orientá-lo.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Quais especialidades atendemos
                        </AccordionTrigger>
                        <AccordionContent>
                            Na Insove Medical Healthcare, atendemos todas as especialidades. 
                            Temos dourores <strong>cardiologistas, pediatras, geriatras, neurologistas, 
                            ginelogistas, nefrologistas, endocrinologistas, dermatologistas, psiquiatras, 
                            reumatologistas, urologistas</strong> e muito mais.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Preço dos planos médicos
                        </AccordionTrigger>
                        <AccordionContent>
                            O preço varia muito, essa variação se dá de acordo com a quantidade de pessoas
                            ao qual o plano irá cobrir, suas respectivas idades e se há a presença de alguma
                            doença preexistente. O plano de menor valor custa R$520,00 e o de maior valor custa R$5200,00.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Como contratar um plano médico
                        </AccordionTrigger>
                        <AccordionContent>
                            Para contratar um plano médico, <strong>pelo nosso próprio site</strong>, respondendo ao formulário,
                            é possível solicitar a abertura de um novo plano médico, se preferir também poderá
                            contratar através do número telefônico <strong>+55 (11) 4099-9940</strong> ou
                            <strong> presencialmente</strong> em uma de nossas unidades.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}