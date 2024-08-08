import { HeaderTitle } from "@/app/_components/common/header-title"
import { Content } from "./_components/content"
import { Footer } from "@/app/_components/common/footer"

const SaqPage = () => {
    return (
        <div>
            <HeaderTitle
                title="SAC"
                description="Em caso de dúvidas, sugestões ou reclamações entre em contato."
            />
            <Content />
            <Footer />
        </div>
    )
}

export default SaqPage