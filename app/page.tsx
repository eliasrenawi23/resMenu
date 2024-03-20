import BeefBurgers from '@/components/BeefBurgers'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BeefBurgers />

      {/* {[...Array(5)].map((_, outerIndex) => (
        <section key={`section-${outerIndex + 1}`} id={`section-${outerIndex}`} className="scroll-mt-28 mb-28">




          <div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 flex-row-reverse'>
            {[...Array(10)].map((_, innerIndex) => (
              <React.Fragment key={`inner-section-${innerIndex}`}>
                <section id={`inner-section-${innerIndex}`} className="border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[10rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                  <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                    <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                      src="/next.svg"
                      alt="Next.js Logo"
                      width={180}
                      height={37}
                      priority
                    />
                    {innerIndex + 1}

                  </div>

                </section>

              </React.Fragment>
            ))}
          </div>
        </section>
      ))} */}


    </main>
  )
}
