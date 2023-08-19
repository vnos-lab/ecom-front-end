import ROUTES from "@/constants/routes";
import ic_facebook from "@/public/images/icon/social/ic_facebook.svg"
import ic_twitter from "@/public/images/icon/social/ic_twitter.svg"
import ic_instagram from "@/public/images/icon/social/ic_instagram.svg"
import ic_linkedin from "@/public/images/icon/social/ic_linkedin.svg"

export const supportLabel = [
  {
    title: "Address",
    content: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."
  },
  {
    title: "Email",
    content: "exclusive@gmail.com"
  },
  {
    title: "Phone number",
    content: "+88015-88888-9999"
  }
]
export const quickLink = [
  {
    label: "Privacy Policy",
    href: ROUTES.POLICY,
  },
  {
    label: "Terms Of Use",
    href: ROUTES.TERMS,
  },
  {
    label: "FAQ",
    href: ROUTES.FAQ,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
  }
]

export const iconSocial = [
  {
    label: "Facebook",
    image: ic_facebook,
    href: "https://www.facebook.com"
  },
  {
    label: "Twitter",
    image: ic_twitter,
    href: "https://twitter.com"
  },
  {
    label: "Instagram",
    image: ic_instagram,
    href: "https://www.instagram.com"
  },
  {
    label: "Linkedin",
    image: ic_linkedin,
    href: "https://www.linkedin.com"
  }
]
