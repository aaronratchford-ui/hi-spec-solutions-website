import Image from 'next/image'

import { Container } from '@/components/Container'
import { gallery } from '@/lib/company'

export function Gallery() {
  return (
    <section id="work" aria-label="Recent work" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Recent work
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            A selection of real projects completed across the North West — from
            roofing and extensions to structural and damp works.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-900/5 ${
                index % 5 === 0 ? 'row-span-2 aspect-3/4' : 'aspect-square'
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
