const config = {
  title: "Suraj Giri | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Suraj, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Suraj, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Suraj",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Suraj Giri",
  email: "[EMAIL_ADDRESS]",
  site: "https://surajgiri.site",
  resume: "https://drive.google.com/file/d/1EfREce38WXLi6BEfXuYBw8wTG94Ej_Ue/view?usp=sharing",

  // for github stars button
  githubUsername: "surajixcp",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/SurajGi90373975",
    linkedin: "https://www.linkedin.com/in/suraj-giri-913829291",
    instagram: "https://www.instagram.com/_ssuraajgiri_/",
    facebook: "https://www.facebook.com/profile.php?id=61574421033522",
    github: "https://github.com/surajixcp",
  },
  address: {
    line1: "Building Number: 10",
    line2: "Street Name: Ashoka Road",
    line3: "Street Address: Plot 7, Jantar Mantar",
    state: "Delhi",
    city: "New Delhi",
    zip: "110001"
  }
};
export { config };
