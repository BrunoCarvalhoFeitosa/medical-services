import { HeaderTitle } from "@/app/_components/common/header-title"
import { Footer } from "@/app/_components/common/footer"
import { Policy } from "./_components/policy"

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