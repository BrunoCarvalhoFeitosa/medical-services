"use client"
import { HeaderTitle } from "@/app/_components/common/header-title"
import { Content } from "@/app/(pages)/(institutional)/(work-with-us)/trabalhe-conosco/_components/content"
import { Positions } from "@/app/(pages)/(institutional)/(work-with-us)/trabalhe-conosco/_components/positions"
import { WhatWeOffer } from "@/app/(pages)/(institutional)/(work-with-us)/trabalhe-conosco/_components/what-we-offer"
import { Footer } from "@/app/_components/common/footer"

export const WorkWithUsPage = () => {
    return (
        <div>
            <HeaderTitle
                title="Trabalhe conosco"
                description="Conheça nosso trabalho, missão, visão, valores e saiba como priorizamos as pessoas."
            />
            <Content />
            <Positions />
            <WhatWeOffer />
            <Footer />
        </div>
    )
}

export default WorkWithUsPage