'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/Button'
import { SelectField, TextAreaField, TextField } from '@/components/Fields'
import { submitEnquiry, type EnquiryState } from '@/app/contact/actions'
import { services } from '@/lib/company'

const initialState: EnquiryState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" color="purple" className="w-full" disabled={pending}>
      {pending ? 'Sending…' : 'Send enquiry'}
    </Button>
  )
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-600/20">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
          <svg
            className="h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
          Enquiry received
        </h3>
        <p className="mt-2 text-slate-700">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot field (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField label="Your name" name="name" autoComplete="name" required />
        <TextField
          label="Phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <SelectField label="Service needed" name="service" defaultValue="">
          <option value="" disabled>
            Choose a service…
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other / not sure</option>
        </SelectField>
      </div>
      <TextAreaField
        label="How can we help?"
        name="message"
        rows={5}
        placeholder="Tell us a bit about the work you need, the property and your location…"
        required
      />

      {state.status === 'error' && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-600/20">
          {state.message}
        </p>
      )}

      <SubmitButton />
      <p className="text-center text-xs text-slate-500">
        We’ll only use your details to respond to your enquiry.
      </p>
    </form>
  )
}
