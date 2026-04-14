import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MetricCard from './components/MetricCard';
import ActivityTable from './components/ActivityTable';
import QuickPanel from './components/QuickPanel';
import { metrics } from './data/dashboard';

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <TopBar />

      <main className="main">
        <div className="main-header">
          <h1>Usage Overview</h1>
          <p>Monitor your workspace activity and resource consumption</p>
        </div>

        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <MetricCard key={m.id} metric={m} index={i} />
          ))}
        </div>

        <ActivityTable />
      </main>

      <QuickPanel />
    </div>
  );
}
