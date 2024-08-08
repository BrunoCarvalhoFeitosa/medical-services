import { doctors } from "@/constants"
import { HeaderTitle } from "@/app/(pages)/(doctors)/doutores/(doctor)/doutor/[id]/_components/header-title"
import { DoctorResume } from "./_components/doctor-resume"
import { Footer } from "@/app/_components/common/footer"
import { DoctorAppointment } from "./_components/doctor-appointment"
import { DoctorLocation } from "./_components/doctor-location"
import { DoctorSuggestions } from "./_components/doctor-suggestions"

interface DoctorPageProps {
    params: {
        id: number
    }
}

const DoctorPage = ({ params }: DoctorPageProps) => {
    const doctor = doctors.find((doctor) => doctor.id === Number(params.id))

    if (!doctor) {
        return (
            <main className="flex flex-col justify-center items-center w-full h-[calc(100dvh-108px)] lg:h-[calc(100dvh-179px)] bg-gray-50">
                <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold text-cyan-500">
                    Ooops!
                </h1>
                <p className="xl:mt-2 text-sm text-zinc-900">
                    Doutor não encontrado.
                </p>
            </main>
        )
    }

    return (
        <main className="w-full">
            <HeaderTitle
                picture={doctor.image}
                name={doctor.name}
                title={doctor.title}
                days={doctor.workDays}
            />
            <DoctorResume
                picture={doctor.image}
                name={doctor.name}
                title={doctor.title}
                age={doctor.age}
                history={doctor.history}
            />
            <DoctorAppointment />
            <DoctorSuggestions />
            <DoctorLocation />
            <Footer />
        </main>
    )
}

export default DoctorPage