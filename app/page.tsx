

import { AiFillCheckCircle } from 'react-icons/ai';
import { NavigationHeader } from './navigation-header';


interface HeroTagProps {
  content: string;
  style?: string;
}

const HeroTag: React.FC<HeroTagProps> = ({ content, style }) => {
  return (
    <div className={style}>
      <div className="text-orange-500 bg-white px-3 py-1 w-max 
              rounded-md text-2xl font-bold flex items-center gap-x-2">
        <AiFillCheckCircle className="text-green-500" />
        <p> {content} </p>
      </div>
    </div>

  )
}

const DistModelHeroSection: React.FC = () => {
  return (
    <div className='flex text-gray-60 flex-between'>
      <div className='lg:p-5 w-full lg:w-2/3 flex flex-col justify-center'>
        <h1 className='text-4xl xl:text-5xl leading-[50px] xl:leading-[65px] pb-2 font-medium'> Use latest distribution models.
          <br /> <span className='text-orange-500'> All the way up to the meter. </span></h1>
        <p className='py-3 text-xl pt-10 lg:pr-10 xl:text-2xl  xl:leading-[40px]'> We help utilities clean up power distribution
          models and help automate periodic model update.
          Use upto date distribution model for processing customer's
          distributed energy resource (DER) application. We can integrate
          with industry standard simulators such as Cyme, Synergi, Windmill and OpenDSS.</p>
      </div>
      <div className='w-1/3 hidden lg:block'>
        <img src="dist_model.png" className='w-full' />
      </div>
    </div>
  )
}

const AnalysisHeroSection: React.FC = () => {
  return (
    <div className='flex text-gray-60 flex-between'>
      <div className='w-1/3  hidden lg:block'>
        <img src="inverter.png" className='w-full' />
      </div>

      <div className='lg:px-10 py-5 w-full lg:w-2/3 flex flex-col justify-center'>
        <h1 className='text-4xl xl:text-5xl leading-[50px] xl:leading-[65px] pb-2 font-medium'> Use 8760 Analysis.
          <br /> <span className='text-orange-500'> Adopt SMART Inverter Settings when necessary. </span></h1>
        <p className='py-3 text-xl xl:text-2xl pt-10 xl:leading-[45px]'> Forget conventional heuristics. Use full year time series simulation
          to understand the impact of DER applications on the grid.</p>
      </div>

    </div>
  )
}

const RequirementHeroSection: React.FC = () => {
  return (
    <div className='flex text-gray-60 flex-between'>


      <div className='lg:p-5 w-full'>
        <h1 className='text-4xl leading-[50px] font-medium'> Adopt new PUC requirements
          <span className='text-orange-500'> As they come in. </span></h1>
        <p className='text-xl xl:text-2xl pt-5 xl:leading-[45px]'> Develop new screening template as new requirements arrive right from the user
          interface within minutes. Use pilot roll out to test in smaller geographical area before using for entire territory.</p>
      </div>

    </div>
  )
}

const HeroSection: React.FC = () => {
  return (
    <div className="lg:h-[500px] bg-orange-500 w-full rounded-3xl lg:flex">
      <div className="lg:w-1/2 text-white p-10 flex flex-col justify-between">
        <h1 className="font-bold text-5xl xl:text-6xl 
          leading-[55px] xl:leading-[70px]"> Process DER Applications in Few Minutes. </h1>
        <p className="py-5 xl:leading-[30px] xl:text-xl"> Automate processing distributed energy resource
          (DER’s) applications such as solar and energy storage
          using state of art technical screening software solution.  </p>
        <button className="text-orange-500 bg-white 
        rounded-full px-3 py-2 xl:text-xl xl:px-5 font-bold w-max"> Save by Enrolling Early </button>
      </div>
      <div className="lg:w-1/2 relative hidden lg:block">
        <img src="solar.jpg" className="object-cover 
          w-full h-full rounded-r-3xl" />
        <div className="absolute top-0 l-0 w-full items-center py-20 h-full flex flex-col 
          justify-between m-auto">
          <HeroTag content="Overvoltage Test Passed" />
          <HeroTag content="Reverse Flow Passed" style="pl-[60px]" />
          <HeroTag content="Thermal Test Passed" />
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <main>
      <div className="px-20 py-10 flex flex-col gap-y-10">
        <HeroSection />
        <DistModelHeroSection />
        <AnalysisHeroSection />
        <RequirementHeroSection />
      </div>
    </main>
  )
}
