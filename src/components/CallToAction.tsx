import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { company } from '@/lib/company'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      {/* Purple glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get a free, no-obligation quote
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-300">
            Tell us about your roofing, structural, damp or building project and
            we’ll get straight back to you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Button href="/contact" color="white">
              Request a quote
            </Button>
            <Button href={company.phoneHref} variant="outline" color="white">
              Call {company.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
