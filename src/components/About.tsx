import { treeContent } from '../constants/about';
import { useProfile } from '../hooks/useProfile';
import {
  Card,
  Heading,
  Heading2,
  Heading3,
  Line,
  SeperatorLine,
  Wrapper,
} from '../styles/content';
import styles from './index.module.scss';
import MultipleProgressBar from './ui/MultipleProgressBar';
import SubTitleLine from './ui/SubTitleLine';
import TreeStructure from './ui/TreeStructure';

const About = () => {
  const { personalInfo, details, skills } = useProfile();
  return (
    <Wrapper id="about" className={styles.about}>
      <Heading className={styles.heading}>
        About <Heading secondary> Me</Heading>
      </Heading>
      <section className={styles.personalInfoWrapper}>
        <div>
          <Heading3>PERSONAL INFOS</Heading3>
          <SubTitleLine />
          <ul className={styles.personalInfoContainer}>
            {personalInfo.map((item) => (
              <li key={item.id}>
                <span className={styles.personalInfoKey}>{item.key}:</span>
                <span className={styles.personalInfoValue}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.personalInfoDetailsContainer}>
          {details.map((detail) => (
            <Card key={detail.id} className={styles.personalInfoDetails}>
              <Heading2 secondary>
                {detail.quantity}
                <sup>+</sup>
              </Heading2>
              <p className={styles.detailsLabel}>
                <Line width={'2rem'} /> {detail.label}
              </p>
            </Card>
          ))}
        </div>
      </section>
      <SeperatorLine width="40vw" />
      <section className={styles.skillWrapper}>
        <Heading3 className={styles.skillHead}>My Skills</Heading3>
        <MultipleProgressBar progresses={skills} />
      </section>
      <SeperatorLine width="40vw" />
      <section>
        <Heading className={styles.heading}>
          Education <Heading secondary> & Experience</Heading>
        </Heading>
        <TreeStructure treeContent={treeContent} />
      </section>
      <SeperatorLine width="40vw" />
    </Wrapper>
  );
};

export default About;
