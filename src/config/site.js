export const site = {
  name: "Mila-Karton",
  legalName: "MILA KARTON LLP",
  tagline: "Minimalist Market Place",
  domain: "milakarton.store",
  url: "https://milakarton.store",
  email: "milakartonkochi@gmail.com",
  phoneDisplay: "+91 81368 66149",
  phoneDisplay2: "+91 80897 71730",
  phoneHref: "+918136866149",
  phoneHref2: "+918089771730",
  whatsapp: "918136866149",
  gstin: "32ACEFM1812C1ZZ",
  address: [
    "C007 67/1717 (Old No 41/3197)",
    "SpaceClassified, Bhageeratha Square",
    "Banerji Road, Kacheripady, Kochi",
    "682018, Kerala, India",
  ],
  colors: {
    blue: "#0b83dc",
    navy: "#0b2349",
  },
};

export const formatINR = (value) =>
  `₹${Number(value || 0).toLocaleString("en-IN")}`;
