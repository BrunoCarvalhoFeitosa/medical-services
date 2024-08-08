import { HeaderTitle } from "@/app/(pages)/(plans)/planos/_components/header-title"
import { Plans } from "@/app/(pages)/(plans)/planos/_components/plans"
import { Footer } from "@/app/_components/common/footer"

const PlansPage = () => {
    return (
        <div className="w-full">
            <HeaderTitle />
            <Plans />
            <Footer />
        </div>
    )
}

export default PlansPage