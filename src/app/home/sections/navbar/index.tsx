"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';

import './style.css';

export function AGNavbar() {
  return <Navbar logo={<Image src="./age/Vector.svg" alt="AGEDBlogo" height={46} width={144.712} />}>
    <li> <Link href={"#product"}> Product </Link> </li>
    <li> <Link href={"#resources"}> Resources </Link> </li>
    <li> <Link href={"#price"}> Price </Link> </li>
    <li> <Link href={"#company"}> Company </Link> </li>
    <li style={{ width: "130px", height: "48px", flexShrink: 0, }}>
      <Link href={"#contact"}>
        <button className="contact-us-btn bg-pink hover:bg-pink-700 text-white font-bold rounded-full" style={{ padding: "0.95rem 1.7rem 0.95rem 1.66rem" }}>
          Contact Us
        </button>
      </Link>
    </li>
  </Navbar>;
}


type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};


const Navbar = (props: INavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return <div className="navbar-container">
    <div className="navbar-content flex flex-wrap items-center justify-between">
      <div className='logo'>
        <Link href="/">{props.logo}</Link>
        <div className="navbar-toggle" onClick={() => setNavbarOpen(!navbarOpen)}>
          <div className="toggle-icon"></div>
          <div className="toggle-icon"></div>
          <div className="toggle-icon"></div>
        </div>
      </div>
      <nav>
        <ul className={`navbar flex items-center text-xl font-medium text-purple navbar-list ${navbarOpen ? "responsive" : ""}`}>
          {props.children}
        </ul>
      </nav>
    </div>
  </div>
};

export { Navbar };
