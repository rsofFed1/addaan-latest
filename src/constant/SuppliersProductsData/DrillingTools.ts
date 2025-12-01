import { Package } from "lucide-react";
import { ComponentType } from "react";

type DrillingToolsSupplier = {
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
      description: string;
      pdfImage: string;
      // link: string;
    }[];
  }[];
};

export const DrillingToolsProductsData: DrillingToolsSupplier[] = [
  {
    id: "drilling-tools",
    title: "DRILLING TOOLS",
    image: "/images/brandLogo/Adaan-Logo.webp",

    icon: Package,
    description: "Comprehensive Drilling Solutions",
    banner: "Complete range of drilling tools for all mining applications",
    fullDescription:
      "Professional drilling tools and accessories for all mining operations with guaranteed performance and durability.",
    features: [
      "Premium Quality",
      "Extended Durability",
      "Precision Engineering",
      "Global Certification",
    ],
    subcategories: [
      {
        image: "/images/brandLogo/Adaan-Logo.webp",
        name: "Drilling Rods (Inner Tube Outer Tube) ",
        description:
          "High-quality diamond Rods for precision operations.",
        products: [
          {
            name: "Diamond Rods",
            image: "/images/products/DRILLING TOOLS/diamond rods.webp",
            pdfImage: "",
            description: "Premium diamond rods for core drilling",
          },
          {
            name: "Diamond Reamers",
            image: "/images/products/DRILLING TOOLS/diamond reamers.webp",
            pdfImage: "",
            description: "Precision reaming tools for hole enlargement",
          },
          {
            name: "Diamond Stabilizers",
            image: "/images/products/DRILLING TOOLS/diamond stabilizers.webp",
            pdfImage: "",
            description: "Stabilization tools for straight hole drilling",
          },
        ],
      },
      {
        image: "/images/brandLogo/Adaan-Logo.webp",
        name: "Diamond Drilling Equipment ",
        description:
          "High-quality diamond drilling tools for precision operations.",
        products: [
          {
            name: "Head Assembly",
            image: "/images/products/DRILLING TOOLS/head assembly.webp",
            pdfImage: "",
            description: "Premium diamond bits for core drilling",
          },
          {
            name: "Diamond Drilling Bits",
            image: "/images/products/DRILLING TOOLS/diamond drilling bits.webp",
            pdfImage: "",
            description: "Precision reaming tools for hole enlargement",
          },
          {
            name: "Diamond Drilling Consumables",
            image: "/images/products/DRILLING TOOLS/diamond drilling consumables.webp",
            pdfImage: "",
            description: "Stabilization tools for straight hole drilling",
          },
        ],
      },
      {
        image: "/images/brandLogo/Adaan-Logo.webp",
        name: "RC Drilling Equipment ",
        description:
          "Reverse circulation tools for efficient sample collection.",
        products: [
          {
            name: "RC Bits",
            image: "/images/products/DRILLING TOOLS/rc bits.webp",
            pdfImage: "",
            description: "Specialized bits for reverse circulation drilling",
          },
          {
            name: "RC Hammers",
            image: "/images/products/DRILLING TOOLS/rc hammers.webp",
            pdfImage: "",
            description: "High-performance hammers for RC operations",
          },
          {
            name: "RC Rods",
            image: "/images/products/DRILLING TOOLS/rc rods.webp",
            pdfImage: "",
            description: "Durable rods for reverse circulation systems",
          },
        ],
      },
    ],
  },
];
