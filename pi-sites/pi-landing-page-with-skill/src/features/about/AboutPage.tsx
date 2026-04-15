import { Layout } from '../../components/layout/Layout';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Layout>
      <Header>
        <Header.Logo>
          <span className="text-primary text-2xl">●</span>
          ChatBotAI
        </Header.Logo>
        <Header.Nav>
          <Link to="/" className="text-text-muted hover:text-text transition-colors">Home</Link>
          <Link to="/about" className="text-text hover:text-text transition-colors">About</Link>
          <Link to="/pricing" className="text-text-muted hover:text-text transition-colors">Pricing</Link>
          <Link to="/contact" className="text-text-muted hover:text-text transition-colors">Contact</Link>
        </Header.Nav>
        <Header.Actions>
          <Link to="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </Header.Actions>
      </Header>

      <Layout.Main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="primary">About Us</Badge>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Building the Future of
                <br />
                <span className="text-primary">Business Communication</span>
              </h1>
              <p className="mt-6 text-text-muted text-lg leading-relaxed">
                We started ChatBotAI with a simple belief: every business deserves access to intelligent,
                reliable customer communication tools. Our AI-powered platform handles millions of
                conversations daily, helping companies focus on what they do best.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { value: '10M+', label: 'Conversations Handled' },
                { value: '5,000+', label: 'Business Customers' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '50+', label: 'Languages Supported' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-semibold text-primary">{stat.value}</div>
                  <div className="mt-2 text-text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="secondary">Our Values</Badge>
              <h2 className="mt-4 text-3xl font-semibold">What Drives Us</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <Card.Title>Customer Obsession</Card.Title>
                <Card.Body>
                  Every decision we make starts with the customer. We build tools that solve real problems
                  for real businesses.
                </Card.Body>
              </Card>
              <Card>
                <Card.Title>Transparency</Card.Title>
                <Card.Body>
                  No hidden fees, no data selling. We believe trust is earned through openness and honesty.
                </Card.Body>
              </Card>
              <Card>
                <Card.Title>Continuous Innovation</Card.Title>
                <Card.Body>
                  We invest heavily in R&D, pushing the boundaries of what conversational AI can achieve.
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="secondary">Team</Badge>
              <h2 className="mt-4 text-3xl font-semibold">Led by Industry Experts</h2>
              <p className="mt-4 text-text-muted">
                Our team combines decades of experience in AI, enterprise software, and customer success.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Sarah Chen', role: 'CEO & Co-Founder' },
                { name: 'Marcus Rivera', role: 'CTO & Co-Founder' },
                { name: 'Elena Kowalski', role: 'VP of AI Research' },
                { name: 'David Okafor', role: 'VP of Engineering' },
              ].map((member) => (
                <Card key={member.name} className="text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-surface-lighter flex items-center justify-center text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Body>{member.role}</Card.Body>
                </Card>
              ))}
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
          </Footer.Section>
          <Footer.Section title="Company">
            <Link to="/about" className="hover:text-text transition-colors">About</Link>
            <Link to="/contact" className="hover:text-text transition-colors">Contact</Link>
          </Footer.Section>
          <Footer.Section title="Resources">
            <a href="#" className="hover:text-text transition-colors">Documentation</a>
            <a href="#" className="hover:text-text transition-colors">Help Center</a>
          </Footer.Section>
          <Footer.Section title="Legal">
            <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text transition-colors">Terms of Service</a>
          </Footer.Section>
        </Footer.Grid>
        <Footer.Bottom>© 2026 ChatBotAI. All rights reserved.</Footer.Bottom>
      </Footer>
    </Layout>
  );
}

export { AboutPage };
