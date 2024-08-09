import { HeaderTitle } from "@/app/_components/common/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/termos-de-uso/_components/policy"
import { Footer } from "@/app/_components/common/footer"

const UseTermsPage = () => {
    return (
        <div>
            <HeaderTitle
                title="Termos de uso"
                description="Termos e condições gerais de uso do aplicativo/site."
            />
            <Policy />
            <Footer />
        </div>
    )
}

export default UseTermsPage