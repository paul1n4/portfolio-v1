import styled from 'styled-components'
import paulina from '../images/paulina.JPG'

function About() {
  return (
    <div className="about">
      <Wrapper>
        <AboutContent>
          <Abouth2>ABOUT ME</Abouth2>
          <Img src={paulina} alt="paulina smiling " />
          <p>Hi I'm Paulina, I'm a frontend developer and graphic designer.</p>
        </AboutContent>
      </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
  margin-inline-end: 40px;
  margin-inline-start: 40px;
`;

const AboutContent = styled.div`
  margin-block-start: 90px;
  margin-block-end: 90px;
  text-align: center;
`;

const Abouth2 = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`;

const Img = styled.img`
  width: 300px;
  border-radius: 100%;
  margin-block-end: 30px;
  margin-block-start: 30px;
`;


export default About