type BackGround = { navMenuBg: string; content: string };

type Theme = {
  color: string;
  background: BackGround;
  secondaryColor: string;
  boxShadow: string;
  border: string;
  cardHover: string;
  input: {
    background: string;
    boxShadow: string;
    border: string;
  };
  type: string;
};

type HeadingProps = {
  secondary?: boolean;
  theme: Theme;
};

interface TreeContent {
  title: string;
  subTitle?: string;
  node: {
    title: string;
    description: string;
    subDescription?: string;
    reference?: string;
  }[];
}

export { Theme, BackGround, HeadingProps, TreeContent };
