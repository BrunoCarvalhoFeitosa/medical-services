"use client"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="w-full bg-gray-50">
            <div className="flex flex-col justify-center items-center mx-auto py-16 px-4 md:px-10 lg:px-0 w-full h-full lg:w-[85%]">
                {children}
            </div>
        </main>
    )
}

export default AuthLayout