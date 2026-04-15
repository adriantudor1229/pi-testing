import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Layout>
      <Layout.Header>
        <Link to="/" className="text-lg font-semibold text-on-surface">
          🤖 ChatBotPro
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          <Link to="/about" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">About</Link>
          <Link to="/pricing" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Pricing</Link>
          <Link to="/contact" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden text-sm text-on-surface/70 hover:text-on-surface transition-colors sm:block">Sign In</Link>
          <Button size="sm">Get Started</Button>
        </div>
      </Layout.Header>

      <Layout.Main>
        {/* Hero */}
        <Layout.Section className="pt-24 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="primary" className="mb-4">Now with GPT-4 Integration</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
              Automate Customer Conversations with AI
            </h1>
            <p className="mt-4 text-lg text-on-surface/70">
              ChatBotPro helps businesses deploy intelligent chatbots that handle support, sales, and onboarding — 24/7. Reduce response times by 80% and delight your customers.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="secondary" size="lg">Watch Demo</Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-on-surface/50">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </Layout.Section>

        {/* Features */}
        <Layout.Section>
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Features</p>
            <h2 className="mt-2 text-3xl font-semibold text-on-surface">Everything You Need to Scale Support</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="mb-4 text-2xl">💬</div>
              <Card.Title>Natural Conversations</Card.Title>
              <Card.Body>
                Our AI understands context, intent, and sentiment — delivering human-like responses that keep customers engaged and satisfied.
              </Card.Body>
            </Card>
            <Card>
              <div className="mb-4 text-2xl">⚡</div>
              <Card.Title>Instant Responses</Card.Title>
              <Card.Body>
                Resolve customer queries in under 2 seconds. No queues, no wait times — just immediate, accurate answers around the clock.
              </Card.Body>
            </Card>
            <Card>
              <div className="mb-4 text-2xl">📊</div>
              <Card.Title>Analytics Dashboard</Card.Title>
              <Card.Body>
                Track conversation volume, satisfaction scores, resolution rates, and trending topics with real-time analytics built for teams.
              </Card.Body>
            </Card>
            <Card>
              <div className="mb-4 text-2xl">🔗</div>
              <Card.Title>Seamless Integrations</Card.Title>
              <Card.Body>
                Connect with Slack, Zendesk, Shopify, HubSpot, and 50+ other tools your team already uses. Set up in minutes.
              </Card.Body>
            </Card>
            <Card>
              <div className="mb-4 text-2xl">🛡️</div>
              <Card.Title>Enterprise Security</Card.Title>
              <Card.Body>
                SOC 2 Type II certified with end-to-end encryption, role-based access, and full audit logs. Your data stays yours.
              </Card.Body>
            </Card>
            <Card>
              <div className="mb-4 text-2xl">🌍</div>
              <Card.Title>Multilingual Support</Card.Title>
              <Card.Body>
                Serve customers in 40+ languages with automatic detection and translation. Go global without hiring local support teams.
              </Card.Body>
            </Card>
          </div>
        </Layout.Section>

        {/* CTA */}
        <Layout.Section className="py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-on-surface">Ready to Transform Your Customer Support?</h2>
            <p className="mt-4 text-on-surface/70">
              Join 2,000+ businesses already using ChatBotPro to deliver faster, smarter customer experiences.
            </p>
            <div className="mt-8">
              <Button size="lg">Start Your Free Trial</Button>
            </div>
          </div>
        </Layout.Section>
      </Layout.Main>

      <Layout.Footer>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-on-surface">🤖 ChatBotPro</p>
            <p className="mt-2 text-sm text-on-surface/50">AI-powered chatbots for modern businesses.</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-on-surface/50">Product</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/pricing" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Pricing</Link>
              <Link to="/about" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">About</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-on-surface/50">Company</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/contact" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Contact</Link>
              <span className="text-sm text-on-surface/70">Privacy Policy</span>
              <span className="text-sm text-on-surface/70">Terms of Service</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-on-surface/40">
          © 2026 ChatBotPro. All rights reserved.
        </div>
      </Layout.Footer>
    </Layout>
  );
}

export { LandingPage };
