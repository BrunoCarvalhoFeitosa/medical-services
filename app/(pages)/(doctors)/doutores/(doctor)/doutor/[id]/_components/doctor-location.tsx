"use client"

export const DoctorLocation = () => {
    return (
        <section className="my-16 mx-auto px-5 md:px-10 xl:px-6 2xl:px-0 w-full 2xl:w-2/3">
            <div className="mb-4 w-full">
                <h4 className="text-3xl font-semibold text-cyan-500">
                    Localização
                </h4>
                <p className="text-sm text-zinc-900">
                    Local onde fazemos agendamentos, consultas e cirurgias.
                </p>
            </div>
            <div className="w-full grayscale">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1089040973206!2d-46.654885088247774!3d-23.564531861621866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7c27b734d%3A0x15da77911a07b61c!2sAv.%20Paulista%2C%201054%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1722204646360!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="350"
                    loading="lazy"
                />
            </div>
        </section>
    )
}