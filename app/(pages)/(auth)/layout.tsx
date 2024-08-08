"use client"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="w-full h-[calc(100dvh-108px)] lg:h-[calc(100dvh-179px)] bg-gray-50">
            <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-10 lg:px-0 w-full h-full lg:w-2/3">
                {children}
            </div>
        </main>
    )
}

export default AuthLayout