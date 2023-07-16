'use client'

import Link from 'next/link';
import type { ReactNode } from 'react';

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
    <style jsx>
      {`
        .navbar-container {
          top: 0;
          position: sticky;
          background: rgba(247, 240, 255, 0.60);
          backdrop-filter: blur(15px);
          width:100vw;
          z-index:100;
        }
        .navbar-content {
          height: 80px;
          width: 1184px;
          margin: 0 auto;
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
        @media (prefers-color-scheme: dark) {
          .navbar-container {
            background: rgba(0, 0, 0, 0.60);
            color: var(--white, #fff);            
          }
          .navbar :global(li) {
          color: #F40F92;
          }
        }
      `}
    </style>
  </div>
);

export { Navbar };
