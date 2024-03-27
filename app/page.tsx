import MenuSection from '@/components/MenuSection'
import React from 'react'
import { sections } from '@/lib/data/orgnazedData';
import { LanguageProvider } from '@/context/ServerItlProvider';
import ChangeLang from '@/components/ChangeLang';


export default async function Home() {

  return (
    <LanguageProvider >
      <main className="flex min-h-screen flex-col 0 gap-10">
        {sections.map((section, index) => (
          <MenuSection key={index} heading={section.heading} meals={section.meals} />
        ))}
      </main>
      <ChangeLang />
    </LanguageProvider>
  )
}
