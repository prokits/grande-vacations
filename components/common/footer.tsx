import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Grande Vacations. Tous droits réservés.
                    </p>
                    <nav className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Mentions légales
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Confidentialité
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
