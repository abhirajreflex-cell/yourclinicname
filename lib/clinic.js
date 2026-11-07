// // lib/clinic.js
// // Naye clinic ke liye SIRF ye file aur public/images badlo.

//  export const clinic = {
//   // ---------- Basic ----------
//   name: "Dant Veda Multi Specialist Dental Clinic",
//   tagline: "Sitamarhi's Modern Dental Studio",
//   heroTitle: "Your Smile, Our Responsibility",
  
// heroHighlight: "Dant Veda",   // ye word colored dikhega
//   heroSubtitle:
//     "Painless treatment, experienced doctors and easy online booking. For kids to seniors.",
//   city: "Sitamarhi",
//   address: "Karpuri chowk, Main Road, Basopatti Main Rd, in front of Middle School, Karpuri, Basopatti, Bihar 847225",

//   // ---------- About ----------
//   about: {
//     title: "A Clinic Where You Smile Without Fear",
//     text: "Dant Veda is a modern dental clinic in Sitamarhi. We combine latest technology with a gentle approach so every patient, from kids to seniors, feels comfortable.",
//     image: "/images/clinic-1.jpg",
//     stats: [
//       { value: "5000+", label: "Happy Patients" },
//       { value: "10+", label: "Years Experience" },
//       { value: "4.8", label: "Google Rating" },
//     ],
//   },

//   // ---------- Contact ----------
//   phone: "+916203141284",          // call button ke liye
    
//   whatsapp: "916203141284",        // country code ke saath, + ke bina
//   email: "info@dantveda.com",
//   website:
//   process.env.NEXT_PUBLIC_SITE_URL ||
//   process.env.URL || // Netlify apne aap deta hai (site ka main link)
//   "http://localhost:3000",
//    // deploy ke baad badlenge
//    ogImage: "/images/og.jpg",

//   // ---------- Social ----------
//   facebook: "null",
//   instagram: "null",

//   // ---------- Rating (sirf display) ----------
//   rating: 4.8,
//   reviewCount: 300,
//   googleReviewsLink: "https://g.page/r/xxxx/review", // follow-up link

//   // ---------- Images (public/images ke andar) ----------
//   heroImage: "/images/hero.jpg",
//   gallery: [
//     { src: "/images/clinic-1.jpg", alt: "Clinic reception" },
//     { src: "/images/clinic-2.jpg", alt: "Treatment room" },
//     { src: "/images/clinic-3.jpg", alt: "Dental chair" },
//   ],

//   // ---------- Doctor ----------
//   doctor: {
//     name: "Dr. Alok Ranjan",
//     degree: "BDS, MDS (dentist)",
//     experience: "10+ Years",
//     image: "/images/doctor.jpg",
//     bio: "Dr. Alok Ranjan has treated 5000+ patients with a gentle, painless approach.",
//     specialities: ["Braces", "Root Canal", "Implants"],
//   },

//   // ---------- Services ----------
//   services: [
//     { title: "Braces", desc: "Metal and ceramic braces for a perfect smile.", image: "/images/braces.jpg" },
//     { title: "Root Canal", desc: "Painless single-sitting root canal.", image: "/images/root-canal.jpg" },
//     { title: "Teeth Whitening", desc: "Safe and quick whitening.", image: "/images/whitening.jpg" },
//     { title: "Dental Implants", desc: "Long lasting, natural looking implants.", image: "/images/implant.jpg" },
//   ],

//   // ---------- Why Us ----------
//   whyUs: [
//     { title: "Painless Treatment", desc: "Modern technique, minimum discomfort." },
//     { title: "Experienced Doctors", desc: "10+ years of clinical experience." },
//     { title: "Sterilized Equipment", desc: "Hygiene is our first priority." },
//     { title: "Affordable Pricing", desc: "Quality care at fair prices." },
//   ],

