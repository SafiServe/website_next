import React from "react";
import axis from "../../public/service_providers/AXISLOGO2.webp";
import blessed from "../../public/service_providers/blessed_fam_cleaning_services.webp";
import joel from "../../public/service_providers/joel_nailic.jpg";

const provider = [
  {
    id: 1,
    name: "Axis",
    image: axis,
    description: "Experienced Cleaning and Fumigations company",
    serviceType: "Cleaning & Fumigation",
  },
  {
    id: 2,
    name: "Blessed Fam",
    image: blessed,
    description: "Certified Cleaning expert",
    serviceType: "Cleaning Services",
  },
  {
    id: 3,
    name: "Joel Nailic",
    image: joel,
    description: "Nail expert with years of experience",
    serviceType: "Nail Services",
  },
];

export default provider;
