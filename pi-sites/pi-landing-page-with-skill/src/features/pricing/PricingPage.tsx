import { Layout } from '../../components/layout/Layout';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI chat.',
    features: [
      '1,000 conversations/month',
      '1 chatbot',
      'Basic analytics',
      'Email support',
      'Web widget',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'For growing businesses that need advanced capabilities.',
    features: [
      '10,000 conversations/month',
      '5 chatbots',
      'Advanced analytics & reports',
      'Priority support',
      'All integrations',
      'Custom branding',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with custom requirements and scale.',
    features: [
      'Unlimited conversations',
      'Unlimited chatbots',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment',
      'SSO & advanced security',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

function PricingPage() {
  return (
    <Layout>
      <Header>
        <Header.Logo>
          <span className="text-primary text-2xl">●</span>
          ChatBotAI
        </Header.Logo>
        <Header.Nav>
          <Link to="/" className="text-text-muted hover:text-text transition-colors">Home</Link>
          <Link to="/about" className="text-text-muted hover:text-text transition-colors">About</Link>
          <Link to="/pricing" className="text-text hover:text-text transition-colors">Pricing</Link>
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
            <div className="text-center">
              <Badge variant="primary">Pricing</Badge>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-text-muted text-lg">
                Choose the plan that fits your business. All plans include a 14-day free trial
                with no credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={cn(
                    'flex flex-col p-8',
                    plan.highlighted && 'border-primary ring-1 ring-primary/50'
                  )}
                >
                  <div>
                    {plan.highlighted && (
                      <Badge variant="primary" className="mb-4">Most Popular</Badge>
                    )}
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-semibold">{plan.price}</span>
                      <span className="text-text-muted">{plan.period}</span>
                    </div>
                    <p className="mt-4 text-text-muted">{plan.description}</p>
                  </div>

                  <ul className="mt-8 flex flex-col gap-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <span className="text-success">✓</span>
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link to="/contact">
                      <Button
                        variant={plan.highlighted ? 'primary' : 'secondary'}
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="secondary">FAQ</Badge>
              <h2 className="mt-4 text-3xl font-semibold">Common Questions</h2>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: 'Can I switch plans anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
                },
                {
                  q: 'What happens if I exceed my conversation limit?',
                  a: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional conversations as needed.",
                },
                {
                  q: 'Do you offer discounts for annual billing?',
                  a: 'Yes! Annual plans come with a 20% discount compared to monthly billing.',
                },
                {
                  q: 'Is there a setup fee?',
                  a: 'No setup fees. You can get started immediately after signing up and have your chatbot running within minutes.',
                },
              ].map((faq) => (
                <Card key={faq.q}>
                  <Card.Title>{faq.q}</Card.Title>
                  <Card.Body className="mt-2">{faq.a}</Card.Body>
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

export { PricingPage };
