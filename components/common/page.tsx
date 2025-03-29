export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </main>
    )
}