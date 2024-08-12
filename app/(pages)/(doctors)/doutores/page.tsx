import { HeaderTitle } from "@/app/_components/common/header-title"
import { DoctorsList } from "@/app/(pages)/(doctors)/doutores/_components/doctors-list"
import { Footer } from "@/app/_components/common/footer"

const DoctorsPage = () => {
    return (
        <main className="w-full">
            <HeaderTitle
                title="Doutores"
                description="Doutores que atuam diarimente em nossos centros médicos."
            />
            <DoctorsList />
            <Footer />
        </main>
    )
}

export default DoctorsPage