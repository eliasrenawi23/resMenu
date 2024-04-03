import BeefBurger from "@/public/beefburgers/beefburger.png"
import CheeseBurger from "@/public/beefburgers/cheeseburger.png"
import BeefBacon from "@/public/beefburgers/beefbacon.png"
import CreamyMushroom from "@/public/beefburgers/creamymushroom.png"
import HawaiianBurger from "@/public/beefburgers/hawaiianburger.png"

export const beefBurgers = [
    {
        title: "BEEF_BURGER",
        description:
            "BEEF_BURGER_DESCRIPTION",
        imageUrl: BeefBurger,
        price: "38.00 ₪",
    },
    {
        title: "CHEESE_BURGER",
        description:
            "CHEESE_BURGER_DESCRIPTION",
        imageUrl: CheeseBurger,
        price: "38.00 ₪",
    },
    {
        title: "BEEF_BACON",
        description:
            "BEEF_BACON_DESCRIPTION",
        imageUrl: BeefBacon,
        price: "38.00 ₪",
    },
    {
        title: "CREAMY_MUSHROOM",
        description:
            "CREAMY_MUSHROOM_DESCRIPTION",
        imageUrl: CreamyMushroom,
        price: "38.00 ₪",
    },
    {
        title: "HAWAIIAN_BURGER",
        description:
            "HAWAIIAN_BURGER_DESCRIPTION",
        imageUrl: HawaiianBurger,
        price: "38.00 ₪",
    },
] as const;
