import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Layout>
      <Layout.Header>
        <Link to="/" className="text-lg font-semibold text-on-surface">
          🤖 ChatBotPro
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          <Link to="/about" className="text-sm text-on-surface transition-colors">About</Link>
          <Link to="/pricing" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Pricing</Link>
          <Link to="/contact" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Contact</Link>
        </nav>
        <Button size="sm">Get Started</Button>
      </Layout.Header>

      <Layout.Main>
        <Layout.Section className="pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">About Us</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
              Building the Future of Business Communication
            </h1>
            <p className="mt-4 text-lg text-on-surface/70">
              We started ChatBotPro with a simple belief: every business deserves access to world-class customer communication tools, regardless of size or budget.
            </p>
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="mb-4 text-2xl">🎯</div>
              <Card.Title>Our Mission</Card.Title>
              <Card.Body>
                To democratize AI-powered customer service by making intelligent chatbots accessible, affordable, and effortless for businesses of all sizes. We believe great support shouldn't be a luxury.
              </Card.Body>
            </Card>
            <Card>
              <div className="mb-4 text-2xl">💡</div>
              <Card.Title>Our Vision</Card.Title>
              <Card.Body>
                A world where every customer interaction is instant, helpful, and personalized — where AI handles the routine so human agents can focus on what matters most: building relationships.
              </Card.Body>
            </Card>
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">By the Numbers</p>
            <h2 className="mt-2 text-3xl font-semibold text-on-surface">Trusted by Teams Everywhere</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <p className="text-3xl font-semibold text-primary">2,000+</p>
              <Card.Body>Active Businesses</Card.Body>
            </Card>
            <Card className="text-center">
              <p className="text-3xl font-semibold text-primary">10M+</p>
              <Card.Body>Conversations Handled</Card.Body>
            </Card>
            <Card className="text-center">
              <p className="text-3xl font-semibold text-primary">98.5%</p>
              <Card.Body>Customer Satisfaction</Card.Body>
            </Card>
            <Card className="text-center">
              <p className="text-3xl font-semibold text-primary">40+</p>
              <Card.Body>Languages Supported</Card.Body>
            </Card>
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Our Story</p>
            <h2 className="mt-2 text-3xl font-semibold text-on-surface">From Frustration to Innovation</h2>
          </div>
          <div className="mx-auto max-w-2xl space-y-6 text-on-surface/70">
            <p>
              In 2022, our founders were running an e-commerce business and spending hours each day answering repetitive customer questions. They knew there had to be a better way.
            </p>
            <p>
              After testing every chatbot platform on the market, they found the same problems everywhere: rigid scripts, poor understanding, and interfaces that required a engineering degree to configure.
            </p>
            <p>
              So they built ChatBotPro — a platform that combines cutting-edge language models with an intuitive design that anyone on your team can use. No code required.
            </p>
            <p>
              Today, we serve over 2,000 businesses across 30 countries, handling millions of conversations every month. And we're just getting started.
            </p>
          </div>
        </Layout.Section>

        <Layout.Section className="py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-on-surface">Want to Join the Team?</h2>
            <p className="mt-4 text-on-surface/70">
              We're always looking for talented people who share our passion for great customer experiences.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
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

export { AboutPage };
