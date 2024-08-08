"use client"
import Image from "next/image"

interface HeaderTitleProps {
    picture: string
    name: string
    title: string
    days: Array<string>
}

export const HeaderTitle = ({ picture, name, title, days }: HeaderTitleProps) => {
    return (
        <section className="w-full bg-gray-50">
            <div className="mb-6 mx-auto py-0 lg:py-16 md:px-10 xl:px-0 w-full xl:w-2/3">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    <div className="w-full lg:w-64 lg:h-52 bg-gray-100 overflow-hidden">
                        <Image
                            src={picture}
                            width={160}
                            height={120}
                            alt={name}
                            className="w-full h-full object-contain object-top transition-transform duration-300 lg:hover:scale-110 cursor-zoom-in"
                        />
                    </div>
                    <div className="flex-1 flex flex-col pb-5 px-5 lg:pb-0 lg:px-0">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold leading-none text-cyan-500">
                                Doutor {name}
                            </h1>
                            <p className="text-base lg:text-sm leading-none text-zinc-900">
                                Doutor especializado em {title.toLocaleLowerCase()}.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}