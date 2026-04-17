import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function PasswordResetPage() {
  const resetPassword = useAuthStore((s) => s.resetPassword);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(email);
    setSent(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm space-y-6 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <span className="text-4xl">🔐</span>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Reset Password
          </h1>
        </div>

        {sent ? (
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              If an account exists for {email}, a reset link has been sent.
            </p>
            <Link
              to="/login"
              className="mt-4 inline-block text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@tarot.club"
              required
            />
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-400">
                Back to sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
