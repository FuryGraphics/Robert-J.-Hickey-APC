// Business structured data (schema.org Attorney).
// Keep in sync with the static copy in client/index.html.
export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Robert Hickey Law Offices",
  "legalName": "Law Office of Robert J. Hickey, APC",
  "description": "Robert Hickey Law Offices in Fullerton provides aggressive criminal defense and DUI representation across Orange County for 30+ years, including DUI, domestic violence, theft, drug charges, probation violations and expungements.",
  "url": "https://www.topdefense.com/",
  "telephone": "+17145254457",
  "image": "https://d17lvxud83eqj6.cloudfront.net/9234059a-6430-46cd-86af-06ad07b6aaf7.png",
  "logo": "https://d17lvxud83eqj6.cloudfront.net/9234059a-6430-46cd-86af-06ad07b6aaf7.png",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2201 East Chapman Avenue",
    "addressLocality": "Fullerton",
    "addressRegion": "CA",
    "postalCode": "92831-4201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.8744487,
    "longitude": -117.8935349
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Orange County, CA" },
    { "@type": "City", "name": "Fullerton, CA" },
    { "@type": "City", "name": "Anaheim, CA" },
    { "@type": "City", "name": "Santa Ana, CA" },
    { "@type": "City", "name": "Irvine, CA" },
    { "@type": "State", "name": "California" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": 15,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Bree Castillo" },
      "reviewBody": "10/10 amazing lawyer! Very professional and got the job done! I would recommend him in a heartbeat to anyone in need of a criminal Lawyer! I had a dui case and he got it dismissed!",
      "reviewRating": { "@type": "Rating", "ratingValue": 5 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "R.J. Dreiling" },
      "reviewBody": "As a criminal defense attorney myself I know who is legit and who is not. Mr. Hickey is an extremely knowledgeable lawyer who is highly respected and excellent at what he does.",
      "reviewRating": { "@type": "Rating", "ratingValue": 5 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Leap Forward" },
      "reviewBody": "Referred by a friend for DUI, Robert's expertise led to a lighter sentence. His approach was professional and supportive, making a difficult time much easier.",
      "reviewRating": { "@type": "Rating", "ratingValue": 5 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Benjamin Johnson" },
      "reviewRating": { "@type": "Rating", "ratingValue": 5 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Samuel Martin" },
      "reviewBody": "Robert Hickey is not just a criminal defense attorney; he's a champion who fights vigorously for justice. If you're facing criminal charges, look no further. I can't recommend him enough.",
      "reviewRating": { "@type": "Rating", "ratingValue": 5 }
    }
  ]
};
