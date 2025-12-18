import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Lightbulb, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Multi-disciplinary Approach",
    description: "Combining Chemical Engineering fundamentals with cutting-edge software development and AI/ML expertise.",
    color: "text-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about tackling real-world challenges using data-driven solutions and innovative software.",
    color: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Always exploring new technologies and methodologies to stay at the forefront of tech innovation.",
    color: "text-emerald-500",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm mb-2">Get to Know Me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-semibold">3rd year Chemical Engineering student</span> at{" "}
                <span className="text-primary font-semibold">IIT Kharagpur</span>, with a deep passion for technology and
                interdisciplinary problem-solving.
              </p>
              <p>
                My journey bridges the gap between traditional engineering and modern tech – from understanding
                chemical processes to building scalable web applications, training machine learning models, and
                architecting data pipelines.
              </p>
              <p>
                I believe in leveraging technology to create{" "}
                <span className="text-primary font-medium">real-world impact</span>. Whether it's developing intelligent
                systems or crafting elegant user experiences, I approach every project with curiosity, creativity,
                and a commitment to excellence.
              </p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border card-hover"
              >
                <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
