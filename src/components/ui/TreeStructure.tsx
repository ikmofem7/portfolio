import {
  SecondaryText,
  Heading2,
  Heading3,
  Card,
  Line,
} from '../../styles/content';
import { TreeWrapper, TreeChild } from '../../styles/tree';
import { TreeContent } from '../../types';
import styles from './index.module.scss';

type Props = {
  treeContent: TreeContent[];
};

const TreeStructure = ({ treeContent }: Props) => {
  return (
    <div className={styles.treeWrapper}>
      {treeContent.map((treeElement) => {
        const { title, subTitle, node } = treeElement;
        return (
          <div key={title}>
            <SecondaryText className={styles.subTitle}>
              {subTitle}
            </SecondaryText>
            <Heading2>{title}</Heading2>
            <TreeWrapper>
              {node.map((element) => {
                const {
                  title,
                  subDescription,
                  description,
                  reference,
                  techStack,
                } = element;
                return (
                  <TreeChild key={title}>
                    <div className={styles.titleContainer}>
                      <div>
                        <Heading3>{title}</Heading3>
                        <p className={styles.description}>{description}</p>
                      </div>
                      <Card className={styles.reference}>
                        <SecondaryText>{reference}</SecondaryText>
                      </Card>
                    </div>
                    <Line width={'100%'} />
                    <p className={styles.description}>{subDescription}</p>
                    {Boolean(techStack) && (
                      <>
                        <p className={styles.techStackLabel}>
                          Tech Stack used:
                        </p>
                        <p>{techStack}</p>
                      </>
                    )}
                  </TreeChild>
                );
              })}
            </TreeWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default TreeStructure;
