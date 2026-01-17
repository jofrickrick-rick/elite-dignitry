import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Makongo Juu", "Kinondoni District", "Dar es Salaam, Tanzania"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+255 755 123 456", "+255 222 123 456"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@elitedignityschool.ac.tz", "admissions@elitedignityschool.ac.tz"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon - Fri: 7:00 AM - 5:00 PM", "Sat: 8:00 AM - 1:00 PM"],
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We'd love to hear from you. Reach out for admissions inquiries or any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+255 XXX XXX XXX"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all">
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="fees">Fee Structure</option>
                    <option value="curriculum">Curriculum Information</option>
                    <option value="tour">School Tour Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <Button variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-5 shadow-card border border-border"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6!2d39.24!3d-6.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDUnMzYuMCJTIDM5wrAxNCcyNC4wIkU!5e0!3m2!1sen!2stz!4v1600000000000!5m2!1sen!2stz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Dignity School Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm font-medium text-foreground mb-4">Follow Us</p>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/elite_dignity_school/", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-royal rounded-full flex items-center justify-center text-primary-foreground hover:shadow-royal transition-shadow"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
