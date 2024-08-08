"use client"

import Image from "next/image"

export const Title = () => {
    return (
        <div className="my-16 mx-auto px-5 md:10 xl:px-0 w-full xl:w-2/3">
            <div className="w-full">
                <p className="text-sm text-gray-400">
                    Publicado em 07 de agosto de 2024.
                </p>
                <h2 className="text-3xl font-semibold text-zinc-900">
                    Doenças que afetam o cerébro
                </h2>
                <p className="text-base text-zinc-900">
                    Veja as 10 doenças que mais acometem os pacientes que não fazem exames e não se previnem.
                </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="py-3 px-6 bg-gray-100 text-sm text-zinc-900">
                    Prevenção
                </div>
                <div className="py-3 px-6 bg-gray-100 text-sm text-zinc-900">
                    Exames
                </div>
                <div className="py-3 px-6 bg-gray-100 text-sm text-zinc-900">
                    Doenças
                </div>
                <div className="py-3 px-6 bg-gray-100 text-sm text-zinc-900">
                    Cérebro
                </div>
            </div>
        </div>
    )
}