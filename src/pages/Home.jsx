import React from 'react'
import Hero from '../Components/SectionHome/Hero'

import FeatureSection from '../Components/SectionHome/FeatureSection'
import BatteryAndTechnology from '../Components/SectionHome/BatteryAndTechnology'
import Experience from '../Components/SectionHome/Experience'
import AppSupport from '../Components/SectionHome/AppSupport'
import Ecosystem from '../Components/SectionHome/Ecosystem'
import FinalCTA from '../Components/SectionHome/FinalCTA'
import ProductHighlights from '../Components/SectionHome/ProductHightlights'

const Home = () => {
  return (
    <main className="w-full bg-background text-foreground">
      <div>
        <section>
          <Hero />
        </section>

        <section>
          <ProductHighlights />
        </section>

        <section>
          <FeatureSection />
        </section>

        <section>
          <BatteryAndTechnology />
        </section>

        <section>
          <Experience />
        </section>

        <section>
          <AppSupport />
        </section>

        <section>
          <Ecosystem />
        </section>

        <section>
          <FinalCTA />
        </section>
      </div>
    </main>
  )
}

export default Home
