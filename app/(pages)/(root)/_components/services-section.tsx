"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card"

export const ServicesSection = () => {
    return (
        <section id="servicos" className="my-20 mx-auto px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="mb-8 w-full">
                <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                    Serviços
                </h4>
                <p className="text-sm text-zinc-900">
                    Especialidades que atendemos em nossas 32 unidades/centros médicos tecnológicos.
                </p>
            </div>
            <div className="py-6 px-3 xl:px-5 w-full bg-gray-100">
                <Tabs defaultValue="laboratory" className="flex flex-col lg:flex-row gap-10 lg:gap-0">
                    <TabsList className="flex flex-col justify-start items-start w-full md:w-2/5 lg:w-2/6">
                        <TabsTrigger
                            value="laboratory"
                            className="w-full justify-start text-left"
                        >
                            Laborarório de análises clínicas
                        </TabsTrigger>
                        <TabsTrigger
                            value="cardiology"
                            className="w-full justify-start text-left"
                        >
                            Clínica de cardiologia
                        </TabsTrigger>
                        <TabsTrigger
                            value="pediatry"
                            className="w-full justify-start text-left"
                        >
                            Clínica de pediatria
                        </TabsTrigger>
                        <TabsTrigger
                            value="geriatry"
                            className="w-full justify-start text-left"
                        >
                            Clínica de geriatria
                        </TabsTrigger>
                        <TabsTrigger
                            value="neurology"
                            className="w-full justify-start text-left"
                        >
                            Clínica de neurologia
                        </TabsTrigger>
                        <TabsTrigger
                            value="ginecology"
                            className="w-full justify-start text-left"
                        >
                            Clínica de ginecologia
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="laboratory" className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Laborarório de análises clínicas
                                </CardTitle>
                                <CardDescription>
                                    Laboratório especializado em análises clínicas.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                Contamos com um <strong>laboratório tecnológico especializado em 
                                análises clínicas</strong> em cada um dos hospitais que possuimos.
                                Todos os equipamentos são licenciados e revisados semestralmente por um orgão competente,
                                contamos com equipamentos de última geração, proporcionando segurança 
                                para você e sua família. Seguimos todas as normas estabelecidas pela vigilância
                                sanitária, todos os os nossos laboratórios são padronizados, tendo a mesma metragem e equipamentos.
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="cardiology" className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Clínica de cardiologia
                                </CardTitle>
                                <CardDescription>
                                    Clínica especializada no diagnóstico e tratamentos de doenças do coração.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                            Em cada centro médico, contamos com 3 profissionais especializados no ramo da <strong>cardiologia</strong>,
                                todos estes profissionais possuem pós-doutorado, certificações e artigos importantes neste ramo.
                                Este profissional tem por responsabilidade <strong>disgnosticar e tratar doenças relacionadas ao coração</strong>,
                                esta é uma área vital do corpo humano, um profissional neste ramo deve ser capaz de encontrar problemas
                                e realizar procedimentos cirúrgicos se necessário em um paciente com insuficiência cardiáca, por exemplo.
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="pediatry" className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Clínica de pediatria
                                </CardTitle>
                                <CardDescription>
                                    Clínica especializada no diagnóstico e tratamentos de doenças que afetam crianças.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                Em cada centro médico, contamos com 3 profissionais especializados no ramo da <strong>pediatria</strong>,
                                todos estes profissionais possuem pós-doutorado, certificações e artigos importantes neste ramo.
                                Este profissional tem por responsabilidade <strong>disgnosticar e tratar pessoas menores de 12 anos</strong> que 
                                possuem doenças e patologias preexistentes, ou seja, no momento de nascimento do feto ele possui
                                patologia preexistente para determinada doença, este profissional trata deste paciente e faz acompanhamentos 
                                periódicos.
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="geriatry" className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Clínica de geriatria
                                </CardTitle>
                                <CardDescription>
                                    Clínica especializada no diagnóstico e tratamentos de doenças que afetam idosos.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                Em cada centro médico, contamos com 3 profissionais especializados no ramo da <strong>geriatria</strong>,
                                todos estes profissionais possuem pós-doutorado, certificações e artigos importantes neste ramo.
                                Este profissional tem por responsabilidade <strong>disgnosticar e tratar pessoas maiores de 60 anos</strong> que 
                                possuem doenças e patologias comuns que vão aparecendo com o avanço do envelhacimento. Este profissional possui
                                habilidades cirúrgicas para disgnosticar e tratar doenças. 
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="neurology" className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Clínica de neurologia
                                </CardTitle>
                                <CardDescription>
                                    Clínica especializada no diagnóstico e tratamentos de doenças que afetam o cérebro.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                Em cada centro médico, contamos com 3 profissionais especializados no ramo da <strong>neurologia</strong>,
                                todos estes profissionais possuem pós-doutorado, certificações e artigos importantes neste ramo.
                                Este profissional tem por responsabilidade <strong>disgnosticar e tratar doenças que afetam o cérebro</strong> do paciente, 
                                independente de sua doença ou idade. Além disso suas habilidades cirúrgicas devem ser muito bem apuradas, por se tratar
                                de um orgão vital que envia estimúlos a todo o corpo.
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="ginecology" className="flex-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Clínica de ginecologia
                                </CardTitle>
                                <CardDescription>
                                    Clínica especializada no diagnóstico e tratamentos de doenças que afetam mulheres.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                Em cada centro médico, contamos com 3 profissionais especializados no ramo da <strong>ginecologia</strong>,
                                todos estes profissionais possuem pós-doutorado, certificações e artigos importantes neste ramo.
                                Este profissional tem por responsabilidade <strong>disgnosticar e tratar doenças que afetam mulheres</strong>, 
                                independente de sua doença ou idade.
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}