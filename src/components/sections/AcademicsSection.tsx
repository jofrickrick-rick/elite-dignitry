import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Baby, BookOpen, GraduationCap, Palette, Music, Trophy, Bus, Utensils } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Nursery School",
    ages: "2-5 Years",
    description: "Play-based learning environment fostering early development, creativity, and social skills.",
    color: "bg-pink-500",
  },
  {
    icon: BookOpen,
    title: "Primary School",
    ages: "6-13 Years",
    description: "Comprehensive curriculum preparing students for NECTA PSLE examinations with excellence.",
    color: "bg-royal",
  },
  {
    icon: GraduationCap,
    title: "Standard 7 Prep",
    ages: "Final Year",
    description: "Intensive preparation for national examinations with proven track record of success.",
    color: "bg-gold",
  },
];

const facilities = [
  { icon: Palette, name: "Arts & Crafts" },
  { icon: Music, name: "Music Studio" },
  { icon: Trophy, name: "Sports Field" },
  { icon: Bus, name: "School Transport" },
  { icon: Utensils, name: "School Canteen" },
  { icon: BookOpen, name: "Modern Library" },
];

export const AcademicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-royal/10 text-royal rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our comprehensive educational programs designed to nurture young minds 
            and prepare them for a bright future.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-gold mb-2 block">{program.ages}</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-royal rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold text-primary-foreground mb-3">
              World-Class Facilities
            </h3>
            <p className="text-primary-foreground/80">
              Modern amenities to support holistic education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20"
              >
                <facility.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <span className="text-sm font-medium text-primary-foreground">
                  {facility.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
