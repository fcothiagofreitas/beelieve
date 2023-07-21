import { X, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '@/assets/logo.svg'

export default function Header() {
  const [open, setOpen] = useState(false)

  function handleMenuClick() {
    setOpen(!open)
  }
  return (
    <header className="sticky top-0 bg-white z-50">
      <section className="max-w-6xl p-5 m-auto lg:hidden">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <Image src={Logo} alt="Beelieve Logo" />
          </Link>
          {open ? (
            <X className={`cursor-pointer `} onClick={handleMenuClick} />
          ) : (
            <Menu className={`cursor-pointer `} onClick={handleMenuClick} />
          )}
        </div>

        {open && (
          <nav className="flex justify-between items-center pt-8">
            <a href="#whoweare" className="hover:underline hover:decoration-2">
              Who we are
            </a>
            <a href="#whatwedo" className="hover:underline hover:decoration-2">
              What we do
            </a>
            <Link
              href="/contact"
              className="hover:underline hover:decoration-2"
            >
              Contact
            </Link>
          </nav>
        )}
      </section>

      <section className="max-w-6xl p-5 m-auto max-lg:hidden ">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <Image src={Logo} alt="Beelieve Logo" />
          </Link>
          <nav className="flex items-center gap-16">
            <a href="#whoweare" className="hover:underline hover:decoration-2">
              Who we are
            </a>
            <a href="#whatwedo" className="hover:underline hover:decoration-2">
              What we do
            </a>
            <Link
              href="/contact"
              className="hover:underline hover:decoration-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </header>
  )
}
