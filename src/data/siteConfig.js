import Log from "../assets/profile.png"; // ✅ Import the image

const siteConfig = {
  siteName: "Muhsin",               // ← Replace with your name
  tagline: "Your personal tagline.",       // ← Replace with your own tagline

  // Contact
  contactEmail: "you@example.com",          // ← Your email
  whatsapp: "https://wa.me/1234567890",     // ← Your WhatsApp link
  phone: "+91 9876543210",                  // ← Your phone
  location: "Your City, Country",           // ← Your location

  // Socials
  socials: {
    linkedin: "https://linkedin.com/in/yourprofile",
    youtube: "https://youtube.com/@yourchannel",
    instagram: "https://instagram.com/yourhandle",
  },

  // SEO / Meta
  siteUrl: "https://yourdomain.com",
  defaultTitle: "Your Name – Portfolio & Blog",
  defaultDescription:
    "Welcome to my portfolio—showcasing my work, blog, and how to get in touch.",
  ogImage: "/assets/meta/og-image.jpg",

  // Assets
  logo: Log,            // ← Place your logo at this path
  favicon: "/favicon.ico",
};

export default siteConfig;
