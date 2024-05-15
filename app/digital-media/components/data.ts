import asuzuiBrand from "@/public/assets/media-design/PB_img2.jpg";
import medicellBrand from "@/public/assets/media-design/MC_img1.jpg";
import sentienceCrewneck from "@/public/assets/media-design/SBL_img1.jpg";
import sentienceBrand from "@/public/assets/media-design/SBL_img2.jpg";

import MCCard from "@/public/assets/media-design/MC_card.jpg";
import PBCard from "@/public/assets/media-design/PB_card.jpg";
import SBLCard from "@/public/assets/media-design/SBL_card.jpg";

export type InfoCard = {
  title: string;
  imgSrc: any;
  imgAlt: string;
  description: string;
  file: string;
};

export const images = [
  {
    src: asuzuiBrand,
    alt: "Ami Suzui Brand",
  },
  {
    src: medicellBrand,
    alt: "Medicell Brand",
  },
  {
    src: sentienceBrand,
    alt: "Sentience Brand",
  },
  {
    src: sentienceCrewneck,
    alt: "Sentience Crewneck Merch",
  },
];

export const infoCards: InfoCard[] = [
  {
    title: "Personal Branding",
    imgSrc: PBCard,
    imgAlt: "Personal Branding",
    description:
      "The initial brand design I tackled was my own. In crafting this design, I aimed to infuse it with elements of my personality, including my preferred color, hobbies, and interests. Drawing inspiration from the minimalist yet sophisticated aesthetic of my beloved perfume brand, Diptyque, I sought to create a logo that shows elegance. The resulting logo seamlessly integrates my initials, A and S, imbuing it with a personal touch while maintaining a clean, uncomplicated design. In selecting colors, I drew from my fondness for floral hues, opting for soft, natural tones—beige and pink, complemented by hints of earthy browns and lush greens. This theme extends to my website, where the brand's color palette, typography, and overall style converge harmoniously, creating a design that resonates with me.",
    file: "/assets/media-design/pdfs/PB.pdf",
  },
  {
    title: "Medicell Catalog",
    imgSrc: MCCard,
    imgAlt: "Medicell Catalog",
    description:
      'Medicell, a product developed by MJ Company, is designed to alleviate pain, reduce swelling, and restore muscle function through its innovative skin-lift technology. I collaborated with MJ Company, a Japanese-based firm, to create their product catalog for international promotion. Initially, in Japanese, I spearheaded the design of their first English catalog. I focused on their company motto, "Transforming Lives with Skin-Life Innovation." Considering the cultural differences between Japan and the Western audience, I aimed for a design that prioritized simplicity and negative space, which resonates more with Western sensibilities. I also assisted in translating sections of the catalog, allowing me to delve deeper into its content. Overall, I thoroughly enjoyed working on this project and am eager to see Medicell succeed in international markets!',
    file: "/assets/media-design/pdfs/MC.pdf",
  },
  {
    title: "Sentience Brand Logo",
    imgSrc: SBLCard,
    imgAlt: "Medicell Catalog",
    description:
      "Sentience, an EDM DJ/producer hailing from San Diego, CA, is the focus of my recent branding endeavor. With a personal connection to Sentience, I aimed to craft a brand that mirrors his musical essence. The name Sentience stems from the concept of consciousness and emotion. Sentience's music aims to evoke diverse emotional responses, a theme he wants to emphasize in his branding. To embody this concept, I designed a logo featuring a star encircled by a loop, symbolizing the moment of inspiration or \"spark.\" The typography chosen for the brand is deliberately simple, contrasting the logo's complexity. Considering Sentience's preference for a minimalist aesthetic, I ensured the design maintained simplicity throughout. Additionally, I developed mock-up designs for his merchandise, adding another layer of excitement to this engaging project.",
    file: "/assets/media-design/pdfs/SBL.pdf",
  },
];
