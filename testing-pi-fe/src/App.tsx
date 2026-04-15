import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="flex h-screen bg-surface text-on-surface font-sans">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
