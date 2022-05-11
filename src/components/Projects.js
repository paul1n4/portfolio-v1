import styled from 'styled-components'
import mfw from '../images/mfw.png'
import nemium from '../images/nemium.png'

function Projects() {
  return (
    <ProjectsDiv id="projects">
      <Wrapper>
        <ProjectsContent>
          <Projecth2>PROJECTS</Projecth2>

          <Project>
            <Img src={mfw} alt="preview of website music for a while"/>
            <ProjectContent>
              <Projecth3>Music for a while</Projecth3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tortor vel urna maximus tempor.</p>
              <Button>Visit Site</Button> 
            </ProjectContent>
          </Project>
          
          <Project>
            <ProjectContent>
              <Projecth3>Music for a while</Projecth3>
              <p>Created with vanilla html and css</p>
              <Button>Visit Site</Button> 
            </ProjectContent>
            <Img src={nemium} alt="preview of website music for a while"/>
          </Project>

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
  margin-block-end: 30px;
`;

const Project = styled.div`
  display: flex;
  margin-block-end: 80px;
  align-items: center;
  justify-content: center;
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
  height: 400px;
  margin-inline-end: 30px;
  margin-inline-start: 30px;
`;

const Button = styled.button`
  padding-inline-start: 15px;
  padding-inline-end: 15px;
  padding-block-end: 5px;
  padding-block-start: 5px;
`;


export default Projects