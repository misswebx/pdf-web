'use client';

import { useTranslations } from 'next-intl';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';

interface TermsPageClientProps {
  locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                Please read these terms carefully before using {t('common.brand')}.
              </p>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[hsl(var(--color-card))] p-6 rounded-xl border border-[hsl(var(--color-border))]">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">Free to Use</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  All PDF tools are completely free with no hidden charges or subscriptions.
                </p>
              </div>
              <div className="bg-[hsl(var(--color-card))] p-6 rounded-xl border border-[hsl(var(--color-border))]">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mb-4">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">No Registration</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  Use all tools without creating an account or providing personal information.
                </p>
              </div>
              <div className="bg-[hsl(var(--color-card))] p-6 rounded-xl border border-[hsl(var(--color-border))]">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mb-4">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">Your Files Stay Local</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  All processing happens in your browser. We never access your files.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: December 2024
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                By accessing and using {t('common.brand')} (&quot;the Service&quot;), you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                2. Description of Service
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} provides a collection of browser-based PDF tools that allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>Merge, split, and rearrange PDF pages</li>
                <li>Compress and optimize PDF files</li>
                <li>Convert PDFs to and from various formats</li>
                <li>Add watermarks, annotations, and page numbers</li>
                <li>Protect and unlock PDF files</li>
                <li>Perform other PDF-related operations</li>
              </ul>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                All processing is performed locally in your web browser using JavaScript and WebAssembly. 
                Your files are never uploaded to our servers.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                3. Acceptable Use
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You agree to use the Service only for lawful purposes. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>Use the Service to process illegal, harmful, or infringing content</li>
                <li>Attempt to reverse engineer, decompile, or extract the source code</li>
                <li>Use automated tools to scrape or overload the Service</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Use the Service to violate any applicable laws or regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                The Service, including its design, code, and functionality, is owned by {t('common.brand')} 
                and is protected by intellectual property laws. You retain all rights to the files you 
                process using the Service.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, 
                either express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li>The Service will be uninterrupted or error-free</li>
                <li>The results obtained from the Service will be accurate or reliable</li>
                <li>The quality of any processed files will meet your expectations</li>
              </ul>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We recommend keeping backups of your original files before processing them.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                To the maximum extent permitted by law, {t('common.brand')} shall not be liable for any 
                indirect, incidental, special, or consequential damages arising from your use of the 
                Service, including but not limited to data loss or corruption.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                7. Third-Party Content
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                The Service may contain links to third-party websites or services. We are not 
                responsible for the content, privacy policies, or practices of any third-party 
                websites or services.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify 
                users of significant changes by updating the &quot;Last updated&quot; date. Your continued use 
                of the Service after any changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                9. Termination
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We may terminate or suspend your access to the Service immediately, without prior 
                notice, for any conduct that we determine violates these Terms of Service or is 
                harmful to other users, us, or third parties.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                10. Contact
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                If you have any questions about these Terms of Service, please contact us through 
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
