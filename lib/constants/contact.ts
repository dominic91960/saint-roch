import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

// -------- -------- SELECT OPTIONS IN CONTACT FORM -------- --------
export const discoveryMediumData = [
  { value: "youtube", label: "Youtube" },
  { value: "facebook", label: "Facebook" },
  { value: "tiktok", label: "TikTok" },
];

// -------- -------- CONTACT OPTIONS IN CONTACT FORM -------- --------
export const contactDetails = [
  {
    Icon: IoCall,
    type: "Phone",
    href: "tel:+39 045 445 0067",
    info: "+39 045 445 0067",
  },
  {
    Icon: FaFax,
    type: "Fax",
    href: "tel:+39 045 445 0068",
    info: "+39 045 445 0068",
  },
  {
    Icon: IoMdMail,
    type: "Email",
    href: "mailto:info@saintrochsrl.com",
    info: "info@saintrochsrl.com",
  },
];

// -------- -------- OTHER LOCATION DATA -------- --------
export const otherLocations = [
  {
    country: "Italy",
    name: "Saint Roch Srl",
    address: "Via Ritonda 79, 37047 \nSan Bonifacio (VR) Italy",
    tel: ["+39 045 445 0067"],
    email: "info@saintrochsrl.com",
  },
  {
    country: "Germany",
    name: "Saint Roch",
    address: "Harderstrasse 21, 85049 \nIngolstadt Bavaria Germany",
    tel: ["+49 91 51201 9038"],
    email: "info@saintroch.de",
  },
  {
    country: "Canada",
    name: "Saint Roch",
    address: "203 Wellington St W, \nToronto, ON M5V 3G7, Canada",
    tel: ["+1 416-555-8923"],
    email: "info@saintrochsrl.ca",
  },
  {
    country: "United States",
    name: "Saint Roch",
    address: "1200 Market St, \nPhiladelphia, PA 19107, USA",
    tel: ["+1 215-555-7342"],
    email: "info@saintroch.com",
  },
];