//   // ---------- Reviews (slideshow ke liye) ----------
//   reviews: [
//         { name: "Sunita Devi", rating: 5, text: "My son was scared but the doctor made him comfortable." },
//     { name: "Vikash Raj", rating: 5, text: "Affordable pricing and very hygienic clinic." },
//     { name: "Neha Kumari", rating: 4, text: "Quick appointment and no long waiting time." },
//     { name: "Amit Kumar", rating: 5, text: "Very friendly doctor, completely painless root canal." },
//     { name: "Priya Singh", rating: 5, text: "Clean clinic and great staff. Highly recommended." },
//     { name: "Rohit Jha", rating: 4, text: "Got my braces here, happy with the result." },
//   ],

//   // ---------- Google Map ----------
//   // Google Maps -> Share -> Embed a map -> src="..." ke andar ka link
//   mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456772.4142534928!2d86.00373259999999!3d26.5672188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec39a9a6c01779%3A0x4442d1af8483d921!2sDant%20Veda%20Multi%20Specialist%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1793812568541!5m2!1sen!2sin",

//   // ---------- Timings ----------
//   timings: "Mon - Sat: 10:00 AM - 8:00 PM",

//     // ---------- SEO / Local business ----------
//   indexable: false,   // demo ke time false. Clinic accept kare aur asli domain lage to true
//   state: "Bihar",
//   postalCode: "847225",
//   country: "IN",
//   geo: { lat: 26.5944, lng: 85.4913 }, // Google Maps me clinic par right-click karke asli lat/lng copy karo
//   priceRange: "₹₹",
//   openingHours: [
//     { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
//   ],
//   keywords: [
//     "dentist in Sitamarhi",
//     "dental clinic Sitamarhi",
//     "root canal Sitamarhi",
//     "braces Sitamarhi",
//     "dental implants Sitamarhi",
//   ],

//     // ---------- Footer links ----------
//   privacyUrl: "/privacy-policy",
//   disclaimerUrl: "/disclaimer",
// };

  

  // lib/clinic.js
// Naye clinic ke liye SIRF ye file aur public/images badlo.

// ---------- Preview mode ----------
// true  = hero, clinic aur doctor ki jagah "YOUR PHOTO HERE" placeholder dikhega (demo ke liye)
// false = asli photos dikhengi (public/images me hero.jpg, clinic-1.jpg, clinic-2.jpg, clinic-3.jpg, doctor.jpg)
const PREVIEW = true;
const IMG = (file) =>
  PREVIEW
    ? `/images/placeholders/${file.replace(/\.\w+$/, "")}.svg`
    : `/images/${file}`;

