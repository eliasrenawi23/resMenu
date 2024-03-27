import spicyTandoori from "@/public/burgers/spicyTandoori.png"
import spicyBuffalo from "@/public/burgers/spicyBuffalo.png"
import BBQChicken from "@/public/burgers/BBQChicken.png"
import crispyChicken from "@/public/burgers/crispyChicken.png"
import chickenParadise from "@/public/burgers/chickenParadise.png"

export const chickenBurgers = [
    {
        title: "Spicy Tandoori",
        description:
            "Tandoori Chicken, Chedder Cheese, Grilled Onion & Tomatoes, Lettuce, Pickles, Garlic Sauce, Mayo",
        imageUrl: spicyTandoori,
        price: "38.00 ₪",
    },
    {
        title: "Spicy Buffalo",
        description:
            "Crispy Chicken, Mozza Cheese, Grilled Onion & Tomatoes, Lettuce, Garlic Sauce, Buffalo Sauce, Mayo",
        imageUrl: spicyBuffalo,
        price: "38.00 ₪",
    },
    {
        title: "BBQ Chicken",
        description:
            "Grilled Chicken, Mozza Cheese, Grilled Onion, Lettuce, Mayo, BBQ Sauce",
        imageUrl: BBQChicken,
        price: "38.00 ₪",
    },
    {
        title: "Crispy Chicken",
        description:
            "Crispy Chicken, Chedder Cheese, Grilled Onion & Tomatoes, Lettuce, Pickles, Garlic Sauce, Mayo, Chipotle Sauce ",
        imageUrl: crispyChicken,
        price: "38.00 ₪",
    },
    {
        title: "Chicken Paradise",
        description:
            "Grilled Chicken, Mozza Cheese, Grilled Pineapple,Lettuce, Onions, jalapenos, Mayo,Garlic Sauce ",
        imageUrl: chickenParadise,
        price: "38.00 ₪",
    },
] as const;