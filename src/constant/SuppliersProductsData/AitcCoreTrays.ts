import { Box } from "lucide-react";
import type { ComponentType } from "react";

type AitcCoreTraysSupplier = {
  id: string;
  title: string;
  image: string;
  icon: ComponentType<Record<string, unknown>>;
  description: string;
  banner: string;
  fullDescription: string;
  features: string[];
  subcategories: {
    image: string;
    name: string;
    description: string;
    products: {
      name: string;
      image: string;
      pdfImage: string;
      description: string;
      // link: string;
    }[];
  }[];
};

export const AitcCoreTraysProductsData: AitcCoreTraysSupplier[] = [
  {
    id: "aitc-core-trays",
    title: "AITC CORE TRAYS",
    image: "/images/brandLogo/Adaan-Logo.webp",
    icon: Box,
    description: "Durable, Saudi-Made Solutions",
    banner:
      "Durable, Saudi-Made Solutions Engineered for Precision and Reliability",
    fullDescription:
      "Locally manufactured HQ, PQ, and NQ core boxes - Saudi Made excellence supporting Vision 2030 with state-of-the-art manufacturing facilities in Rabigh.",
    features: [
      "Saudi Made",
      "Vision 2030",
      "Premium Materials",
      "Custom Solutions",
    ],
    subcategories: [
      {
        image: "/images/brandLogo/Adaan-Logo.webp",
        name: "Core Solutions",
        description: "Complete core handling solutions for mining operations.",
        products: [
          {
            name: "Core Boxes",
            image: "/images/AITCCoreTrays/9.webp",
            pdfImage: "",
            description:
              "HQ, PQ, and NQ core boxes for all drilling applications",
          },
          {
            name: "Core Covers",
            image: "/images/AITCCoreTrays/10.webp",
            pdfImage: "",
            description: "Protective covers for core sample preservation",
          },
          {
            name: "Run Markers",
            image: "/images/AITCCoreTrays/11.webp",
            pdfImage: "",
            description: "Precision markers for core run identification",
          },
        ],
      },
    ],
  },
];
