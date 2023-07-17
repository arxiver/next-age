
import Image from 'next/image';
import './style.css';
import Link from 'next/link';


export function AGFeatures() {
  return <div className='features' id='resources'>
    <div className='features-content'>
      {features.map((feature, index) => <FeatureItem key={index} {...feature} index={index+1} />)}
    </div>
  </div>;
}

function FeatureItem({ icon, header, paragraph, link, index }: { icon: string, header: string, paragraph: string, link: string, index?: number }) {
  return <div className={`feature feature-${index}`}>
    <div className='feature-content'>
      <Image className="feature-content-icon" src={icon} width="48" height="48" alt='icon' />
      <div className='feature-text'>
        <h3 className='feature-header'>{header}</h3>
        <p className='feature-paragraph'>
          {paragraph}
        </p>
        <LearnMore link={link} />
      </div>
    </div>
  </div>;
}


function LearnMore({ link }: { link?: string }) {
  return <Link href={link || '/'} style={{ display: "flex" }}>
    <div className='feature-footer'>
      <h4 className='learn-more'>Learn more</h4>
    </div>
  </Link>;
}

const features = [
  {
    icon: "./age/physics.png",
    header: "Looking to Migrate from Oracle database?",
    paragraph: "We offer a free migration service from Oracle to Postgres. We can also help you migrate from Oracle to AGE.",
    link: "/",
  },
  {
    icon: "./age/speed test.png",
    header: "Need Advanced Data Analytics and Insights?",
    paragraph: "Tap into your data's full potential with AGEDB's advanced analytics capabilities. Gain deep insights and make data-driven decisions effortlessly.",
    link: "/",
  },
  {
    icon: "./age/medal.png",
    header: "Seeking a Enterprise Postgres Upgrade?",
    paragraph: "Experience enhanced performance, scalability, and security with AGEDB's Postgres and AgensSQL solution. Make your data management hassle-free and efficient.",
    link: "/",
  },
];