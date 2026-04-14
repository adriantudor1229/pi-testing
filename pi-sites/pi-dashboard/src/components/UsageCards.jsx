import {
  Zap,
  Award,
  DollarSign,
  TrendingUp,
} from 'lucide-react'

const metrics = [
  {
    label: 'Total Tokens Used',
    value: '200',
    sub: 'of 1,000 quota',
    percent: 20,
    icon: Zap,
    color: '#22c55e',
    sparkData: [12, 18, 15, 25, 22, 30, 20],
  },
  {
    label: 'Avg Response Quality',
    value: '60',
    sub: 'out of 100 score',
    percent: 60,
    icon: Award,
    color: '#22c55e',
    sparkData: [45, 52, 48, 60, 55, 62, 60],
  },
  {
    label: 'Monthly Spend',
    value: '$30',
    sub: 'of $100 budget',
    percent: 30,
    icon: DollarSign,
    color: '#22c55e',
    sparkData: [5, 12, 18, 15, 22, 26, 30],
  },
  {
    label: 'Active Agents',
    value: '7',
    sub: 'running right now',
    percent: 70,
    icon: TrendingUp,
    color: '#22c55e',
    sparkData: [3, 4, 5, 4, 6, 5, 7],
  },
]

/* Mini sparkline rendered as an SVG polyline */
function Sparkline({ data, color, width = 100, height = 28 }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const step = width / (data.length - 1)

  const points = data
    .map((v, i) => `${i * step},${height - ((v - min) / range) * (height - 4) - 2}`)
    .join(' ')

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height }}
      preserveAspectRatio="none"
    >
      {/* Glow line behind */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.25"
        filter="url(#sparkGlow)"
      />
      {/* Main line */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter id="sparkGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

function NeonProgressBar({ percent, color }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[rgba(34,197,94,0.08)]">
      <div
        className="neon-progress-bar neon-shimmer h-full rounded-full"
        style={{
          width: `${percent}%`,
          background: `linear-gradient(90deg, ${color}cc, ${color}, ${color}cc)`,
          boxShadow: `0 0 10px ${color}66, 0 0 20px ${color}33`,
        }}
      />
    </div>
  )
}

export default function UsageCards() {
  return (
    <section>
      <h2
        className="mb-4 text-lg font-semibold text-white/80"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Usage Overview
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <div key={m.label} className="card-glass rounded-2xl p-5">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {m.label}
                  </p>
                  <p
                    className="mt-1 text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-600">{m.sub}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.1)]">
                  <Icon size={18} className="text-green-400" />
                </div>
              </div>

              {/* Sparkline */}
              <div className="mt-4">
                <Sparkline data={m.sparkData} color={m.color} />
              </div>

              {/* Neon Progress Bar */}
              <div className="mt-3">
                <NeonProgressBar percent={m.percent} color={m.color} />
              </div>
              <p className="mt-1.5 text-right text-[11px] text-gray-600">
                {m.percent}%
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
