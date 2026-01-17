import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "NECTA Results", href: "#results" },
    { label: "School Calendar", href: "#" },
    { label: "Fee Structure", href: "#" },
    { label: "Admission Form", href: "#" },
    { label: "Parent Portal", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "School Policies", href: "#" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={schoolLogo} alt="Elite Dignity School" className="h-14 w-14 object-contain" />
              <div>
                <h3 className="font-display text-xl font-bold text-background">
                  Elite Dignity
                </h3>
                <p className="text-xs text-gold font-semibold tracking-wider uppercase">
                  School
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Nurturing tomorrow's leaders with dignity, excellence, and values at our 
              premier educational institution in Makongo Juu, Dar es Salaam.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Tanzania</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-gold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-gold mb-6">Stay Updated</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to our newsletter for school updates and announcements.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:ring-2 focus:ring-gold focus:border-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-foreground font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © {new Date().getFullYear()} Elite Dignity School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold text-foreground rounded-full shadow-gold flex items-center justify-center hover:bg-gold-light transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};
