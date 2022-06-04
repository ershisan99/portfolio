import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../GlobalStyles'

type PropsType = {
   imgSrc: string
   title: string
   imgAlt: string
}

const StyledSkill = styled.div`
   padding: 20px 27px;
   width: 80%;
   height: 100px;
   margin: 0 0 40px 0;
   display: flex;
   align-items: center;
   background-color: ${({ theme }) => theme.colors.primary}
   cursor: pointer;
   transition: ease-in-out 0.2s;
   color: var(--dark_color);
   border-radius: var(--borderRadiusCustom);

   h2 {
    width: 100%;
    display: flex;
    justify-content: center;
   }
   
   img { 
    height: auto;
    width: 80px;
    transition: ease-in-out 1s;
   }

   &:hover: {
    transform: scale(1.03);
   }

   &:hover .img {
    transform: rotate(360deg);
   }
 
   @media ${device.laptop} {
    height: auto;
    width: 280px; 

    img {
        width: 70px
    }
  }
`
export const Skill: FC<PropsType> = ({ imgSrc, title, imgAlt }) => {
   return (
      <StyledSkill>
         <img src={imgSrc} alt={imgAlt} />
         <h2>{title}</h2>
      </StyledSkill>
   )
}
