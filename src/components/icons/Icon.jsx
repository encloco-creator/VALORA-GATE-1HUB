import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const icons = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail };

export default function Icon({ name, size = 18, color = "white" }) {
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} color={color} /> : null;
}
