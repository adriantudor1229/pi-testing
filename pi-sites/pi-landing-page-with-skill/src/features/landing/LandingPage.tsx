import { Layout } from '../../components/layout/Layout';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ChatBotScene } from '../../components/three/ChatBotScene';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Layout>
      <Header>
        <Header.Logo>
          <span className="text-primary text-2xl">●</span>
          ChatBotAI
        </Header.Logo>
        <Header.Nav>
          <Link to="/" className="text-text hover:text-text transition-colors">Home</Link>
          <Link to="/about" className="text-text-muted hover:text-text transition-colors">About</Link>
          <Link to="/pricing" className="text-text-muted hover:text-text transition-colors">Pricing</Link>
          <Link to="/contact" className="text-text-muted hover:text-text transition-colors">Contact</Link>
        </Header.Nav>
        <Header.Actions>
          <Link to="/contact">
            <Button variant="secondary" size="sm">Sign In</Button>
          </Link>
          <Link to="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </Header.Actions>
      </Header>

      <Layout.Main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <Badge variant="primary">Now in Public Beta</Badge>
                <h1 className="text-5xl font-semibold leading-tight tracking-tight">
                  Your Intelligent
                  <br />
                  <span className="text-primary">Business Assistant</span>
                </h1>
                <p className="max-w-lg text-text-muted text-lg leading-relaxed">
                  Automate customer support, streamline workflows, and boost productivity with our AI-powered chatbot. Built for businesses that demand efficiency.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="/contact">
                    <Button size="lg">Start Free Trial</Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="secondary" size="lg">Learn More</Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 pt-4 text-text-muted text-sm">
                  <span>✓ No credit card required</span>
                  <span>✓ 14-day free trial</span>
                  <span>✓ Cancel anytime</span>
                </div>
              </div>
              <div className="h-[400px] lg:h-[500px]">
                <ChatBotScene className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="secondary">Features</Badge>
              <h2 className="mt-4 text-3xl font-semibold">Everything You Need</h2>
              <p className="mt-4 text-text-muted">Powerful tools to transform your customer interactions</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <Card.Header>
                  <span className="text-3xl">⚡</span>
                </Card.Header>
                <Card.Title>Instant Responses</Card.Title>
                <Card.Body>Respond to customers in milliseconds, 24/7. Never leave a query unanswered again.</Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <span className="text-3xl">🧠</span>
                </Card.Header>
                <Card.Title>Smart Learning</Card.Title>
                <Card.Body>Our AI continuously learns from interactions to provide increasingly accurate responses.</Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <span className="text-3xl">📊</span>
                </Card.Header>
                <Card.Title>Analytics Dashboard</Card.Title>
                <Card.Body>Track performance metrics, customer satisfaction, and conversation quality in real time.</Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <span className="text-3xl">🔗</span>
                </Card.Header>
                <Card.Title>Easy Integration</Card.Title>
                <Card.Body>Connect with Slack, Teams, WhatsApp, and your existing tools in minutes.</Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <span className="text-3xl">🛡️</span>
                </Card.Header>
                <Card.Title>Enterprise Security</Card.Title>
                <Card.Body>SOC 2 compliant with end-to-end encryption. Your data stays yours.</Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <span className="text-3xl">🌐</span>
                </Card.Header>
                <Card.Title>Multi-Language</Card.Title>
                <Card.Body>Support customers in 50+ languages with real-time translation capabilities.</Card.Body>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="rounded-md border border-border bg-surface-light p-12 text-center">
              <h2 className="text-3xl font-semibold">Ready to Transform Your Business?</h2>
              <p className="mt-4 text-text-muted text-lg">
                Join thousands of companies already using ChatBotAI.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">Get Started Free</Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="secondary" size="lg">View Pricing</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout.Main>

      <Footer>
        <Footer.Grid>
          <Footer.Section title="Product">
            <a href="#" className="hover:text-text transition-colors">Features</a>
            <Link to="/pricing" className="hover:text-text transition-colors">Pricing</Link>
            <a href="#" className="hover:text-text transition-colors">Integrations</a>
            <a href="#" className="hover:text-text transition-colors">API</a>
          </Footer.Section>
          <Footer.Section title="Company">
            <Link to="/about" className="hover:text-text transition-colors">About</Link>
            <a href="#" className="hover:text-text transition-colors">Blog</a>
            <Link to="/contact" className="hover:text-text transition-colors">Contact</Link>
            <a href="#" className="hover:text-text transition-colors">Careers</a>
          </Footer.Section>
          <Footer.Section title="Resources">
            <a href="#" className="hover:text-text transition-colors">Documentation</a>
            <a href="#" className="hover:text-text transition-colors">Help Center</a>
            <a href="#" className="hover:text-text transition-colors">Community</a>
            <a href="#" className="hover:text-text transition-colors">Status</a>
          </Footer.Section>
          <Footer.Section title="Legal">
            <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-text transition-colors">Cookie Policy</a>
          </Footer.Section>
        </Footer.Grid>
        <Footer.Bottom>
          © 2026 ChatBotAI. All rights reserved.
        </Footer.Bottom>
      </Footer>
    </Layout>
  );
}

export { LandingPage };
