


import { HeroSection } from './hero-section';
import { AnalysisHeading, DistModelHeading, RequirementsHeading } from './subheadings';


export default function Home() {
  return (
    <main>
      <div className="px-10 lg:px-20 py-10 flex flex-col gap-y-10">
        <HeroSection />
        <DistModelHeading />
        <AnalysisHeading />
        <RequirementsHeading />
      </div>
    </main>
  )
}
