import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Urvashi Verma. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-muted-foreground text-sm"
          >
            Made with <Heart size={14} className="text-primary fill-primary" /> in India
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
