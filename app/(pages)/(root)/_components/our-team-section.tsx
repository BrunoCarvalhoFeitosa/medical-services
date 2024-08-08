"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { doctors } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti"
import { FaXTwitter } from "react-icons/fa6"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const OurTeamSection = () => {
    return (
        <div id="doutores" className="relative mt-16 xl:mt-52 mx-auto px-5 md:px-10 xl:px-0 w-full xl:w-2/3">
            <div className="mb-8 w-full">
                <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-cyan-500">
                    Doutores
                </h4>
                <p className="text-sm text-zinc-900">
                    Conheça nossa equipe, temos os melhores doutores do país em cada especialidade.
                </p>
            </div>
            <div className="w-full">
                <Swiper
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={50}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    grabCursor
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        1240: {
                            slidesPerView: 2
                        }
                    }}
                >
                    {doctors.map((doctor) => (
                        <SwiperSlide key={doctor.id}>
                            <div className="group flex flex-col md:flex-row items-center gap-5">
                                <div className="relative flex-1 w-full h-64 bg-gray-100 overflow-hidden">
                                    <div>
                                        <Link
                                            href={`/doutores/doutor/${doctor.id}`}
                                            className="absolute top-3 right-3 flex justify-center items-center w-12 h-12 border border-transparent transition-all duration-300 group-hover:border-cyan-600 group-hover:bg-cyan-500 group-hover:text-white z-10"
                                        >
                                            <HiOutlineArrowNarrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                    <div className="w-full h-full">
                                        <Image
                                            src={doctor.image}
                                            width={300}
                                            height={300}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110 cursor-zoom-in"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="mb-3">
                                        <h5 className="text-lg font-semibold leading-none text-zinc-900">
                                            {doctor.name}
                                        </h5>
                                        <strong className="text-xs font-normal leading-none uppercase text-gray-400">
                                            {doctor.title}
                                        </strong>
                                        <p className="mt-4 text-sm">
                                            {doctor.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center w-9 h-9 bg-cyan-500 cursor-pointer">
                                            <TiSocialFacebook className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex justify-center items-center w-9 h-9 bg-cyan-500 cursor-pointer">
                                            <FaXTwitter className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex justify-center items-center w-9 h-9 bg-cyan-500 cursor-pointer">
                                            <TiSocialLinkedin className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}