import React from 'react'
import { AiOutlineSchedule } from 'react-icons/ai'
import { DiResponsive } from 'react-icons/di'
import { FaKeyboard } from 'react-icons/fa'
import { GiJuggler, GiTeamIdea } from 'react-icons/gi'
import { IoMdPeople } from 'react-icons/io'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { RiEmpathizeFill, RiEnglishInput, RiGoogleFill } from 'react-icons/ri'
import {
   SiGit,
   SiGraphql,
   SiJest,
   SiMaterialui,
   SiNextdotjs,
   SiNodedotjs,
   SiReact,
   SiRedux,
   SiStorybook,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/si'
import styled from 'styled-components'
import { Skill } from '../components/Skill'
import { StyledPage } from '../components/StyledPage'
import { device } from '../GlobalStyles'
const skills = [
   { icon: SiReact, title: 'React' },
   { icon: SiRedux, title: 'Redux' },
   { icon: SiTypescript, title: 'TypeScript' },
   { icon: SiGit, title: 'Git' },
   { icon: SiMaterialui, title: 'Material UI' },
   { icon: SiTailwindcss, title: 'Tailwind CSS' },
   { icon: DiResponsive, title: 'Responsive UI' },
   { icon: SiStorybook, title: 'Storybook' },
   { icon: SiNextdotjs, title: 'Next.js' },
   { icon: SiJest, title: 'Jest' },
   { icon: SiNodedotjs, title: 'Node.js' },
   { icon: SiGraphql, title: 'GraphQL' },
]
const metaSkills = [
   { icon: IoMdPeople, title: 'Communication' },
   { icon: GiTeamIdea, title: 'Team work' },
   { icon: RiEmpathizeFill, title: 'Empathy' },
   { icon: GiJuggler, title: 'Adaptability' },
   { icon: AiOutlineSchedule, title: 'Planning' },
   { icon: MdOutlineSupportAgent, title: 'Mentoring' },
]
const personalSkills = [
   { icon: RiGoogleFill, title: 'Googling' },
   { icon: RiEnglishInput, title: 'English' },
   { icon: FaKeyboard, title: 'Touch typing' },
]
const StyledSkills = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 30px;
   @media ${device.tablet} {
      grid-template-columns: repeat(2, 1fr);
   }
   @media ${device.laptop} {
      grid-template-columns: repeat(3, 1fr);
   }
   @media ${device.laptopL} {
      grid-template-columns: repeat(4, 1fr);
   }
`

const Container = styled.div`
   padding-bottom: 120px;
   h1 {
      text-align: center;
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 48px;
      margin: 50px 0 70px 0;
   }
   text {
      display: block;
      max-width: 600px;
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      margin-bottom: 36px;
   }
`

export const Skills = () => {
   const mappedSkills = skills.map(({ icon, title }) => (
      <Skill Icon={icon} title={title} key="title" />
   ))
   const mappedMetaSkills = metaSkills.map(({ icon, title }) => (
      <Skill Icon={icon} title={title} key="title" />
   ))
   const mappedPersonalSkills = personalSkills.map(({ icon, title }) => (
      <Skill Icon={icon} title={title} key="title" />
   ))
   return (
      <StyledPage>
         <Container>
            <h1>My Tech Stack</h1>
            <text>
               I have tried out lots of different technologies and am always
               open to new things. Here are the ones I have got most experience
               with:
            </text>
            <StyledSkills>{mappedSkills}</StyledSkills>
            <h1>My meta skills</h1>
            <text>
               I love exploring the world around me by talking to people,
               learning about their culture and making new connections. Over
               time I have developed many useful skills, here are some of them:
            </text>
            <StyledSkills>{mappedMetaSkills}</StyledSkills>
            <h1>My personal skills</h1>
            <text>
               I have always loved learning. There are so many things one can
               learn just by going online, it's fascinating! Here are things
               I've learned that help me in my professional setting:
            </text>
            <StyledSkills>{mappedPersonalSkills}</StyledSkills>
         </Container>
      </StyledPage>
   )
}
