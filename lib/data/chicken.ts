import LafaChickenBreast from "@/public/cesardata/chicken/lafachickenbreast.png"
import Crispy from "@/public/cesardata/chicken/crispy.png"
import SchnitzelPlate from "@/public/cesardata/chicken/schnitzelPlate.png"
import SchnitzelBurger from "@/public/cesardata/chicken/SchnitzelBurger.png"
import SchnitzelBaguette from "@/public/cesardata/chicken/schnitzelBaguette.png"


export const chicken = [
    {
        title: "LAFA_CHICKEN_BREAST",
        description: "LAFA_CHICKEN_BREAST_DESCRIPTION",
        imageUrl: LafaChickenBreast,
        price: "25.00 ₪",
    },
    {
        title: "CRISPY",
        description: "CRISPY_DESCRIPTION",
        imageUrl: Crispy,
        price: "35.00 ₪/50.00 ₪",
    },
    {
        title: "SCHNITZEL_PLATE",
        description: "SCHNITZEL_PLATE_DESCRIPTION",
        imageUrl: SchnitzelPlate,
        price: "35.00 ₪",
    },
    {
        title: "SCHNITZEL_BURGER",
        description: "SCHNITZEL_BURGER_DESCRIPTION",
        imageUrl: SchnitzelBurger,
        price: "5.00 ₪",
    },
    {
        title: "SCHNITZEL_BAGUETTE",
        description: "SCHNITZEL_BAGUETTE_DESCRIPTION",
        imageUrl: SchnitzelBaguette,
        price: "33.00 ₪",
    },
] as const;
