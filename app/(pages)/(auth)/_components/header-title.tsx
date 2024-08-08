"use client"

interface HeaderTitleProps {
    title: string
    subtitle: string
    complement?: string
}

export const HeaderTitle = ({ title, subtitle, complement }: HeaderTitleProps) => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-semibold text-zinc-900">
                {title}
            </h1>
            <p className="text-sm text-zinc-900">
                {subtitle} {complement && <strong>{complement}</strong>}
            </p>
        </div>
    )
}