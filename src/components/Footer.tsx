import Link from 'next/link'

import { Container } from '@/components/Container'
import { company, services } from '@/lib/company'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-bold tracking-tight text-white">
              Hi-Spec Solutions <span className="text-purple-400">Ltd</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              {company.tagline}. Over {company.yearsEstablished} years serving{' '}
              {company.serviceArea}.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Services
            </h3>
            <ul role="list" className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white"
                >
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Get in touch
            </h3>
            <ul role="list" className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={company.phoneHref}
                  className="text-slate-400 hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="text-slate-400 hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="text-slate-400">{company.address}</li>
            </ul>
            <p className="mt-4 text-xs font-semibold tracking-wide text-purple-400 uppercase">
              CHAS Registered · SIKA Approved
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-white/10 py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p className="mt-4 text-sm text-slate-500 sm:mt-0">
            Roofing · Structural Repairs · Damp Proofing · Building · Maintenance
          </p>
        </div>
      </Container>
    </footer>
  )
}
