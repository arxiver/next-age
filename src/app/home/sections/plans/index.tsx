import { ArrowIcon, RightMark, FeaturesArrow } from '@/app/Icons';
import './style.css';

export function AGPlans() {
  return <>
    <div className='heading' id='price'>
      <h1>
        Find out the most <br />
        suitable <span className='grad-color'> AGEDB</span> plan <br />
        for your business
      </h1>
    </div>
    <div className='plans'>
      {plans.map((plan, index) => <PlanItem key={index} {...plan} />)}
    </div>
  </>;
}


const plans = [
  {
    type: "FOR INDIVIDUALS AND SMALL COMPANIES",
    headerElement: <>Community</>,
    paragraph: "Leverage your business using Apache AGE, turning your Postgres into a multi-model graph database.",
    software: [
      "Apache AGE",
      "Apache AGE Viewer",
    ],
    support: [
      "Support available during business hours",
      "Troubleshooting & bug fixes via email support",
      "Support timeframe: 5 business days",
    ],
  },
  {
    type: "FOR MEDUIM AND LARGE CORPORATIONS",
    headerElement: <span className='grad-color-2'>Enterprise</span>,
    paragraph: "Leverage your business using Apache AGE, turning your Postgres into a multi-model graph database.",
    software: [
      "AGEDB Community",
      "AgensSQL",
      "AEM & AHM",
    ],
    support: [
      "Dedicated and instant 24/7 Support & Monitoring",
      "Support timeframe: 24 hours",
    ],
  },
]



function PlanItem({ type, headerElement, paragraph, software, support }: { type: string, headerElement: JSX.Element, paragraph: string, software: string[], support: string[] }) {
  return <div className='plans-item'>
    <p className='plan-item-type-text'>{type}</p>
    <h1 className='plan-item-header'><b>AGEDB</b> {headerElement} </h1>
    <p className='plan-item-para'>
      {paragraph}
    </p>
    <div className='plan-item-content'>
      <div className='plan-item-content-item'>
        <h3 className='plan-item-content-item-header'>Software</h3>
        {software.map((item, index) => <div key={index} className='plan-item-content-item-point'>
          <span className='plan-item-content-item-point-icon'><RightMark /></span>
          <span className='plan-item-content-item-point-text'>{item}</span>
        </div>)}
      </div>
      <div className='plan-item-content-item'>
        <h3 className='plan-item-content-item-header'>Support</h3>
        {support.map((item, index) => <div key={index} className='plan-item-content-item-point'>
          <span className='plan-item-content-item-point-icon'><RightMark /></span>
          <span className='plan-item-content-item-point-text'>{item}</span>
        </div>)}
      </div>
    </div>
    <div className='plan-item-footer'>
      <button className='plan-item-footer-btn bg-pink hover:bg-pink-700 text-white font-bold rounded-full' style={{ padding: "0.95rem 1.6rem 0.95rem 1.6rem" }}>
        Contact Us
      </button>
      <h3 className='plan-item-footer-text'>
        <span className='plan-item-footer-text-content'> Learn More </span>
        <span className='plan-item-footer-icon arrow-icon'>
          <ArrowIcon color='#150136' />
        </span>
      </h3>
    </div>
  </div>;
}

