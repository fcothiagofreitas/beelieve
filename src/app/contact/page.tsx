'use client'

import { X, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '@/assets/logo.svg'
import Footer from '@/components/footer'

export default function Contact() {
  const [open, setOpen] = useState(false)

  function handleMenuClick() {
    setOpen(!open)
  }
  return (
    <main>
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
              <Link
                href="/#whoweare"
                className="hover:underline hover:decoration-2"
              >
                Who we are
              </Link>
              <Link
                href="/#whatwedo"
                className="hover:underline hover:decoration-2"
              >
                What we do
              </Link>
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
              <Link
                href="/#whoweare"
                className="hover:underline hover:decoration-2"
              >
                Who we are
              </Link>
              <Link
                href="/#whatwedo"
                className="hover:underline hover:decoration-2"
              >
                What we do
              </Link>
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
      <section className="bg-left lg:bg-contain bg-cover relative bg-[#FFB532] bg-[url(../assets/bgcta.svg)] py-8 bg-no-repeat">
        <section className="max-w-6xl p-5 m-auto flex flex-col gap-4">
          <h2 className="text-black text-4xl capitalize leading-[56px]">
            Contact
          </h2>
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="leading-loose text-black text-base font-normal ">
              At Beelieve, Our Team Of Professionals Embodies The Spirit Of
              Technology Bees, Tirelessly Working To Pollinate Innovation And
              Bring The Sweet Nectar Of Technological Advancements To Life
            </p>
          </div>
        </section>
      </section>
      <section className="max-w-6xl p-5 m-auto ">
        <form
          className="flex flex-col gap-4 w-96 m-auto"
          action="https://formsubmit.co/sales@beelieve.dev"
          method="POST"
        >
          <input
            type="text"
            name="Nome"
            placeholder="Enter Your Name"
            className="p-5 bg-indigo-50 rounded-full focus:outline-fuchsia-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="p-5 bg-indigo-50 rounded-full focus:outline-fuchsia-600"
          />
          <input type="hidden" name="_subject" value="Contato via site"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thankyou"
          ></input>
          <textarea
            placeholder="Content"
            name="conteudo"
            className="p-5 bg-indigo-50 rounded-3xl focus:outline-fuchsia-600"
          />
          <button className="p-5 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white text-base font-medium capitalize leading-tight">
            Lets Talk
          </button>
        </form>
      </section>
      <Footer />
    </main>
  )
}
