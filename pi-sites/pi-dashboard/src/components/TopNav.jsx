import { useState, useRef, useEffect } from 'react'
import {
  Search,
  Bell,
  ChevronDown,
  User,
  Moon,
  LogOut,
  Settings,
} from 'lucide-react'

export default function TopNav({ searchQuery, onSearchChange }) {
  const [profileOpen, setProfileOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-[rgba(34,197,94,0.1)] bg-[rgba(10,26,10,0.8)] px-6 backdrop-blur-md">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search prompts, agents, settings…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-[rgba(34,197,94,0.12)] bg-[rgba(34,197,94,0.04)] py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-600 outline-none transition-all focus:border-green-500/40 focus:bg-[rgba(34,197,94,0.08)] focus:shadow-[0_0_15px_rgba(34,197,94,0.1)]"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-gray-400 transition-colors hover:bg-[rgba(34,197,94,0.08)] hover:text-green-400">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileOpen((o) => !o)}
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-300 transition-colors hover:bg-[rgba(34,197,94,0.08)]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-xs font-bold text-[#0a1a0a]">
              AU
            </div>
            <span className="hidden sm:inline">Autumn</span>
            <ChevronDown size={14} className={`transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {profileOpen && (
            <div className="card-glass absolute right-0 top-full mt-2 w-52 rounded-xl p-2 shadow-xl shadow-black/40 z-50">
              <div className="border-b border-[rgba(34,197,94,0.1)] px-3 py-2 mb-1">
                <p className="text-sm font-medium text-white">Autumn</p>
                <p className="text-xs text-gray-500">autumn@forest.local</p>
              </div>
              {[
                { icon: User, label: 'Profile' },
                { icon: Settings, label: 'Settings' },
                { icon: Moon, label: 'Appearance' },
                { icon: LogOut, label: 'Sign out' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-[rgba(34,197,94,0.08)] hover:text-green-400"
                >
                  <Icon size={15} />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
