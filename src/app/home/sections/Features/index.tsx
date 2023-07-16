
import Image from 'next/image';
import './style.css';

export function AGFeatures() {
  return <div className='features' id='resources'>
    <div className='features-content'>
      <div className='feature feature-1'>
        <div className='feature-content'>
          <Image className="feature-content-icon" src="./age/physics.png" width="48" height="48" alt='arrow-icon' />
          <div className='feature-text'>
            <h3 className='feature-header'>Looking to Migrate from Oracle database?</h3>
            <p className='feature-paragraph'>
              We offer a free migration service from Oracle to Postgres.
              We can also help you migrate from Oracle to AGE.
            </p>
            <div className='feature-footer'>
              <h4 className='learn-more'>Learn more</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='feature feature-2'>
        <div className='feature-content'>
          <div className='feature-content-icon-container'>
            <Image className="feature-content-icon" src="./age/speed test.png" width="48" height="48" alt='arrow-icon' />
          </div>
          <div className='feature-text'>
            <h3 className='feature-header'>Need Advanced Data Analytics and Insights?</h3>
            <p className='feature-paragraph'>
              Tap into your data&#39;s full potential with AGEDB&#39;s advanced analytics capabilities. Gain deep insights and make data-driven decisions effortlessly.
            </p>
          </div>
          <div className='feature-footer'>
            <h4 className='learn-more'>Learn more</h4>
          </div>
        </div>
      </div>
      <div className='feature feature-3'>
        <div className='feature-content'>
          <div className='feature-content-icon-container'>
            <Image className="feature-content-icon" src="./age/medal.png" width="48" height="48" alt='arrow-icon' />
          </div>
          <div className='feature-text'>
            <h3 className='feature-header'>Seeking a Enterprise Postgres Upgrade?</h3>
            <p className='feature-paragraph'>
              Experience enhanced performance, scalability, and security with AGEDB&#39;s Postgres and AgensSQL solution. Make your data management hassle-free and efficient.
            </p>
          </div>
        </div>
        <div className='feature-footer'>
          <h4 className='learn-more'>Learn more</h4>
        </div>
      </div>
    </div>
  </div>;
}
