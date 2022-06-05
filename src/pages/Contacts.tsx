import styled from 'styled-components'
import { Button } from '../components/styled/Button.styled'
import { Input, Textarea } from '../components/styled/Input.Styled'
import { StyledPage } from '../components/StyledPage'
import emailjs from '@emailjs/browser'
import { FormEventHandler, useRef } from 'react'
const StyledContacts = styled.div`
   h1 {
      text-align: center;
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 48px;
      margin: 50px 0 70px 0;
   }
   article {
      display: block;
      max-width: 600px;
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      margin-bottom: 36px;
   }

   form {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 20px;

      textarea {
         resize: none;
      }

      button {
         max-width: 200px;
      }
   }
`

export const Contacts = () => {
   const form = useRef<HTMLFormElement>(null)
   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      emailjs
         .sendForm(
            process.env.REACT_APP_SERVICE_ID || '',
            process.env.REACT_APP_TEMPLATE_ID || '',
            form.current || '',
            process.env.REACT_APP_PUBLIC_KEY
         )
         .then(
            (result) => {
               alert('Your message has been sent successfully!')
               form.current && form.current.reset()
            },
            (error) => {
               alert(error.text)
            }
         )
   }
   return (
      <StyledPage id="contacts">
         <StyledContacts>
            <h1>Get in Touch</h1>
            <article>
               Want to build something amazing together? Reach out to me using
               the form below!
            </article>
            <form onSubmit={sendEmail} ref={form}>
               <Input label="Name" type="text" name="user_name" />
               <Input label="Email" type="email" name="user_email" />
               <Textarea rows={5} label="Message" name="message" />
               <Button type="submit">Send</Button>
            </form>
         </StyledContacts>
      </StyledPage>
   )
}
