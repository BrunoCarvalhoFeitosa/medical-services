import { HeaderTitle } from "@/app/_components/common/header-title"
import { Policy } from "@/app/(pages)/(institutional)/(policies)/politica-de-cookies/_components/policy"
import { Footer } from "@/app/_components/common/footer"

const CookiesPolicyPage = () => {
    return (
        <div>
            <HeaderTitle
                title="Política de cookies"
                description="O que são cookies, tipos de cookies e porque utilizamos."
            />
            <Policy />
            <Footer />
        </div>
    )
}

export default CookiesPolicyPage