import { useState } from 'react';
import * as Icons from 'lucide-react';
import { navItems } from '../data/dashboard';

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  const grouped = navItems.reduce((acc, item) => {
    (acc[item.section] ??= []).push(item);
    return acc;
  }, {});

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 3 C14 3 8 8 8 14 C8 18.5 10.5 22 14 25 C17.5 22 20 18.5 20 14 C20 8 14 3 14 3Z"
            fill="#166534"
            stroke="#22c55e"
            strokeWidth="1.5"
          />
          <path
            d="M14 8 C14 8 11 11 11 14 C11 16.5 12.3 18.5 14 20 C15.7 18.5 17 16.5 17 14 C17 11 14 8 14 8Z"
            fill="#22c55e"
            opacity="0.4"
          />
          <circle cx="14" cy="14" r="2" fill="#22c55e" />
        </svg>
        <h2>Forest</h2>
      </div>

      <nav className="sidebar-nav">
        {Object.entries(grouped).map(([section, items]) => (
          <div key={section}>
            <div className="nav-section-label">{section}</div>
            {items.map((item) => {
              const Icon = Icons[item.icon];
              return (
                <a
                  key={item.label}
                  className={`nav-item ${active === item.label ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.label);
                  }}
                >
                  {Icon && <Icon size={18} />}
                  {item.label}
                </a>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="avatar">AW</div>
        <div className="user-info">
          <div className="user-name">Autumn</div>
          <div className="user-plan">Pro Plan</div>
        </div>
      </div>
    </aside>
  );
}
