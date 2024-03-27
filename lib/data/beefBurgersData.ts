import BeefBurger from "@/public/burgers/beefBurger.png"
import CheeseBurger from "@/public/burgers/cheeseBurger.png"
import BeefBacon from "@/public/burgers/beefBacon.png"
import CreamyMushroom from "@/public/burgers/creamyMushroom.png"
import HawaiianBurger from "@/public/burgers/hawaiianBurger.png"

export const beefBurgers = [
    {
        title: "Beef Burger",
        description:
            "Beef patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        imageUrl: BeefBurger,
        price: "38.00 ₪",
    },
    {
        title: "Cheese  Burger",
        description:
            "Beef patty, Chedder Cheese, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        imageUrl: CheeseBurger,
        price: "38.00 ₪",
    },
    {
        title: "Beef  Bacon",
        description:
            "Beef patty, Chedder Cheese, Beef Bacon, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        imageUrl: BeefBacon,
        price: "38.00 ₪",
    },
    {
        title: "Creamy Mushroom",
        description:
            "Beef patty, Creamy of Mushroom, Mozza Cheese, Grilled Onions, Mayo",
        imageUrl: CreamyMushroom,
        price: "38.00 ₪",
    },
    {
        title: "Hawaiian Burger",
        description:
            "Beef patty, Grilled Pineapple, Mayo, Mozza Cheese, Onions, Tomatoes, Lettuce, Mayo, BBQ sauce",
        imageUrl: HawaiianBurger,
        price: "38.00 ₪",
    },
] as const;