import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Feature {
    image: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        image: "/images/home/lotus_temple.png",
        title: "Temple du Lotus, Delhi",
        description:
            "Découvrez la sérénité du magnifique Temple du Lotus, un chef-d'œuvre architectural moderne et un havre spirituel à New Delhi.",
    },
    {
        image: "/images/home/jija.png",
        title: "Jardins Jijamata, Mumbai",
        description:
            "Explorez le plus ancien jardin et zoo de Mumbai, un espace vert historique offrant une retraite paisible au cœur de cette ville animée.",
    },
    {
        image: "/images/home/taj_mahal.png",
        title: "Taj Mahal, Agra",
        description: "Visitez le symbole iconique de l'amour éternel, ce site du patrimoine mondial de l'UNESCO représente l'apogée de l'architecture moghole.",
    },
    {
        image: "/images/home/elephants.png",
        title: "Safari en Éléphant",
        description: "Embarquez pour un safari inoubliable à dos d'éléphant à travers les sanctuaires de vie sauvage et les parcs nationaux de l'Inde.",
    },
];

const Hero = () => {
    const heading = "Bienvenue chez Grande Vacations";
    const description = "Découvrez des destinations enchanteuses, des expériences culturelles immersives et des voyages sur mesure. Chez Grande Vacations, votre aventure commence par des conseils d'experts et un service personnalisé – pour rendre chaque voyage aussi unique que vous l'êtes.";
    const buttons = {
        primary: {
            text: "Start Now",
            url: "#",
        },
        secondary: {
            text: "Book a demo",
            url: "#",
        },
    };

    return (
        <section className="py-48">
            <div className="container max-w-6xl">
                <div className="relative grid gap-16 md:grid-cols-2">
                    <div className="top-40 h-fit md:sticky">
                        <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
                            {heading}
                        </h2>
                        <p className="font-medium text-muted-foreground md:text-xl">
                            {description}
                        </p>
                        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
                            <Button className="gap-2" size="lg" asChild>
                                <a href={buttons.primary.url}>{buttons.primary.text}</a>
                            </Button>
                            <Button variant="outline" size="lg" className="gap-2" asChild>
                                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 md:gap-20">
                        {features.map((feature, index) => (
                            <div key={index} className="rounded-xl border p-2">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    height={400}
                                    width={800}
                                    className="aspect-video w-full rounded-xl border border-dashed object-cover filter grayscale-60 hover:grayscale-100 transition-all"
                                />
                                <div className="p-6">
                                    <h3 className="mb-1 text-2xl font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
