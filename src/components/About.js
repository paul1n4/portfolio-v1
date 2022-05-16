import styled from 'styled-components'
import paulina from '../images/paulina.jpg'

function About() {
  return (
    <div id="about">
      <Wrapper>
        <AboutContent>
          <Abouth2>ABOUT ME</Abouth2>
          <Img src={paulina} alt="paulina smiling " />
          <p>Hi I'm Paulina, I'm a frontend developer and graphic designer.</p>
          <p>I like to create things and to know how things are done.</p>
        </AboutContent>
      </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
  max-width: 902px;
  margin: auto;
`;

const AboutContent = styled.div`
  text-align: center;
  margin-block-start: 150px;
  margin-block-end: 150px;
  padding-inline-start: 25px;
  padding-inline-end: 25px;
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