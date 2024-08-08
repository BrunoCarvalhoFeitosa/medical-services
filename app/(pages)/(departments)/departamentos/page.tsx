import { HeaderTitle } from "@/app/_components/common/header-title"
import { Departments } from "@/app/(pages)/(departments)/departamentos/_components/departments"
import { Footer } from "@/app/_components/common/footer"

const DepartmentsPage = () => {
    return (
        <div className="w-full">
            <HeaderTitle
                title="Departamentos"
                description="Especialidades que atendemos em todos os nossos centros médicos."
            />
            <Departments />
            <Footer />
        </div>
    )
}

export default DepartmentsPage