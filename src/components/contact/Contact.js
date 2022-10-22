import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, styled, Avatar, Badge } from '@mui/material';
import { RiSendPlaneFill } from 'react-icons/ri';
import contactMe from '../../img/profile.png';
import './contact.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: '7%',
    height: '7%',
    borderRadius: '50%',
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <section id="contact">
        <h4>Keep In Touch</h4>
      <h2>Contact Me</h2>
      <div class='speech-bubble'>
        <p className='bubble-text'>Drop Me A Line !</p>
      </div>
        <div className='form-wrapper'>
          <div className='contact-img'>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="contact-to-jacob" src={contactMe} sx={{ width: 340, height: 350 }} />
            </StyledBadge>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <TextField name="user_name" id="outlined-basic" className='text text-1' label="Name" variant="outlined" />
            <TextField name="user_email" id="outlined-basic" className='text text-2' label="Email" variant="outlined" />
            <TextField name="message" id="outlined-multiline-static" className='text text-3' label="Message" variant="outlined" multiline rows={4}/>
            <Button className='contact-btn' type="submit" value="Send" variant="contained" endIcon={<RiSendPlaneFill />}>
              Send
            </Button>
          </form>
        </div>
      </section>
  );
};

export default Contact