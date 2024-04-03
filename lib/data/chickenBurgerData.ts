import spicyTandoori from "@/public/chickenburgers/spicytandoori.png"
import spicyBuffalo from "@/public/chickenburgers/spicybuffalo.png"
import BBQChicken from "@/public/chickenburgers/bbqchicken.png"
import crispyChicken from "@/public/chickenburgers/crispychicken.png"
import chickenParadise from "@/public/chickenburgers/chickenparadise.png"

export const chickenBurgers = [
    {
        title: "SPICY_TANDOORI",
        description:
            "SPICY_TANDOORI_DESCRIPTION",
        imageUrl: spicyTandoori,
        price: "38.00 ₪",
    },
    {
        title: "SPICY_BUFFALO",
        description:
            "SPICY_BUFFALO_DESCRIPTION",
        imageUrl: spicyBuffalo,
        price: "35.00 ₪",
    },
    {
        title: "BBQ_CHICKEN",
        description:
            "BBQ_CHICKEN_DESCRIPTION",
        imageUrl: BBQChicken,
        price: "38.00 ₪",
    },
    {
        title: "CRISPY_CHICKEN",
        description:
            "CRISPY_CHICKEN_DESCRIPTION",
        imageUrl: crispyChicken,
        price: "38.00 ₪",
    },
    {
        title: "CHICKEN_PARADISE",
        description:
            "CHICKEN_PARADISE_DESCRIPTION",
        imageUrl: chickenParadise,
        price: "38.00 ₪",
    },
] as const;
