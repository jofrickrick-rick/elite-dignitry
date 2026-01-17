import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, TrendingUp, Star, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

const years = [
  { year: "2024", students: "45", passRate: "98%", distinction: "12" },
  { year: "2023", students: "42", passRate: "96%", distinction: "10" },
  { year: "2022", students: "38", passRate: "97%", distinction: "8" },
  { year: "2021", students: "35", passRate: "95%", distinction: "9" },
  { year: "2020", students: "32", passRate: "94%", distinction: "7" },
];

export const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-royal/10 text-royal rounded-full text-sm font-semibold mb-4">
            Academic Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            NECTA <span className="text-gradient-gold">Examination Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            View our students' outstanding performance in National Examinations
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Award, value: "98%", label: "Pass Rate 2024" },
            { icon: Star, value: "12", label: "Distinctions" },
            { icon: TrendingUp, value: "Top 10", label: "In District" },
            { icon: Medal, value: "A+", label: "Average Grade" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border mb-12"
        >
          <div className="bg-gradient-royal p-6">
            <h3 className="font-display text-2xl font-bold text-primary-foreground">
              PSLE Results History
            </h3>
            <p className="text-primary-foreground/80">Primary School Leaving Examination</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Year</th>
                  <th className="text-left p-4 font-semibold text-foreground">Students</th>
                  <th className="text-left p-4 font-semibold text-foreground">Pass Rate</th>
                  <th className="text-left p-4 font-semibold text-foreground">Distinctions</th>
                  <th className="text-left p-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {years.map((row, index) => (
                  <motion.tr
                    key={row.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="border-t border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4 font-bold text-foreground">{row.year}</td>
                    <td className="p-4 text-muted-foreground">{row.students}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold dark:bg-green-900/30 dark:text-green-400">
                        {row.passRate}
                      </span>
                    </td>
                    <td className="p-4 text-gold font-semibold">{row.distinction}</td>
                    <td className="p-4">
                      <a
                        href={`https://matokeo.necta.go.tz/results/${row.year}/psle/results/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-royal hover:text-royal-light transition-colors font-medium text-sm"
                      >
                        View Results
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open("https://www.necta.go.tz/", "_blank")}
          >
            Visit NECTA Official Portal
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Click to access all official NECTA examination results
          </p>
        </motion.div>
      </div>
    </section>
  );
};
