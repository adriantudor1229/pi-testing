import { Link } from 'react-router-dom';
import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

function ContactPage() {
  return (
    <Layout>
      <Layout.Header>
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl text-primary font-semibold">ChatBot</Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-on-surface-muted transition-colors hover:text-on-surface">Home</Link>
          <Link to="/about" className="text-on-surface-muted transition-colors hover:text-on-surface">About</Link>
          <Link to="/pricing" className="text-on-surface-muted transition-colors hover:text-on-surface">Pricing</Link>
          <Link to="/contact" className="text-on-surface transition-colors hover:text-primary">Contact</Link>
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
            <p className="text-xs font-medium uppercase tracking-widest text-on-surface-muted">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold">Get in Touch</h1>
            <p className="mt-4 text-lg text-on-surface-muted">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </Layout.Section>

        <Layout.Section className="pt-0">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="p-8">
              <Card.Title>Send us a message</Card.Title>
              <form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email" type="email" placeholder="john@company.com" />
                <Input label="Company" placeholder="Acme Inc." />
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-on-surface">Message</label>
                  <textarea
                    className="rounded-sm border border-border bg-surface px-3 py-2 text-on-surface outline-none transition-colors focus:border-primary"
                    rows={4}
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button className="mt-2">Send Message</Button>
              </form>
            </Card>

            <div className="flex flex-col gap-6">
              {[
                { icon: '📧', title: 'Email', detail: 'support@chatbot.com', sub: 'We respond within 24 hours' },
                { icon: '💬', title: 'Live Chat', detail: 'Available 9am - 6pm EST', sub: 'Talk to our team directly' },
                { icon: '📍', title: 'Office', detail: '123 Innovation Drive', sub: 'San Francisco, CA 94107' },
              ].map((c) => (
                <Card key={c.title}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <Card.Title>{c.title}</Card.Title>
                      <p className="mt-1 text-on-surface">{c.detail}</p>
                      <p className="mt-1 text-sm text-on-surface-muted">{c.sub}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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

export { ContactPage };
