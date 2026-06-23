import { Container } from '@/components/Container'

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="font-display text-sm font-semibold tracking-wide text-purple-400 uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {children && (
            <div className="mt-6 text-lg text-slate-300">{children}</div>
          )}
        </div>
      </Container>
    </section>
  )
}
