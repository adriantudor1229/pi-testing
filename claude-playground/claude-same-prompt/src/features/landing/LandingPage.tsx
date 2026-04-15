import { Link } from 'react-router-dom';
import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

function LandingPage() {
  return (
    <Layout>
      <Layout.Header>
        <div className="flex items-center gap-2">
          <span className="text-xl text-primary font-semibold">ChatBot</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-on-surface transition-colors hover:text-primary">Home</Link>
          <Link to="/about" className="text-on-surface-muted transition-colors hover:text-on-surface">About</Link>
          <Link to="/pricing" className="text-on-surface-muted transition-colors hover:text-on-surface">Pricing</Link>
          <Link to="/contact" className="text-on-surface-muted transition-colors hover:text-on-surface">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact">
            <Button variant="secondary" size="sm">Sign In</Button>
          </Link>
          <Link to="/pricing">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </Layout.Header>

      <Layout.Main>
        {/* Hero */}
        <Layout.Section className="py-24">
          <div className="flex flex-col items-center text-center">
            <Badge>AI-Powered Customer Support</Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight">
              The Intelligent Chatbot for{' '}
              <span className="text-primary">Modern Business</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-on-surface-muted leading-relaxed">
              Automate customer conversations, resolve issues instantly, and scale your support
              without scaling your team. Built for businesses that demand efficiency.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/pricing">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg">Learn More</Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-on-surface-muted">
              <span>No credit card required</span>
              <span>14-day free trial</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </Layout.Section>

        {/* Features */}
        <div className="border-t border-border">
          <Layout.Section>
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Features</p>
              <h2 className="mt-3 text-3xl font-semibold">Everything You Need</h2>
              <p className="mt-3 text-on-surface-muted">Powerful tools to transform your customer interactions</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '⚡', title: 'Instant Responses', desc: 'Respond to customers in milliseconds, 24/7. Never leave a query unanswered again.' },
                { icon: '🧠', title: 'Smart Learning', desc: 'Our AI continuously learns from interactions to provide increasingly accurate responses.' },
                { icon: '📊', title: 'Analytics Dashboard', desc: 'Track performance metrics, customer satisfaction, and conversation quality in real time.' },
                { icon: '🔗', title: 'Easy Integration', desc: 'Connect with Slack, Teams, WhatsApp, and your existing tools in minutes.' },
                { icon: '🛡', title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption. Your data stays yours.' },
                { icon: '🌐', title: 'Multi-Language', desc: 'Support customers in 50+ languages with real-time translation capabilities.' },
              ].map((f) => (
                <Card key={f.title}>
                  <span className="text-2xl">{f.icon}</span>
                  <Card.Title className="mt-3">{f.title}</Card.Title>
                  <Card.Body>{f.desc}</Card.Body>
                </Card>
              ))}
            </div>
          </Layout.Section>
        </div>

        {/* CTA */}
        <div className="border-t border-border">
          <Layout.Section>
            <div className="rounded-md border border-border bg-surface-light p-12 text-center">
              <h2 className="text-3xl font-semibold">Ready to Transform Your Business?</h2>
              <p className="mt-4 text-lg text-on-surface-muted">
                Join thousands of companies already using ChatBot.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Link to="/pricing">
                  <Button size="lg">Get Started Free</Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="secondary" size="lg">View Pricing</Button>
                </Link>
              </div>
            </div>
          </Layout.Section>
        </div>
      </Layout.Main>

      <Layout.Footer>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Product</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-on-surface-muted">
              <a href="#" className="hover:text-on-surface transition-colors">Features</a>
              <Link to="/pricing" className="hover:text-on-surface transition-colors">Pricing</Link>
              <a href="#" className="hover:text-on-surface transition-colors">Integrations</a>
              <a href="#" className="hover:text-on-surface transition-colors">API</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Company</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-on-surface-muted">
              <Link to="/about" className="hover:text-on-surface transition-colors">About</Link>
              <a href="#" className="hover:text-on-surface transition-colors">Blog</a>
              <Link to="/contact" className="hover:text-on-surface transition-colors">Contact</Link>
              <a href="#" className="hover:text-on-surface transition-colors">Careers</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Resources</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-on-surface-muted">
              <a href="#" className="hover:text-on-surface transition-colors">Documentation</a>
              <a href="#" className="hover:text-on-surface transition-colors">Help Center</a>
              <a href="#" className="hover:text-on-surface transition-colors">Community</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Legal</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-on-surface-muted">
              <a href="#" className="hover:text-on-surface transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-on-surface transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-on-surface transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-on-surface-muted">
          2026 ChatBot. All rights reserved.
        </div>
      </Layout.Footer>
    </Layout>
  );
}

export { LandingPage };
