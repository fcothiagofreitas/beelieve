'use client'
import Header from '@/components/header'

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="bg-left bg-contain relative bg-[#FFB532] bg-[url(../assets/bgcta.svg)] py-8 bg-no-repeat">
        <section className="max-w-6xl p-5 m-auto flex flex-col gap-4">
          <h2 className="text-black text-4xl capitalize leading-[56px]">
            Contact
          </h2>
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="leading-loose text-black text-base font-normal ">
              Ut in dui iaculis, sollicitudin tortor id, laoreet ipsum. Aliquam
              molestie augue eget risus laoreet, id pretium turpis porttitor.
            </p>
          </div>
        </section>
      </section>
      <section className="max-w-6xl p-5 m-auto ">
        <form action="" className="flex flex-col gap-4 w-96 m-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="p-5 bg-indigo-50 rounded-full focus:outline-fuchsia-600"
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-5 bg-indigo-50 rounded-full focus:outline-fuchsia-600"
          />
          <textarea
            placeholder="Content"
            className="p-5 bg-indigo-50 rounded-3xl focus:outline-fuchsia-600"
          />
          <button className="p-5 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full text-white text-base font-medium capitalize leading-tight">
            Lets Talk
          </button>
        </form>
      </section>
    </main>
  )
}
