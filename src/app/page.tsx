import Image from 'next/image'

import Logo from '@/assets/logo.svg'
import HeroImage from '@/assets/heroimg.png'
import Contentwho from '@/assets/imagecontentwho.png'
import MobileDev from '@/assets/mobiledev.png'
import Staff from '@/assets/staff.png'
import DigitalTransform from '@/assets/digitaltransform.png'
import { Facebook, Instagram, MapPin, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <header>
        <Image src={Logo} alt="Beelieve Logo" />

        <nav>
          <a href="">Who we are</a>
          <a href="">What we do</a>
          <a href="">Contact</a>
        </nav>
      </header>
      {/* Hero */}
      <section>
        <div>
          <h1>Who we are:</h1>
          <div>
            <p>
              Technological bees, creative developers, believing and creating
              inspiring solutions.
            </p>
            <p>
              At Beelieve, our team of professionals embodies the spirit of
              technology bees, tirelessly working to pollinate innovation and
              bring the sweet nectar of technological advancements to life
            </p>
          </div>
          <form action="">
            <input type="text" placeholder="Enter Your Email" />
            <button>Lets Talk</button>
          </form>
        </div>
        <div>
          <Image src={HeroImage} alt="Varios rostos sorrindo" quality={100} />
        </div>
      </section>
      {/* Who we are: */}
      <section className="bg-fuchsia-600">
        <h3>
          Technological bees, creative developers, believing and creating
          inspiring solutions
        </h3>
        <div>
          <h2>Collaboration and Cooperation</h2>
          <p>
            Our professionals understand the power of collaboration and work
            together seamlessly to achieve common goals. They thrive in a
            collaborative environment, actively sharing knowledge, ideas, and
            expertise to pollinate innovation and deliver remarkable
            technological solutions.
          </p>
          <a href="">View More</a>
        </div>
        <div>
          <Image
            src={Contentwho}
            alt="Pessoas trabalhando com vista para predios da cidade"
          />
        </div>
      </section>
      {/* What we do */}
      <section>
        <div>
          <h1>What we do</h1>
          <div>
            <p>
              At Beelieve, we are passionate about transforming innovative ideas
              into exceptional mobile experiences.
            </p>
            <p>
              As a leading technology development company, we specialize in
              creating cutting-edge mobile software solutions that empower
              businesses and individuals to thrive in the digital era. With a
              team of highly skilled professionals, we possess a diverse range
              of expertise in mobile software development.
            </p>
          </div>
        </div>
        <div className="py-24 border-b border-black flex flex-col gap-8">
          <Image src={MobileDev} alt="" className="rounded-full" />
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-900 text-xl font-medium leading-snug">
              Mobile Development
            </h4>
            <span className="text-neutral-900 text-lg font-normal leading-snug">
              At Beelieve, we are passionate about transforming innovative ideas
              into exceptional mobile experiences.
            </span>
            <p className="text-zinc-600 text-sm font-normal">
              From native app development for iOS and Android to cross-platform
              solutions, we have the knowledge and experience to bring your
              vision to life.
            </p>
            <p className="text-zinc-600 text-sm font-normal">
              Whether you have a groundbreaking concept or need to revamp your
              existing mobile application, Beelieve is here to help you at every
              step of the way. Let us be your technology partner in creating
              amazing mobile software that stands out in the digital landscape.
            </p>
            <a
              href=""
              className="h-5 text-neutral-900 text-lg font-medium underline leading-snug"
            >
              More shots from this project ↗
            </a>
          </div>
        </div>

        <div className="py-24 border-b border-black flex flex-col gap-8">
          <Image src={DigitalTransform} alt="" className="rounded-full" />
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-900 text-xl font-medium leading-snug">
              Digital Transformation
            </h4>
            <span className="text-neutral-900 text-lg font-normal leading-snug">
              Empowering Digital Transformation through Innovative Technology
              Development. At Beelieve, we are obsessed about harnessing the
              power of technology to drive digital transformation and establish
              a strong digital presence.
            </span>
            <p className="text-zinc-600 text-sm font-normal">
              As a leading technology development company, we specialize in
              creating cutting-edge solutions that enable businesses to thrive
              in the digital era.
            </p>

            <a
              href=""
              className="h-5 text-neutral-900 text-lg font-medium underline leading-snug"
            >
              More shots from this project ↗
            </a>
          </div>
        </div>

        <div className="py-24 border-b border-black flex flex-col gap-8">
          <Image src={Staff} alt="" className="rounded-full" />
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-900 text-xl font-medium leading-snug">
              Staff Augmentation
            </h4>
            <span className="text-neutral-900 text-lg font-normal leading-snug">
              Just as bees work together in a hive, our professionals, form
              interconnected networks of talented individuals with diverse
              expertise.
            </span>
            <p className="text-zinc-600 text-sm font-normal">
              They thrive on the principles of collaboration, efficiency, and
              adaptability, embodying the spirit of teamwork and collective
              intelligence. By leveraging their combined skills and knowledge,
              they create inspiring solutions that push the boundaries of whats
              possible.
            </p>
            <a
              href=""
              className="h-5 text-neutral-900 text-lg font-medium underline leading-snug"
            >
              More shots from this project ↗
            </a>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-cover bg-left relative bg-[#FFB532] bg-[url(../assets/bgcta.svg)] py-16 bg-no-repeat">
        <h2 className="text-black text-4xl capitalize leading-[56px]">
          Impact and Value Creation
        </h2>
        <div>
          <p className="leading-loose text-black text-base font-normal ">
            Our professionals, create impactful value through technology. They
            leverage their skills and expertise to develop solutions that drive
            business growth, enhance user experiences, and positively impact
            society. They strive to make a meaningful difference through their
            technological contributions.
          </p>
          <a href="">View More</a>
        </div>
      </section>
      <footer className="flex flex-col gap-8 pt-14">
        <section className="max-w-6xl p-5 flex gap-8 flex-col">
          <div className="flex items-center flex-col gap-4">
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
          <div className="flex justify-between">
            <nav className="flex flex-col gap-4">
              <a href="">Sodales tortor</a>
              <a href="">Hac purus</a>
              <a href="">Etiam duis</a>
              <a href="">Facilisi tellus</a>
            </nav>
            <nav className="flex flex-col gap-4">
              <a href="">Sodales tortor</a>
              <a href="">Hac purus</a>
              <a href="">Etiam duis</a>
              <a href="">Facilisi tellus</a>
            </nav>
            <nav className="flex flex-col gap-4">
              <a href="">Sodales tortor</a>
              <a href="">Hac purus</a>
              <a href="">Etiam duis</a>
              <a href="">Facilisi tellus</a>
            </nav>
          </div>
        </section>
        <section className="bg-black bg-opacity-80">
          <section className="max-w-6xl p-5 items-center flex flex-col gap-4 text-white">
            <p>© 2023 Beelieve - All Rights Reserved</p>
            <div className="flex gap-8">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
            </div>
          </section>
        </section>
      </footer>
    </main>
  )
}
