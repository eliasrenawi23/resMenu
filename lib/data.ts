
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


import Bacon from "@/public/OnTop/BeefBacon.png"
import ChickenFingers from "@/public/OnTop/ChickenFingers.png"
import FriedEgg from "@/public/OnTop/FriedEgg.png"
import Jalapemos from "@/public/OnTop/Jalapemos.png"
import MozzaSticks from "@/public/OnTop/MozzaSticks.png"


import GardenSalad from "@/public/Salads/GardenSalad.png"
import GreekSalad from "@/public/Salads/GreekSalad.png"

import DoubleMozza from "@/public/popular/DoubleMozza.png"
import Lazeezo from "@/public/popular/Lazeezo.png"
import Charger from "@/public/popular/Charger.png"

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
