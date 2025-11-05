"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // State for mobile nav and FAQ toggles
  const [navOpen, setNavOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFAQ = (idx: number) =>
    setFaqOpen((s) => ({ ...s, [idx]: !s[idx] }));

  return (
    <main>
      {/* Header/Navigation */}
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="nav-wrapper">
              <div className="logo">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#2563eb" />
                  <path
                    d="M8 16L14 22L24 10"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>MyWallet</span>
              </div>

              <button
                className="mobile-menu-btn"
                id="mobileMenuBtn"
                onClick={() => setNavOpen((v) => !v)}
                aria-label="Toggle navigation menu"
                aria-expanded={navOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <ul className={`nav-menu ${navOpen ? "open" : ""}`} id="navMenu">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <div className="nav-actions">
                  {/* fixed a mismatched closing tag here */}
                  <Link href="/sign-in">Sign In</Link>
                  <Link href="/get-started" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Join 50,000+ users managing their finances smarter</span>
            </div>

            <h1 className="hero-title">
              Take Control of Your Financial Future
            </h1>
            <p className="hero-subtitle">
              MyWallet helps you track expenses, set budgets, and achieve your
              financial goals with intelligent insights and beautiful design.
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary btn-lg">
                Start Free Trial
              </button>
              <button className="btn btn-outline btn-lg">Watch Demo</button>
            </div>
          </div>

          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="balance">$4,184.50</div>
                  <div className="chart-placeholder">
                    <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                      <polyline
                        points="0,40 20,30 40,35 60,20 80,25 100,15"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="transactions">
                    <div className="transaction">
                      <span>Grocery Store</span>
                      <span className="amount">-$45.20</span>
                    </div>
                    <div className="transaction">
                      <span>Salary Deposit</span>
                      <span className="amount income">+$3,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Powerful Features for Smart Money Management</h2>
            <p>Everything you need to take control of your finances</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#dbeafe" />
                  <path
                    d="M20 12V28M12 20H28"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Expense Tracking</h3>
              <p>
                Automatically categorize and track every expense. Get real-time
                insights into your spending patterns.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#dcfce7" />
                  <path
                    d="M14 20L18 24L26 16"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Smart Budgets</h3>
              <p>
                Create flexible budgets for different categories. Get alerts
                when you're approaching your limits.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#fef3c7" />
                  <path
                    d="M20 12V28M12 20H28"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Goal Setting</h3>
              <p>
                Set financial goals and track your progress. Stay motivated with
                visual milestones and achievements.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#fecaca" />
                  <path
                    d="M20 12V28M12 20H28"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Analytics & Reports</h3>
              <p>
                Detailed reports and analytics to understand your financial
                health. Export data anytime.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#e9d5ff" />
                  <path
                    d="M20 12V28M12 20H28"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Multi-Account Sync</h3>
              <p>
                Connect multiple bank accounts and credit cards. See your
                complete financial picture in one place.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#cffafe" />
                  <path
                    d="M20 12V28M12 20H28"
                    stroke="#0891b2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Bank-Level Security</h3>
              <p>
                256-bit encryption and PCI DSS compliance. Your financial data
                is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How MyWallet Works</h2>
            <p>Get started in three simple steps</p>
          </div>

          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>
                Create your account in seconds. No credit card required for the
                free trial.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Connect Accounts</h3>
              <p>
                Link your bank accounts and credit cards securely. We support
                10,000+ financial institutions.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Start Managing</h3>
              <p>
                Get instant insights, set budgets, and watch your financial
                goals come to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="section-header">
          <h2>Pricing Plans</h2>
          <p>Pick the perfect plan and take control of your finances today.</p>
        </div>

        <div className="pricing-grid">
          {/* Basic */}
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">
              <span className="amount">Free</span>
              <span className="period">/month</span>
            </div>
            <p className="plan-description">
              Perfect for individuals getting started.
            </p>
            <ul className="features-list">
              <li>
                <span className="checkmark">✓</span> Access to basic features
              </li>
              <li>
                <span className="checkmark">✓</span> 5 Projects
              </li>
              <li>
                <span className="checkmark">✓</span> Email Support
              </li>
            </ul>
            <button className="cta-button">Choose Plan</button>
          </div>

          {/* Pro */}
          <div className="pricing-card highlighted">
            <div className="badge">Most Popular</div>
            <h3>Pro</h3>
            <div className="price">
              <span className="amount">$19</span>
              <span className="period">/month</span>
            </div>
            <p className="plan-description">
              Ideal for professionals and small teams.
            </p>
            <ul className="features-list">
              <li>
                <span className="checkmark">✓</span> All Basic features
              </li>
              <li>
                <span className="checkmark">✓</span> 25 Projects
              </li>
              <li>
                <span className="checkmark">✓</span> Priority Support
              </li>
            </ul>
            <button className="cta-button">Choose Plan</button>
          </div>

          {/* Premium */}
          <div className="pricing-card">
            <h3>Premium</h3>
            <div className="price">
              <span className="amount">$29</span>
              <span className="period">/month</span>
            </div>
            <p className="plan-description">
              For large teams and advanced users.
            </p>
            <ul className="features-list">
              <li>
                <span className="checkmark">✓</span> Unlimited Projects
              </li>
              <li>
                <span className="checkmark">✓</span> Advanced Analytics
              </li>
              <li>
                <span className="checkmark">✓</span> 24/7 Support
              </li>
            </ul>
            <button className="cta-button">Choose Plan</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions</p>
          </div>

          <div className="faq-list">
            {/* FAQ 1 */}
            <div className={`faq-item ${faqOpen[1] ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(1)}
                aria-expanded={!!faqOpen[1]}
              >
                <span>How does MyWallet help me manage my money?</span>
                <span className="faq-icon">{faqOpen[1] ? "−" : "+"}</span>
              </button>
              <div
                className="faq-answer"
                style={{ display: faqOpen[1] ? "block" : "none" }}
              >
                <p>
                  MyWallet tracks your expenses, categorizes spending, and helps
                  set savings goals—all in one place.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className={`faq-item ${faqOpen[2] ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(2)}
                aria-expanded={!!faqOpen[2]}
              >
                <span>Is my financial data secure?</span>
                <span className="faq-icon">{faqOpen[2] ? "−" : "+"}</span>
              </button>
              <div
                className="faq-answer"
                style={{ display: faqOpen[2] ? "block" : "none" }}
              >
                <p>
                  Yes. We use bank-level encryption to ensure your personal and
                  financial data stays protected.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className={`faq-item ${faqOpen[3] ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(3)}
                aria-expanded={!!faqOpen[3]}
              >
                <span>Can I use MyWallet on my phone?</span>
                <span className="faq-icon">{faqOpen[3] ? "−" : "+"}</span>
              </button>
              <div
                className="faq-answer"
                style={{ display: faqOpen[3] ? "block" : "none" }}
              >
                <p>
                  Absolutely! MyWallet is fully responsive and works seamlessly
                  on mobile, tablet, and desktop.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className={`faq-item ${faqOpen[4] ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(4)}
                aria-expanded={!!faqOpen[4]}
              >
                <span>Do you offer a free trial?</span>
                <span className="faq-icon">{faqOpen[4] ? "−" : "+"}</span>
              </button>
              <div
                className="faq-answer"
                style={{ display: faqOpen[4] ? "block" : "none" }}
              >
                <p>
                  Yes! You can try MyWallet for free for 14 days with access to
                  all premium features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated with Financial Tips</h2>
            <p>Get weekly insights and tips to improve your financial health</p>

            <form
              className="newsletter-form"
              id="newsletterForm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>

            <p className="newsletter-note">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>MyWallet</h4>
              <p>Smart financial management for everyone.</p>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#" aria-label="Facebook">
                  f
                </a>
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Mobile App</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Compliance</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 MyWallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
