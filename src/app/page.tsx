// sales@beelieve.dev
'use client'
import Image from 'next/image'

import HeroImage from '@/assets/heroimg.png'
import Contentwho from '@/assets/imagecontentwho.png'
import MobileDev from '@/assets/mobiledev.png'
import Staff from '@/assets/staff.png'
import DigitalTransform from '@/assets/digitaltransform.png'
import CircleYellow from '@/assets/circleYellow.svg'
import Header from '@/components/header'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <main id="content">
        <Header />
        {/* Hero */}
        <section className="max-w-6xl p-5 m-auto lg:grid-cols-2 lg:grid lg:gap-9 lg:items-center">
          <div className="flex flex-col gap-7">
            <h1 className="text-black text-8xl font-bold capitalize w-96">
              Who we are:
            </h1>
            <div className="text-black text-opacity-60 text-base font-normal capitalize leading-loose">
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

            <Link
              className="p-5 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white
            text-base font-medium capitalize leading-tight w-fit"
              href="/contact"
            >
              Lets Talk
            </Link>
          </div>
          <div className="py-7">
            <Image src={HeroImage} alt="Varios rostos sorrindo" quality={100} />
          </div>
        </section>
        {/* Who we are: */}
        <section className="bg-fuchsia-600" id="whoweare">
          <section className="max-w-6xl px-5 py-16 m-auto">
            <h3 className="text-center text-white text-2xl font-semibold mb-16 max-w-xl m-auto">
              Technological bees, creative developers, believing and creating
              inspiring solutions
            </h3>
            <div className="mb-8 flex flex-col gap-4">
              <h2 className="text-white text-3xl font-semibold">
                Collaboration and Cooperation
              </h2>
              <p className="text-white text-base font-normal max-w-2xl">
                Our professionals understand the power of collaboration and work
                together seamlessly to achieve common goals. They thrive in a
                collaborative environment, actively sharing knowledge, ideas,
                and expertise to pollinate innovation and deliver remarkable
                technological solutions.
              </p>
            </div>
            <div className="relative">
              <Image
                src={Contentwho}
                alt="Pessoas trabalhando com vista para predios da cidade"
                className="rounded-tl-full rounded-tr-full rounded-br-full relative z-20"
              />
              <Image
                src={CircleYellow}
                alt="Bolinhas amarelas"
                className="absolute -top-[30px] right-0 z-0"
              />
            </div>
          </section>
        </section>
        {/* What we do */}
        <section className="max-w-6xl p-5 m-auto" id="whatwedo">
          <div className="flex flex-col gap-4 pt-8 lg:grid-cols-3 lg:grid lg:gap-9 lg:items-center">
            <h1 className="text-black text-8xl font-bold capitalize w-96">
              What we do
            </h1>
            <div className="text-black text-opacity-60 text-base font-normal capitalize leading-loose flex flex-col gap-4 col-span-2 max-w-2xl">
              <p>
                At Beelieve, we are passionate about transforming innovative
                ideas into exceptional mobile experiences.
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
          <div className="py-24 border-b border-black lg:grid-cols-2 grid lg:gap-9 lg:items-center gap-8">
            <Image src={MobileDev} alt="" className="rounded-full" />
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-900 text-xl font-medium leading-snug">
                Mobile Development
              </h4>
              <span className="text-neutral-900 text-lg font-normal leading-snug">
                At Beelieve, we are passionate about transforming innovative
                ideas into exceptional mobile experiences.
              </span>
              <p className="text-zinc-600 text-sm font-normal">
                From native app development for iOS and Android to
                cross-platform solutions, we have the knowledge and experience
                to bring your vision to life.
              </p>
              <p className="text-zinc-600 text-sm font-normal">
                Whether you have a groundbreaking concept or need to revamp your
                existing mobile application, Beelieve is here to help you at
                every step of the way. Let us be your technology partner in
                creating amazing mobile software that stands out in the digital
                landscape.
              </p>
            </div>
          </div>

          <div className="py-24 border-b border-black gap-8 lg:grid-cols-2 grid lg:gap-9 lg:items-center ">
            <Image
              src={DigitalTransform}
              alt=""
              className="rounded-full lg:order-2"
            />
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-900 text-xl font-medium leading-snug">
                Digital Transformation
              </h4>
              <span className="text-neutral-900 text-lg font-normal leading-snug">
                Empowering Digital Transformation through Innovative Technology
                Development. At Beelieve, we are obsessed about harnessing the
                power of technology to drive digital transformation and
                establish a strong digital presence.
              </span>
              <p className="text-zinc-600 text-sm font-normal">
                As a leading technology development company, we specialize in
                creating cutting-edge solutions that enable businesses to thrive
                in the digital era.
              </p>
            </div>
          </div>

          <div className="py-24 border-b border-black lg:grid-cols-2 grid lg:gap-9 lg:items-center gap-8">
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
                they create inspiring solutions that push the boundaries of
                whats possible.
              </p>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="mt-24 bg-left lg:bg-contain bg-cover relative bg-[#FFB532] bg-[url(../assets/bgcta.svg)] py-16 bg-no-repeat">
          <section className="max-w-6xl p-5 m-auto flex flex-col gap-4">
            <h2 className="text-black text-4xl capitalize leading-[56px]">
              Impact and Value Creation
            </h2>
            <div className="flex flex-col gap-4">
              <p className="leading-loose text-black text-base font-normal ">
                Our professionals, create impactful value through technology.
                They leverage their skills and expertise to develop solutions
                that drive business growth, enhance user experiences, and
                positively impact society. They strive to make a meaningful
                difference through their technological contributions.
              </p>
            </div>
          </section>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
