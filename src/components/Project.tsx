import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../GlobalStyles'
type PropsType = {
   title: string
   text: string
   imageSrc: string
   demoLink: string
   codeLink: string
}
const StyledProject = styled.div`
   background-color: ${({ theme }) => theme.colors.accent};
   max-width: 360px;
   flex-grow: 1;
   flex-shrink: 1;
   cursor: pointer;
   border-radius: 20px;
   transition: ease-in-out 0.3s;
   margin: 0 auto 40px;
   max-width: 360px;
   min-width: 320px;
   &:hover {
      transform: scale(1.1);
      a {
         visibility: visible;
         opacity: 1;
      }
   }
   @media ${device.tablet} {
      max-width: 500px;
      min-width: 400px;
   }
`
const InfoContainer = styled.div`
   padding: 20px;
   h4 {
      font-size: 24px;
   }
   p {
      font-size: 18px;
   }
`
const PreviewContainer = styled.div`
   position: relative;
   img {
      width: 100%;
      border-radius: 20px 20px 0 0;
   }
   a {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 40%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      transition: visibility 0.5s, opacity 0.5s ease-in-out;
   }

   a:last-of-type {
      top: 60%;
   }
`

export const Project: FC<PropsType> = ({
   title,
   text,
   imageSrc,
   demoLink,
   codeLink,
}) => {
   return (
      <StyledProject>
         <PreviewContainer>
            <img src={imageSrc} alt={title} />
            <a href={demoLink}>Demo</a>
            <a href={codeLink}>Code</a>
         </PreviewContainer>
         <InfoContainer>
            <h4>{title}</h4>
            <text>{text}</text>
         </InfoContainer>
      </StyledProject>
   )
}
