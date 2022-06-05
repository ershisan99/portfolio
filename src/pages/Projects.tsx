import styled from 'styled-components'
import cards from '../assets/images/cards.png'
import studentNotes from '../assets/images/student-notes.png'
import { Project } from '../components/Project'
import { StyledPage } from '../components/StyledPage'
import { device } from '../GlobalStyles'

const projects = [
   {
      title: 'Flash cards',
      text: 'As a mentor at IT-incubator I had to complete the final team project. We teamed up with 2 students with me as the team lead. I did code reviews, resolved merge conflicts, helped my team with their questions and worked with the API.',
      imageSrc: cards,
      demoLink: 'https://ershisan99.github.io/cards',
      codeLink: 'https://github.com/ershisan99/cards',
   },
   {
      title: 'Student notes',
      text: 'Our students, in cooperation with one of the teachers, created a document featuring frequently asked questions and answers. I wanted to improve something about it, so I made a web app! It it connected to a headless CMS, so the contents can be easily edited without changing the source code.',
      imageSrc: studentNotes,
      demoLink: 'https://ershisan99.github.io/student-notes',
      codeLink: 'https://github.com/ershisan99/student-notes',
   },
]
const StyledProjects = styled.div`
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
const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 50px;
`
export const Projects = () => {
   const mappedProjects = projects.map((project) => <Project {...project} />)
   return (
      <StyledPage>
         <StyledProjects>
            <h1>My projects</h1>
            <text>
               Here are some of the projects I've worked on alone or as part of
               a team. These are not the best projects I've ever done, but
               rather most valuable in terms of experience.
            </text>
            <Container>{mappedProjects}</Container>
         </StyledProjects>
      </StyledPage>
   )
}
