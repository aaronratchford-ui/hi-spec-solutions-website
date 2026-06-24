import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { company, credentials } from '@/lib/company'

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-900">
        {/* Background photo */}
        <Image
          src="/images/work/roofing-housing.jpg"
          alt="A large pitched roof completed by Hi-Spec Solutions"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover contrast-110 saturate-110"
        />
        {/* Lighter overlay so the roof shows through; text stays legible via
            the gradient + text-shadow on the copy. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/55 via-slate-900/45 to-slate-950/70" />

        <Container className="py-24 text-center sm:py-32 lg:py-40">
          <p className="mx-auto mb-6 inline-flex items-center gap-x-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-sm">
            North West · Established over {company.yearsEstablished} years
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0/0.55)] sm:text-7xl">
            Roofing & building work{' '}
            <span className="relative whitespace-nowrap text-purple-600 [text-shadow:0_0_3px_#fff,-1.5px_-1.5px_0_#fff,1.5px_-1.5px_0_#fff,-1.5px_1.5px_0_#fff,1.5px_1.5px_0_#fff,0_0_18px_rgb(255_255_255/0.5)]">
              done properly
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-100 [text-shadow:0_1px_10px_rgb(0_0_0/0.6)]">
            {company.name} is a North West construction firm specialising in
            roofing, structural repairs, damp proofing, general building and
            maintenance — for homeowners, housing associations and councils.
            CHAS registered and SIKA approved.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Button href="/contact" color="white">
              Get a free quote
            </Button>
            <Button href={company.phoneHref} variant="outline" color="white">
              <svg
                aria-hidden="true"
                className="h-4 w-4 flex-none fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328Z" />
              </svg>
              <span className="ml-3">Call {company.phone}</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* Trust badges strip */}
      <section className="border-b border-slate-900/5 bg-white">
        <Container className="py-12 sm:py-14">
          <ul
            role="list"
            className="mx-auto grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {credentials.map((item) => (
              <li key={item.name} className="text-center">
                <p className="font-display text-base font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
