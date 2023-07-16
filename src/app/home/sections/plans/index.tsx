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
      <div className='plans-item'>
        <p className='plan-item-type-text'>FOR INDIVIDUALS AND SMALL COMPANIES</p>
        <h1 className='plan-item-header'><b>AGEDB</b> Community</h1>
        <p className='plan-item-para'>
          Leverage your business using Apache AGE, turning your Postgres into a multi-model graph database.
        </p>
        <div className='plan-item-content'>
          <div className='plan-item-content-item'>
            <h3 className='plan-item-content-item-header'>Software</h3>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Apache AGE</span>
            </div>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Apache AGE Viewer</span>
            </div>
          </div>
          <div className='plan-item-content-item'>
            <h3 className='plan-item-content-item-header'>Support</h3>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Support available during business hours</span>
            </div>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Troubleshooting & bug fixes via email support</span>
            </div>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Support timeframe: 5 business days</span>
            </div>
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
      </div>
      <div className='plans-item'>
        <p className='plan-item-type-text'>FOR MEDUIM AND LARGE CORPORATIONS</p>
        <h1 className='plan-item-header'><b>AGEDB</b> <span className='grad-color-2'>Enterprise</span></h1>
        <p className='plan-item-para'>Leverage your business using Apache AGE, turning your Postgres into a multi-model graph database.</p>
        <div className='plan-item-content'>
          <div className='plan-item-content-item'>
            <h3 className='plan-item-content-item-header'>Software</h3>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'><b>AGEDB Community</b></span>
            </div>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'><b>AgensSQL</b></span>
            </div>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'><b>AEM & AHM</b></span>
            </div>
          </div>
          <div className='plan-item-content-item'>
            <h3 className='plan-item-content-item-header'>Support</h3>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Dedicated and instant 24/7 Support & Monitoring</span>
            </div>
            <div className='plan-item-content-item-point'>
              <span className='plan-item-content-item-point-icon'><RightMark /></span>
              <span className='plan-item-content-item-point-text'>Support timeframe: 24 hours</span>
            </div>
          </div>
        </div>
        <div className='plan-item-footer'>
          <button className='plan-item-footer-btn bg-pink hover:bg-pink-700 text-white font-bold rounded-full' style={{ padding: "0.95rem 1.6rem 0.95rem 1.6rem" }}>
            Contact Us
          </button>
          <h3 className='plan-item-footer-text'>
            <span className='plan-item-footer-text-content'> Learn More </span>
            <span className='plan-item-footer-icon arrow-icon'>
              <FeaturesArrow />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </>;
}
