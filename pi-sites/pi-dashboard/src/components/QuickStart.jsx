import {
  Play,
  FilePlus2,
  Upload,
  TreePine,
  Bug,
  RefreshCcw,
  Terminal,
  Sparkles,
} from 'lucide-react'

const actions = [
  { icon: Play,       label: 'Run Prompt',        desc: 'Execute a saved prompt template' },
  { icon: FilePlus2,  label: 'New Prompt',         desc: 'Create a fresh prompt from scratch' },
  { icon: Upload,     label: 'Import Workflow',    desc: 'Load a workflow from JSON/YAML' },
  { icon: TreePine,   label: 'Grow Forest',        desc: 'Expand your agent tree' },
  { icon: Bug,        label: 'Debug Session',      desc: 'Start an interactive debug run' },
  { icon: Terminal,   label: 'Open Console',       desc: 'Launch the Forest CLI REPL' },
  { icon: Sparkles,   label: 'Auto-Optimize',      desc: 'Let Forest tune your prompts' },
  { icon: RefreshCcw, label: 'Sync Environment',   desc: 'Pull latest config changes' },
]

export default function QuickStart() {
  return (
    <aside className="flex flex-col gap-5">
      {/* Quick Start Panel */}
      <div className="card-glass rounded-2xl p-5">
        <h2
          className="mb-4 text-lg font-semibold text-white/80"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Quick Start
        </h2>

        <div className="flex flex-col gap-2">
          {actions.slice(0, 4).map((a) => {
            const Icon = a.icon
            return (
              <button
                key={a.label}
                className="btn-forest flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm"
              >
                <Icon size={16} />
                <div>
                  <span className="block leading-tight">{a.label}</span>
                  <span className="block text-[11px] text-green-900/70">{a.desc}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Forest Tools */}
      <div className="card-glass rounded-2xl p-5">
        <h3
          className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Forest Tools
        </h3>

        <div className="flex flex-col gap-2">
          {actions.slice(4).map((a) => {
            const Icon = a.icon
            return (
              <button
                key={a.label}
                className="btn-forest-outline flex items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm"
              >
                <Icon size={15} />
                <div>
                  <span className="block leading-tight">{a.label}</span>
                  <span className="block text-[10px] text-gray-500">{a.desc}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
