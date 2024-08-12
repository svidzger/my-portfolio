import { useState } from 'react';
import '../styles/pages/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <div className='main-container'>
      <div className='page-container'>
        <section className='info-section'>
          <div className='info-content'>
            <h1 className='header-text'>Contact me!</h1>
            <p className='info-text'>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
              tempus parturient gravida pulvinar; lectus finibus lectus.
              Himenaeos ridiculus urna, ipsum magna malesuada viverra. Interdum
              ultrices natoque gravida sed mus, urna leo. Netus varius ultricies
              ad, hac hac sagittis molestie. Natoque gravida vestibulum dictum
              phasellus phasellus; commodo nisl est. Tortor curabitur sapien
              habitant orci mus sociosqu ultricies. Praesent vehicula luctus
              quisque phasellus habitant.
            </p>
          </div>
        </section>
        <section className='form-section'>
          <div className='form-content'>
            <form className='form-container' onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type='text'
                onChange={handleNameChange}
                className='form-input'
              />
              <label>Email</label>
              <input
                type='email'
                onChange={handleEmailChange}
                className='form-input'
              />
              <label>Message</label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                rows={4}
                cols={40}
                className='form-textarea'
              />
              <button className='form-button' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
