import './style.css';

export function AGBio() {
  return <div className='bio' id='product'>
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
  </div>;
}
