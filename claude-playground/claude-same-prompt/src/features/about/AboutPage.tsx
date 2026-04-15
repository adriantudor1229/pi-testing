import { Link } from 'react-router-dom';
import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

function AboutPage() {
  return (
    <Layout>
      <Layout.Header>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl text-primary font-semibold">ChatBot</Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-on-surface-muted transition-colors hover:text-on-surface">Home</Link>
          <Link to="/about" className="text-on-surface transition-colors hover:text-primary">About</Link>
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
        <Layout.Section className="py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">About Us</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">
              Building the Future of Customer Communication
            </h1>
            <p className="mt-6 text-lg text-on-surface-muted leading-relaxed">
              We started ChatBot with a simple mission: make world-class customer support
              accessible to every business, regardless of size. Our AI-powered platform handles
              millions of conversations daily, helping businesses respond faster and smarter.
            </p>
          </div>
        </Layout.Section>

        <div className="border-t border-border">
          <Layout.Section>
            <div className="mb-12">
              <h2 className="text-3xl font-semibold">Our Values</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '🎯', title: 'Customer First', desc: 'Every decision we make starts with the question: how does this help our customers serve their customers better?' },
                { icon: '🔒', title: 'Trust & Security', desc: 'We treat your data with the highest standards of security. SOC 2 compliant, end-to-end encrypted, always.' },
                { icon: '🚀', title: 'Continuous Innovation', desc: 'Our AI models improve every day, learning from millions of interactions to deliver better results.' },
              ].map((v) => (
                <Card key={v.title}>
                  <span className="text-2xl">{v.icon}</span>
                  <Card.Title className="mt-3">{v.title}</Card.Title>
                  <Card.Body>{v.desc}</Card.Body>
                </Card>
              ))}
            </div>
          </Layout.Section>
        </div>

        <div className="border-t border-border">
          <Layout.Section>
            <div className="grid gap-12 lg:grid-cols-3">
              {[
                { number: '10M+', label: 'Conversations handled monthly' },
                { number: '5,000+', label: 'Businesses worldwide' },
                { number: '99.9%', label: 'Uptime SLA' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-semibold text-primary">{s.number}</p>
                  <p className="mt-2 text-on-surface-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Layout.Section>
        </div>
      </Layout.Main>

      <Layout.Footer>
        <div className="text-center text-sm text-on-surface-muted">
          2026 ChatBot. All rights reserved.
        </div>
      </Layout.Footer>
    </Layout>
  );
}

export { AboutPage };
