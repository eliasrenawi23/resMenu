import BeefBurger from "@/public/burgers/beefBurger.png"
import CheeseBurger from "@/public/burgers/cheeseBurger.png"
import BeefBacon from "@/public/burgers/beefBacon.png"
import CreamyMushroom from "@/public/burgers/creamyMushroom.png"
import HawaiianBurger from "@/public/burgers/hawaiianBurger.png"

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
