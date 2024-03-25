import BeefBurgers from '@/components/BeefBurgers'
import ChickenBurger from '@/components/ChickenBurger'
import OnTop from '@/components/OnTop'
import Popular from '@/components/Popular'
import Salads from '@/components/Salads'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen w-s flex-col items-center justify-between p-24">
      <Popular />
      <BeefBurgers />
      <ChickenBurger />
      <OnTop />
      <Salads />

    </main>
  )
}
