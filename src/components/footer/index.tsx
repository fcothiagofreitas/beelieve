import { MapPin, Instagram, Twitter, Facebook } from 'lucide-react'
import Logo from '@/assets/logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 pt-12">
      <section className="max-w-6xl w-full p-5 gap-8 m-auto ">
        <div className="flex items-center md:flex-row flex-col justify-between gap-4 ">
          <Image src={Logo} alt="Beelieve Logo" />
          <span className="flex">
            <MapPin /> Diam ullamcorper risus
          </span>
          <div className="flex gap-8">
            <a
              href=""
              className="hover:bg-amber-400 rounded-full transition-all p-2"
            >
              <Instagram />
            </a>
            <a
              href=""
              className="hover:bg-amber-400 rounded-full transition-all p-2"
            >
              <Twitter />
            </a>
            <a
              href=""
              className="hover:bg-amber-400 rounded-full transition-all p-2"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-black bg-opacity-80">
        <section className="max-w-6xl p-5 m-auto items-center flex flex-col justify-between gap-4 text-white">
          <p>© 2023 Beelieve - All Rights Reserved</p>
          {/* <div className="flex gap-8">
              <a href="" className="hover:decoration-2 hover:underline">
                Terms of use
              </a>
              <a href="" className="hover:decoration-2 hover:underline">
                Privacy policy
              </a>
            </div> */}
        </section>
      </section>
    </footer>
  )
}
