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
            <span className="relative whitespace-nowrap text-purple-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-400/50"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">done properly</span>
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
