
import GardenSalad from "@/public/Salads/GardenSalad.png"
import GreekSalad from "@/public/Salads/GreekSalad.png"

export const salads = [
    {
        title: "GardenSalad",
        description:
            "Lettuce, Tomatoes, Cucumber, Oninons ,Olives , Feta Chees, Parsly, Homemade Dressing",
        imageUrl: GardenSalad,
        price: "25.00 ₪",
    },
    {
        title: "Greek Salad",
        description:
            "Lettuce, Tomatoes, Cucumber, Oninons, Parsly, Homemade Dressing",
        imageUrl: GreekSalad,
        price: "10.00 ₪",
    },

] as const;