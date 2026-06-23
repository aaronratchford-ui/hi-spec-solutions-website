import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageIntro } from '@/components/PageIntro'
import { QuoteForm } from '@/components/QuoteForm'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Contact & Free Quote',
  description:
    'Get a free, no-obligation quote from Hi-Spec Solutions for roofing, structural repairs, damp proofing, building and maintenance across the North West.',
}

const contactDetails = [
  {
    label: 'Call us',
    value: company.phone,
    href: company.phoneHref,
    icon: (
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328Z" />
    ),
  },
  {
    label: 'Email us',
    value: company.email,
    href: company.emailHref,
    icon: (
      <path d="M1.5 3.5A1.5 1.5 0 0 1 3 2h10a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 13 14H3a1.5 1.5 0 0 1-1.5-1.5v-9Zm1.273.214L8 7.964l5.227-4.25H2.773Z" />
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro eyebrow="Get in touch" title="Request your free quote">
          <p>
            Tell us about your project and we’ll get back to you quickly with
            advice and a no-obligation quote.
          </p>
        </PageIntro>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-16">
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl font-medium tracking-tight text-slate-900">
                  Speak to the team
                </h2>
                <p className="mt-4 text-slate-700">
                  Prefer to talk it through? Call or email us directly — we’re
                  happy to help with anything from a single repair to a full
                  project.
                </p>

                <ul role="list" className="mt-8 space-y-5">
                  {contactDetails.map((detail) => (
                    <li key={detail.label}>
                      <a
                        href={detail.href}
                        className="group flex items-center gap-x-4"
                      >
                        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-purple-600/10 text-purple-700 transition group-hover:bg-purple-600 group-hover:text-white">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            {detail.icon}
                          </svg>
                        </span>
                        <span>
                          <span className="block text-sm text-slate-500">
                            {detail.label}
                          </span>
                          <span className="block font-display text-lg font-semibold text-slate-900 group-hover:text-purple-700">
                            {detail.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-900/5">
                  <p className="text-sm font-semibold text-slate-900">
                    Area covered
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {company.serviceArea.charAt(0).toUpperCase() +
                      company.serviceArea.slice(1)}
                    .
                  </p>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-purple-700 uppercase">
                    CHAS Registered · SIKA Approved
                  </p>
                </div>
              </div>

              <div className="mt-12 lg:col-span-3 lg:mt-0">
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
