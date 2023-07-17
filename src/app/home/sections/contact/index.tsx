import './style.css';

export function AGContact() {
  return <div className='contact'>
    <div className='contact-content'>
      <form className='flex contact-content-form'>
        <div className='flex-col main-form-inputs'>
          <div className='contact-content-form-item'>
            <label className='contact-content-form-label'>First Name</label>
            <input className='contact-content-form-input' type='text' />
          </div>

          <div className='contact-content-form-item'>
            <label className='contact-content-form-label'>Last Name</label>
            <input className='contact-content-form-input' type='text' />
          </div>
          <div className='contact-content-form-item'>

            <label className='contact-content-form-label'>Email</label>
            <input className='contact-content-form-input' type='text' />
          </div>

          <div className='contact-content-form-item'>
            <label className='contact-content-form-label'>Phone</label>
            <input className='contact-content-form-input' type='text' />
          </div>

          <div className='contact-content-form-item'>
            <label className='contact-content-form-label'>Subject</label>
            <input className='contact-content-form-input' type='text' />
          </div>

          <div className='contact-content-form-item'>
            <label className='contact-content-form-label'>Message</label>
            <textarea className='contact-content-form-textarea' />
          </div>

        </div>
        <div className='flex-col'>
          <label className='contact-content-form-label'>Inquiry Types</label>
          <div className='contact-content-form-radio'>
            <input type='radio' name='inquiry' value='General' />
            <label>General</label>
          </div>
          <div className='contact-content-form-radio'>
            <input type='radio' name='inquiry' value='Sales' />
            <label>Sales</label>
          </div>
          <div className='contact-content-form-radio'>
            <input type='radio' name='inquiry' value='Support' />
            <label>Support</label>
          </div>
          <div className='contact-content-form-radio'>
            <input type='radio' name='inquiry' value='Other' />
            <label>Other</label>
          </div>

          <button className='contact-content-form-button'>Send</button>
        </div>
      </form>
    </div>
  </div>;
}