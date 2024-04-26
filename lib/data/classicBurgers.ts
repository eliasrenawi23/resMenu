import Cesar200 from "@/public/cesardata/classic/cesar200.png"
import Double from "@/public/cesardata/classic/doubleburger.png"
import ChessyBurger from "@/public/cesardata/classic/chessyburger.png"

export const Classicburgers = [
    {
        title: "CLASSIC_CESAR_150G",
        description: "CLASSIC_CESAR_150G_DESCRIPTION",
        imageUrl: Cesar200,
        price: "45.00 ₪",
    },
    {
        title: "CLASSIC_CESAR_220G",
        description: "CLASSIC_CESAR_220G_DESCRIPTION",
        imageUrl: Cesar200,
        price: "55.00 ₪",
    },
    {
        title: "CLASSIC_CESAR_300G",
        description: "CLASSIC_CESAR_300G_DESCRIPTION",
        imageUrl: Double,
        price: "65.00 ₪",
    },
    {
        title: "CLASSIC_CESAR_450G",
        description: "CLASSIC_CESAR_450G_DESCRIPTION",
        imageUrl: Double,
        price: "77.00 ₪",
    },
    {
        title: "CHESSY_CESAR_BURGER_220G",
        description: "CHESSY_CESAR_BURGER_220G_DESCRIPTION",
        imageUrl: ChessyBurger,
        price: "65.00 ₪",
    },
] as const;
