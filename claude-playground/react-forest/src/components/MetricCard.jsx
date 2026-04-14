import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import NeonProgress from './NeonProgress';
import Sparkline from './Sparkline';

export default function MetricCard({ metric, index }) {
  const Icon = Icons[metric.icon];

  return (
    <motion.div
      className="metric-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <div className="metric-label">
        {Icon && <Icon size={14} />}
        {metric.label}
      </div>

      <div className="metric-value">
        {metric.value}
        {metric.valueSuffix && (
          <span className="metric-suffix">{metric.valueSuffix}</span>
        )}
      </div>

      <div className="metric-sub">{metric.sub}</div>

      <NeonProgress target={metric.progress} delay={index * 0.07} />

      <Sparkline data={metric.sparkline} />

      <div className={`metric-change ${metric.trend}`}>
        {metric.change}
      </div>
    </motion.div>
  );
}
