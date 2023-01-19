import { Line } from '../../styles/content';
import styles from './index.module.scss';
const SubTitleLine = () => {
  return (
    <>
      <Line width={'2rem'} secondary className={styles.line} />
      <span className={styles.line}>
        <Line width={'1.5rem'} secondary />
      </span>
    </>
  );
};

export default SubTitleLine;
