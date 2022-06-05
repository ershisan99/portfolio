import styled from 'styled-components'
import { device, size } from '../GlobalStyles'

export const StyledPage = styled.section`
   padding: 0 30px;
   min-height: 100vh;

   @media ${device.tablet} {
      padding: 0 40px;
   }

   @media ${device.laptop} {
      padding: 0 100px;
   }
   @media ${device.laptopL} {
      display: flex;
      justify-content: center;
      & > div {
         width: ${size.laptopL};
      }
   }
`
