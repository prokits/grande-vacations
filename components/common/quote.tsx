import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface QuoteProps {
    quote?: string;
    author?: {
        name: string;
        role: string;
        avatar: {
            src: string;
            alt: string;
        };
    };
}

export const Quote = ({
    quote = "Les voyages ne sont pas seulement une question de destinations, mais de transformations. Chez Grande Vacations, nous créons des expériences qui éveillent l'âme et enrichissent l'esprit, un voyage à la fois.",
    author = {
        name: "Rupesh Ranjan",
        role: "Fondateur & Guide Voyageur, Grande Vacations",
        avatar: {
            src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
            alt: "Rupesh Ranjan",
        },
    },
}: QuoteProps) => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
                        &ldquo;{quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Avatar className="size-12 md:size-16">
                            <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
                            <AvatarFallback>{author.name}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="text-sm font-medium md:text-base">{author.name}</p>
                            <p className="text-sm text-muted-foreground md:text-base">
                                {author.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
