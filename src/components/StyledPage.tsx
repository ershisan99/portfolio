import styled from 'styled-components'
import { device } from '../GlobalStyles'

export const StyledPage = styled.div`
   padding: 0 30px;
   min-height: calc(100vh - 64px);

   @media ${device.tablet} {
      padding: 0 40px;
   }

   @media ${device.laptop} {
      padding: 0 100px;
   }
`
