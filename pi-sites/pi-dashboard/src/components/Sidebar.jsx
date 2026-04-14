import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  TreePine,
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'library',   label: 'Library',   icon: BookOpen },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings',  label: 'Settings',  icon: Settings },
]

export default function Sidebar({ activeNav, onNavChange }) {
  return (
    <aside className="flex w-60 flex-shrink-0 flex-col border-r border-[rgba(34,197,94,0.1)] bg-[rgba(10,26,10,0.95)]">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[rgba(34,197,94,0.1)]">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-700 shadow-[0_0_18px_rgba(34,197,94,0.35)]">
          <TreePine size={20} className="text-[#0a1a0a]" />
        </div>
        <div>
          <h2
            className="text-lg font-bold leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Forest
          </h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-green-500/60">
            Workspace
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex flex-col gap-1 px-3">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeNav === id
          return (
            <button
              key={id}
              onClick={() => onNavChange(id)}
              className={`nav-item flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                isActive ? 'active' : 'text-gray-400'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto px-5 py-5 border-t border-[rgba(34,197,94,0.1)]">
        <div className="card-glass rounded-xl p-3">
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="text-green-400 font-semibold">Forest v2.4</span> — Workspace running smoothly.
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] text-green-400/70 uppercase tracking-wider">All systems operational</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
