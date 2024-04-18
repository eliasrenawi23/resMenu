import Cesar200 from "@/public/cesardata/classic/cesar200.png"
import Double from "@/public/cesardata/classic/doubleburger.png"
import ChessyBurger from "@/public/cesardata/classic/chessyburger.png"

export const Classicburgers = [
    {
        title: "KIDS_MEAL_130G",
        description: "KIDS_MEAL_BURGER_DESCRIPTION",
        imageUrl: Cesar200,
        price: "43.00 ₪",
    },
    {
        title: "CLASSIC_CESAR_200G",
        description: "CLASSIC_CESAR_200G_DESCRIPTION",
        imageUrl: Cesar200,
        price: "50.00 ₪",
    },
    {
        title: "CLASSIC_CESAR_260G",
        description: "CLASSIC_CESAR_260G_DESCRIPTION",
        imageUrl: Double,
        price: "58.00 ₪",
    },
    {
        title: "CLASSIC_CESAR_330G",
        description: "CLASSIC_CESAR_330G_DESCRIPTION",
        imageUrl: Double,
        price: "65.00 ₪",
    },
    {
        title: "GRAND_CESAR_400G",
        description: "GRAND_CESAR_400G_DESCRIPTION",
        imageUrl: Double,
        price: "75.00 ₪",
    },
    {
        title: "CHESSY_CESAR_BURGER_260G",
        description: "CHESSY_CESAR_BURGER_260G_DESCRIPTION",
        imageUrl: ChessyBurger,
        price: "66.00 ₪",
    },
] as const;
