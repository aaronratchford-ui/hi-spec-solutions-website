import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Which areas do you cover?',
      answer:
        'We work throughout the North West of England, covering both private clients and contract work for housing associations and councils. Get in touch and we’ll confirm we cover your postcode.',
    },
    {
      question: 'Do you provide free quotes?',
      answer:
        'Yes. We provide free, no-obligation quotes for all work. We’ll arrange a visit to assess the job and give you a clear, written price.',
    },
  ],
  [
    {
      question: 'Are you insured and accredited?',
      answer:
        'We are fully insured, CHAS registered for health & safety, and a SIKA approved contractor for roofing and waterproofing systems. Certificates are available on request.',
    },
    {
      question: 'Do your roofing systems come with a guarantee?',
      answer:
        'Yes. As a SIKA approved contractor, our flat roofing and waterproofing installations carry manufacturer-backed warranties, and we guarantee our workmanship.',
    },
  ],
  [
    {
      question: 'Do you work for housing associations and councils?',
      answer:
        'Absolutely. A large part of our work is reactive and planned maintenance, void property works and repairs for the social housing and public sector, with clear reporting throughout.',
    },
    {
      question: 'Can you help with an emergency repair?',
      answer:
        'Yes — for urgent issues like a leaking roof or storm damage, call us and we’ll respond as quickly as we can to make things safe.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Can’t find what you’re looking for? Call us or send a message and
            we’ll be happy to help.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
