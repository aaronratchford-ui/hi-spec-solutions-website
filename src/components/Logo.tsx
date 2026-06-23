import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/hi-spec-logo.png"
      alt="Hi-Spec Solutions Ltd"
      width={1757}
      height={490}
      priority
      className={className}
    />
  )
}
