"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
import { QuoteLeftSvg } from "@/public/svg/quote-left-svg"
import { QuoteRightSvg } from "@/public/svg/quote-right-svg"

export const TestimonialsSection = () => {
    return (
        <section className="mx-auto px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
            <div className="mb-8 w-full">
                <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                    Avaliações
                </h4>
                <p className="text-sm text-zinc-900">
                    Avaliações registradas pelos nossos mais de 20.000 pacientes nos últimos 6 meses.
                </p>
            </div>
            <div className="py-5 lg:px-20 flex flex-col lg:flex-row items-center gap-10 bg-gray-100">
                <div className="flex-1">
                    <Image
                        src="/images/testimonials/testimonials-image.png"
                        width={500}
                        height={500}
                        alt="Avaliações registradas pelos nossos pacientes"
                        className=""
                    />
                </div>
                <div className="relative w-full lg:w-2/4 px-5 md:px-10 lg:px-0">
                    <Swiper
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        modules={[Autoplay]}
                        grabCursor
                    >
                        <SwiperSlide className="w-full">
                            <div className="flex flex-col">
                                <div>
                                    <QuoteLeftSvg width="40" height="30" />
                                </div>
                                <p className="indent-12">
                                    Fui até o centro médico localizado no estado de São Paulo,
                                    fui muito bem atendido desde a recepção, ambiente limpo e
                                    higienizado, o médico que me atendeu sanou todas as dúvidas que eu
                                    tinha a respeito do meu problema.
                                </p>
                                <div className="flex justify-end">
                                    <QuoteRightSvg width="40" height="30" />
                                </div>
                            </div>
                            <div>
                                <strong className="text-lg text-zinc-900">
                                    Dráuzio Boccelle
                                </strong>
                                <p className="text-xs uppercase tracking-[2px] text-gray-400">
                                    Cliente
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-full">
                            <div className="flex flex-col">
                                <div>
                                    <QuoteLeftSvg width="40" height="30" />
                                </div>
                                <p className="indent-12">
                                    Fui até o centro médico localizado no estado de São Paulo,
                                    fui muito bem atendido desde a recepção, ambiente limpo e
                                    higienizado, o médico que me atendeu sanou todas as dúvidas que eu
                                    tinha a respeito do meu problema.
                                </p>
                                <div className="flex justify-end">
                                    <QuoteRightSvg width="40" height="30" />
                                </div>
                            </div>
                            <div>
                                <strong className="text-lg text-zinc-900">
                                    Christian Figueiredo
                                </strong>
                                <p className="text-xs uppercase tracking-[2px] text-gray-400">
                                    Cliente
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-full">
                            <div className="flex flex-col">
                                <div>
                                    <QuoteLeftSvg width="40" height="30" />
                                </div>
                                <p className="indent-12">
                                    Fui até o centro médico localizado no estado de São Paulo,
                                    fui muito bem atendido desde a recepção, ambiente limpo e
                                    higienizado, o médico que me atendeu sanou todas as dúvidas que eu
                                    tinha a respeito do meu problema.
                                </p>
                                <div className="flex justify-end">
                                    <QuoteRightSvg width="40" height="30" />
                                </div>
                            </div>
                            <div>
                                <strong className="text-lg text-zinc-900">
                                    Bruno Schampari
                                </strong>
                                <p className="text-xs uppercase tracking-[2px] text-gray-400">
                                    Cliente
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-full">
                            <div className="flex flex-col">
                                <div>
                                    <QuoteLeftSvg width="40" height="30" />
                                </div>
                                <p className="indent-12">
                                    Fui até o centro médico localizado no estado de São Paulo,
                                    fui muito bem atendido desde a recepção, ambiente limpo e
                                    higienizado, o médico que me atendeu sanou todas as dúvidas que eu
                                    tinha a respeito do meu problema.
                                </p>
                                <div className="flex justify-end">
                                    <QuoteRightSvg width="40" height="30" />
                                </div>
                            </div>
                            <div>
                                <strong className="text-lg text-zinc-900">
                                    Daniel Santos
                                </strong>
                                <p className="text-xs uppercase tracking-[2px] text-gray-400">
                                    Cliente
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}