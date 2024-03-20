
import BeefBurger from "@/public/burgers/beefBurger.png"
import CheeseBurger from "@/public/burgers/cheeseBurger.png"
import BeefBacon from "@/public/burgers/beefBacon.png"
import CreamyMushroom from "@/public/burgers/creamyMushroom.png"
import HawaiianBurger from "@/public/burgers/hawaiianBurger.png"

import spicyTandoori from "@/public/burgers/spicyTandoori.png"
import spicyBuffalo from "@/public/burgers/spicyBuffalo.png"
import BBQChicken from "@/public/burgers/BBQChicken.png"
import crispyChicken from "@/public/burgers/crispyChicken.png"
import chickenParadise from "@/public/burgers/chickenParadise.png"

export const beefBurgers = [
    {
        title: "Beef Burger",
        description:
            "Beef patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        tags: ["Beef", "classic"],
        imageUrl: BeefBurger,
        price: "38.00 ₪",
    },
    {
        title: "Cheese  Burger",
        description:
            "Beef patty, Chedder Cheese, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        tags: ["Beef", "Cheese",],
        imageUrl: CheeseBurger,
        price: "38.00 ₪",
    },
    {
        title: "Beef  Bacon",
        description:
            "Beef patty, Chedder Cheese, Beef Bacon, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard",
        tags: ["Beef", "Cheese", "Bacon"],
        imageUrl: BeefBacon,
        price: "38.00 ₪",
    },
    {
        title: "Creamy Mushroom",
        description:
            "Beef patty, Creamy of Mushroom, Mozza Cheese, Grilled Onions, Mayo",
        tags: ["Beef", "Cheese", , "Creamy", "Mushroom", " Mozza Cheese"],
        imageUrl: CreamyMushroom,
        price: "38.00 ₪",
    },
    {
        title: "Hawaiian Burger",
        description:
            "Beef patty, Grilled Pineapple, Mayo, Mozza Cheese, Onions, Tomatoes, Lettuce, Mayo, BBQ sauce",
        tags: ["Beef", "BBQ sauce", "Pineapple", " Mozza Cheese"],
        imageUrl: HawaiianBurger,
        price: "38.00 ₪",
    },
] as const;

export const chickenBurgers = [
    {
        title: "Spicy Tandoori",
        description:
            "Tandoori Chicken, Chedder Cheese, Grilled Onion & Tomatoes, Lettuce, Pickles, Garlic Sauce, Mayo",
        tags: ["Beef", "classic"],
        imageUrl: spicyTandoori,
        price: "38.00 ₪",
    },
    {
        title: "Spicy Buffalo",
        description:
            "Crispy Chicken, Mozza Cheese, Grilled Onion & Tomatoes, Lettuce, Garlic Sauce, Buffalo Sauce, Mayo",
        tags: ["Beef", "Cheese",],
        imageUrl: spicyBuffalo,
        price: "38.00 ₪",
    },
    {
        title: "BBQ Chicken",
        description:
            "Grilled Chicken, Mozza Cheese, Grilled Onion, Lettuce, Mayo, BBQ Sauce",
        tags: ["Beef", "Cheese", "Bacon"],
        imageUrl: BBQChicken,
        price: "38.00 ₪",
    },
    {
        title: "Crispy Chicken",
        description:
            "Crispy Chicken, Chedder Cheese, Grilled Onion & Tomatoes, Lettuce, Pickles, Garlic Sauce, Mayo, Chipotle Sauce ",
        tags: ["Beef", "Cheese", , "Creamy", "Mushroom", " Mozza Cheese"],
        imageUrl: crispyChicken,
        price: "38.00 ₪",
    },
    {
        title: "Chicken Paradise",
        description:
            "Grilled Chicken, Mozza Cheese, Grilled Pineapple,Lettuce, Onions, jalapenos, Mayo,Garlic Sauce ",
        tags: ["Beef", "BBQ sauce", "Pineapple", "Pineappsdle", " Mozza Cheese"],
        imageUrl: chickenParadise,
        price: "38.00 ₪",
    },
] as const;
