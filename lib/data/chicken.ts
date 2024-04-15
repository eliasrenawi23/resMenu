import LafaChickenBreast from "@/public/cesardata/chicken/lafachickenbreast.png"
import Crispy from "@/public/cesardata/chicken/crispy.png"
import SchnitzelPlate from "@/public/cesardata/chicken/schnitzelPlate.png"
import SchnitzelBurger from "@/public/cesardata/chicken/SchnitzelBurger.png"
import SchnitzelBaguette from "@/public/cesardata/chicken/schnitzelBaguette.png"


export const chicken = [
    {
        title: "lafachickenbreast",
        description: "lafachickenbreast_DESCRIPTION",
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
        title: "Schnitzel Plate",
        description: "JALAPENOS_DESCRIPTION",
        imageUrl: SchnitzelPlate,
        price: "35.00 ₪",
    },
    {
        title: "Schnitzel Burger",
        description: "JALAPENOS_DESCRIPTION",
        imageUrl: SchnitzelBurger,
        price: "5.00 ₪",
    },
    {
        title: "Schnitzel Baguette",
        description: "JALAPENOS_DESCRIPTION",
        imageUrl: SchnitzelBaguette,
        price: "33.00 ₪",
    },

] as const;
