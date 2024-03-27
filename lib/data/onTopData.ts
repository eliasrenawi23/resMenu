import Bacon from "@/public/OnTop/BeefBacon.png"
import ChickenFingers from "@/public/OnTop/ChickenFingers.png"
import FriedEgg from "@/public/OnTop/FriedEgg.png"
import Jalapemos from "@/public/OnTop/Jalapemos.png"
import MozzaSticks from "@/public/OnTop/MozzaSticks.png"


export const onTop = [
    {
        title: "Beef Bacon",
        description:
            "",
        imageUrl: Bacon,
        price: "12.00 ₪",
    },
    {
        title: "Chicken Fingers",
        description:
            "2 ChickenFingers",
        imageUrl: ChickenFingers,
        price: "10.00 ₪",
    },
    {
        title: "FriedEgg",
        description:
            "",
        imageUrl: FriedEgg,
        price: "10.00 ₪",
    },
    {
        title: "Jalapemos",
        description:
            "",
        imageUrl: Jalapemos,
        price: "5.00 ₪",
    },
    {
        title: "MozzaSticks",
        description:
            "2 Mozza Sticks",
        imageUrl: MozzaSticks,
        price: "10.00 ₪",
    },
] as const;