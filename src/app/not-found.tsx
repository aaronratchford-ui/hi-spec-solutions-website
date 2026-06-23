import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-auto flex-col items-center justify-center py-32">
        <Container className="text-center">
          <p className="font-display text-sm font-semibold text-purple-600">
            404
          </p>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Button href="/" color="purple" className="mt-10">
            Go back home
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  )
}
