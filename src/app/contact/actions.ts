'use server'

import { company } from '@/lib/company'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Honeypot — bots fill hidden fields, humans don't.
  if (formData.get('company_website')) {
    return { status: 'success', message: 'Thanks — we’ll be in touch shortly.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Please fill in your name, email and a short message.',
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  const to = process.env.CONTACT_TO_EMAIL || company.email
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL || 'Hi-Spec Website <onboarding@resend.dev>'

  const subject = `New website enquiry${service ? ` — ${service}` : ''} from ${name}`
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Service: ${service || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  // If Resend isn't configured yet, log the enquiry server-side and still
  // confirm to the visitor so the form works the moment a key is added.
  if (!apiKey) {
    console.info('[contact] Enquiry received (RESEND_API_KEY not set):\n' + text)
    return {
      status: 'success',
      message: 'Thanks — your enquiry has been received. We’ll be in touch shortly.',
    }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html: `<div style="font-family:system-ui,sans-serif;line-height:1.6">
          <h2 style="color:#7e22ce;margin:0 0 12px">New website enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
          <strong>Email:</strong> ${escapeHtml(email)}<br/>
          <strong>Phone:</strong> ${escapeHtml(phone) || '—'}<br/>
          <strong>Service:</strong> ${escapeHtml(service) || '—'}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>`,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[contact] Resend error:', res.status, detail)
      return {
        status: 'error',
        message: `Sorry, something went wrong sending your message. Please call us on ${company.phone}.`,
      }
    }

    return {
      status: 'success',
      message: 'Thanks — your enquiry has been sent. We’ll be in touch shortly.',
    }
  } catch (error) {
    console.error('[contact] Failed to send enquiry:', error)
    return {
      status: 'error',
      message: `Sorry, something went wrong. Please email us at ${company.email}.`,
    }
  }
}
