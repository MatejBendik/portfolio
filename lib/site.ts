export const SITE_URL = "https://matejbendik.com";

export const siteConfig = {
  name: "Matej Bendík",
  shortName: "Matej",
  title: "Full-stack developer building useful internet products",
  description:
    "Matej Bendík is a full-stack developer from Slovakia building and shipping useful digital products for developers and solo founders.",
  birthDate: "2003-08-15",
  location: "Slovakia",
  email: "matejbendik.mb@gmail.com",
  socials: {
    x: "https://x.com/BendikMatej",
    github: "https://github.com/MatejBendik",
    gumroad: "https://matejbendik.gumroad.com",
    linkedin: "https://www.linkedin.com/in/matejbendik/",
    instagram: "https://www.instagram.com/matejbendik/",
  },
} as const;

export function getAge(birthDate = siteConfig.birthDate) {
  const today = new Date();
  const birth = new Date(`${birthDate}T00:00:00Z`);
  let age = today.getUTCFullYear() - birth.getUTCFullYear();
  const birthdayHasPassed =
    today.getUTCMonth() > birth.getUTCMonth() ||
    (today.getUTCMonth() === birth.getUTCMonth() &&
      today.getUTCDate() >= birth.getUTCDate());

  if (!birthdayHasPassed) age -= 1;
  return age;
}
