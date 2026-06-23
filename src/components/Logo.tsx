import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/hi-spec-logo.png"
      alt="Hi-Spec Solutions Ltd — all aspects of roofing & construction work undertaken"
      width={1757}
      height={592}
      priority
      className={className}
    />
  )
}
