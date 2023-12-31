import Image from 'next/image';
import './style.css';

export function AGHelp() {
  return <div className='help'>
    <div className='help-content'>
      <h2 className='help-content-header'>Have questions? We’re here to help</h2>
      <p className='help-content-body'>We&#39;re here to listen. Your messages, opinions, and feedback are highly valued. Whether you have a question, an idea, or just want to share your thoughts, don&#39;t hesitate to reach out to us. We&#39;re all ears and ready to assist you!</p>
    </div>
    <div className='help-map'>
      <Image src="./age/map.png" width="568" height="323" alt='map' />
    </div>
  </div>;
}
