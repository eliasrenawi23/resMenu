
import Mix from "@/public/cesardata/sides/mix.png"
import CrispyWings from "@/public/cesardata/sides/crispywings.png"
import OnionRings from "@/public/cesardata/sides/onionrings.png"
import PotatoBalls from "@/public/cesardata/sides/potatoballs.png"


export const sides = [
    {
        title: "MIX",
        description: "MIX_DESCRIPTION",
        imageUrl: Mix,
        price: "27.00 ₪/50.00 ₪",
    },
    {
        title: "CRISPY_WINGS",
        description: "CRISPY_WINGS_DESCRIPTION",
        imageUrl: CrispyWings,
        price: "55.00 ₪",
    },
    {
        title: "ONION_RINGS",
        description: "EMPTY",
        imageUrl: OnionRings,
        price: "10.00 ₪",
    },
    {
        title: "POTATO_BALLS",
        description: "EMPTY",
        imageUrl: PotatoBalls,
        price: "10.00 ₪",
    },
] as const;

