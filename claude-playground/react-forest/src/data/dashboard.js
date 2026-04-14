export const metrics = [
  {
    id: 'tokens',
    label: 'Total Tokens Used',
    value: '12.4K',
    sub: 'of 62K capacity',
    progress: 200,
    change: '+18% this week',
    trend: 'up',
    sparkline: [28, 24, 26, 20, 22, 16, 18, 12, 14, 8, 10, 4, 6],
    icon: 'Layers',
  },
  {
    id: 'quality',
    label: 'Avg Response Quality',
    value: '92',
    valueSuffix: '/100',
    sub: 'across 148 evaluations',
    progress: 60,
    change: '+5pts from last month',
    trend: 'up',
    sparkline: [20, 18, 22, 16, 14, 12, 10, 12, 8, 6, 4, 6, 4],
    icon: 'CheckCircle',
  },
  {
    id: 'spend',
    label: 'Monthly Spend',
    value: '$47',
    valueSuffix: '.20',
    sub: 'of $156 budget',
    progress: 30,
    change: '-12% vs last month',
    trend: 'down',
    sparkline: [24, 22, 20, 24, 18, 20, 14, 16, 10, 12, 8, 10, 8],
    icon: 'DollarSign',
  },
  {
    id: 'models',
    label: 'Active Models',
    value: '3',
    sub: 'Opus, Sonnet, Haiku',
    progress: 75,
    change: 'All healthy',
    trend: 'up',
    sparkline: [16, 14, 16, 12, 14, 10, 12, 8, 10, 8, 6, 8, 4],
    icon: 'Monitor',
  },
];

export const activities = [
  { name: 'Summarize quarterly report',  latency: 342,  tokens: 1847, time: '2 min ago',   status: 'success' },
  { name: 'Code review: auth module',    latency: 1205, tokens: 3421, time: '8 min ago',   status: 'success' },
  { name: 'Generate test fixtures',      latency: 892,  tokens: 2103, time: '14 min ago',  status: 'success' },
  { name: 'Debug memory leak analysis',  latency: 2341, tokens: 4502, time: '22 min ago',  status: 'warning' },
  { name: 'API docs generation',         latency: 567,  tokens: 1290, time: '35 min ago',  status: 'success' },
  { name: 'Translate UI strings (ja)',    latency: 1890, tokens: 3100, time: '1 hr ago',    status: 'success' },
  { name: 'Schema migration plan',       latency: 445,  tokens: 980,  time: '1.5 hr ago',  status: 'success' },
  { name: 'Refactor payment service',    latency: 3200, tokens: 5600, time: '2 hr ago',    status: 'error' },
  { name: 'Sprint retrospective draft',  latency: 678,  tokens: 1540, time: '3 hr ago',    status: 'success' },
  { name: 'Onboarding flow copy',        latency: 920,  tokens: 2200, time: '4 hr ago',    status: 'pending' },
];

export const statusLabels = {
  success: 'Done',
  warning: 'Slow',
  error: 'Failed',
  pending: 'Queue',
};

export const navItems = [
  { label: 'Dashboard', icon: 'LayoutDashboard', active: true, section: 'Main' },
  { label: 'Library',   icon: 'BookOpen',        active: false, section: 'Main' },
  { label: 'Analytics', icon: 'BarChart3',       active: false, section: 'Main' },
  { label: 'Settings',  icon: 'Settings',        active: false, section: 'System' },
];

export const quickActions = [
  { label: 'New Canopy',      desc: 'Create a new prompt workspace',  icon: 'TreePine' },
  { label: 'Seed Library',    desc: 'Browse and import prompt seeds', icon: 'Package' },
  { label: 'Growth Log',      desc: 'Review iteration history',       icon: 'FileText' },
  { label: 'Deploy Grove',    desc: 'Push to production endpoints',   icon: 'Globe' },
  { label: 'Invite Forester', desc: 'Add a team collaborator',        icon: 'Users' },
];

export const envRows = [
  { label: 'Runtime',     value: 'Opus 4.6',   online: false },
  { label: 'Region',      value: 'us-east-1',  online: false },
  { label: 'Status',      value: 'Online',      online: true },
  { label: 'Uptime',      value: '99.97%',      online: false },
  { label: 'Last Deploy', value: '12 min ago',  online: false },
];
