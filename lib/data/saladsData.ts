
import Tabbouleh from "@/public/cesardata/salads/tabbouleh.png"
import Fattoush from "@/public/cesardata/salads/fattoush.png"

export const salads = [
    {
        title: "TABBOULEH",
        description: "GARDEN_SALAD_DESCRIPTION",
        imageUrl: Tabbouleh,
        price: "25.00 ₪/40.00 ₪",
    },
    {
        title: "Fattoush",
        description: "GREEK_SALAD_DESCRIPTION",
        imageUrl: Fattoush,
        price: "25.00 ₪/40.00 ₪",
    },
] as const;
