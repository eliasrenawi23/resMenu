import Bacon from "@/public/OnTop/BeefBacon.png"
import ChickenFingers from "@/public/OnTop/ChickenFingers.png"
import FriedEgg from "@/public/OnTop/FriedEgg.png"
import Jalapemos from "@/public/OnTop/Jalapemos.png"
import MozzaSticks from "@/public/OnTop/MozzaSticks.png"


export const onTop = [
    {
        title: "BEEF_BACON_ON_TOP",
        description: "BEEF_BACON_DESCRIPTION_ON_TOP",
        imageUrl: Bacon,
        price: "12.00 ₪",
    },
    {
        title: "CHICKEN_FINGERS",
        description: "CHICKEN_FINGERS_DESCRIPTION",
        imageUrl: ChickenFingers,
        price: "10.00 ₪",
    },
    {
        title: "FRIED_EGG",
        description: "FRIED_EGG_DESCRIPTION",
        imageUrl: FriedEgg,
        price: "10.00 ₪",
    },
    {
        title: "JALAPENOS",
        description: "JALAPENOS_DESCRIPTION",
        imageUrl: Jalapemos,
        price: "5.00 ₪",
    },
    {
        title: "MOZZA_STICKS",
        description: "MOZZA_STICKS_DESCRIPTION",
        imageUrl: MozzaSticks,
        price: "10.00 ₪",
    },
] as const;
