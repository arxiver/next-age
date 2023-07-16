'use client'

import Link from 'next/link';
import type { ReactNode } from 'react';
import '@/components/navbar/Navbar.css';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="navbar-container">
    <div className="navbar-content flex flex-wrap items-center justify-between">
      <div className='logo'>
        <Link href="/">{props.logo}</Link>
      </div>
      <nav>
        <ul className="navbar flex items-center text-xl font-medium text-purple">
          {props.children}
        </ul>
      </nav>
    </div>
  </div>
);

export { Navbar };
