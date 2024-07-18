import Hero from './Hero'
import Promotion from './Promotion'
import Swiping from './Swiping'

export default function LandingPage() {
  return (
    <section className="mt-4">
      <Swiping />
      <Hero />
      <Promotion />
    </section>
  )
}
