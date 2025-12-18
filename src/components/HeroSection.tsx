import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4"
            >
              <span className="text-gradient">Urvashi</span>{" "}
              <span className="text-foreground">Verma</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-foreground mb-2"
            >
              3rd Year Undergraduate • <span className="text-primary">Chemical Engineering</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-base text-muted-foreground mb-6"
            >
              Indian Institute of Technology (IIT) Kharagpur
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl font-medium italic mb-8 max-w-xl mx-auto lg:mx-0 text-muted-foreground"
            >
              "Engineering Intelligence at the Intersection of Software, Data, and Design"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#" className="btn-primary">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile image placeholder */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-card border-4 border-border shadow-card flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <span className="font-display text-6xl md:text-7xl text-primary font-bold">UV</span>
                </div>
              </div>
              
              {/* IIT KGP badge */}
              <motion.div
                className="absolute -bottom-2 right-0 px-4 py-2 rounded-lg bg-card border border-border shadow-soft text-sm font-medium text-muted-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                IIT KGP
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
