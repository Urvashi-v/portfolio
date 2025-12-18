import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Globe,
  Brain,
  Database,
  Code2,
  Briefcase,
  Settings,
  Github,
  Terminal,
  Box,
  Layers
} from "lucide-react";

const technicalSkills = [
  {
    id: "webdev",
    title: "Web Development",
    icon: Globe,
    color: "text-blue-500",
    skills: ["HTML5 & CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "mlai",
    title: "Machine Learning & AI",
    icon: Brain,
    color: "text-purple-500",
    skills: ["Python", "NumPy & Pandas", "Scikit-learn", "TensorFlow / PyTorch", "Neural Networks & CNNs", "Model Optimization"],
  },
  {
    id: "dataeng",
    title: "Data Engineering",
    icon: Database,
    color: "text-cyan-500",
    skills: ["SQL", "Data Pipelines", "Data Analysis", "ETL Processes", "Data Visualization", "Database Design"],
  },
  {
    id: "softeng",
    title: "Software Engineering",
    icon: Code2,
    color: "text-emerald-500",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design Basics", "Version Control (Git)", "Linux & CLI", "Deployment"],
  },
];

const roleBasedSkills = [
  {
    id: "business",
    title: "Business Analyst",
    subtitle: "Bridging business needs with technical solutions",
    icon: Briefcase,
    skills: [
      { name: "Requirement Gathering & Documentation", icon: Box },
      { name: "Stakeholder Communication", icon: Settings },
      { name: "Data-driven Decision Making", icon: Database },
      { name: "Process Optimization", icon: Settings },
      { name: "KPI Analysis", icon: Layers },
      { name: "Market & Competitive Analysis", icon: Globe },
      { name: "SQL & Data Interpretation", icon: Database },
    ],
  },
  {
    id: "product",
    title: "Product Thinking",
    subtitle: "User-centric approach to building products",
    icon: Settings,
    skills: [
      { name: "Product Lifecycle Management", icon: Box },
      { name: "Feature Prioritization", icon: Layers },
      { name: "Roadmapping", icon: Settings },
      { name: "MVP Definition", icon: Box },
      { name: "User-Centric Design", icon: Globe },
      { name: "Cross-functional Collaboration", icon: Briefcase },
      { name: "Metrics-based Iteration", icon: Database },
    ],
  },
];

const quickTags = [
  { icon: Github, label: "Git & GitHub" },
  { icon: Terminal, label: "Terminal" },
  { icon: Box, label: "APIs" },
  { icon: Layers, label: "Full Stack" },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeRoleTab, setActiveRoleTab] = useState("business");

  const activeRole = roleBasedSkills.find((r) => r.id === activeRoleTab)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning web development, machine learning, data engineering, and
            software development fundamentals.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center ${category.color}`}>
                  <category.icon size={20} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {quickTags.map((tag) => (
            <div
              key={tag.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium"
            >
              <tag.icon size={16} className="text-primary" />
              <span>{tag.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Role-Based Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Role-Based <span className="text-gradient">Expertise</span>
          </h3>
          <p className="text-muted-foreground">
            Beyond technical skills, I bring strategic thinking and cross-functional capabilities.
          </p>
        </motion.div>

        {/* Role Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-2 mb-8"
        >
          {roleBasedSkills.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRoleTab(role.id)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeRoleTab === role.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card border border-border hover:bg-muted"
              }`}
            >
              <role.icon size={20} />
            </button>
          ))}
        </motion.div>

        {/* Active Role Card */}
        <motion.div
          key={activeRoleTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <activeRole.icon className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-display font-semibold text-primary">
                  {activeRole.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {activeRole.subtitle}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {activeRole.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <skill.icon size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
