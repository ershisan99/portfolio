import styled from 'styled-components'
import { device } from '../../GlobalStyles'

const StyledHeader = styled.header`
   background-color: ${({ theme }) => theme.colors.primary};
   height: 64px;
   padding: 0 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-weight: 700;
   font-size: 24px;
   line-height: 33px;
   color: ${({ theme }) => theme.colors.textSecondary};

   h1 {
      font-family: 'Nova Mono';
      font-weight: 400;
      font-size: 30px;
      line-height: 50px;
      color: ${({ theme }) => theme.colors.accent};
   }
   @media ${device.tablet} {
      padding: 0 40px;
   }
   @media ${device.laptop} {
      padding: 0 100px;
   }
`
const StyledNav = styled.nav`
   display: flex;
   gap: 50px;
   a {
      display: inline-block;
      position: relative;
   }
   a:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.textSecondary};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
   }
   a:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
   }
`

//todo: add dropdown to skills nav
export const Header = () => {
   return (
      <StyledHeader>
         <h1>ANDres.data</h1>
         <StyledNav>
            <a href="#intro">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
         </StyledNav>
      </StyledHeader>
   )
}
