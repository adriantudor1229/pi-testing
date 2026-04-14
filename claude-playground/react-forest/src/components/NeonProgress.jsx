import { motion } from 'framer-motion';

export default function NeonProgress({ target, delay = 0 }) {
  return (
    <div className="progress-track">
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(target, 100)}%` }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 + delay }}
      />
    </div>
  );
}
