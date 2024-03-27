
import GardenSalad from "@/public/Salads/GardenSalad.png"
import GreekSalad from "@/public/Salads/GreekSalad.png"

export const salads = [
    {
        title: "GARDEN_SALAD",
        description: "GARDEN_SALAD_DESCRIPTION",
        imageUrl: GardenSalad,
        price: "25.00 ₪",
    },
    {
        title: "GREEK_SALAD",
        description: "GREEK_SALAD_DESCRIPTION",
        imageUrl: GreekSalad,
        price: "10.00 ₪",
    },
] as const;
