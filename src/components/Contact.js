import styled from 'styled-components'
import { AiFillLinkedin, AiFillBehanceCircle, AiFillGithub } from 'react-icons/ai';

function Contact() {
  return (
    <div id="contact">
      <Wrapper>
        <ContactContent>
          <Contacth2>CONTACT</Contacth2>
          <SocialIconLink href="https://www.linkedin.com/in/paulinevalero/" target='_blank' rel="noreferrer"><AiFillLinkedin/></SocialIconLink>
          <SocialIconLink href="https://github.com/paul1n4" target='_blank' rel="noreferrer"><AiFillGithub/></SocialIconLink>
          <SocialIconLink href="https://www.behance.net/paulinevalero" target='_blank' rel="noreferrer"><AiFillBehanceCircle/></SocialIconLink>
        </ContactContent>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  max-width: 902px;
  margin: auto;
`;

const ContactContent = styled.div`
  text-align: center;
  padding-block-start: 100px;
  padding-block-end: 100px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const Contacth2 = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-block-end: 50px;
`;

const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  padding: 10px;
`;

export default Contact