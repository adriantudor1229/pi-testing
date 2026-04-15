import { useState } from 'react';
import { Layout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Layout.Header>
        <Link to="/" className="text-lg font-semibold text-on-surface">
          🤖 ChatBotPro
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          <Link to="/about" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">About</Link>
          <Link to="/pricing" className="text-sm text-on-surface/70 hover:text-on-surface transition-colors">Pricing</Link>
          <Link to="/contact" className="text-sm text-on-surface transition-colors">Contact</Link>
        </nav>
        <Button size="sm">Get Started</Button>
      </Layout.Header>

      <Layout.Main>
        <Layout.Section className="pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
              Let's Talk About Your Needs
            </h1>
            <p className="mt-4 text-lg text-on-surface/70">
              Whether you have a question, need a demo, or want to discuss a custom plan — our team is ready to help.
            </p>
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="mx-auto max-w-xl">
            {submitted ? (
              <Card className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <Card.Title>Message Sent!</Card.Title>
                <Card.Body>
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </Card.Body>
                <div className="mt-6">
                  <Link to="/">
                    <Button variant="secondary">Back to Home</Button>
                  </Link>
                </div>
              </Card>
            ) : (
              <Card>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="First Name" placeholder="Jane" required />
                    <Input label="Last Name" placeholder="Smith" required />
                  </div>
                  <Input label="Work Email" type="email" placeholder="jane@company.com" required />
                  <Input label="Company" placeholder="Acme Inc." />
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-on-surface">Message</label>
                    <textarea
                      className="rounded-sm border border-border bg-surface-light px-3 py-2 text-on-surface outline-none transition-colors focus:border-primary min-h-[120px] resize-y"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-2">Send Message</Button>
                </form>
              </Card>
            )}
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="text-center">
              <div className="mb-3 text-2xl">📧</div>
              <Card.Title>Email Us</Card.Title>
              <Card.Body>hello@chatbotpro.io</Card.Body>
            </Card>
            <Card className="text-center">
              <div className="mb-3 text-2xl">📅</div>
              <Card.Title>Book a Demo</Card.Title>
              <Card.Body>Schedule a 30-minute walkthrough with our team.</Card.Body>
            </Card>
            <Card className="text-center">
              <div className="mb-3 text-2xl">💬</div>
              <Card.Title>Live Chat</Card.Title>
              <Card.Body>Talk to our own chatbot right now — yes, we eat our own dog food.</Card.Body>
            </Card>
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

export { ContactPage };
