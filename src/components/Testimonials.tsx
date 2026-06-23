import { Container } from '@/components/Container'

const testimonials = [
  [
    {
      content:
        'Hi-Spec re-roofed our property after storm damage. Turned up when they said, tidy workers and a fair price. The new roof has been faultless since.',
      author: { name: 'Margaret H.', role: 'Homeowner, Preston' },
    },
    {
      content:
        'We use Hi-Spec for reactive and planned maintenance across our housing stock. Reliable, well-priced and great with our tenants.',
      author: { name: 'D. Whitfield', role: 'Housing Association, Greater Manchester' },
    },
  ],
  [
    {
      content:
        'They diagnosed rising damp the previous firm completely missed, sorted the DPC and re-plastered. Bone dry a year on and guaranteed.',
      author: { name: 'James & Sarah T.', role: 'Homeowners, Bolton' },
    },
    {
      content:
        'Crack stitching and a new lintel on a Victorian terrace. Proper surveys, certificates provided, and the work passed building control with no issues.',
      author: { name: 'A. Nkemelu', role: 'Landlord, Liverpool' },
    },
  ],
  [
    {
      content:
        'Hi-Spec handled void property works on a tight turnaround for us. Clear reporting, no surprises on cost, and the units were ready to let on time.',
      author: { name: 'Property Services', role: 'Local Council, Lancashire' },
    },
    {
      content:
        'Single-storey extension from groundworks to finish. One point of contact the whole way and a finish we’re genuinely proud of.',
      author: { name: 'Rachel M.', role: 'Homeowner, Chorley' },
    },
  ],
]

function StarRating() {
  return (
    <div className="flex gap-x-1" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 fill-purple-500"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.05 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.366-2.447a1 1 0 0 0-1.176 0l-3.366 2.447c-.783.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.354 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.286-3.957Z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Trusted across the North West
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            From homeowners to housing associations and councils — here’s what
            our clients say about working with us.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-900/5">
                      <StarRating />
                      <blockquote className="mt-4">
                        <p className="text-lg tracking-tight text-slate-900">
                          “{testimonial.content}”
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4 border-t border-slate-200 pt-6">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-purple-600 font-display text-sm font-semibold text-white">
                          {testimonial.author.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .slice(0, 2)}
                        </div>
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-0.5 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-sm text-slate-500">
          Reviews are illustrative examples — replace with your own genuine
          client testimonials before going live.
        </p>
      </Container>
    </section>
  )
}
