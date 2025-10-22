import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/company" },
    { name: "Soluções", href: "/solutions" },
    { name: "Preços", href: "/pricing" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-3xl font-logo tracking-wide text-white select-none">VALORA</a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white transition">
              {link.name}
            </a>
          ))}
          <a href="/login"
             className="ml-4 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition backdrop-blur-md">
            Entrar
          </a>
        </nav>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }} className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-300 hover:text-white transition text-sm">{link.name}</a>
              </li>
            ))}
            <li>
              <a href="/login"
                 className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition backdrop-blur-md">
                Entrar
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
