import { useEffect, useRef } from 'react';
import { Search, Bell, HelpCircle, ChevronDown } from 'lucide-react';

export default function TopBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h3>Workspace</h3>
        <span className="breadcrumb">/ Dashboard</span>
      </div>

      <div className="search-box">
        <Search size={16} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search prompts, models, logs..."
        />
        <span className="kbd">/</span>
      </div>

      <div className="topbar-right">
        <button className="topbar-btn" title="Notifications">
          <Bell size={18} />
          <span className="badge" />
        </button>

        <button className="topbar-btn" title="Help">
          <HelpCircle size={18} />
        </button>

        <button className="profile-btn">
          <div className="avatar">A</div>
          <span>Autumn</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </header>
  );
}
