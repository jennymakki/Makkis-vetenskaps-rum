import {
  Microscope,
  Atom,
  Calculator,
  Droplets,
  Flame,
  Wind,
  Zap,
} from "lucide-react";

export const kemi1Sections = [
  {
    title: "Vetenskapligt Arbetssätt",
    icon: Microscope,
    theme: "theme-kemi",
    files: [
      {
        name: "1. Vetenskapligt Arbetssätt",
        href: "/lessons/kemi1/Vetenskapligt Arbetssätt/Vetenskapligt Arbetssätt.pptx",
      },
    ],
  },

  {
    title: "Kemiska Bindningar",
    icon: Atom,
    theme: "theme-kemi",
    files: [
      {
        name: "1. Atommodell",
        href: "/lessons/kemi1/Kemiska Bindningar/1. Atommodell.pptx",
      },
      {
        name: "2. Periodiska Systemet",
        href: "/lessons/kemi1/Kemiska Bindningar/2. Periodiska Systemet.pptx",
      },
    ],
  },

  {
    title: "Kemiska beräkningar",
    icon: Calculator,
    theme: "theme-kemi",
    files: [
      {
        name: "1. Enheter",
        href: "/lessons/kemi1/Kemiska beräkningar/1. Enheter.pptx",
      },
    ],
  },

  {
    title: "Syror och Baser",
    icon: Droplets,
    theme: "theme-kemi",
    files: [],
  },

  {
    title: "Termokemi",
    icon: Flame,
    theme: "theme-kemi",
    files: [],
  },

  {
    title: "Gaser",
    icon: Wind,
    theme: "theme-kemi",
    files: [],
  },

  {
    title: "Elektrokemi",
    icon: Zap,
    theme: "theme-kemi",
    files: [],
  },
];