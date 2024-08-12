"use client"
import Image from "next/image"
import Link from "next/link"

export const Cards = () => {
    return (
        <section className="my-16 mx-auto px-5 md:10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-3">
                <div className="w-full md:w-auto xl:w-[40%]">
                    <div className="w-full flex-1">
                        <div className="w-full h-64 bg-gray-100 overflow-hidden">
                            <Image
                                src="/images/blog/image-blog-01.jpg"
                                width={500}
                                height={380}
                                alt="Doenças que afetam o cérebro"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                            />
                        </div>
                        <div className="mt-3 w-full">
                            <p className="text-sm text-gray-400">
                                20 Julho, 2024
                            </p>
                            <h6 className="mt-4 text-base xl:text-lg font-semibold text-zinc-900">
                                Doenças que afetam o cérebro
                            </h6>
                            <p className="mb-5 text-sm text-gray-400">
                                Veja as 10 doenças que mais acometem os pacientes que
                                não fazem exames e não se previnem. 
                            </p>
                            <Link href="/blog">
                                <button className="py-2 w-full h-12 bg-cyan-500 text-lg font-semibold text-white transition-opacity duration-300 hover:opacity-75">
                                    Leia mais
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-auto flex flex-col lg:flex-row xl:flex-1 gap-14 lg:gap-3">
                    <div className="w-full flex-1">
                        <div className="w-full h-64 bg-gray-100 overflow-hidden">
                            <Image
                                src="/images/blog/image-blog-02.jpg"
                                width={500}
                                height={380}
                                alt="Como evitar o diabetes"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                            />
                        </div>
                        <div className="mt-3 w-full">
                            <p className="text-sm text-gray-400">
                                21 Julho, 2024
                            </p>
                            <h6 className="mt-4 text-base xl:text-lg font-semibold text-zinc-900">
                                Como evitar o diabetes
                            </h6>
                            <p className="mb-5 text-sm text-gray-400">
                                Veja 10 práticas eficazes que evitam ou podem controlar a doença que
                                é silenciosa. 
                            </p>
                            <Link href="/blog">
                                <button className="py-2 w-full h-12 bg-cyan-500 text-lg font-semibold text-white transition-opacity duration-300 hover:opacity-75">
                                    Leia mais
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        <div className="w-full h-64 bg-gray-100 overflow-hidden">
                            <Image
                                src="/images/blog/image-blog-03.jpg"
                                width={500}
                                height={380}
                                alt="Eficácia da ultrassonografia"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                            />
                        </div>
                        <div className="mt-3 w-full">
                            <p className="text-sm text-gray-400">
                                22 Julho, 2024
                            </p>
                            <h6 className="mt-4 text-base xl:text-lg font-semibold text-zinc-900">
                                Eficácia da ultrassonografia
                            </h6>
                            <p className="mb-5 text-sm text-gray-400">
                                Veja como este procedimento é eficaz na busca por doenças que acometem
                                o cérebro.
                            </p>
                            <Link href="/blog">
                                <button className="py-2 w-full h-12 bg-cyan-500 text-lg font-semibold text-white transition-opacity duration-300 hover:opacity-75">
                                    Leia mais
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}