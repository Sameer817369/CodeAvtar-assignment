import { Singapore, USA, Hongkong } from "../assets/Images/index";

export const cards = [
  {
    imgURL: Singapore,
    country: "Singapore",
    title: "Head Office",
    name: "XYZ Pvt.Ltd.",
    location: "Road to nowhere, 06-404, 500 Internal Error",
  },
  {
    imgURL: Hongkong,
    country: "Hong Kong",
    title: "Branches",
    name: "XYZ Pte.Ltd.",
    location: "The Infinite Loop Office, 404 Timeout Plaza",
  },
  {
    imgURL: USA,
    country: "USA",
    title: "Branches",
    name: "XYZ Inc.",
    location: "Nulltown, Bunglandia, 500 OxDEADBEE",
  },
];
export const formFields = [
  {
    type: "text",
    label: "Legal Name",
    placeholder: "Legal name",
    required: true,
  },
  {
    type: "text",
    label: "Doing business as",
    placeholder: "Doing business as",
    required: true,
  },
  {
    type: "text",
    label: "Company Registration Number",
    placeholder: "Company Registration Number",
    required: true,
  },
  {
    type: "text",
    label: "Random Registration Number",
    placeholder: "Random Registration Number",
    required: true,
  },
  {
    type: "text",
    label: "Website URL",
    placeholder: "Website URL",
    required: true,
  },
  {
    type: "dropdown",
    label: "Industry Name",
    options: ["Industry Name"],
    required: true,
  },
  {
    type: "dropdown",
    label: "One Random Dropdown?",
    options: [
      "Options nai options",
      "Options kati options",
      "Options wild options",
    ],
    required: true,
  },
  {
    type: "dropdown",
    label: "Which dropdown would you like to select?",
    options: ["More Options", "Many Options", "Too Many Options"],
    required: true,
  },
  {
    type: "dropdown",
    label: "Another Random Dropdown Appears",
    options: ["Return of the options", "Return of the options"],
    required: true,
  },
  {
    type: "dropdown",
    label: "Account Usage Intent",
    options: ["Account Usage Intent"],
    required: true,
  },
  {
    type: "text",
    label: "Random count per month",
    placeholder: "Put the value get the answer",
    required: true,
  },
  {
    type: "number",
    label: "Expected total visits in this page",
    placeholder: "In Number",
    required: true,
  },
  {
    type: "textarea",
    label: "Purpose of using fake form",
    placeholder: "Purpose of using fake form",
    required: true,
  },
  {
    type: "textarea",
    label: "Ek description toh banta hai",
    placeholder: "Product Description",
    required: true,
  },
  {
    type: "text",
    label: "Contact email",
    placeholder: "Contact email",
    required: true,
  },
  { type: "file", label: "Certification of Incorporation", required: true },
  { type: "file", label: "Company Logo", required: true },
];

export const registration_steps = [
  {
    name: "Business Type",
    detail: "Provide business type",
  },
  {
    name: "Business Details",
    detail: "enter business detail",
  },
  {
    name: "Authorized Representative",
    detail: "provide Authorized Representive details",
  },
  {
    name: "Business Owners",
    detail: "provide business owners detail",
  },
  {
    name: "Company Directors",
    detail: "provide company directors detail",
  },
  {
    name: "Support Information",
    detail: "provide support informantion",
  },
  {
    name: "Add Details",
    detail: "provide add detail",
  },
  {
    name: "Complete Registration",
    detail: "Final step",
  },
];
