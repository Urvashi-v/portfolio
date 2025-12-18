import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, FileCode } from "lucide-react";

const projects = [
  {
    title: "Project Coming Soon",
    description: "An exciting machine learning project leveraging deep learning for real-world applications. Stay tuned for updates!",
    tech: ["Python", "TensorFlow", "NumPy"],
    image: null,
    github: "#",
    live: "#",
    comingSoon: true,
  },
  {
    title: "Web Application",
    description: "A full-stack web application showcasing modern development practices and responsive design principles.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    image: null,
    github: "#",
    live: "#",
    comingSoon: true,
  },
  {
    title: "Data Engineering Pipeline",
    description: "An end-to-end data pipeline for processing and analyzing large-scale datasets efficiently.",
    tech: ["Python", "SQL", "Apache Spark"],
    image: null,
    github: "#",
    live: "#",
    comingSoon: true,
  },
  {
    title: "AI-Powered Tool",
    description: "An intelligent tool utilizing natural language processing for automated insights and recommendations.",
    tech: ["Python", "NLP", "FastAPI"],
    image: null,
    github: "#",
    live: "#",
    comingSoon: true,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning{" "}
            <span className="text-primary">web development</span>,{" "}
            <span className="text-purple-500">machine learning</span>, and{" "}
            <span className="text-emerald-500">data engineering</span>. More projects coming soon!
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="project-card group"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-3">
                      <FileCode className="text-muted-foreground" size={24} />
                    </div>
                  </div>
                </div>
                
                {/* Coming Soon badge */}
                {project.comingSoon && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
