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
      div {
         visibility: visible;
         opacity: 1;
      }
      img {
         opacity: 0.5;
         backdrop-filter: blur(3px);
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
      transition: ease-in-out 0.3s;
   }
   a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 10px;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background: transparent;
      width: 100px;
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      &:hover {
         background: ${({ theme }) => theme.colors.primary};
         color: ${({ theme }) => theme.colors.textSecondary};
      }
   }
`
const LinkContainer = styled.div`
   visibility: hidden;
   opacity: 0;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   transition: visibility 0.5s, opacity 0.5s ease-in-out;
   display: flex;
   flex-direction: column;
   gap: 15px;
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
            <LinkContainer>
               <a href={demoLink}>Demo</a>
               <a href={codeLink}>Code</a>
            </LinkContainer>
         </PreviewContainer>
         <InfoContainer>
            <h4>{title}</h4>
            <p>{text}</p>
         </InfoContainer>
      </StyledProject>
   )
}
