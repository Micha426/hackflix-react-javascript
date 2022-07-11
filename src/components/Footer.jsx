
export function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="py-6 bg-gray-900 text-center">
            <p className="text-white">Hackflicx © {year} Powered by Avans</p>
        </footer>
    )
}