"use client"
import CountUp from "react-countup"

export const NumbersSection = () => {
    return (
        <section className="w-full py-16 px-5 md:px-10 xl:px-0">
            <div className="mx-auto w-full xl:w-2/3">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col items-center">
                        <div className="text-2xl xl:text-5xl font-semibold text-cyan-500">
                            +<CountUp
                                start={0}
                                end={20120}
                                duration={4}
                                separator="."
                                enableScrollSpy
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">
                                Pacientes contentes
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 md:mt-0 mb-6 md:mb-0 w-2/4 h-[1px] md:w-[1px] md:h-10 bg-gray-200" />
                    <div className="flex flex-col items-center">
                        <div className="text-2xl xl:text-5xl font-semibold text-cyan-500">
                            +<CountUp
                                start={0}
                                end={32}
                                duration={2}
                                separator="."
                                enableScrollSpy
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">
                                Total de hospitais
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 md:mt-0 mb-6 md:mb-0 w-2/4 h-[1px] md:w-[1px] md:h-10 bg-gray-200" />
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-2xl xl:text-5xl font-semibold text-cyan-500">
                            +<CountUp
                                start={0}
                                end={68}
                                duration={2}
                                separator="."
                                enableScrollSpy
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">
                                Doutores especialistas
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 md:mt-0 mb-6 md:mb-0 w-2/4 h-[1px] md:w-[1px] md:h-10 bg-gray-200" />
                    <div className="flex flex-col items-center">
                        <div className="text-2xl xl:text-5xl font-semibold text-cyan-500">
                            +<CountUp
                                start={0}
                                end={10}
                                duration={2}
                                separator="."
                                enableScrollSpy
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">
                                Anos de experiência
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}