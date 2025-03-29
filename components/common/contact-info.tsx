import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="py-32">
            <div className="container">
                <div className="mb-14 text-center">
                    <span className="text-sm font-semibold">Contactez-nous</span>
                    <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
                        Planifiez Votre Prochaine Aventure
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Notre équipe d&apos;experts en voyage est là pour vous accompagner dans vos projets.
                    </p>
                </div>
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="text-center">
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent mx-auto">
                            <Mail className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Par Email</p>
                        <p className="mb-3 text-muted-foreground">
                            Pour des devis personnalisés et conseils
                        </p>
                        <a href="#" className="font-semibold hover:underline">
                            contact@grandevacations.fr
                        </a>
                    </div>
                    <div className="text-center">
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent mx-auto">
                            <MapPin className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Notre Agence</p>
                        <p className="mb-3 text-muted-foreground">
                            Venez découvrir nos offres de voyage
                        </p>
                        <a href="#" className="font-semibold hover:underline">
                            352/4, Munirka, New Delhi
                        </a>
                    </div>
                    <div className="text-center">
                        <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent mx-auto">
                            <Phone className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">Assistance</p>
                        <p className="mb-3 text-muted-foreground">
                            Lun-Ven, 24x7 (heure locale)
                        </p>
                        <a href="#" className="font-semibold hover:underline">
                            +91 888 251 7331
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}