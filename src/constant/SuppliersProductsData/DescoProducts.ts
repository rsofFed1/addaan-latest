import { Drill } from "lucide-react";
import { ComponentType } from "react";

type DescoSupplier = {
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
      link: string;
    }[];
  }[];
};

export const DescoProductsData: DescoSupplier[] = [
  {
    id: "desco",
    title: "DESCO",
    image: "/images/partnersLogo/DescoLogo.webp",
    icon: Drill,
    description: "Precision Engineered Drill Rigs",
    banner:
      "Precision Engineered Drill Rigs Built to Perform in the Toughest Environments",
    fullDescription:
      "Desco Drilling Rigs provide reliable and advanced drilling equipment for demanding mining operations with over 30 years of industry expertise.",
    features: [
      "Rugged Construction",
      "Advanced Hydraulics",
      "Precision Control",
      "Global Service Network",
    ],
    subcategories: [
      {
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "Multipurpose Rigs",
        description:
          "High-performance drilling rigs designed for the most challenging mining environments.",
        products: [
          {
            name: "Multipurpose Rigs",
            image: "/images/products/DESCO/5.webp",
            pdfImage: "",
            description:
              "DESCO is a global leader in drilling optimization and data management solutions for the mining and exploration industries.",
            link: "https://desco-inc.com/products/SP3500",
          },
          {
            name: "Multipurpose Rigs",
            image: "/images/products/DESCO/3.webp",
            pdfImage: "",
            description:
              "DESCO is a global leader in drilling optimization and data management solutions for the mining and exploration industries.",
            link: "https://desco-inc.com/products/SP4500SA-RC",
          },
          {
            name: "Multipurpose Rigs",
            image: "/images/products/DESCO/4.webp",
            pdfImage: "",
            description:
             "DESCO is a global leader in drilling optimization and data management solutions for the mining and exploration industries.",
            link: "https://desco-inc.com/products/SP3500",
          },
        ],
      },
      {
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "Core Drilling Rigs",
        description:
          "High-performance drilling rigs designed for the most challenging mining environments.",
        products: [
          {
            name: "Core Drilling Rigs",
            image: "/images/products/DESCO/3.webp",
            pdfImage: "",
            description: "Core Drilling Rigs",
            link: "https://desco-inc.com/products/SP4500SA-RC",
          },
        ],
      },
      {
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "Water Well Rigs",
        description:
          "High-performance drilling rigs designed for the most challenging mining environments.",
        products: [
          {
            name: "Water Well Rigs",
            image: "/images/products/DESCO/4.webp",
            pdfImage: "",
            description: "Water Well Rigs",
            link: "https://desco-inc.com/products/SP3500",
          },
        ],
      },
      {
        image: "/images/partnersLogo/DescoLogo.webp",
        name: "Truck Mounted Rigs",
        description:
          "High-performance drilling rigs designed for the most challenging mining environments.",
        products: [
          {
            name: "Truck Mounted Rigs",
            image: "/images/products/DESCO/1.webp",
            pdfImage: "",
            description: "Truck Mounted Rigs",
            link: "https://desco-inc.com/products/SP3500",
          },
        ],
      },
    ],
  },
];
