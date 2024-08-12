import { HeaderTitle } from "@/app/_components/common/header-title"
import { Plans } from "@/app/(pages)/(plans)/planos/_components/plans"
import { Footer } from "@/app/_components/common/footer"

const PlansPage = () => {
    return (
        <div className="w-full">
            <HeaderTitle
                title="Contrate um plano"
                description="Contrate um plano agora e tenha a tranquilidade de proteger sua família."
            />
            <Plans />
            <Footer />
        </div>
    )
}

export default PlansPage