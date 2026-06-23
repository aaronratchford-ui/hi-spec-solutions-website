import Link from 'next/link'

import { Container } from '@/components/Container'
import { services } from '@/lib/company'

const icons: Record<string, React.ReactNode> = {
  roofing: (
    <path d="M4 18 24 6l20 12M10 16v22h28V16M20 38V26h8v12" />
  ),
  'structural-repairs': (
    <path d="M8 40V8h32v32M8 20h32M24 8v32M8 32h32" />
  ),
  'damp-proofing': (
    <path d="M24 6s12 14 12 22a12 12 0 1 1-24 0c0-8 12-22 12-22ZM18 28a6 6 0 0 0 6 6" />
  ),
  'general-building': (
    <path d="M6 42V14l10-6 10 6M26 42V20l8-5 8 5v22M6 42h36M12 22h4M12 30h4M32 28h4M32 36h4" />
  ),
  'maintenance-repairs': (
    <path d="M30 8a8 8 0 0 0-10.4 10.4L8 30l6 6 11.6-11.6A8 8 0 0 0 36 14l-5 5-4-4 5-5a8 8 0 0 0-2-2Z" />
  ),
}

export function Services() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            One trusted contractor for your roof, your structure and everything
            in between — across {' '}
            <span className="whitespace-nowrap">the North West</span>.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-lg hover:ring-purple-600/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10 text-purple-700 transition group-hover:bg-purple-600 group-hover:text-white">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[service.slug]}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {service.summary}
                </p>
                <p className="mt-6 text-sm font-semibold text-purple-700">
                  Learn more{' '}
                  <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
