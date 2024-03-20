
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
        tags: ["Beef", "classic"],
        imageUrl: BeefBurger,
    },
    {
        title: "Cheese  Burger",
        description:
            "Beef patty, Chedder Cheese, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        tags: ["Beef", "Cheese",],
        imageUrl: CheeseBurger,
    },
    {
        title: "Beef  Bacon",
        description:
            "Beef patty, Chedder Cheese, Beef Bacon, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        tags: ["Beef", "Cheese", "Bacon"],
        imageUrl: BeefBacon,
    },
    {
        title: "Creamy Mushroom",
        description:
            "Beef patty, Creamy of Mushroom, Mozza Cheese, Grilled Onions, Mayo",
        tags: ["Beef", "Cheese", , "Creamy", "Mushroom", " Mozza Cheese"],
        imageUrl: CreamyMushroom,
    },
    {
        title: "Hawaiian Burger",
        description:
            "Beef patty, Grilled Pineapple, Mayo, Mozza Cheese, Onions, Tomatoes, Lettuce, Mayo, BBQ sauce",
        tags: ["Beef", "BBQ sauce", "Pineapple", " Mozza Cheese"],
        imageUrl: HawaiianBurger,
    },
] as const;
