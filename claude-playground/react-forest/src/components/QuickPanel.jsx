import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { quickActions, envRows } from '../data/dashboard';

function QuickBtn({ action, index }) {
  const Icon = Icons[action.icon];

  return (
    <motion.button
      className="quick-btn"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
    >
      {Icon && <Icon size={18} />}
      <div className="btn-text">
        <div className="btn-label">{action.label}</div>
        <div className="btn-desc">{action.desc}</div>
      </div>
      <ChevronRight size={16} className="arrow" />
    </motion.button>
  );
}

export default function QuickPanel() {
  return (
    <aside className="quick">
      <h3>Quick Start</h3>

      <div className="quick-actions">
        {quickActions.map((a, i) => (
          <QuickBtn key={a.label} action={a} index={i} />
        ))}
      </div>

      <motion.div
        className="env-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <h4>Environment</h4>
        {envRows.map((row) => (
          <div className="env-row" key={row.label}>
            <span className="label">{row.label}</span>
            <span className={`value ${row.online ? 'online' : ''}`}>
              {row.value}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="tip-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="tip-label">Tip</div>
        <p>
          Use <strong>/canopy</strong> to quickly scaffold a new prompt tree
          from an existing template in your Seed Library.
        </p>
      </motion.div>
    </aside>
  );
}
