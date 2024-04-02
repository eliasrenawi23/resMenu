import { beefBurgers } from "./beefBurgersData";
import { chickenBurgers } from "./chickenBurgerData";
import { onTop } from "./onTopData";
import { popular } from "./popularData";
import { salads } from "./saladsData";

export const sections = [
    { heading: 'Popular', meals: popular },
    { heading: 'Beef Burgers', meals: beefBurgers },
    { heading: 'Chicken Burgers', meals: chickenBurgers },
    { heading: 'OnTop', meals: onTop },
    { heading: 'Salads', meals: salads },
] as const;