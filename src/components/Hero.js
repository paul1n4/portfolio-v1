import styled from 'styled-components'
import background from '../images/background.jpg'

const Hero = () => {
  return (
    <Section>
      <Wrapper>
        <SectionContent>
          <HeroH1>PAULINA VALERO</HeroH1>
          <HeroP>Frontend developer & Graphic Designer</HeroP>
        </SectionContent>
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
`;

const Wrapper = styled.div`
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SectionContent = styled.div`
  text-align: center;
`;

const HeroH1 = styled.h1`
  margin-block-end: 20px;
  font-size: 2.5rem;
  font-weight: 300;
`;

const HeroP = styled.div`
`;

export default Hero