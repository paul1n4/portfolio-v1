import { Link } from 'react-router-dom';
import styled from 'styled-components'
import mfw from '../images/mfw.png'
import nemium from '../images/nemium.png'

function Projects() {

  const handleMfw = () => {
    window.open('https://musicforawhile.at/')
  }
 
  const handleNemium = () => {
    window.open('https://paul1n4.github.io/curso-html-css/index.html')
  }

  return (
    <ProjectsDiv id="projects">
      <Wrapper>
        <ProjectsContent>
          <Projecth2>PROJECTS</Projecth2>

          <ProjectOne>
            <Img src={mfw} alt="preview of website music for a while"/>
            <ProjectContent>
              <Projecth3>Music for a while</Projecth3>
              <p>Web page created for a music organization that promotes stage art. Created in wordpress and elementor and you can view the webpage in german.</p>
              <Button onClick={handleMfw}>Visit Site</Button> 
            </ProjectContent>
          </ProjectOne>
          
          <ProjectTwo>
            <ProjectContent>
              <Projecth3>HTML and CSS course</Projecth3>
              <p>Created with vanilla html and css, shows 5 different ways to style the same content.</p>
              <Button onClick={handleNemium}>Visit Site</Button> 
            </ProjectContent>
            <Img src={nemium} alt="preview of website music for a while"/>
          </ProjectTwo>

        </ProjectsContent>
      </Wrapper>
    </ProjectsDiv>
  )
}

const ProjectsDiv = styled.div`
  background-color: #f2f2f2;
`;

const Wrapper = styled.div`
  max-width: 902px;
  margin: auto;
`;

const ProjectsContent = styled.div`
  padding-block-start: 100px;
  padding-block-end: 100px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const Projecth2 = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-block-end: 50px;
`;

const ProjectOne = styled.div`
  display: flex;
  margin-block-end: 80px;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
   flex-direction: column-reverse;
   text-align: center;
  }
`;

const ProjectTwo = styled.div`
  display: flex;
  margin-block-end: 80px;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
   flex-direction: column;
   text-align: center;
  }
`;

const ProjectContent = styled.div`
  max-width: 500px;

  p {
    margin-block-end: 30px;
  }
`;

const Projecth3 = styled.h3`
  font-size: 1.5rem;
  margin-block-end: 10px;
`;

const Img = styled.img`
  height: 500px;
  margin-inline-end: 50px;
  margin-inline-start: 50px;
  
`;

const Button = styled.button`
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  padding-block-end: 8px;
  padding-block-start: 8px;
  background: #ecdc88;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-block-end: 30px;
  }
`;


export default Projects