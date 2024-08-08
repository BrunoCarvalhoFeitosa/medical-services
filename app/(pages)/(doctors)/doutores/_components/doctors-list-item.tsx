"use client"
import Image from "next/image"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti"

interface DoctorsListItemProps {
    id: number
    image: string
    name: string
    title: string
    description: string
}

export const DoctorsListItem = ({ id, image, name, title, description }: DoctorsListItemProps) => {
    return (
        <div className="w-full">
            <div className="group flex flex-col md:flex-row items-center gap-5">
                <div className="relative flex-1 w-full h-64 bg-gray-100 overflow-hidden">
                    <div className="relative">
                        <Link
                            href={`/doutores/doutor/${id}`}
                            className="absolute top-3 right-3 flex justify-center items-center w-12 h-12 border border-transparent transition-all duration-300 group-hover:border-cyan-600 group-hover:bg-cyan-500 group-hover:text-white z-10"
                        >
                            <HiOutlineArrowNarrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="w-full h-full">
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={name}
                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110 cursor-zoom-in"
                        />
                    </div>
                </div>
                <div className="flex-1 text-left">
                    <div className="mb-3">
                        <h5 className="text-lg font-semibold leading-none text-zinc-900">
                            {name}
                        </h5>
                        <strong className="text-xs font-normal leading-none uppercase text-gray-400">
                            {title}
                        </strong>
                        <p className="mt-4 text-sm">
                            {description}
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
        </div>
    )
}