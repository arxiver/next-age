'use client'

import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="navbar-container flex flex-wrap items-center justify-between">
    <div className='logo'>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-purple">
        {props.children}
      </ul>
    </nav>
    <style jsx>
      {`
        .navbar-container {
          height: 80px;
          width: 100%;
          background: rgba(247, 240, 255, 0.60);
          backdrop-filter: blur(15px);
        }
        .navbar :global(li:not(:first-child)) {
          margin-top: 0 !important;
        }

        .navbar :global(li) {
          color: var(--purple, #33126A);
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .navbar :global(li:not(:last-child)) {
          margin-right: 40px; 
        }
      `}
    </style>
  </div>
);

export { Navbar };
