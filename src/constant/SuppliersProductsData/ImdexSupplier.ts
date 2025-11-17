import { Globe } from "lucide-react";
import { ComponentType } from "react";

type ImdexSupplier = {
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

export const ImdexProductsData: ImdexSupplier[] = [
  {
    id: "imdex",
    title: "IMDEX",
    image: "/images/partnersLogo/IMDEXLogo.webp",
    icon: Globe,
    description: "Innovative Mining Technology Company",
    banner:
      "Empowering Mining with Real-Time Data and Advanced Drilling Technologies",
    fullDescription:
      "IMDEX is a global mining technology company headquartered in Perth. With a focus on drilling optimization, rock knowledge, and digital transformation, IMDEX provides advanced drilling fluids, state-of-the-art downhole instrumentation, and robust data management software.",
    features: [
      "Real-time Data Analytics",
      "Advanced Drilling Fluids",
      "Digital Transformation",
      "Global Support",
    ],
    subcategories: [
      {
        image: "/images/partnersLogo/REFLEXLogo.webp",
        name: "REFLEX – Downhole Survey & Structural Geology Tools",
        description:
          "Reflex provides high-performance tools for downhole survey, orientation, and structural geology, enabling accurate borehole mapping and geotechnical insight in real time.",
        products: [
          {
            name: "ACT III™",
            image: "/images/products/REFLEX/ACT lll.webp",
            pdfImage: "/images/products/REFLEX/pdf-ACT lll.webp",
            description:
              "REFLEX ACT III™ is a digital core orientation system that records the orientation of the core sample and other key data in core drilling operations. It has a patented rapid descent system that reduces time to complete core recovery. It delivers exceptional accuracy, while being easy to use and reliable in harsh field conditions and is the preferred core orientation system for drillers and geologists worldwide. Its high level of data accuracy leads to better understanding of the geological structure, ultimately resulting in enhanced drill program management and geotechnical planning.",
            link: "/productCatalogs/REFLEX/ACT-III-Product-Data-Sheet.pdf",
          },
          {
            name: "ACT X™",
            image: "/images/products/REFLEX/ACT X.webp",
            pdfImage: "/images/products/REFLEX/pdf-ACT X.webp",
            description:
              "ACTx is a groundbreaking, digital core orientation system that enhances safety, accuracy, and time to orient core at the drill rig site.",
            link: "/productCatalogs/REFLEX/ACT-X-Product-Data-Sheet.pdf",
          },
          {
            name: "EZ-TRAC™",
            image: "/images/products/REFLEX/EZ-TRAC.webp",
            pdfImage: "/images/products/REFLEX/pdf-EZ-TRAC.webp",
            description:
              "The REFLEX EZ-TRAC™ is a digital downhole survey instrument that is multifunctional, easy to operate, highly accurate, robust and reliable. The REFLEX EZ-TRAC™ is able to transfer vital downhole data in real-time via our new android based REFLEX EZ-TRAC™ App available on a REFLEX supplied tablet. Built using our industry preferred user interface, the user friendly REFLEX EZ-TRAC™ App on handheld device will operate the tool, execute surveys and sync the data to the IMDEXHUBIQ™ at the press of a button. Results are automatically calculated and displayed on the handheld device, eliminating the risk of human error, and survey data uploaded into IMDEXHUB-IQ™ can be accessed by geologists anywhere, any time",
            link: "/productCatalogs/REFLEX/EZ-TRAC-Product-Data-Sheet.pdf",
          },
          {
            name: "OMNIx™38",
            image: "/images/products/REFLEX/OMNIx38.webp",
            pdfImage: "/images/products/REFLEX/pdf-OMNIx38.webp",
            description:
              "The fastest, most accurate north seeking gyro is here. The REFLEX GYRO SPRINT-IQ™ is available in continuous, single shot, multi shot and over shot modes and provides highly accurate survey data at speeds of up to 3x faster than currently used gyros.",
            link: "/productCatalogs/REFLEX/OMNIx38-Product-Data-Sheet.pdf",
          },
          {
            name: "OMNIx™42",
            image: "/images/products/REFLEX/OMNIx42.webp",
            pdfImage: "/images/products/REFLEX/pdf-OMNIx42.webp",
            description:
              "LOGRx is an innovative, handheld digital device that significantly enhances both the speed and accuracy of capturing the orientation of structural features in diamond core.  Its ability to seamlessly transfer structural measurements digitally creates a dependable audit trail.",
            link: "/productCatalogs/REFLEX/OMNIx42-Product-Data-Sheet.pdf",
          },
          {
            name: "TN14 GYROCOMPASS™",
            image: "/images/products/REFLEX/TN14 GYROCOMPASS.webp",
            pdfImage: "/images/products/REFLEX/pdf-TN14 GYROCOMPASS.webp",
            description:
              "OMNIx38 is a premium, north seeking and all-attitude continuous gyro, delivering the highest performance accuracy ratings in downhole navigation. Advancing on the market-leading REFLEX GYRO SPRINT-IQ™, OMNIx38 further reduces uncertainties associated with survey measurements to provide geologists with critical borehole information they can trust, in a small form factor; catering to the driller and operator.",
            link: "/productCatalogs/REFLEX/TN14-Product-Data-Sheet.pdf",
          },
        ],
      },
      {
        image: "/images/partnersLogo/AMCLogo.webp",
        name: "AMC – Drilling Fluids",
        description:
          "AMC offers a comprehensive range of drilling fluids and additives designed to improve hole stability, reduce environmental impact, and optimize drilling performance across all ground conditions.",
        products: [
          {
            name: "AMC BOS FIX™",
            image: "/images/products/AMC/AMC BOS FIX.webp",
            pdfImage: "/images/products/AMC/pdf-AMC BOS FIX.webp",
            description:
              "AMC BOS FIX™ is designed specifically to be used in conjunction with the AMC BOS UNIT™ as a preventative maintenance system to minimize borehole torque and fluid losses, while also maximising borehole stabilisation, penetration rates, core recovery and overall productivity.",
            link: "/productCatalogs/AMC/AMC-BOS-FIX-Product-data-Sheet.pdf",
          },
          {
            name: "AMC CR 650™",
            image: "/images/products/AMC/AMC CR 650.webp",
            pdfImage: "/images/products/AMC/pdf-AMC CR 650.webp",
            description:
              "AMC CR 650™ is a high molecular weight, powdered polymer which has been developed to improve cuttings encapsulation as well as helping to stabilise the formation. AMC CR 650™ forms a protective polymer film on the drill pipe and bit as well as on the walls of the bore hole which helps to provide lubrication when drilling in troublesome formations. It is ideally suited for use in horizontal directional drilling, water well, mining and tunnelling applications.",
            link: "/productCatalogs/AMC/AMC-CR-650-Product-data-Sheet.pdf",
          },
          {
            name: "AMC PLUG™",
            image: "/images/products/AMC/AMC PLUG.webp",
            pdfImage: "/images/products/AMC/pdf-AMC PLUG.webp",
            description:
              "AMC PLUG™ is a polymer in granular form that absorbs up to 500 times its original volume in water. AMC PLUG™ is ideal for sealing zones of lost circulation and can also be used to reduce rod vibration in holes where lost returns are a problem.",
            link: "/productCatalogs/AMC/IMDEX-Product-Data-Sheet-AMC-PLUG.pdf",
          },
          {
            name: "AMC WATER CONDITIONER™",
            image: "/images/products/AMC/AMC WATER CONDITIONER.webp",
            pdfImage: "/images/products/AMC/pdf-AMC WATER CONDITIONER.webp",
            description:
              "AMC WATER CONDITIONER™ is a blend of water treating agents used for the treatment of water containing large amounts of magnesium, calcium and other metal ions that have a detrimental effect on the yield of drilling fluid additives such as bentonite or polymers",
            link: "/productCatalogs/AMC/IMDEX-Product-Data-Sheet-AMC-WATER-CONDITIONER.pdf",
          },
          // {
          //   name: "AMC LIQUIPOL",
          //   image: "/images/products/AMC/2.webp",
          //   pdfImage: "/images/products/AMC/pdf/2.webp",
          //   description:
          //     "AMC LIQUI POL™ is a rapid yielding, high molecular weight polymer in liquid form that provides viscosity without the problems associated with mixing powdered polymers. AMC LIQUI POL™ will help improve core recovery, particularly in clays and shales and highly fractured formations. It provides cuttings encapsulation as well as helping to stabilise the formation.",
          //   link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx",
          // },
          // {
          //   name: "AMC CORE WELL",
          //   image: "/images/products/AMC/4.webp",
          //   pdfImage: "/images/products/AMC/pdf/4.webp",
          //   description:
          //     "AMC COREWELL™ is a sophisticated, multifunctional single sack system created especially for diamond coring and slim-hole drilling activities. AMC COREWELL™ provides superior core protection and side wall stabilisation. AMC COREWELL™ helps secure a native state, preserved sample allowing for more reliable core analysis data which ultimately leads to more accurate resource evaluations. AMC COREWELL™ employs physical mechanisms that entrap unconsolidated soils and cuttings to prevent dispersion.",
          //   link: "https://www.imdex.com/rock-knowledge/structural-geology/logrx",
          // },
          // {
          //   name: "AMC FLOC DD",
          //   image: "/images/products/AMC/5.webp",
          //   pdfImage: "/images/products/AMC/pdf/5.webp",
          //   description:
          //     "AMC FLOC DD™ is a specially formulated flocculant designed specifically to promote settlement of fine to colloidal sized drill cuttings in non-dispersed, polymer and low-solids water based drilling fluid systems. The cationic charge found in AMC FLOC DD™ neutralises the surface charges and also attaches to particles causing them to aggregate and form flocs, the flocs then settle quickly when entering the surface pits.",
          //   link: "https://www.imdex.com/rock-knowledge/structural-geology/actx",
          // },
        ],
      },
      {
        image: "/images/partnersLogo/DevjcoLogo.webp",
        name: "DEVICO – Borehole Survey & Rig Alignment Tools",
        description:
          "Devico specializes in precision borehole surveying and rig alignment solutions, helping drillers enhance accuracy, reduce deviation, and improve operational control from the surface.",
        products: [
          {
            name: "Devi Aligner",
            image: "/images/products/DEVICO/DeviAligner.webp",
            pdfImage: "/images/products/DEVICO/pdf-DeviAligner.webp",
            description:
              "State-of-the-art north seeking rig alignment system, with the fastest settling time available on the market. Recording precise azimuth, inclination and roll angles, both surface and underground through advanced fiber optic gyro technology. Can you afford not to have the DeviAligner on your drill program?",
            link: "/productCatalogs/DEVICO/DeviAligner-Product-Data-Sheet.pdf",
          },
          {
            name: "Devi Gyro OX",
            image: "/images/products/DEVICO/DeviGyro OX.webp",
            pdfImage: "/images/products/DEVICO/pdf-DeviGyro OX.webp",
            description:
              "The DeviGyro is an advanced, miniature rate gyro survey instrument supporting high-speed, all-angle, continuous, and multi-shot borehole surveying. Designed for versatility, it is provided through a range of purpose-built running gear configurations suited to a large variety of mining and civil drilling applications.",
            link: "/productCatalogs/DEVICO/DeviGyro-Overshot-Xpress-Product-Data-Sheet.pdf",
          },
          {
            name: "DeviGyro RG30 HELIX",
            image: "/images/products/DEVICO/DeviGyro RG30 HELIX.webp",
            pdfImage: "/images/products/DEVICO/pdf-DeviGyro RG30 HELIX.webp",
            description:
              "The DeviGyro is an advanced, miniature rate gyro survey instrument supporting high-speed, all-angle, continuous, and multi-shot borehole surveying. Designed for versatility, it is provided through a range of purpose-built running gear configurations suited to a large variety of mining and civil drilling applications.",
            link: "/productCatalogs/DEVICO/DeviGyro-RG30-HELIX-Product-Data-Sheet.pdf",
          },
          {
            name: "DeviGyro RG30 SLIMLINE",
            image: "/images/products/DEVICO/DeviGyro RG30 SLIMLINE.webp",
            pdfImage: "/images/products/DEVICO/pdf-DeviGyro RG30 SLIMLINE.webp",
            description:
              "DeviHealth is an innovative, portable calibration-check system specifically designed for the DeviGyro instrument.",
            link: "/productCatalogs/DEVICO/DeviGyro-RG30-SLIMLINE-Product-Data-Sheet.pdf",
          },
          {
            name: "DeviGyro RG40 STANDARD",
            image: "/images/products/DEVICO/DeviGyro RG40 STANDARD.webp",
            pdfImage: "/images/products/DEVICO/pdf-DeviGyro RG40 STANDARD.webp",
            description:
              "DeviHealth is an innovative, portable calibration-check system specifically designed for the DeviGyro instrument.",
            link: "/productCatalogs/DEVICO/DeviGyro-RG40-Standard-Product-Data-Sheet.pdf",
          },
        ],
      },
    ],
  },
];
