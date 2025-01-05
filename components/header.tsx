import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-[#D32F2F]">
      <div className="container flex h-20 items-center justify-between">
        <div className="relative h-12 w-48">
          <Image
            src="images/eggleston_ventures_logo.png"
            alt="Eggleston Ventures"
            width={192}
            height={48}
            className="object-contain"
            priority
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {['Portfolio', 'About', 'Contact'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-xl font-bold hover:bg-[#D32F2F] hover:text-white transition-colors"
            >
              {item === 'About' ? (
                <Link href="/about">About</Link>
              ) : (
                item
              )}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}

