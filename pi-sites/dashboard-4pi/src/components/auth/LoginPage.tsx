import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const demoCredentials = [
  { label: '🃏 The Fool (Admin)', email: 'fool@tarot.club', password: 'admin123' },
  { label: '⚖️ The Justice (Manager)', email: 'justice@tarot.club', password: 'manager123' },
  { label: '☀️ The Sun (Developer)', email: 'sun@tarot.club', password: 'dev123' },
  { label: '🔵 The Hanged Man (Developer)', email: 'hangedman@tarot.club', password: 'dev123' },
];

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect to the page the user was trying to visit before being redirected to login
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 500);
  };

  const fillDemo = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    setError('');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-sm space-y-6 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <span className="text-4xl">🃏</span>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Tarot Club
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sign in to your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="fool@tarot.club"
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          {error && (
            <p className="text-sm text-red-500 dark:text-red-400" role="alert">{error}</p>
          )}
          <Button type="submit" loading={loading} className="w-full">
            Sign In
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <Link to="/signup" className="text-blue-600 hover:underline dark:text-blue-400">
            Create an account
          </Link>
          {' · '}
          <Link to="/reset-password" className="text-blue-600 hover:underline dark:text-blue-400">
            Forgot password?
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
          <p className="mb-2 text-xs font-medium text-gray-400 dark:text-gray-500">
            Quick login — click to fill:
          </p>
          <div className="space-y-1">
            {demoCredentials.map((demo) => (
              <button
                key={demo.email}
                type="button"
                onClick={() => fillDemo(demo.email, demo.password)}
                className="w-full rounded-lg px-3 py-1.5 text-left text-xs text-gray-500
                  hover:bg-gray-100 hover:text-gray-700
                  dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-300
                  transition-colors"
              >
                {demo.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
