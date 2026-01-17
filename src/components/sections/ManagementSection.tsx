import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Users, Calendar, FileText, CreditCard, Bell, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Users, title: "Student Profiles", description: "Manage student information and progress" },
  { icon: Calendar, title: "Attendance Tracking", description: "Daily attendance and reports" },
  { icon: FileText, title: "Report Cards", description: "Generate and share academic reports" },
  { icon: CreditCard, title: "Fee Management", description: "Track payments and balances" },
  { icon: Bell, title: "Notifications", description: "SMS and email alerts to parents" },
  { icon: BookOpen, title: "Lesson Planning", description: "Curriculum and lesson management" },
  { icon: MessageSquare, title: "Parent Portal", description: "Direct communication channel" },
  { icon: Lock, title: "Secure Access", description: "Role-based permissions" },
];

export const ManagementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-royal/10 text-royal rounded-full text-sm font-semibold mb-4">
              School Management System
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Smart School <span className="text-gradient-gold">Management</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our integrated School Management System streamlines administration, enhances 
              parent-teacher communication, and provides real-time insights into student progress. 
              Experience modern education management.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="royal" size="lg">
                Parent Login
              </Button>
              <Button variant="outline" size="lg">
                Staff Portal
              </Button>
            </div>
          </motion.div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
              <div className="bg-gradient-royal p-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  Portal Login
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Access your school management dashboard
                </p>
              </div>

              <div className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Username / Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 rounded border-border text-gold focus:ring-gold" />
                      <span className="text-sm text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-gold hover:text-gold-light">
                      Forgot password?
                    </a>
                  </div>

                  <Button variant="gold" className="w-full" size="lg">
                    <Lock className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Need help? Contact{" "}
                    <a href="mailto:admin@elitedignityschool.ac.tz" className="text-gold hover:text-gold-light">
                      admin@elitedignityschool.ac.tz
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
