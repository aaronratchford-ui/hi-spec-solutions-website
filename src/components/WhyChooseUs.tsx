import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { company } from '@/lib/company'

const points = [
  {
    title: `${company.yearsEstablished}+ years established`,
    description:
      'Three decades of building experience across the North West, with a reputation built on doing the job right.',
  },
  {
    title: 'Accredited & approved',
    description:
      'CHAS registered for health & safety and a SIKA approved contractor for certified, warrantied roofing systems.',
  },
  {
    title: 'Public & private sector',
    description:
      'Trusted by homeowners, housing associations and councils — from single repairs to planned maintenance contracts.',
  },
  {
    title: 'One contractor, start to finish',
    description:
      'We manage the whole job in-house, so you get clear communication, tidy sites and work completed on programme.',
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-label="Why choose Hi-Spec Solutions"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16">
          <div className="lg:sticky lg:top-24">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Why clients choose Hi-Spec
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              We’ve spent over {company.yearsEstablished} years earning repeat
              work and referrals. Here’s what that means for your project.
            </p>
            <div className="mt-8 hidden lg:block">
              <Button href="/contact" color="purple">
                Request your free quote
              </Button>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-0">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
              >
                <dt className="font-display text-lg font-semibold text-slate-900">
                  {point.title}
                </dt>
                <dd className="mt-2 text-sm text-slate-600">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 lg:hidden">
            <Button href="/contact" color="purple">
              Request your free quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
