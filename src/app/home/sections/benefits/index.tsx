import './style.css';
import { ShareIcon, FeaturesArrow, FilterIcon, SheildIcon, PresentationIcon, InteractiveIcon, LayersIcon, MoreIcon } from '@/app/Icons';

export function AGBenefits() {
  return <>
    <div className='heading'>
      <h1>Discover more <span className='grad-color-3'>AGEDB</span> benefits</h1>
    </div>
    <div className='benefits'>
      {benefits.map((benefit, index) => <BenefitsItem key={index} {...benefit} />)}
    </div>
  </>;
}



const benefits = [
  {
    icon: <ShareIcon />,
    header: "Graph Database Services",
    size: "l",
  },
  {
    icon: <FilterIcon />,
    header: "Recommendation System",
    size: "s",
  },
  {
    icon: <InteractiveIcon />,
    header: "High Availability",
    size: "s",
  },
  {
    icon: <LayersIcon />,
    header: "Relational Database Services",
    size: "l",
  },
  {
    icon: <SheildIcon />,
    header: "Fraud Detection System",
    size: "s",
  },
  {
    icon: <PresentationIcon />,
    header: "Data Integration",
    size: "s",
  },
  {
    icon: <MoreIcon />,
    header: "More",
    size: "xs",
  },
]

function BenefitsItem({ icon, header, size }: { icon: JSX.Element, header: string, size?: string }) {
  return <div className={`benefits-item benefits-item-${size}`}>
    <span className='benefits-item-icon'>{icon}</span>
    <h3 className='benefits-item-header'>{header}</h3>
    {size !== 'xs ' && <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>}
  </div>;
}

