import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageIntro } from '@/components/PageIntro'
import { services } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Roofing, structural repairs, damp proofing, general building and maintenance services across the North West. CHAS registered and SIKA approved.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro eyebrow="Our services" title="Specialists in every part of the build">
          <p>
            From the roof down to the foundations, Hi-Spec Solutions delivers
            high-specification construction work across the North West — for
            homeowners, housing associations and councils alike.
          </p>
        </PageIntro>

        <div className="py-20 sm:py-28">
          <Container>
            <div className="space-y-20">
              {services.map((service, index) => (
                <section
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                  <div
                    className={`relative aspect-4/3 overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5 ${
                      index % 2 === 1 ? 'lg:order-last' : ''
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={`${service.name} work by Hi-Spec Solutions`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <p className="font-display text-sm font-semibold text-purple-600">
                      0{index + 1}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-slate-900">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-lg text-slate-700">
                      {service.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
                    >
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-x-3 text-sm text-slate-700"
                        >
                          <svg
                            className="mt-0.5 h-5 w-5 flex-none text-purple-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="/contact" color="purple">
                        Enquire about {service.name.toLowerCase()}
                      </Button>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </Container>
        </div>

        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
