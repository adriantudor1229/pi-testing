import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For small teams getting started with AI support.',
    features: [
      '1 chatbot',
      '1,000 conversations/month',
      'Basic analytics',
      'Email support',
      '3 integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '$149',
    period: '/month',
    description: 'For growing businesses with higher volume.',
    features: [
      '5 chatbots',
      '10,000 conversations/month',
      'Advanced analytics & reporting',
      'Priority support',
      'Unlimited integrations',
      'Custom training data',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with complex requirements.',
    features: [
      'Unlimited chatbots',
      'Unlimited conversations',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom AI model training',
      'SSO & advanced security',
      'SLA guarantee',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

function PricingPage() {
  return (
    <Layout>
      <Layout.Header>
        <Link to="/" className="text-lg font-semibold text-on-surface">
          🤖 ChatBotPro
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          <Link to="/about" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">About</Link>
          <Link to="/pricing" className="text-sm text-on-surface transition-colors">Pricing</Link>
          <Link to="/contact" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Contact</Link>
        </nav>
        <Button size="sm">Get Started</Button>
      </Layout.Header>

      <Layout.Main>
        <Layout.Section className="pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Pricing</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-on-surface/70">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col ${tier.highlighted ? 'border-primary' : ''}`}
              >
                {tier.highlighted && (
                  <Badge variant="primary" className="mb-4 w-fit">Most Popular</Badge>
                )}
                <Card.Title>{tier.name}</Card.Title>
                <div className="mt-2">
                  <span className="text-3xl font-semibold text-on-surface">{tier.price}</span>
                  <span className="text-on-surface/50">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-on-surface/70">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-on-surface/70">
                      <span className="text-success mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {tier.name === 'Enterprise' ? (
                    <Link to="/contact">
                      <Button variant="secondary" className="w-full">{tier.cta}</Button>
                    </Link>
                  ) : (
                    <Button className={`w-full ${tier.highlighted ? '' : ''}`}>{tier.cta}</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Layout.Section>

        <Layout.Section className="py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-on-surface">Still Have Questions?</h2>
            <p className="mt-4 text-on-surface/70">
              Our team is happy to help you find the right plan for your business.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Talk to Sales</Button>
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

export { PricingPage };
