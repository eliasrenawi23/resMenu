
import { onTop } from "./cesarOnTop";
import { Classicburgers } from "./classicBurgers";
import { chicken } from "./chicken";
import { sides } from "./sides";
import { salads } from "./saladsData";
import { drinks } from "./drinks";


export const sections = [
    { heading: 'CLASSIC', meals: Classicburgers },
    { heading: 'Be On Top', meals: onTop },
    { heading: 'CHICKEN', meals: chicken },
    { heading: 'SIDES', meals: sides },
    { heading: 'SALADS', meals: salads },
    { heading: 'DRINKS', meals: drinks },

] as const;