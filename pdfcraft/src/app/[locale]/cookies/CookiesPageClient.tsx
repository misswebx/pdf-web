'use client';

import { useTranslations } from 'next-intl';
import { Cookie, Settings, Shield, Info, XCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';

interface CookiesPageClientProps {
  locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
  const t = useTranslations();

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      required: true,
      description: 'These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas.',
      examples: ['Session management', 'Security tokens', 'CSRF protection'],
    },
    {
      name: 'Preference Cookies',
      required: false,
      description: 'These cookies remember your settings and preferences to provide a personalized experience.',
      examples: ['Language preference', 'Theme selection (light/dark mode)', 'Recent tool history'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Cookie className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Cookie Policy
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                Learn how {t('common.brand')} uses cookies and browser storage.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[hsl(var(--color-card))] p-6 rounded-xl border border-[hsl(var(--color-border))]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      Minimal Cookie Usage
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {t('common.brand')} uses minimal cookies. We do not use tracking cookies, 
                      advertising cookies, or third-party analytics cookies. All PDF processing 
                      happens locally in your browser, so your files never leave your device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-8">
                Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-[hsl(var(--color-card))] p-6 rounded-xl border border-[hsl(var(--color-border))]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${cookie.required ? 'bg-green-100' : 'bg-blue-100'}`}>
                          {cookie.required ? (
                            <Shield className="h-5 w-5 text-green-600" />
                          ) : (
                            <Settings className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[hsl(var(--color-foreground))]">
                            {cookie.name}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${cookie.required ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                            {cookie.required ? 'Required' : 'Optional'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
                      {cookie.description}
                    </p>
                    <div>
                      <p className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] mb-2">Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Cookies are small text files stored on your device by your web browser. They help 
                websites remember information about your visit, such as your preferences and settings.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                Local Storage
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                In addition to cookies, {t('common.brand')} may use your browser&apos;s local storage 
                to save:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>Language preference:</strong> Remembers your selected language so you don&apos;t have to choose it every time</li>
                <li><strong>Theme preference:</strong> Stores your light or dark mode choice</li>
                <li><strong>Recent files:</strong> Keeps track of recently processed files for quick access (file names only, not file contents)</li>
              </ul>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                This data is stored entirely on your device and is never transmitted to our servers.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                We Do NOT Use
              </h2>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  <strong>Tracking cookies:</strong> We do not track your browsing activity across websites.
                </p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  <strong>Advertising cookies:</strong> We do not serve ads or use ad networks.
                </p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  <strong>Third-party analytics:</strong> We do not use Google Analytics or similar services that track individual users.
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  <strong>Social media pixels:</strong> We do not embed social media tracking scripts.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                Managing Cookies
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You can control and manage cookies through your browser settings. Most browsers 
                allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block cookies from specific or all websites</li>
                <li>Clear local storage data</li>
              </ul>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Please note that disabling essential cookies may affect the functionality of the Service.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We may update this Cookie Policy from time to time. Any changes will be posted on 
                this page with an updated &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                If you have any questions about our use of cookies, please contact us through 
                our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
