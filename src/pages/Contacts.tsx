import styled from 'styled-components'
import { Button } from '../components/Button.styled'
import { Input, Textarea } from '../components/Input'
import { StyledPage } from '../components/StyledPage'

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
   return (
      <StyledPage>
         <StyledContacts>
            <h1>Get in Touch</h1>
            <article>
               Want to build something amazing together? Reach out to me using
               the form below!
            </article>
            <form>
               <Input label="Name" />
               <Input label="Email" />
               <Textarea rows={5} label="Message" />
               <Button onSubmit={() => console.log('l;askdjf')}>Send</Button>
            </form>
         </StyledContacts>
      </StyledPage>
   )
}
