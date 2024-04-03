
import CheesyDip from "@/public/sidess/cheesydip(5oz).png"
import FreshcutFries from "@/public/sidess/freshcutfries.png"
import GarlicPotatoes from "@/public/sidess/garlicpotatoes.png"
import OnionRings from "@/public/sidess/onionrings.png"
import PCSMozzaStix8 from "@/public/sidess/pcsmozzastix8.png"

export const sides = [
    {
        title: "CHEESYDIP",
        description: "CHEESYDIP_DESCRIPTION",
        imageUrl: CheesyDip,
        price: "15.00 ₪",
    },
    {
        title: "FRESHCUTFRIES",
        description: "FRESHCUTFRIES_DESCRIPTION",
        imageUrl: FreshcutFries,
        price: "12.50 ₪",
    },
    {
        title: "GARLICPOTATOES",
        description: "GARLICPOTATOES_DESCRIPTION",
        imageUrl: GarlicPotatoes,
        price: "17.50 ₪",
    },
    {
        title: "ONIONRINGS",
        description: "ONIONRINGS_DESCRIPTION",
        imageUrl: OnionRings,
        price: "14.75 ₪",
    },
    {
        title: "PCSMOZZASTIX8",
        description: "PCSMOZZASTIX8_DESCRIPTION",
        imageUrl: PCSMozzaStix8,
        price: "18.25 ₪",
    },
] as const;

