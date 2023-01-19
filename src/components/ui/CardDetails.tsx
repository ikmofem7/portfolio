import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Card, SecondaryIcon, Heading3 } from '../../styles/content';
import styles from './index.module.scss';

type Props = {
  cardDetails: {
    title: string;
    description: string;
    icon: IconProp;
  }[];
};
const CardDetails = ({ cardDetails }: Props) => {
  const handleToContactSection = () => {
    window.location.href = '#contact';
  };
  return (
    <div className={styles.cardDetailsWrapper}>
      {cardDetails.map((detail) => {
        const { icon, title, description } = detail;
        return (
          <Card
            key={detail.title}
            className={styles.detailCard}
            onClick={() => handleToContactSection()}
          >
            <SecondaryIcon icon={icon} className={styles.infoIcon} />
            <Heading3 className={styles.detailHeading}>{title}</Heading3>
            <p>{description}</p>
            <SecondaryIcon
              icon={faArrowDown}
              className={styles.downArrowIcon}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default CardDetails;
