import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import UsageCards from './components/UsageCards'
import RecentActivity from './components/RecentActivity'
import QuickStart from './components/QuickStart'

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0a1a0a]">
      {/* Left Sidebar */}
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Nav Bar */}
        <TopNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Workspace Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Monitor your Forest environment — tokens, spend, and prompt activity at a glance.
            </p>
          </div>

          {/* Usage Overview Cards */}
          <UsageCards />

          {/* Bottom Grid: Activity + Quick Start */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
            <RecentActivity />
            <QuickStart />
          </div>
        </main>
      </div>
    </div>
  )
}
