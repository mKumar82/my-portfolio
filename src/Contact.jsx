import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return <Wrapper>
    <h2 className='common-heading'>Feel free to contact us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14031.531874550017!2d76.99299537426432!3d28.452944085691673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d178f699116bb%3A0xc30bdbaa7c744676!2sSector%2010%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1676897955932!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form" >
        <form action='https://formspree.io/f/xrgvqqwe' method="POST" className='contact-inputs'>
            <input type="text" name='username' placeholder='username' required autoComplete='off'/>
            <input type="email" name='Email' placeholder='Email' required autoComplete='off'/>
            <textarea name='message' cols='30' rows='6'  required autoComplete='off'></textarea>
            <input type='submit' value='send'/>
        </form>

      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
`;

export default Contact
