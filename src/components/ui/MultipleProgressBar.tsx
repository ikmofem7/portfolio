import { ProgressBar, ProgressBarContainer } from '../../styles/content';
import styles from './index.module.scss';

type Props = {
  progresses: { quantity: number; label: string; id: string }[];
};

const MultipleProgressBar = ({ progresses }: Props) => {
  return (
    <div className={styles.progressContainer}>
      {progresses.map((item) => {
        const { label, quantity, id } = item;
        return (
          <div key={id}>
            <p className={styles.title}>{label}</p>
            <ProgressBarContainer>
              <ProgressBar percentage={quantity} />
            </ProgressBarContainer>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleProgressBar;
