import { Wrapper, Heading2 } from '../styles/content';
import profile from '../resources/profile2.webp';
import styles from './index.module.scss';
import { Typewriter } from './ui/TypeWritter';
import SocialIcons from './ui/SocialIcons';
import styled from 'styled-components';
const text = [
  'Software Developer',
  'Web Developer',
  'Mobile Developer',
  'Professional Coder',
  'Frontend Developer',
];

const BackDroppedImg = styled.img`
  filter: drop-shadow(0 2px 4px ${({ theme }) => theme.secondaryColor});
`;

const Home = () => {
  return (
    <Wrapper id="#home" className={styles.home}>
      <div>
        {/* <SlantingDiv /> */}
        <div>
          <BackDroppedImg src={profile} alt="profile" />
        </div>
      </div>
      <div className={styles.content}>
        <Heading2 secondary> - I&apos;M Mohamed Ikram - </Heading2>
        <Heading2>
          <Typewriter text={text} />
        </Heading2>
        <p>
          I&apos;m developer focused on crafting user‑friendly experiences, I am
          passionate about building excellent software that improves the lives
          of those around me.
        </p>
        <SocialIcons />
      </div>
    </Wrapper>
  );
};

export default Home;
