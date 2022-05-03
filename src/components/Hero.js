import styled from 'styled-components'
import background from '../images/background.jpg'

const Hero = () => {
  return (
    <Section>
      <Wrapper>
        <SectionContent>
          <HeroH1>Paulina Valero</HeroH1>
          <HeroP>Frontend developer & Graphic Designer</HeroP>
        </SectionContent>
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  background: url(${background});
  background-size: cover;
`;

const Wrapper = styled.div`
  height: 750px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SectionContent = styled.div`
  border: 1px solid red;
  text-align: center;
`;

const HeroH1 = styled.h1`
  margin-block-end: 20px;
  font-size: 2.5rem;
`;

const HeroP = styled.div`
`;

export default Hero