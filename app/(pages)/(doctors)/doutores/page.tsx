import { HeaderTitle } from "@/app/(pages)/(doctors)/_components/header-title"
import { DoctorsList } from "@/app/(pages)/(doctors)/doutores/_components/doctors-list"
import { Footer } from "@/app/_components/common/footer"

const DoctorsPage = () => {
    return (
        <main className="w-full bg-gray-50">
            <HeaderTitle
                title="Doutores"
                subtitle="Doutores que atuam diarimente em nossos centros médicos."
            />
            <DoctorsList />
            <Footer />
        </main>
    )
}

export default DoctorsPage