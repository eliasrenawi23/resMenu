import { beefBurgers } from "./beefBurgersData";
import { chickenBurgers } from "./chickenBurgerData";
//import { onTop } from "./onTopData";
import { onTop } from "../newData/cesarOnTop";
import { Classicburgers } from "../newData/classicBurgers";
import { popular } from "./popularData";
import { salads } from "./saladsData";
import { sides } from "./sides";

export const sections = [
    //{ heading: 'Popular', meals: popular },
    //  { heading: 'Beef Burgers', meals: beefBurgers },
    // { heading: 'Chicken Burgers', meals: chickenBurgers },
    { heading: 'Classic', meals: Classicburgers },
    { heading: 'OnTop', meals: onTop },
    //  { heading: 'Salads', meals: salads },
    //   { heading: 'sides', meals: sides },
] as const;