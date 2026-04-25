import { motion } from "framer-motion";

export default function BentoCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-3xl border bg-white dark:bg-slate-900 shadow"
    >
      {children}
    </motion.div>
  );
}