import { seviceDetails } from '../constants/services';
import {
  Heading,
  Heading2,
  SecondaryText,
  SeperatorLine,
  Wrapper,
} from '../styles/content';
import styles from './index.module.scss';
import CardDetails from './ui/CardDetails';

const Services = () => {
  return (
    <Wrapper id="services" className={styles.services}>
      <Heading className={styles.heading}>Services</Heading>
      <SecondaryText className={styles.subTitle}>Features</SecondaryText>
      <Heading2 className={styles.title}>What I Do</Heading2>
      <CardDetails cardDetails={seviceDetails} />
      <SeperatorLine width="40vw" />
    </Wrapper>
  );
};

export default Services;
