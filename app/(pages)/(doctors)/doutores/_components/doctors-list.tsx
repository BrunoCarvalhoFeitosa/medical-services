"use client"
import { doctors } from "@/constants"
import Link from "next/link"
import { DoctorsListItem } from "@/app/(pages)/(doctors)/doutores/_components/doctors-list-item"

export const DoctorsList  = () => {
    return (
        <div className="mt-16 mx-auto px-5 md:px-10 xl:px-0 w-full xl:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {doctors.map((doctor) => (
                <Link key={doctor.id} href={`/doutores/doutor/${doctor.id}`}>
                    <DoctorsListItem
                        key={doctor.id}
                        id={doctor.id}
                        image={doctor.image}
                        name={doctor.name}
                        title={doctor.title}
                        description={doctor.description}
                    />
                </Link>
            ))}
        </div>
    )
}