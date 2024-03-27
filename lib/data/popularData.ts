


import DoubleMozza from "@/public/popular/DoubleMozza.png"
import Lazeezo from "@/public/popular/Lazeezo.png"
import Charger from "@/public/popular/Charger.png"



export const popular = [
    {
        title: "Lazeezo",
        description:
            "Double Beef Patty, HashBrown, Double Cheese ,Grilled Onion &Tomatoes, Pickles, Lettuce, Mayo, Katchup, Mustard, Chipotle Sauce",
        imageUrl: Lazeezo,
        price: "65.00 ₪",
    },
    {
        title: "Double Mozza",
        description:
            "Double Beef Patty, Mozza Cheese, Mozza Sticks, Salsa, Mayo ",
        imageUrl: DoubleMozza,
        price: "65.00 ₪",
    },
    {
        title: "Charger",
        description:
            "Double Beef Patty, Double Cheese ,Beef Bacon, Onion Rings, Lettuce, Tomatoes, Mayo, BBQ Sauce",
        imageUrl: Charger,
        price: "65.00 ₪",
    },

] as const;
