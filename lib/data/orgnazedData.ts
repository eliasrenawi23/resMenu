
import { onTop } from "./cesarOnTop";
import { Classicburgers } from "./classicBurgers";
import { chicken } from "./chicken";
import { sides } from "./sides";
import { salads } from "./saladsData";
import { drinks } from "./drinks";


export const sections = [
    { heading: 'Classic', meals: Classicburgers },
    { heading: 'OnTop', meals: onTop },
    { heading: 'chicken', meals: chicken },
    { heading: 'sides', meals: sides },
    { heading: 'Salads', meals: salads },
    { heading: 'Drinks', meals: drinks },

] as const;