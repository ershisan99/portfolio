import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../GlobalStyles'

type PropsType = {
   Icon: any
   title: string
}

const StyledSkill = styled.figure`
   padding: 20px 27px;
   width: 100%;
   min-width: 280px;
   height: 100px;
   display: flex;
   align-items: center;
   background-color: ${({ theme }) => theme.colors.primary};
   cursor: pointer;
   transition: ease-in-out 0.2s;
   color: ${({ theme }) => theme.colors.textSecondary};
   border-radius: 20px;

   h2 {
      width: 100%;
      display: flex;
      justify-content: center;
   }

   svg {
      height: auto;
      width: 80px;
      transition: ease-in-out 1s;
   }

   &:hover {
      transform: scale(1.03);
   }

   &:hover svg {
      transform: rotate(360deg);
   }

   @media ${device.tablet} {
      height: auto;
      svg {
         width: 70px;
      }
   }
`

export const Skill: FC<PropsType> = ({ Icon, title }) => {
   return (
      <StyledSkill>
         <Icon />
         <h2>{title}</h2>
      </StyledSkill>
   )
}
