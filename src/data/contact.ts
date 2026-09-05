export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface EmailContactLink extends ContactLink {
  address: string;
}

export interface SocialContactLink extends ContactLink {
  label: "GitHub" | "LinkedIn";
  external: true;
}

const emailAddress = "kostyukanzhelika@gmail.com";

export const contactLinks: {
  email: EmailContactLink;
  github: SocialContactLink;
  linkedin: SocialContactLink;
} = {
  email: {
    label: "Email",
    href: `mailto:${emailAddress}`,
    address: emailAddress,
  },
  github: {
    label: "GitHub",
    href: "https://github.com/A-coderr",
    external: true,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anzhelikakostyuk",
    external: true,
  },
};

export const socialContactLinks = [
  contactLinks.github,
  contactLinks.linkedin,
] as const;