import Link from "next/link"
import { Footer } from "./_components/common/footer"

const NotFoundPage = () => {
    return (
        <div>
            <div className="w-full min-h-[50dvh] flex flex-col justify-center items-center">
                <div className="mx-auto px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-semibold text-center">
                            Página não encontrada
                        </h1>
                        <p className="mx-auto w-2/3 md:w-full mb-4 text-sm text-zinc-900 text-center">
                            A página que você procurava foi movida ou não existe.
                        </p>
                        <Link
                            href="/"
                            className="py-3 px-12 w-fit mx-auto flex bg-cyan-500 text-base font-semibold text-white"
                        >
                            Retornar à página principal
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFoundPage