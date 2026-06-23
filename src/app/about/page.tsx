import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageIntro } from '@/components/PageIntro'
import { company, credentials } from '@/lib/company'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Hi-Spec Solutions is a North West construction firm established for over 30 years, serving private clients, housing associations and councils. CHAS registered and SIKA approved.',
}

const values = [
  {
    title: 'Quality without compromise',
    description:
      'The clue is in the name. Every job is delivered to a high specification, using the right materials and proven methods — not shortcuts.',
  },
  {
    title: 'Straight-talking & reliable',
    description:
      'Clear quotes, realistic timescales and tidy sites. We turn up when we say we will and keep you informed throughout.',
  },
  {
    title: 'Safety first',
    description:
      'As a CHAS registered contractor, health and safety is built into how we plan and run every project, big or small.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro eyebrow="About us" title={`${company.yearsEstablished}+ years building trust in the North West`}>
          <p>
            Hi-Spec Solutions is an established North West construction firm
            trusted by homeowners, housing associations and local councils.
          </p>
        </PageIntro>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-slate-900">
                Our story
              </h2>
              <div className="mt-6 space-y-6 text-lg text-slate-700">
                <p>
                  For over {company.yearsEstablished} years, Hi-Spec Solutions
                  has been carrying out roofing, structural repairs, damp
                  proofing, general building and maintenance work across{' '}
                  {company.serviceArea}. What started as a local building firm
                  has grown into a trusted contractor for both private clients
                  and the public sector.
                </p>
                <p>
                  We work for homeowners who want a job done properly, and we
                  hold contracts with housing associations and councils for
                  reactive repairs, planned maintenance and void property works.
                  Whatever the client, the standard is the same.
                </p>
                <p>
                  As a <strong className="font-semibold text-slate-900">CHAS
                  registered</strong> and{' '}
                  <strong className="font-semibold text-slate-900">SIKA
                  approved</strong> contractor, our accreditations mean our
                  health &amp; safety and our roofing installations meet
                  recognised industry standards — with manufacturer-backed
                  warranties on certified systems.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium tracking-tight text-slate-900">
                How we work
              </h2>
            </div>
            <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
                >
                  <dt className="font-display text-lg font-semibold text-slate-900">
                    {value.title}
                  </dt>
                  <dd className="mt-2 text-sm text-slate-600">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
              {credentials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-purple-600/15 bg-purple-50/50 px-5 py-6 text-center"
                >
                  <p className="font-display text-base font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
