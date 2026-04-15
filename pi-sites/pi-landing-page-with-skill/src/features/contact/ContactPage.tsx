import { type FormEvent, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <Link to="/pricing" className="text-text-muted hover:text-text transition-colors">Pricing</Link>
          <Link to="/contact" className="text-text hover:text-text transition-colors">Contact</Link>
        </Header.Nav>
        <Header.Actions>
          <Link to="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </Header.Actions>
      </Header>

      <Layout.Main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <Badge variant="primary">Contact Us</Badge>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight">
                    Let's Talk About Your
                    <br />
                    <span className="text-primary">Business Needs</span>
                  </h1>
                  <p className="mt-4 text-text-muted text-lg leading-relaxed">
                    Whether you're ready to get started or just exploring, our team is here to help
                    you find the right solution for your business.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <Card>
                    <Card.Body>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">📧</span>
                        <div>
                          <div className="font-semibold text-text">Email</div>
                          <div className="text-text-muted">hello@chatbotai.com</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">💬</span>
                        <div>
                          <div className="font-semibold text-text">Live Chat</div>
                          <div className="text-text-muted">Available Mon–Fri, 9am–6pm EST</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">🏢</span>
                        <div>
                          <div className="font-semibold text-text">Office</div>
                          <div className="text-text-muted">100 Innovation Drive, San Francisco, CA 94105</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center gap-4 py-12 text-center">
                      <span className="text-5xl">✅</span>
                      <h3 className="text-2xl font-semibold">Message Sent!</h3>
                      <p className="text-text-muted">
                        We'll get back to you within 24 hours.
                      </p>
                      <Button variant="secondary" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <h3 className="text-xl font-semibold">Send Us a Message</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input label="First Name" id="firstName" placeholder="John" required />
                        <Input label="Last Name" id="lastName" placeholder="Smith" required />
                      </div>
                      <Input label="Work Email" id="email" type="email" placeholder="john@company.com" required />
                      <Input label="Company" id="company" placeholder="Acme Inc." />
                      <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-text-muted text-[13px] font-medium uppercase tracking-wide">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Tell us about your needs..."
                          required
                          className="rounded-sm border border-border bg-surface-light px-3 py-2 text-text placeholder:text-text-muted/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                        />
                      </div>
                      <Button type="submit" className="w-full">Send Message</Button>
                      <p className="text-center text-text-muted text-xs">
                        By submitting, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  )}
                </Card>
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

export { ContactPage };
