const activities = [
  {
    name: 'Summarize Research Paper',
    latency: 342,
    tokens: 18,
    time: '2 min ago',
    status: 'success',
  },
  {
    name: 'Generate SQL Migration',
    latency: 587,
    tokens: 24,
    time: '5 min ago',
    status: 'success',
  },
  {
    name: 'Debug React Hook',
    latency: 1203,
    tokens: 31,
    time: '12 min ago',
    status: 'warning',
  },
  {
    name: 'Write API Endpoint Docs',
    latency: 278,
    tokens: 12,
    time: '18 min ago',
    status: 'success',
  },
  {
    name: 'Refactor Auth Module',
    latency: 945,
    tokens: 42,
    time: '25 min ago',
    status: 'success',
  },
  {
    name: 'Optimize DB Query Plan',
    latency: 2100,
    tokens: 38,
    time: '32 min ago',
    status: 'error',
  },
  {
    name: 'Translate i18n Strings',
    latency: 189,
    tokens: 9,
    time: '41 min ago',
    status: 'success',
  },
  {
    name: 'Create Unit Tests',
    latency: 456,
    tokens: 20,
    time: '55 min ago',
    status: 'success',
  },
  {
    name: 'Analyze Sentiment Data',
    latency: 672,
    tokens: 15,
    time: '1 hr ago',
    status: 'success',
  },
  {
    name: 'Draft Release Notes',
    latency: 390,
    tokens: 22,
    time: '1.5 hr ago',
    status: 'warning',
  },
]

function StatusBadge({ status }) {
  const map = {
    success: { label: 'Completed', cls: 'badge-success' },
    warning: { label: 'Slow', cls: 'badge-warning' },
    error: { label: 'Timeout', cls: 'badge-error' },
  }
  const { label, cls } = map[status]
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${cls}`}>
      {label}
    </span>
  )
}

export default function RecentActivity() {
  return (
    <section className="card-glass rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2
          className="text-lg font-semibold text-white/80"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Recent Activity
        </h2>
        <span className="rounded-full bg-[rgba(34,197,94,0.1)] px-3 py-1 text-xs text-green-400">
          Last 10 prompts
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(34,197,94,0.08)] text-xs uppercase tracking-wider text-gray-500">
              <th className="pb-3 pr-4 font-medium">Prompt Name</th>
              <th className="pb-3 pr-4 font-medium">Latency</th>
              <th className="pb-3 pr-4 font-medium">Tokens</th>
              <th className="pb-3 pr-4 font-medium">Timestamp</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="max-h-[340px] overflow-y-auto">
            {activities.map((a, i) => (
              <tr
                key={i}
                className="group border-b border-[rgba(34,197,94,0.05)] transition-colors hover:bg-[rgba(34,197,94,0.04)]"
              >
                <td className="py-3 pr-4 font-medium text-gray-300 group-hover:text-green-300 transition-colors">
                  {a.name}
                </td>
                <td className="py-3 pr-4 text-gray-500 tabular-nums">
                  {a.latency.toLocaleString()} ms
                </td>
                <td className="py-3 pr-4 text-gray-500 tabular-nums">
                  {a.tokens}
                </td>
                <td className="py-3 pr-4 text-gray-600 text-xs">{a.time}</td>
                <td className="py-3">
                  <StatusBadge status={a.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
