export interface PracticeArea {
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  icon: string;
}

export interface LocationInfo {
  name: string;
  slug: string;
  county: string;
}

export const PHONE = "(714) 525-4457";
export const EMAIL = "topdefender@gmail.com";
export const ADDRESS = "2201 E. Chapman Ave., Fullerton, CA 92831";
export const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?width=100%25&height=300&hl=en&q=2201%20E%20Chapman%20Ave,%20Fullerton,%20CA%2092831&t=&z=15&ie=UTF8&iwloc=B&output=embed";

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    name: "DUI Defense",
    slug: "dui",
    shortDesc: "Aggressive defense for first-time, felony, underage, and injury-involved DUI charges in California.",
    description: "Driving Under the Influence charges in California carry severe, life-altering penalties. Robert Hickey aggressively challenges chemical tests, breathalyzer accuracy, and officer protocols to protect your driver's license and keep you out of jail.",
    icon: "ShieldAlert"
  },
  {
    name: "Drug Charges",
    slug: "drug-charges",
    shortDesc: "Defense against possession, distribution, manufacturing, and trafficking charges of controlled substances.",
    description: "Whether you are facing simple possession or complex distribution and trafficking charges, our firm builds strategic defenses focusing on illegal search and seizure violations and alternative sentencing options.",
    icon: "FolderAlert"
  },
  {
    name: "Assault & Battery",
    slug: "assault-battery",
    shortDesc: "Representation for violent crime allegations, self-defense claims, and fighting severe sentencing.",
    description: "Violent crime charges demand an immediate, proactive defense. We carefully examine police reports, witness statements, and physical evidence to establish self-defense, defense of others, or lack of intent.",
    icon: "Hammer"
  },
  {
    name: "Domestic Violence",
    slug: "domestic-violence",
    shortDesc: "Protecting your rights, reputation, and freedom against domestic abuse allegations and restraining orders.",
    description: "Domestic violence allegations can lead to immediate restraining orders, loss of custody, and criminal records. We provide discreet, thorough defense strategies to uncover false accusations and protect your future.",
    icon: "HeartOff"
  },
  {
    name: "Traffic Violations",
    slug: "traffic-violations",
    shortDesc: "Fighting speeding tickets, reckless driving, and license suspensions to protect your driving record.",
    description: "Do not let traffic citations accumulate points on your record, leading to soaring insurance rates and license suspensions. We represent clients in court to dismiss or reduce traffic violations.",
    icon: "Car"
  },
  {
    name: "Expungements",
    slug: "expungements",
    shortDesc: "Clear your California criminal record and open new doors for employment, housing, and licensing.",
    description: "A past conviction does not have to dictate your future. Under California Penal Code 1203.4, we help qualified individuals expunge their criminal records, clearing the way for professional opportunities.",
    icon: "FileCheck"
  },
  {
    name: "Theft & Burglary",
    slug: "theft-burglary",
    shortDesc: "Defense against petty theft, grand theft, shoplifting, burglary, and robbery allegations.",
    description: "Theft convictions are considered crimes of moral turpitude, severely damaging your employability. We fight aggressively to reduce felony charges to misdemeanors or secure dismissals.",
    icon: "Lock"
  },
  {
    name: "Weapons Charges",
    slug: "weapons-charges",
    shortDesc: "Representation for carrying concealed weapons, felon in possession, and unlawful discharge charges.",
    description: "California has some of the strictest gun laws in the nation. We represent individuals accused of weapons violations, fighting to prevent mandatory jail time and protect second amendment rights.",
    icon: "Sword"
  },
  {
    name: "Probation Violations",
    slug: "probation-violations",
    shortDesc: "Advocating for your freedom at probation revocation hearings and negotiating alternative outcomes.",
    description: "A minor slip-up shouldn't send you to jail. If you are accused of violating your probation, we represent you at hearings to explain the circumstances and advocate for reinstatement.",
    icon: "CalendarX"
  },
  {
    name: "Juvenile Offenses",
    slug: "juvenile-offenses",
    shortDesc: "Protecting the futures and rights of minors facing criminal charges in California juvenile courts.",
    description: "The juvenile justice system focuses on rehabilitation. We advocate for minors to ensure their mistakes do not derail their education, college prospects, or long-term career goals.",
    icon: "UserCheck"
  }
];

