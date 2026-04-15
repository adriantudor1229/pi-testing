import { cn } from "../utils/cn";
import { Icon, type IconName } from "./ui/Icon";

type NavItem = {
  icon: IconName;
  label: string;
  active?: boolean;
};

const nav: NavItem[] = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "tasks", label: "Tasks" },
  { icon: "terminal", label: "Terminal" },
  { icon: "git", label: "Git" },
  { icon: "settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-14 flex-col items-center gap-2 border-r border-on-surface/10 bg-surface py-4 lg:w-48 lg:items-start lg:px-3">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded bg-primary text-sm font-bold text-white lg:mx-0">
        P
      </div>
      <nav className="flex flex-col gap-1 w-full">
        {nav.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 rounded px-2 py-2 text-sm transition-colors lg:px-3",
              item.active
                ? "bg-primary/15 text-primary"
                : "text-on-surface/50 hover:bg-on-surface/5 hover:text-on-surface/80"
            )}
          >
            <Icon name={item.icon} />
            <span className="hidden lg:inline">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
