import { Navbar } from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

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
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none">
                  <g clip-path="url(#clip0_1_414)">
                    <path d="M27 16L31 12M31 12L27 8M31 12L6 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_414">
                      <rect width="24" height="37" fill="white" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 37 24)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className='bio'>
        <div className='bio-content'>
          <p>
            We're <span className='bio-hl'> AGEDB</span>,
            a company that provides enterprise-grade&nbsp;
            <span className='bio-hl'>relational and graph databases</span>. 
            We also offer expert&nbsp;
            <span className='bio-hl'>services</span> to manage this databases.
            Proudly, we contribute to a top level Apache project called &nbsp;
            <span className='bio-hl'>Apache AGE</span>,
            which makes Postgres even better by adding cool&nbsp;
            <span className='bio-hl'>graph database functionality.</span>
          </p>
        </div>
      </div>
    </main >
  )
}
