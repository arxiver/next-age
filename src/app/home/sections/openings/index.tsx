import { ArrowIcon } from '@/app/Icons';
import './style.css';

export function AGOpenings() {
  return <>
    <div className='heading' id='company'>
      <h1 className='heading-content'>
        Join us, <br /> let&#39;s build better
      </h1>
    </div>
    <div className='headway'>
      <div className='headway-item headway-item-1'>
        <h5 className='headway-item-sub-header'>VANCOUVER / ON-SITE</h5>
        <h3 className='headway-item-header'>Community Operation Manager</h3>
        <div className='headway-item-footer'>
          <span className='headway-item-footer-text-content'> Learn More </span>
          <span className='headway-item-footer-icon arrow-icon'>
            <ArrowIcon />
          </span>
        </div>
      </div>
      <div className='headway-item headway-item-2'>
        <h5 className='headway-item-sub-header'>GLOBAL / REMOTE</h5>
        <h3 className='headway-item-header'>Software Engineering Intern</h3>
        <div className='headway-item-footer'>
          <span className='headway-item-footer-text-content'> Learn More </span>
          <span className='headway-item-footer-icon arrow-icon'>
            <ArrowIcon />
          </span>
        </div>
      </div>
    </div>
  </>;
}
