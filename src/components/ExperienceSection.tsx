import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Rookie Blockchain Developer",
    company: "Timechain Labs",
    location: "Remote",
    period: "June 2024",
    description: [
      "Working on blockchain development projects and decentralized applications",
      "Learning and implementing smart contracts and Web3 technologies",
      "Collaborating with the team on innovative blockchain solutions",
    ],
    skills: ["Blockchain", "Smart Contracts", "Web3", "Solidity"],
    current: true,
  },
  {
    title: "Chemical Engineering Research Intern",
    company: "IIT Kharagpur",
    location: "Kharagpur, India",
    period: "Research Internship",
    description: [
      "Conducted research in chemical engineering processes and optimization",
      "Applied analytical and computational methods to solve engineering problems",
      "Collaborated with faculty and research teams on ongoing projects",
    ],
    skills: ["Research", "Data Analysis", "Process Optimization", "Technical Writing"],
    current: false,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">Where I've Worked</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Past <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey across different domains and industries.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-primary hidden md:block">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                <div className="md:ml-20 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
