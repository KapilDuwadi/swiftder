import Link from 'next/link';
import { AiFillCheckCircle } from 'react-icons/ai';

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

export const HeroSection: React.FC = () => {
    return (
        <div className="lg:h-[500px] bg-orange-500 w-full rounded-3xl lg:flex">
            <div className="lg:w-1/2 text-white p-10 flex flex-col justify-between">
                <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl 
                            leading-[40px] md:leading-[55px] xl:leading-[70px]">
                    Process DER Applications in Few Minutes. </h1>
                <p className="py-5 xl:leading-[30px] xl:text-xl"> Automate processing distributed energy resource
                    (DER&apos;s) applications such as solar and energy storage
                    using state of art technical screening software solution.  </p>
                <Link href="/connect" className="text-orange-500 bg-white 
                    rounded-full px-3 py-2 xl:text-xl xl:px-5 font-bold w-max hover:text-white hover:bg-orange-700">
                    Connect with Us </Link>
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