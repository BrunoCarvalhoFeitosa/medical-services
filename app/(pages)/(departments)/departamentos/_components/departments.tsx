"use client"
import { GiBarefoot, GiHeartOrgan, GiKidneys, GiLiver, GiNoseSide, GiStomach, GiStrong } from "react-icons/gi"
import { MdOutlineElderlyWoman } from "react-icons/md"
import { PiBrainFill, PiEarDuotone, PiToothFill } from "react-icons/pi"
import { IoManSharp, IoWoman } from "react-icons/io5"
import { ImEye } from "react-icons/im"
import { FaChild, FaHeadSideMask, FaLungs, FaPersonPregnant } from "react-icons/fa6"

export const departments = [
    {
        id: 1,
        icon: <GiHeartOrgan />,
        name: "Cardiologia",
        description: "A cardiologia é a especialidade da medicina que se concentra no diagnóstico, tratamento e prevenção de doenças do coração e dos vasos sanguíneos. Os cardiologistas lidam com uma variedade de condições, incluindo hipertensão arterial, infarto do miocárdio (ataque cardíaco), insuficiência cardíaca, arritmias e doenças das válvulas cardíacas. O campo inclui várias áreas, como a cardiologia intervencionista, que realiza procedimentos invasivos como angioplastias e stenting, e a eletrofisiologia, que estuda e trata distúrbios do ritmo cardíaco. É uma área importante da medicina.",
    },
    {
        id: 2,
        icon: <GiKidneys />,
        name: "Nefrologia",
        description: "A nefrologia é a especialidade médica que se dedica ao diagnóstico, tratamento e prevenção de doenças dos rins. Os nefrologistas tratam uma variedade de condições, como insuficiência renal aguda e crônica, glomerulonefrite, hipertensão arterial, e distúrbios eletrolíticos. Além disso, a nefrologia inclui a gestão da diálise, um tratamento essencial para pacientes com falência renal, e a avaliação de candidatos para transplante renal. A especialidade busca manter a função renal, prevenir a progressão das doenças e melhorar a qualidade de vida dos pacientes com problemas renais.",
    },
    {
        id: 3,
        icon: <FaLungs />,
        name: "Pneumologia",
        description: "A pneumologia é a especialidade médica que foca no diagnóstico, tratamento e prevenção de doenças dos pulmões e do sistema respiratório. Os pneumologistas lidam com condições como asma, bronquite, pneumonia, doença pulmonar obstrutiva crônica (DPOC), fibrose pulmonar e câncer de pulmão. A especialidade também envolve a gestão de distúrbios respiratórios do sono, como a apneia do sono, e a realização de procedimentos diagnósticos, como broncoscopias. O objetivo da pneumologia é melhorar a função respiratória e a qualidade de vida dos pacientes com doenças pulmonares.",
    },
    {
        id: 4,
        icon: <GiLiver />,
        name: "Hepatologia",
        description: "A hepatologia é a especialidade médica que se dedica ao estudo, diagnóstico, tratamento e prevenção de doenças do fígado e dos órgãos relacionados, como a vesícula biliar e os ductos biliares. Os hepatologistas tratam condições como hepatite viral, cirrose hepática, doença hepática gordurosa não alcoólica (DHGNA), câncer de fígado e distúrbios das vias biliares. Além disso, a hepatologia envolve a avaliação e gestão de pacientes que necessitam de transplante de fígado. A especialidade busca preservar a função hepática, prevenir complicações e melhorar a qualidade de vida dos pacientes com doenças hepáticas.",
    },
    {
        id: 5,
        icon: <GiStomach />,
        name: "Gastroenterologia",
        description: "A gastroenterologia é a especialidade médica que se ocupa do diagnóstico, tratamento e prevenção de doenças do trato gastrointestinal, que inclui o esôfago, estômago, intestinos (delgado e grosso), fígado, pâncreas e vias biliares. Os gastroenterologistas tratam condições como gastrite, úlceras, refluxo gastroesofágico, síndrome do intestino irritável, doenças inflamatórias intestinais (como doença de Crohn e colite ulcerativa), hepatites e câncer gastrointestinal. A especialidade também abrange a realização de procedimentos diagnósticos e terapêuticos, como endoscopias e colonoscopias.",
    },
    {
        id: 6,
        icon: <PiBrainFill />,
        name: "Neurologia",
        description: "A neurologia é a especialidade médica que se dedica ao diagnóstico, tratamento e manejo de doenças do sistema nervoso, que inclui o cérebro, a medula espinhal e os nervos periféricos. Os neurologistas tratam uma ampla gama de condições, como acidente vascular cerebral (AVC), esclerose múltipla, doença de Parkinson, epilepsia, enxaquecas, neuropatias e demências, como a doença de Alzheimer. A neurologia envolve a avaliação detalhada dos sintomas neurológicos, realização de exames neurológicos e, muitas vezes, a utilização de técnicas de imagem como ressonância magnética e tomografia computadorizada.",
    },
    {
        id: 7,
        icon: <ImEye />,
        name: "Oftalmologia",
        description: "A oftalmologia é a especialidade médica que se concentra no diagnóstico, tratamento e prevenção de doenças e condições dos olhos e da visão. Os oftalmologistas lidam com uma ampla gama de problemas oculares, como miopia, hipermetropia, astigmatismo, catarata, glaucoma, degeneração macular e retinopatia diabética. Além de prescrever óculos e lentes de contato, eles realizam procedimentos cirúrgicos, como a cirurgia de catarata e a correção de estrabismo. A oftalmologia também abrange a gestão de condições que afetam a qualidade de vida visual e a saúde ocular geral.",
    },
    {
        id: 8,
        icon: <GiBarefoot />,
        name: "Angiologia",
        description: "A angiologia é a especialidade médica que se ocupa do diagnóstico e tratamento de doenças dos vasos sanguíneos e linfáticos. Isso inclui artérias, veias e vasos linfáticos. Os angiologistas tratam condições como a aterosclerose, varizes, trombose venosa profunda, insuficiência venosa crônica e linfedema. A especialidade pode envolver tanto abordagens clínicas quanto procedimentos intervencionistas, como a realização de exames de imagem vasculares e tratamentos minimamente invasivos. O objetivo da angiologia é manter a saúde vascular, prevenir complicações e melhorar a qualidade de vida dos pacientes com doenças dos vasos sanguíneos e linfáticos.",
    },
    {
        id: 9,
        icon: <GiNoseSide />,
        name: "Otorrinolaringologia",
        description: "A otorrinolaringologia é a especialidade médica que se dedica ao diagnóstico, tratamento e prevenção de doenças e distúrbios dos ouvidos, nariz e garganta. Os otorrinolaringologistas tratam condições como infecções de ouvido, sinusite, rinite alérgica, amigdalite, distúrbios da voz e da deglutição, além de problemas auditivos e vertigem. A especialidade inclui procedimentos cirúrgicos, como tonsilectomia, adenoidectomia e cirurgia nasal. O objetivo da otorrinolaringologia é aliviar sintomas, restaurar funções e melhorar a qualidade de vida dos pacientes com condições que afetam estas áreas.",
    },
    {
        id: 10,
        icon: <PiEarDuotone />,
        name: "Fonoaudiologia",
        description: "A fonoaudiologia é a profissão que se concentra na avaliação, diagnóstico e tratamento de distúrbios da comunicação, linguagem, voz e deglutição. Os fonoaudiólogos trabalham com uma variedade de condições, como dificuldades na fala e na linguagem, problemas de articulação, distúrbios da voz, dificuldades de deglutição e questões relacionadas ao desenvolvimento da comunicação em crianças e adultos. A fonoaudiologia também pode incluir a reabilitação após lesões ou doenças neurológicas que afetam a comunicação e a deglutição.",
    },
    {
        id: 11,
        icon: <PiToothFill />,
        name: "Dentista",
        description: "O dentista é um profissional da saúde especializado no diagnóstico, tratamento e prevenção de doenças e condições que afetam os dentes, gengivas e estruturas relacionadas da boca. As principais funções dos dentistas incluem realizar exames clínicos, limpar e restaurar dentes, tratar cáries, realizar extrações dentárias, realizar procedimentos estéticos, como clareamento e ortodontia, e oferecer orientações sobre cuidados com a saúde bucal. Eles também lidam com problemas mais complexos, como doenças periodontais e tratamentos de canal.",
    },
    {
        id: 12,
        icon: <FaHeadSideMask />,
        name: "Infectologia",
        description: "A infectologia é a especialidade médica que se dedica ao diagnóstico, tratamento e prevenção de doenças infecciosas causadas por micro-organismos como bactérias, vírus, fungos e parasitas. Os infectologistas tratam condições como infecções respiratórias, gastrointestinais, urinárias, doenças sexualmente transmissíveis, e doenças sistêmicas como HIV/AIDS. A especialidade também inclui a gestão de infecções hospitalares, acompanhamento de pacientes imunocomprometidos e a administração de vacinas.",
    },
    {
        id: 13,
        icon: <GiStrong />,
        name: "Fisioterapia",
        description: "A fisioterapia é uma área da saúde que se concentra na prevenção, diagnóstico e tratamento de disfunções e lesões musculoesqueléticas e neuromusculares por meio de exercícios, técnicas manuais e intervenções físicas. Os fisioterapeutas trabalham para restaurar a mobilidade, reduzir a dor, melhorar a função física e promover a recuperação após cirurgias, acidentes ou doenças. A prática inclui a reabilitação de condições como lesões esportivas, problemas posturais, dor crônica, reabilitação pós-cirúrgica e distúrbios neuromusculares.",
    },
    {
        id: 14,
        icon: <FaChild />,
        name: "Pediatria",
        description: "A pediatria é a especialidade médica que se dedica ao cuidado da saúde de crianças e adolescentes, desde o nascimento até a adolescência. Os pediatras avaliam, diagnosticam e tratam uma ampla gama de condições de saúde, incluindo doenças infecciosas, problemas de crescimento e desenvolvimento, distúrbios alimentares, doenças crônicas e questões de saúde mental. Além disso, os pediatras realizam exames de rotina, imunizações e orientações sobre cuidados preventivos e desenvolvimento saudável. O objetivo da pediatria é promover a saúde e o bem-estar dos jovens pacientes.",
    },
    {
        id: 15,
        icon: <IoManSharp />,
        name: "Andrologia",
        description: "A andrologia é a especialidade médica focada no diagnóstico, tratamento e prevenção de doenças e distúrbios relacionados ao sistema reprodutivo masculino. Os andrologistas lidam com condições como disfunção erétil, infertilidade masculina, hipogonadismo (baixa produção de hormônios sexuais), doenças da próstata e alterações hormonais. A especialidade envolve a avaliação de problemas sexuais e reprodutivos, além de tratamentos que podem incluir terapias hormonais, medicamentos e procedimentos cirúrgicos.",
    },
    {
        id: 16,
        icon: <IoWoman />,
        name: "Ginecologia",
        description: "A ginecologia é a especialidade médica dedicada ao diagnóstico, tratamento e prevenção de doenças e condições que afetam o sistema reprodutivo feminino, incluindo os órgãos genitais internos e externos. Os ginecologistas tratam uma ampla gama de condições, como infecções, distúrbios menstruais, endometriose, miomas, câncer ginecológico e questões relacionadas à menopausa. Além de realizar exames de rotina, como o papanicolau, a especialidade também envolve a gestão da saúde reprodutiva e sexual das mulheres, incluindo o aconselhamento sobre contracepção e planejamento familiar.",
    },
    {
        id: 17,
        icon: <FaPersonPregnant />,
        name: "Ginecologia obstétrica",
        description: "Concentra-se no cuidado pré-natal, no acompanhamento do trabalho de parto e no atendimento ao parto, bem como no cuidado pós-natal. Os obstetras gerenciam a saúde da mãe e do bebê durante a gravidez e o parto, lidando com complicações que possam surgir e oferecendo suporte em aspectos relacionados à gravidez, como o planejamento familiar e a educação pré-natal. O objetivo da ginecologia obstétrica é garantir a saúde e o bem-estar das mulheres durante todas as fases de suas vidas reprodutivas, desde a prevenção e tratamento e cuidado abrangente durante a gravidez e o parto.",
    },
    {
        id: 18,
        icon: <MdOutlineElderlyWoman />,
        name: "Geriatria",
        description: "A geriatria é a especialidade médica que se concentra no cuidado da saúde de idosos, abordando as complexas necessidades físicas, mentais e sociais que surgem com o envelhecimento. Os geriatras avaliam e tratam condições comuns em idosos, como doenças crônicas (diabetes, hipertensão, artrite), distúrbios cognitivos (demência, Alzheimer), problemas de mobilidade e fraqueza. A geriatria também inclui a gestão de polifarmácia, cuidados paliativos e a promoção da qualidade de vida através de intervenções preventivas e de suporte.",
    },
]

export const Departments = () => {
    return (
        <section className="mx-auto py-10 px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((department) => (
                    <div
                        key={department.id}
                        className="relative pl-4 pb-8 bg-gray-50"
                    >
                        <div className="text-zinc-900">
                            <div className="flex justify-end">
                                <div className="py-4 px-5 bg-cyan-500 text-4xl text-white">
                                    {department.icon}
                                </div>
                            </div>
                            <h2 className="text-lg font-semibold">
                                {department.name}
                            </h2>
                            <p className="text-sm">
                                {department.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}