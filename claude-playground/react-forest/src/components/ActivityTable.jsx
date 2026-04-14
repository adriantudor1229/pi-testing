import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { activities, statusLabels } from '../data/dashboard';

function Row({ item, index }) {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.4 + index * 0.04 }}
    >
      <td className="prompt-name">{item.name}</td>
      <td className="latency">{item.latency.toLocaleString()} ms</td>
      <td className="token-cost">{item.tokens.toLocaleString()}</td>
      <td className="timestamp">{item.time}</td>
      <td>
        <span className={`status-badge ${item.status}`}>
          {statusLabels[item.status]}
        </span>
      </td>
    </motion.tr>
  );
}

export default function ActivityTable() {
  return (
    <>
      <div className="section-header">
        <h2>Recent Activity</h2>
        <button className="filter-btn">
          <Filter size={12} />
          Filter
        </button>
      </div>

      <motion.div
        className="activity-card"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
      >
        <div className="activity-scroll">
          <table className="activity-table">
            <thead>
              <tr>
                <th>Prompt Name</th>
                <th>Latency</th>
                <th>Token Cost</th>
                <th>Timestamp</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <Row key={a.name} item={a} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
}
