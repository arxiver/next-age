/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowIcon, DiscordIcon, RedditIcon, GithubIcon, RightMark, ShareIcon, FeaturesArrow, FilterIcon, SheildIcon, PresentationIcon, InteractiveIcon, LayersIcon } from './Icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar logo={<Image src="./age/Vector.svg" alt="AGEDBlogo" height={46} width={144.712} />}>
        <li> <Link href={"#product"}> Product </Link> </li>
        <li> <Link href={"#resources"}> Resources </Link> </li>
        <li> <Link href={"#price"}> Price </Link> </li>
        <li> <Link href={"#company"}> Company </Link> </li>
        <li style={{ width: "130px", height: "48px", flexShrink: 0, }}>
          <button className="contact-us-btn bg-pink hover:bg-pink-700 text-white font-bold rounded-full" style={{ padding: "0.95rem 1.7rem 0.95rem 1.66rem" }}>
            Contact Us
          </button>
        </li>
      </Navbar>
      <div className="banner">
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
      </div>
      <div className='bio'>
        <div className='bio-content'>
          <p>
            We&#39;re <span className='bio-hl'> AGEDB</span>,
            a company that provides enterprise-grade&nbsp;
            <span className='bio-hl'>relational and graph databases</span>.
            We also offer expert&nbsp;
            <span className='bio-hl'>services</span> to manage this databases.
            Proudly, we contribute to a top level Apache project called&nbsp;<br /><span className='bio-hl'>Apache AGE</span>,
            which makes Postgres even better by adding cool&nbsp;
            <span className='bio-hl'>graph database functionality.</span>
          </p>
        </div>
      </div>
      <div className='features'>
        <div className='features-content'>
          <div className='feature feature-1'>
            <div className='feature-content'>
              <Image className="feature-content-icon" src={"age/physics.png"} width="48" height="48" alt='arrow-icon' />
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
                <Image className="feature-content-icon" src={"age/speed test.png"} width="48" height="48" alt='arrow-icon' />
              </div>
              <div className='feature-text'>
                <h3 className='feature-header'>Need Advanced Data Analytics and Insights?</h3>
                <p className='feature-paragraph'>
                  Tap into your data's full potential with AGEDB's advanced analytics capabilities. Gain deep insights and make data-driven decisions effortlessly.
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
                <Image className="feature-content-icon" src={"age/medal.png"} width="48" height="48" alt='arrow-icon' />
              </div>
              <div className='feature-text'>
                <h3 className='feature-header'>Seeking a Enterprise Postgres Upgrade?</h3>
                <p className='feature-paragraph'>
                  Experience enhanced performance, scalability, and security with AGEDB's Postgres and AgensSQL solution. Make your data management hassle-free and efficient.
                </p>
              </div>
            </div>
            <div className='feature-footer'>
              <h4 className='learn-more'>Learn more</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='code-view'>
        <div className='code-view-content'>
          <div className='code-view-content-text'>
            <h3 className='code-view-header'>What is Apache AGE?</h3>
            <p className='code-view-paragraph'>
              Apache AGE® is a PostgreSQL extension that provides graph database functionality. The goal of Apache AGE® is to provide graph data processing and analytics capability to all relational databases.
            </p>
            <button className='code-view-btn bg-pink hover:bg-pink-700 text-white font-bold rounded-full' style={{ padding: "0.95rem 1.6rem 0.95rem 1.6rem" }}>
              View Full Document
            </button>
            <div className='code-view-footer'>
              <div className='code-view-footer-item'>
                <span className='code-view-footer-item-icon'>
                  <DiscordIcon />
                </span>
                <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
                  <span className='code-view-footer-item-text'>Connect with developers on Discord</span>
                  <span className='code-view-footer-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
                </Link>
              </div>
              <div className='code-view-footer-item'>
                <span className='code-view-footer-item-icon'>
                  <RedditIcon />
                </span>
                <Link href='https://www.reddit.com/r/apacheage/' style={{ display: 'flex' }}>
                  <span className='code-view-footer-item-text'>Ask and answer on Reddit forum</span>
                  <span className='code-view-footer-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
                </Link>
              </div>
              <div className='code-view-footer-item'>
                <span className='code-view-footer-item-icon'>
                  <GithubIcon />
                </span>
                <Link href='https://github.com/apache/age' style={{ display: 'flex' }}>
                  <span className='code-view-footer-item-text'>Download and contribute on Github</span>
                  <span className='code-view-footer-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='code-view-area'>
          <div className='code-view-area-line-numbers'>
            <div className='line-numbers'>
              <span className='line-number'>1</span>
              <span className='line-number'>2</span>
              <span className='line-number'>3</span>
              <span className='line-number'>4</span>
              <span className='line-number'>5</span>
              <span className='line-number'>6</span>
              <span className='line-number'> </span>
              <span className='line-number'> </span>
              <span className='line-number'>7</span>
              <span className='line-number'> </span>
              <span className='line-number'> </span>
              <span className='line-number'>8</span>
            </div>
          </div>
          <div className='code-view-area-content'>
            <div className='code comment'>
              # To create an edge and set properties.
            </div>
            <div className='code'>
              SELECT <span className='code-hl-sql'>*</span>  <br />
              FROM cypher(<span className='code-hl'>'graph_name'</span>, $$ <br />
              MATCH (a:label), (b:label) <br />
              WHERE a.property = <span className='code-hl'>'Node A'</span> AND b.property = <br /> <span className='code-hl'>'Node B'</span> <br />
              {`CREATE (a)-[e:RELTYPE {property:a.property +`} <br />
              <span className='code-hl'>{`'<->'`}</span> {`+ b.property}]->(b) RETURN e`} <br />
              $$) as (e agtype)<span className='code-hl-sql'>;</span>
            </div>
          </div>
        </div>
      </div>
      <div className='heading'>
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
      <div className='heading'>
        <h1>Discover more <span className='grad-color-3'>AGEDB</span> benefits</h1>
      </div>
      <div className='benefits'>
        <div className='benefits-item benefits-item-l'>
          <span className='benefits-item-icon'><ShareIcon /></span>
          <h3 className='benefits-item-header'>Graph Database Services</h3>
          <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
        </div>
        <div className='benefits-item benefits-item-s'>
          <span className='benefits-item-icon'><FilterIcon /></span>
          <h3 className='benefits-item-header'>Recommendation System</h3>
          <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
        </div>
        <div className='benefits-item benefits-item-s'>
          <span className='benefits-item-icon'><InteractiveIcon /></span>
          <h3 className='benefits-item-header'>High Availability</h3>
          <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
        </div>
        <div className='benefits-item benefits-item-l'>
          <span className='benefits-item-icon'><LayersIcon /></span>
          <h3 className='benefits-item-header'>Relational Database Services</h3>
          <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
        </div>
        <div className='benefits-item benefits-item-l'>
          <span className='benefits-item-icon'><SheildIcon /></span>
          <h3 className='benefits-item-header'>Fraud Detection System</h3>
          <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
        </div>
        <div className='benefits-item benefits-item-s'>
          <span className='benefits-item-icon'><PresentationIcon /></span>
          <h3 className='benefits-item-header'>Data Integration</h3>
          <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
        </div>

      </div>
    </main >
  )
}

