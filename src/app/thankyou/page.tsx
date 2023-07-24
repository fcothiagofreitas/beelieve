import HeroImage from '@/assets/heroimg.png'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.svg'

export default function Thankyou() {
  return (
    <section className="max-w-6xl p-5 m-auto gap-8 md:grid-cols-2 md:grid md:gap-9 md:items-center">
      <div className="flex flex-col gap-7">
        <Link href="/">
          <Image src={Logo} alt="Beelieve Logo" />
        </Link>
        <div className="text-black text-opacity-60 text-base font-normal capitalize leading-loose">
          <h1 className="text-black text-4xl font-bold capitalize w-96">
            Thanks!
          </h1>
          <p className="my-4">
            The form was submitted successfully. <br />
            Return to home:
          </p>
          <button className="p-5 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white text-base font-medium capitalize leading-tight">
            <Link href="/">Go home</Link>
          </button>
        </div>
      </div>
      <div className="py-7">
        <Image src={HeroImage} alt="Varios rostos sorrindo" quality={100} />
      </div>
    </section>
  )
}
