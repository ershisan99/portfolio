import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
// @ts-ignore (no type declarations for vantajs)
import BIRDS from 'vanta/dist/vanta.birds.min'
import { AnchorButton } from '../components/styled/AnchorButton.styled'
import { device, theme } from '../GlobalStyles'
const StyledArticle = styled.article`
   h1 {
      font-weight: 700;
      font-size: 50px;
      line-height: 68px;
      font-family: 'Nunito', sans-serif;
   }
   h5 {
      font-weight: 400;
      font-size: 28px;
      line-height: 38px;
   }
   p {
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0.06em;
      margin-top: 20px;
   }
   a {
      margin-top: 36px;
   }
   strong {
      color: ${({ theme }) => theme.colors.primary};
   }
`
const StyledSection = styled.section`
   padding: 0 30px;
   min-height: calc(100vh - 64px);

   @media ${device.tablet} {
      padding: 0 40px;
   }
   @media ${device.laptop} {
      padding: 0 100px;
   }
`
const Container = styled.div`
   height: calc(100vh - 64px);
   display: flex;
   align-items: center;
   justify-content: space-between;

   img {
      max-width: 350px;
      margin-right: 160px;
   }
`
export const Intro = () => {
   const [vantaEffect, setVantaEffect] = useState<any>(0)
   const myRef = useRef(null)
   useEffect(() => {
      if (!vantaEffect) {
         setVantaEffect(
            BIRDS({
               el: myRef.current,
               mouseControls: true,
               touchControls: true,
               gyroControls: false,
               minHeight: 200.0,
               minWidth: 200.0,
               scale: 1.3,
               scaleMobile: 1.0,
               backgroundColor: theme.colors.body,
               color1: theme.colors.primary,
               color2: theme.colors.accent,
               colorMode: 'lerp',
               birdSize: 1.3,
               wingSpan: 22.0,
               separation: 30.0,
               alignment: 79.0,
               cohesion: 76.0,
               quantity: 4.5,
            })
         )
      }
      return () => {
         if (vantaEffect) vantaEffect.destroy()
      }
   }, [vantaEffect])
   return (
      <StyledSection ref={myRef} id="intro">
         <Container>
            <StyledArticle>
               <h5>Hello,</h5>
               <h1>
                  I’m <strong>Andrii Zadorozhnyi</strong>
               </h1>
               <p>Developer and mentor</p>
               <AnchorButton
                  href="https://drive.google.com/file/d/15Seg1HAaqwcgwxunIPXj-AK0VFQrZeY3/view?usp=sharing"
                  target="_blank"
               >
                  Download CV
               </AnchorButton>
            </StyledArticle>
         </Container>
      </StyledSection>
   )
}
