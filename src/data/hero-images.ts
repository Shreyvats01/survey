export interface HeroImageSlot {
  id: string;
  src: string;
  alt: string;
  aspectRatio?: string;
  credit?: string;
}

export type HeroImageItem = HeroImageSlot;

export interface HeroImagePair {
  id: string;
  name: string;
  slot1: HeroImageSlot;
  slot2: HeroImageSlot;
}

/**
 * Slot 1 image pool (Upper-Right / Line 1):
 * 5 authentic landscape and architectural photographs from local assets
 */
export const heroSlot1Images: HeroImageItem[] = [
  {
    id: "landscape-dawn",
    src: "/images/hero-landscape-dawn.jpg",
    alt: "Panoramic view of golden straw hills under soft morning dawn clouds",
    aspectRatio: "16:9",
  },
  {
    id: "nature-meadow-mist",
    src: "/images/hero-nature-meadow-mist.jpg",
    alt: "Slender dried meadow grasses standing in quiet morning fog before distant pine silhouettes",
    aspectRatio: "16:9",
  },
  {
    id: "arch-terrace-village",
    src: "/images/hero-arch-terrace-village.jpg",
    alt: "Ancient hillside village with terracotta rooftops nestled against agricultural stone terraces",
    aspectRatio: "16:9",
  },
  {
    id: "landscape-tuscany-cottage",
    src: "/images/hero-landscape-tuscany-cottage.jpg",
    alt: "Sculptural green and ochre rolling hills with a small farmhouse cottage atop the ridge overlooking a pond",
    aspectRatio: "16:9",
  },
  {
    id: "hero-1",
    src: "/images/hero-1.jpg",
    alt: "Himalayan valley settlement with terrace fields under open mountain sky",
    aspectRatio: "16:9",
  },
];

/**
 * Slot 2 image pool (Lower-Left / Line 2):
 * 5 authentic human craft, tactile inquiry, and path photographs from local assets
 */
export const heroSlot2Images: HeroImageItem[] = [
  {
    id: "craft-pottery",
    src: "/images/hero-craft-pottery.jpg",
    alt: "Artisan hands covered in wet clay shaping the neck of a vessel on a spinning wheel",
    aspectRatio: "16:9",
  },
  {
    id: "craft-weaving",
    src: "/images/hero-craft-weaving.jpg",
    alt: "Artisan hands separating and weaving plum, ochre, and red threads on a traditional wooden loom",
    aspectRatio: "16:9",
  },
  {
    id: "portrait-solitary-field",
    src: "/images/hero-portrait-solitary-field.jpg",
    alt: "Lone figure standing in an open grassy field surrounded by heavy morning mist and high-key light",
    aspectRatio: "16:9",
  },
  {
    id: "nature-earthen-path",
    src: "/images/hero-nature-earthen-path.jpg",
    alt: "Curved unpaved dirt road leading through ripe golden wheat fields with weathered wooden utility poles",
    aspectRatio: "16:9",
  },
  {
    id: "hero-2",
    src: "/images/hero-2.jpg",
    alt: "Community gathering and survey dialogue in high-altitude mountain village",
    aspectRatio: "16:9",
  },
];

export const heroImagePairs: HeroImagePair[] = [
  {
    id: "pair-1",
    name: "Dawn Horizon & Tactile Earth",
    slot1: heroSlot1Images[0],
    slot2: heroSlot2Images[0],
  },
  {
    id: "pair-2",
    name: "Atmospheric Mist & Traditional Weaving",
    slot1: heroSlot1Images[1],
    slot2: heroSlot2Images[1],
  },
  {
    id: "pair-3",
    name: "Agricultural Terraces & Solitary Inquiry",
    slot1: heroSlot1Images[2],
    slot2: heroSlot2Images[2],
  },
  {
    id: "pair-4",
    name: "Contoured Ridge & Earthen Byway",
    slot1: heroSlot1Images[3],
    slot2: heroSlot2Images[3],
  },
  {
    id: "pair-5",
    name: "Highland Vista & Village Dialogue",
    slot1: heroSlot1Images[4],
    slot2: heroSlot2Images[4],
  },
];
