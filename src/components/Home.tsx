import { Wrapper, Heading2 } from '../styles/content';
import profile from '../resources/profile2.png';
import styles from './index.module.scss';
import { Typewriter } from './ui/TypeWritter';
import SocialIcons from './ui/SocialIcons';
const text = [
  'Software Developer',
  'Web Developer',
  'Mobile Developer',
  'Professional Coder',
];

const Home = () => {
  return (
    <Wrapper id="#home" className={styles.home}>
      <div>
        {/* <SlantingDiv /> */}
        <div className={styles.profileWrapper}>
          <img src={profile} alt="profile" height={400} />
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
