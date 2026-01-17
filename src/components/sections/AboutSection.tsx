import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import studentsLearning from "@/assets/students-learning.jpg";

const values = [
  "Excellence in Education",
  "Dignity and Respect",
  "Holistic Development",
  "Community Values",
  "Innovation in Learning",
  "Character Building",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={studentsLearning}
                alt="Students learning at Elite Dignity School"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-elevated border border-border max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-4">
              About Our School
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Shaping Futures with{" "}
              <span className="text-gradient-gold">Dignity & Excellence</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Elite Dignity School, located in the serene hills of Makongo Juu, Dar es Salaam, 
              has been a beacon of quality education in Tanzania since its establishment. We 
              offer comprehensive Nursery and Primary education following the Tanzanian national 
              curriculum, preparing students for success in NECTA examinations and beyond.
            </p>

            <p className="text-muted-foreground mb-8">
              Our dedicated team of qualified teachers, modern facilities, and nurturing environment 
              ensure that every child receives the attention and education they deserve. We believe 
              in developing not just academic excellence, but also strong character and values.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-muted/50 rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 bg-royal rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To provide quality, dignified education that nurtures intellectual growth and moral values.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-muted/50 rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be Tanzania's leading institution in producing dignified, responsible citizens.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
