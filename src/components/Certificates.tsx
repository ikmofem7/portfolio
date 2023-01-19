import { Heading, SeperatorLine, Wrapper } from '../styles/content';
import styles from './index.module.scss';

const Certificates = () => {
  return (
    <Wrapper id="certificates">
      <Heading className={styles.heading}>Certificates</Heading>
      <SeperatorLine width="40vw" />
    </Wrapper>
  );
};

export default Certificates;
