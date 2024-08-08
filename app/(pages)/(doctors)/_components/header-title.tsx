"use client"

interface HeaderTitleProps {
    title: string
    subtitle: string
    complement?: string
}

export const HeaderTitle = ({ title, subtitle, complement }: HeaderTitleProps) => {
    return (
        <div className="mx-auto pt-16 pb-8 px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                {title}
            </h1>
            <p className="text-sm text-zinc-900">
                {subtitle} {complement && <strong>{complement}</strong>}
            </p>
        </div>
    )
}