export const clinic = {
  preview: PREVIEW, // components ko batata hai ki demo mode hai ya nahi
  // ---------- Basic ----------
  name: "Your Clinic Name",
  shortName: "...clinic", // navbar/footer logo me chhota naam (optional, niche note dekho)
  tagline: "Sitamarhi's Modern Dental Studio",
  heroTitle: "Your Smile, Our Responsibility",
  
  heroHighlight: "Smile",// heroTitle ke andar ka hi word hona chahiye, warna split nahi hoga
  heroSubtitle:
    "Painless treatment, experienced doctors and easy online booking. For kids to seniors.",
  city: "Sitamarhi",
  address:
    " clinic address will appear here",

  // ---------- About ----------
  about: {
    title: "A Clinic Where You Smile Without Fear",
    text: "THIS CLINIC is a modern dental clinic in Sitamarhi. We combine latest technology with a gentle approach so every patient, from kids to seniors, feels comfortable.",
    image: IMG("about.jpg"),
    stats: [
      { value: "5000+", label: "Happy Patients" },
      { value: "10+", label: "Years Experience" },
      { value: "4.8", label: "Google Rating" },
    ],
  },

  // ---------- Contact ----------
  phone: "+91XXXXXXXXXX", // call button ke liye
  whatsapp: "91XXXXXXXXXX", // country code ke saath, + ke bina
  email: "info@..clinc.com",
  website:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL || // Netlify apne aap deta hai (site ka main link)
    "http://localhost:3000",
  ogImage: "/images/og.jpg", // WhatsApp preview (IMG() nahi lagana)

  // ---------- Social ----------
  facebook: "#",
  instagram: "#",

  // ---------- Rating (sirf display) ----------
  rating: 4.8,
  reviewCount: 300,
  // Asli review link milne tak Google Maps search link chalega
  googleReviewsLink:
    "https://www.google.com/maps/search/?api=1&query=Dant+Veda+Multi+Specialist+Dental+Clinic",


    ogImage: "/images/og.jpg",
  // ---------- Images ----------
  heroImage: "/images/hero.jpg",
  gallery: [
    { src: IMG("clinic-1.jpg"), alt: "Clinic reception" },
    { src: IMG("clinic-2.jpg"), alt: "Treatment room" },
    { src: IMG("clinic-3.jpg"), alt: "Dental chair" },
    { src: IMG("clinic-4.jpg"), alt: "Other photos" },
  ],

  // ---------- Doctor ----------
  doctor: {
    name: "DOCTOR NAME",
    degree: "BDS, MDS (dentist)",
    experience: "10+ Years",
    image: IMG("doctor.jpg"),
    bio: "Dr.  has treated 5000+ patients with a gentle, painless approach.",
    specialities: ["Braces", "Root Canal", "Implants"],
  },

  // ---------- Services (asli photos, IMG() nahi) ----------
  services: [
    { title: "Braces", desc: "Metal and ceramic braces for a perfect smile.", image: "/images/braces.jpg" },
    { title: "Root Canal", desc: "Painless single-sitting root canal.", image: "/images/root-canal.jpg" },
    { title: "Teeth Whitening", desc: "Safe and quick whitening.", image: "/images/whitening.jpg" },
    { title: "Dental Implants", desc: "Long lasting, natural looking implants.", image: "/images/implant.jpg" },
  ],

  // ---------- Why Us ----------
  whyUs: [
    { title: "Painless Treatment", desc: "Modern technique, minimum discomfort." },
    { title: "Experienced Doctors", desc: "10+ years of clinical experience." },
    { title: "Sterilized Equipment", desc: "Hygiene is our first priority." },
    { title: "Affordable Pricing", desc: "Quality care at fair prices." },
  ],

  // ---------- Reviews (slideshow ke liye) ----------
  reviews: [
    { name: "Sunita Devi", rating: 5, text: "My son was scared but the doctor made him comfortable." },
    { name: "Vikash Raj", rating: 5, text: "Affordable pricing and very hygienic clinic." },
    { name: "Neha Kumari", rating: 4, text: "Quick appointment and no long waiting time." },
    { name: "Amit Kumar", rating: 5, text: "Very friendly doctor, completely painless root canal." },
    { name: "Priya Singh", rating: 5, text: "Clean clinic and great staff. Highly recommended." },
    { name: "Rohit Jha", rating: 4, text: "Got my braces here, happy with the result." },
  ],

  // ---------- Google Map ----------
  // Google Maps -> Share -> Embed a map -> src="..." ke andar ka link
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456772.4142534928!2d86.00373259999999!3d26.5672188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec39a9a6c01779%3A0x4442d1af8483d921!2sDant%20Veda%20Multi%20Specialist%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1793812568541!5m2!1sen!2sin",

  // ---------- Timings ----------
  timings: "Mon - Sat: 10:00 AM - 8:00 PM",

  // ---------- SEO / Local business ----------
  indexable: false, // demo ke time false. Clinic accept kare aur asli domain lage to true
  state: "Bihar",
  postalCode: "XXXX",
  country: "IN",
  geo: { lat: 26.5944, lng: 85.4913 }, // TODO: Google Maps me clinic par right-click karke asli lat/lng copy karo
  priceRange: "₹₹",
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  keywords: [
    "dentist in Sitamarhi",
    "dental clinic Sitamarhi",
    "root canal Sitamarhi",
    "braces Sitamarhi",
    "dental implants Sitamarhi",
  ],

  // ---------- Footer links ----------
  privacyUrl: "/privacy-policy",
  disclaimerUrl: "/disclaimer",
};