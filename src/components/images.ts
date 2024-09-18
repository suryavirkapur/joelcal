import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "IMG_0490.png",
    original: "IMG_0490.png",
    width: 900,
    height: 900,
    caption: "Joel for VP",
  },
  {
    src: "IMG_0491.png",
    original: "IMG_0491.png",
    width: 900,
    height: 900,
    caption: "Joel for VP",
  },
  {
    src: "IMG_0492.png",
    original: "IMG_0492.png",
    width: 900,
    height: 900,
    caption: "Joel for VP",
  },
  {
    src: "IMG_0493.png",
    original: "IMG_0493.png",
    width: 900,
    height: 900,
    caption: "Joel for VP",
  },
];
