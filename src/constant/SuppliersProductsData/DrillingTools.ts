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
    image: "/images/partnersLogo/DescoLogo.webp",

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
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "Drilling Rods (Inner Tube Outer Tube) ",
        description:
          "High-quality diamond Rods for precision operations.",
        products: [
          {
            name: "Diamond Rods",
            image: "/images/products/DESCO/1.webp",
            pdfImage: "",
            description: "Premium diamond rods for core drilling",
          },
          {
            name: "Diamond Reamers",
            image: "/images/products/DESCO/2.webp",
            pdfImage: "",
            description: "Precision reaming tools for hole enlargement",
          },
          {
            name: "Diamond Stabilizers",
            image: "/images/products/DESCO/3.webp",
            pdfImage: "",
            description: "Stabilization tools for straight hole drilling",
          },
        ],
      },
      {
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "Diamond Drilling Equipment ",
        description:
          "High-quality diamond drilling tools for precision operations.",
        products: [
          {
            name: "Diamond Bits",
            image: "/images/products/DESCO/1.webp",
            pdfImage: "",
            description: "Premium diamond bits for core drilling",
          },
          {
            name: "Diamond Reamers",
            image: "/images/products/DESCO/2.webp",
            pdfImage: "",
            description: "Precision reaming tools for hole enlargement",
          },
          {
            name: "Diamond Stabilizers",
            image: "/images/products/DESCO/3.webp",
            pdfImage: "",
            description: "Stabilization tools for straight hole drilling",
          },
        ],
      },
      {
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "RC Drilling Equipment ",
        description:
          "Reverse circulation tools for efficient sample collection.",
        products: [
          {
            name: "RC Bits",
            image: "/images/products/DESCO/4.webp",
            pdfImage: "",
            description: "Specialized bits for reverse circulation drilling",
          },
          {
            name: "RC Hammers",
            image: "/images/products/DESCO/5.webp",
            pdfImage: "",
            description: "High-performance hammers for RC operations",
          },
          {
            name: "RC Rods",
            image: "/images/products/DESCO/6.webp",
            pdfImage: "",
            description: "Durable rods for reverse circulation systems",
          },
        ],
      },
    ],
  },
];
