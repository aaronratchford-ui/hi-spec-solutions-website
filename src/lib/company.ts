// Central place for all company details. Edit these values to update the
// site's contact info, services, and credentials everywhere at once.

export const company = {
  name: 'Hi-Spec Solutions',
  legalName: 'Hi-Spec Solutions Ltd',
  tagline: 'Roofing, structural & building specialists across the North West',
  phone: '07973 320510',
  phoneHref: 'tel:07973320510',
  email: 'hispecsolutionsltd@gmail.com',
  emailHref: 'mailto:hispecsolutionsltd@gmail.com',
  address: 'Bramhall, Stockport',
  serviceArea: 'the North West of England',
  yearsEstablished: 30,
  // Social links — leave blank to hide
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
} as const

export const services = [
  {
    slug: 'roofing',
    name: 'Roofing',
    image: '/images/work/roofing-housing.jpg',
    summary:
      'New roofs, re-roofing, flat roofing and repairs — delivered to a high specification and built to last.',
    description:
      'From pitched and flat roofs to gutters, fascias and soffits, our roofing teams handle everything from emergency leak repairs to complete re-roofs. As a SIKA approved contractor we install certified, fully-warrantied flat roofing systems.',
    features: [
      'Pitched & flat roof installation',
      'Re-roofing and roof overhauls',
      'SIKA single-ply & liquid waterproofing',
      'Gutters, fascias & soffits',
      'Emergency leak repairs',
    ],
  },
  {
    slug: 'structural-repairs',
    name: 'Structural Repairs',
    image: '/images/work/structural-repair.jpg',
    summary:
      'Crack stitching, beam replacement, underpinning and wall tie repairs to make buildings safe and sound.',
    description:
      'Movement, subsidence and structural defects need experienced hands. We carry out crack stitching, lintel and beam replacement, wall tie renewal and remedial works, always with the correct surveys and certification.',
    features: [
      'Crack stitching & re-pointing',
      'Lintel & beam replacement',
      'Wall tie replacement',
      'Structural surveys & remedial works',
      'Underpinning',
    ],
  },
  {
    slug: 'damp-proofing',
    name: 'Damp Proofing',
    image: '/images/work/damp-tanking.jpg',
    summary:
      'Rising damp, penetrating damp and condensation diagnosed and treated with guaranteed solutions.',
    description:
      'Damp problems only get worse if ignored. We diagnose the true cause and install damp-proof courses, tanking and ventilation systems, with treatments backed by long-term guarantees.',
    features: [
      'Damp-proof course (DPC) installation',
      'Basement & cellar tanking',
      'Penetrating damp treatment',
      'Condensation & ventilation solutions',
      'Timber & woodworm treatment',
    ],
  },
  {
    slug: 'general-building',
    name: 'General Building',
    image: '/images/work/building-lantern.jpg',
    summary:
      'Extensions, renovations and refurbishments managed end-to-end by one trusted contractor.',
    description:
      'Whether it’s an extension, a full refurbishment or a fit-out for a housing association, we manage the whole project — groundworks to finishing trades — to a consistently high standard and on programme.',
    features: [
      'Extensions & conversions',
      'Renovations & refurbishments',
      'Brickwork & rendering',
      'Groundworks & drainage',
      'Project management',
    ],
  },
  {
    slug: 'maintenance-repairs',
    name: 'Maintenance & Repairs',
    image: '/images/work/maintenance-floor.jpg',
    summary:
      'Responsive and planned maintenance for private clients, housing associations and councils.',
    description:
      'We provide reliable reactive and planned maintenance programmes — from one-off repairs to ongoing contracts for social housing and public-sector clients, with clear reporting and quick response times.',
    features: [
      'Reactive & emergency repairs',
      'Planned maintenance contracts',
      'Void property works',
      'Social housing & public sector',
      'Joinery, plastering & decorating',
    ],
  },
] as const

export const credentials = [
  {
    name: 'CHAS Registered',
    description: 'Accredited to the Contractors Health & Safety Assessment Scheme.',
  },
  {
    name: 'SIKA Approved Contractor',
    description: 'Certified to install SIKA roofing and waterproofing systems.',
  },
  {
    name: `${company.yearsEstablished}+ Years Established`,
    description: 'Trusted across the North West for over three decades.',
  },
  {
    name: 'Public & Private Sector',
    description: 'Serving homeowners, housing associations and local councils.',
  },
] as const

export const gallery = [
  { src: '/images/work/building-lantern.jpg', alt: 'Glazed lantern roof installed over a new orangery' },
  { src: '/images/work/building-extension.jpg', alt: 'Brick rear extension with bi-fold doors' },
  { src: '/images/work/roofing-housing.jpg', alt: 'Newly completed roof over residential housing' },
  { src: '/images/work/structural-repair.jpg', alt: 'Concrete structural repair carried out in full PPE' },
  { src: '/images/work/structural-beam.jpg', alt: 'Structural beam repair — before and after' },
  { src: '/images/work/building-render.jpg', alt: 'Full property refurbishment and render in progress' },
  { src: '/images/work/damp-tanking.jpg', alt: 'Damp-proof tanking membrane installed internally' },
  { src: '/images/work/groundwork-wall.jpg', alt: 'New retaining wall and groundworks' },
] as const
