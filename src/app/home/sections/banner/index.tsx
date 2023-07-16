import './style.css';
import { ArrowIcon } from '@/app/Icons';

export function AGBanner() {
  return <div className="banner">
    <div className='banner-content' style={{ marginTop: 122, marginLeft: 64 }}>
      <h1 className='banner-header'>Advanced Graph Enterprise Database</h1>
      <div className='banner-body mt-10 ml-1'>
        <p className='banner-paragraph'>
          We are a reliable and innovative data solution provider that offers advanced database management services with our own graph and relational database products. As one of top contributors to Apache AGE project, we shape the future of data management.
        </p>
      </div>
      <div className='banner-footer'>
        <button className='banner-footer-btn hover:bg-pink-700 text-white font-bold rounded-full' style={{ padding: "0.95rem 1.6rem 0.95rem 1.6rem" }}>
          Contact Us
        </button>
        <h3 className='banner-footer-text'>
          <span className='mr-2'> learn more about apache AGE </span>
          <span className='banner-footer-icon arrow-icon'>
            <ArrowIcon />
          </span>
        </h3>
      </div>
    </div>
  </div>;
}
