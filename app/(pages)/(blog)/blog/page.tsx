import { HeaderTitle } from "@/app/_components/common/header-title"
import { Cards } from "./_components/card"
import { Footer } from "@/app/_components/common/footer"
import { Title } from "./_components/title"
import { Content } from "./_components/content"

const BlogPage = () => {
    return (
        <div>
            <HeaderTitle
                title="Blog"
                description="Conteúdos diários, para você saber como alimentar-se bem e como cuidar da saúde."
            />
            <Title />
            <Content />
            <Cards />
            <Footer />
        </div>
    )
}

export default BlogPage