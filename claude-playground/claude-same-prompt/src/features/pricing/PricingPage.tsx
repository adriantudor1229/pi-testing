import { Link } from 'react-router-dom';
import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    desc: 'Perfect for small businesses getting started with AI support.',
    features: ['1,000 conversations/month', '1 chatbot', 'Email support', 'Basic analytics', 'Web widget'],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    desc: 'For growing teams that need more power and integrations.',
    features: ['10,000 conversations/month', '5 chatbots', 'Priority support', 'Advanced analytics', 'Slack & Teams integration', 'Custom branding', 'API access'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations with advanced security and compliance needs.',
    features: ['Unlimited conversations', 'Unlimited chatbots', 'Dedicated account manager', 'Custom integrations', 'SSO & SAML', 'SLA guarantee', 'On-premise option'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

function PricingPage() {
  return (
    <Layout>
      <Layout.Header>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl text-primary font-semibold">ChatBot</Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-on-surface-muted transition-colors hover:text-on-surface">Home</Link>
          <Link to="/about" className="text-on-surface-muted transition-colors hover:text-on-surface">About</Link>
          <Link to="/pricing" className="text-on-surface transition-colors hover:text-primary">Pricing</Link>
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
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Pricing</p>
            <h1 className="mt-3 text-4xl font-semibold">Simple, Transparent Pricing</h1>
            <p className="mt-4 text-lg text-on-surface-muted">
              Start free. Upgrade when you're ready. No hidden fees.
            </p>
          </div>
        </Layout.Section>

        <Layout.Section className="pt-0">
          <div className="grid gap-4 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.highlighted ? 'border-primary ring-1 ring-primary' : ''}
              >
                <div className="flex items-center gap-2">
                  <Card.Title>{tier.name}</Card.Title>
                  {tier.highlighted && <Badge>Popular</Badge>}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-semibold">{tier.price}</span>
                  <span className="text-on-surface-muted">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-on-surface-muted">{tier.desc}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-on-surface-muted">
                      <span className="text-success">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/contact">
                    <Button
                      variant={tier.highlighted ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Layout.Section>
      </Layout.Main>

      <Layout.Footer>
        <div className="text-center text-sm text-on-surface-muted">
          2026 ChatBot. All rights reserved.
        </div>
      </Layout.Footer>
    </Layout>
  );
}

export { PricingPage };
