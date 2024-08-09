import { HeaderTitle } from "@/app/_components/common/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/politica-de-privacidade/_components/policy"
import { Footer } from "@/app/_components/common/footer"

const PrivacyPolicyPage = () => {
    return (
        <div>
            <HeaderTitle
                title="Política de privacidade"
                description="Saiba como coletamos, utilizamos e protegemos os seus dados."
            />
            <Policy />
            <Footer />
        </div>
    )
}

export default PrivacyPolicyPage