
import MenuSection from '@/components/MenuSection'
import React from 'react'
import { beefBurgers, chickenBurgers, onTop, salads, popular } from '@/lib/data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col 0 gap-10">

      <MenuSection heading={'Popular'} meals={popular} />
      <MenuSection heading={'Beef Burgers'} meals={beefBurgers} />
      <MenuSection heading={'Chicken Burgers'} meals={chickenBurgers} />
      <MenuSection heading={'OnTop'} meals={onTop} />
      <MenuSection heading={'Salads'} meals={salads} />

    </main>
  )
}
