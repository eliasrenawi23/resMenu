import Cesar200 from "@/public/cesardata/classic/cesar200.png"
import Double from "@/public/cesardata/classic/doubleburger.png"
import ChessyBurger from "@/public/cesardata/classic/chessyburger.png"

export const Classicburgers = [
    {
        title: "Kids Meal 130g",
        description:
            "BEEF_BURGER_DESCRIPTION",
        imageUrl: Cesar200,
        price: "43.00 ₪",
    },
    {
        title: "Classic Cesar 200g",
        description:
            "BEEF_BURGER_DESCRIPTION",
        imageUrl: Cesar200,
        price: "50.00 ₪",
    },
    {
        title: "Classic Cesar 330g",
        description:
            "BEEF_BURGER_DESCRIPTION",
        imageUrl: Cesar200,
        price: "65.00 ₪",
    },
    {
        title: "Grand Cesar 400g",
        description:
            "BEEF_BURGER_DESCRIPTION",
        imageUrl: Double,
        price: "75.00 ₪",
    },
    {
        title: "Chessy Cesar Burger 260g",
        description:
            "BEEF_BURGER_DESCRIPTION",
        imageUrl: ChessyBurger,
        price: "64.00 ₪",
    },
] as const;
