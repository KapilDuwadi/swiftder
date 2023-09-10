interface SubHeadlineSectionProps {
    titleFirst: string;
    titleSecond: string;
    description: string;
    forceFullWidth?: boolean;
}

const SubHeadlineSection: React.FC<SubHeadlineSectionProps> = ({
    titleFirst, titleSecond, description, forceFullWidth
}) => {

    const containerStyle: string = forceFullWidth ?
        `w-full` :
        `lg:p-5 w-full lg:w-2/3 flex flex-col justify-center`;

    return (
        <div className={containerStyle}>
            <h1 className='text-4xl xl:text-5xl leading-[50px] xl:leading-[65px] pb-2 font-medium'> {titleFirst}
                {forceFullWidth ? null : <br />} <span className='text-orange-500'> {titleSecond} </span></h1>
            <p className='py-3 text-xl pt-10 lg:pr-10 xl:text-2xl  xl:leading-[40px]'>
                {description}
            </p>
        </div>
    )
}

interface SubHeadingImageSectionProps {
    image: string
}
const SubHeadingImageSection: React.FC<SubHeadingImageSectionProps> = ({ image }) => {
    return (
        <div className='w-1/3 hidden lg:block'>
            <img src={image} className='w-full' />
        </div>
    )
}

const SubHeadingContainerStyle = `flex text-gray-60 flex-between`;


export const DistModelHeading: React.FC = () => {
    const titleFirst: string = `Use latest distribution models.`
    const titleSecond: string = `All the way up to the meter.`
    const description: string = `We help utilities clean up power distribution
    models and help automate periodic model update.
    Use upto date distribution model for processing customer&apos;s
    distributed energy resource (DER) application. We can integrate
    with industry standard simulators such as Cyme, Synergi, Windmill and OpenDSS.`

    return (
        <div className={SubHeadingContainerStyle}>
            <SubHeadlineSection
                titleFirst={titleFirst}
                titleSecond={titleSecond}
                description={description}
            />

            <SubHeadingImageSection
                image='dist_model.png'
            />
        </div>
    )
}

export const AnalysisHeading: React.FC = () => {

    const titleFirst: string = `Use 8760 Analysis.`;
    const titleSecond: string = `Adopt SMART Inverter Settings when necessary.`;
    const description: string = ` Forget conventional heuristics. Use full year time series simulation
    to understand the impact of DER applications on the grid.`;

    return (
        <div className={SubHeadingContainerStyle}>

            <SubHeadingImageSection
                image='inverter.png'
            />

            <SubHeadlineSection
                titleFirst={titleFirst}
                titleSecond={titleSecond}
                description={description}
            />

        </div>
    )
}

export const RequirementsHeading: React.FC = () => {

    const titleFirst: string = `Adopt new PUC requirements`;
    const titleSecond: string = `As they come in.`;
    const description: string = `Develop new screening template as new requirements arrive right from the user
    interface within minutes. Use pilot roll out to test in smaller geographical area before using for entire territory.`
    return (
        <div className={SubHeadingContainerStyle}>

            <SubHeadlineSection
                titleFirst={titleFirst}
                titleSecond={titleSecond}
                description={description}
                forceFullWidth={true}
            />

        </div>
    )
}