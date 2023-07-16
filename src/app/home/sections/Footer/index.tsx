import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, DiscordIcon, RedditIcon, GithubIcon, TwitterIcon, LinkedInIcon } from '@/app/Icons';
import './style.css';

export function AGFooter() {
  return <div className='footer'>
    <div className='footer-logo'>
      <Image src="./age/Vector.svg" width={144.712} height="46" alt='logo' />
    </div>
    <div className='footer-content'>
      <div className='footer-content-item'>
        <div className='footer-content-item-r'>
          <div className='footer-content-item-c'>
            <b className='footer-content-item-c-header'>ABOUT</b>
            <p className='footer-content-item-c-item'>AGEDB</p>
            <p className='footer-content-item-c-item'>Careers</p>
            <p className='footer-content-item-c-item'>Privacy Policy</p>
          </div>
          <div className='footer-content-item-c'>
            <b className='footer-content-item-c-header'>RESOURCES</b>
            <p className='footer-content-item-c-item'>Use Cases</p>
            <p className='footer-content-item-c-item'>Blogs</p>
          </div>
        </div>
        <div className='footer-content-item-r copyright'>© 2023 Advanced Graph Enterprise Database Inc.</div>
      </div>
      <div className='footer-content-item'>
        <div className='footer-content-links-list'>
          <div className='footer-content-links-list-item'>
            <span className='footer-content-links-list-item-icon'><TwitterIcon /></span>
            <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
              <span className='footer-content-links-list-item-text'>Catch our latest updates on Twitter</span>
              <span className='footer-content-links-list-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
          <div className='footer-content-links-list-item'>
            <span className='footer-content-links-list-item-icon'><LinkedInIcon /></span>
            <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
              <span className='footer-content-links-list-item-text'>Join our professional network on LinkedIn</span>
              <span className='footer-content-links-list-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
          <div className='footer-content-links-list-item'>
            <span className='footer-content-links-list-item-icon'><DiscordIcon /></span>
            <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
              <span className='footer-content-links-list-item-text'>Connect with developers on Discord</span>
              <span className='footer-content-links-list-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
          <div className='footer-content-links-list-item'>
            <span className='footer-content-links-list-item-icon'><RedditIcon /></span>
            <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
              <span className='footer-content-links-list-item-text'>Ask and answer on Reddit forum</span>
              <span className='footer-content-links-list-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
          <div className='footer-content-links-list-item'>
            <span className='footer-content-links-list-item-icon'><GithubIcon /></span>
            <Link href='https://discord.com/invite/NMsBs9X8Ss' style={{ display: 'flex' }}>
              <span className='footer-content-links-list-item-text'>Download and contribute on Github</span>
              <span className='footer-content-links-list-item-arrow-icon'> <ArrowIcon color='#150136' /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
