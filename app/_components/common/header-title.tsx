"use client"

interface HeaderTitleProps {
    title: string
    description: string
}

export const HeaderTitle = ({ title, description }: HeaderTitleProps) => {
    return (
        <section className="w-full bg-gray-50">
            <div className="mx-auto mb-8 py-16 px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
                <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                    {title}
                </h4>
                <p className="text-sm text-zinc-900">
                    {description}
                </p>
            </div>
        </section>
    )
}