export const SUB_DUI_PAGES = [
  { name: "First Offense DUI", slug: "dui-first-offense" },
  { name: "Felony DUI", slug: "dui-felony" },
  { name: "Underage DUI", slug: "dui-underage" },
  { name: "DUI with Injury", slug: "dui-with-injury" },
  { name: "DUI FAQ", slug: "dui-faq" }
];

export const SUB_TRAFFIC_PAGES = [
  { name: "Speeding Tickets", slug: "speeding-tickets" },
  { name: "Reckless Driving", slug: "reckless-driving" },
  { name: "License Suspension", slug: "license-suspension" }
];

export const ALL_PRACTICE_AREAS_MAP = [
  ...PRACTICE_AREAS.map(p => ({ name: p.name, slug: `criminal-defense/${p.slug}` })),
  ...SUB_DUI_PAGES.map(p => ({ name: p.name, slug: `criminal-defense/${p.slug}` })),
  ...SUB_TRAFFIC_PAGES.map(p => ({ name: p.name, slug: `criminal-defense/${p.slug}` }))
];

export const LOCATIONS: LocationInfo[] = [
  { name: "Fullerton", slug: "fullerton", county: "Orange County" },
  { name: "Anaheim", slug: "anaheim", county: "Orange County" },
  { name: "Santa Ana", slug: "santa-ana", county: "Orange County" },
  { name: "Irvine", slug: "irvine", county: "Orange County" },
  { name: "Long Beach", slug: "long-beach", county: "Los Angeles County" },
  { name: "Riverside", slug: "riverside", county: "Riverside County" },
  { name: "San Bernardino", slug: "san-bernardino", county: "San Bernardino County" },
  { name: "Orange County", slug: "orange-county", county: "Orange County" }
];

export const ALL_LOCATIONS_LIST = [
  "Aliso Viejo", "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress", "Dana Point", "Fountain Valley", 
  "Fullerton", "Huntington Beach", "Irvine", "La Habra", "La Palma", "Laguna Beach", "Laguna Hills", 
  "Laguna Niguel", "Laguna Woods", "Lake Forest", "Los Alamitos", "Mission Viejo", "Newport Beach", 
  "Orange", "Placentia", "Rancho Santa Margarita", "San Clemente", "San Juan Capistrano", "Santa Ana", 
  "Seal Beach", "Stanton", "Tustin", "Villa Park", "Westminster", "Yorba Linda", "Corona", "Norco", 
  "Riverside", "Temecula", "Lake Elsinore", "Moreno Valley", "Mira Loma", "Menifee", "Murrieta", 
  "Wildomar", "Azusa", "Glendora", "Claremont", "Irwindale", "Baldwin Park", "Covina", "La Verne", 
  "El Monte", "West Covina", "La Puente", "Walnut", "Pomona", "City of Industry", "Rosemead", 
  "Long Beach", "Signal Hill", "Artesia", "Bellflower", "Bell", "Bell Gardens", "Cerritos", 
  "Cudahy", "Downey", "Hawaiian Gardens", "Huntington Park", "La Habra Heights", "Lakewood", 
  "La Mirada", "South Gate", "Rancho Cucamonga", "Chino", "Chino Hills", "Fontana", "Montclair", 
  "Ontario", "Rialto", "San Bernardino", "Upland"
];

export const TOP_CITIES = [
  "Fullerton", "Anaheim", "Santa Ana", "Irvine", "Orange", "Brea", "Yorba Linda", "Placentia", 
  "La Habra", "Buena Park", "Huntington Beach", "Newport Beach"
];
