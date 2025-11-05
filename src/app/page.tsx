"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div className="min-h-screen">
        <div id="about" data-section="about">
          <section className="py-24 bg-background">
            <div className="mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
              <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
                We are dedicated to creating exceptional experiences through innovative solutions and thoughtful design. Our team combines expertise with passion to deliver results that exceed expectations.
              </p>
            </div>
          </section>
        </div>

        <div id="pricing" data-section="pricing">
          <section className="py-24 bg-card">
            <div className="mx-auto px-4 md:px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
                <p className="text-lg text-foreground/70">Choose the plan that works for you</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="card p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                  <div className="text-4xl font-bold mb-6">
                    $29<span className="text-lg text-foreground/60">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <span>Up to 5 projects</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span>Basic support</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span>1GB storage</span>
                    </li>
                  </ul>
                  <button className="primary-button text-secondary-cta px-8 py-3 rounded-full w-full">
                    Get Started
                  </button>
                </div>
                <div className="card p-8 text-center border-accent">
                  <h3 className="text-2xl font-semibold mb-4">Professional</h3>
                  <div className="text-4xl font-bold mb-6">
                    $79<span className="text-lg text-foreground/60">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <span>Unlimited projects</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span>10GB storage</span>
                    </li>
                  </ul>
                  <button className="primary-button text-secondary-cta px-8 py-3 rounded-full w-full">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="metric" data-section="metric">
          <section className="py-24 bg-background">
            <div className="mx-auto px-4 md:px-6 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
                <p className="text-lg text-foreground/70">Numbers that speak for themselves</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">1000+</div>
                  <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
                  <p className="text-foreground/70">Satisfied customers worldwide</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">500+</div>
                  <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
                  <p className="text-foreground/70">Successfully delivered projects</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">99%</div>
                  <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
                  <p className="text-foreground/70">Exceptional service quality</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="footer" data-section="footer">
          <footer className="py-16 bg-card border-t">
            <div className="mx-auto px-4 md:px-6 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Webild</h3>
                  <p className="text-foreground/70 mb-4 max-w-md">
                    Creating exceptional digital experiences through innovative design and development.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a></li>
                    <li><a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</a></li>
                    <li><a href="#metric" className="text-foreground/70 hover:text-foreground transition-colors">Metrics</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2">
                    <li className="text-foreground/70">hello@webild.io</li>
                    <li className="text-foreground/70">+1 (555) 123-4567</li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-12 pt-8 text-center">
                <p className="text-foreground/60">
                  © 2024 Webild. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}