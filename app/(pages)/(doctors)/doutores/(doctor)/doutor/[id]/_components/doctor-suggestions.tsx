"use client"
import { doctors } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { FaXTwitter } from "react-icons/fa6"

export const DoctorSuggestions = () => {
    return (
        <section className="my-16 mx-auto px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="mb-4 w-full">
                <h4 className="text-3xl font-semibold text-cyan-500">
                    Recomendamos
                </h4>
                <p className="text-sm text-zinc-900">
                    Doutores bem avaliados e que fortemente indicamos.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {doctors.slice(0, 8).map((doctor) => (
                    <div
                        key={doctor.id}
                        className="group flex flex-col items-start gap-2"
                    >
                        <div className="relative flex-1 w-full h-64 bg-gray-50 overflow-hidden">
                            <div className="relative">
                                <Link
                                    href={`/doutores/doutor/${doctor.id}`}
                                    className="absolute top-3 right-3 flex justify-center items-center w-12 h-12 border border-transparent transition-all duration-300 group-hover:border-cyan-600 group-hover:bg-cyan-500 group-hover:text-white z-10"
                                >
                                    <HiOutlineArrowNarrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="p-4 absolute bottom-0 left-0 translate-y-28 w-full h-28 bg-gray-100 transition-transform duration-300 group-hover:translate-y-0 z-10">
                                <div className="mb-4">
                                    <p className="text-xs text-center text-zinc-900">
                                        {doctor.description}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
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
                        <div className="text-left">
                            <div className="mb-3">
                                <h5 className="mt-2 text-lg font-semibold leading-none text-zinc-900">
                                    {doctor.name}
                                </h5>
                                <strong className="text-xs font-normal leading-none uppercase text-gray-400">
                                    {doctor.title}
                                </strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}