
import MenuSection from '@/components/MenuSection'
import React from 'react'
import { sections } from '@/lib/data/orgnazedData';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col 0 gap-10">

      {sections.map((section, index) => (
        <MenuSection key={index} heading={section.heading} meals={section.meals} />
      ))}

    </main>
  )
}
