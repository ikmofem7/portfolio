import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useContext, useState } from 'react';
import { ThemeContext, BaseTheme, DarkTheme } from '../helpers/theme-context';
import { LinkWrapper, Navigation } from '../styles/nav-styles';
import styles from './index.module.scss';
import {
  faHouseChimney,
  faUser,
  faDesktop,
  faComment,
  faBoltLightning,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { path: '', label: 'Home', icon: faHouseChimney },
  { path: '#about', label: 'About', icon: faUser },
  { path: '#services', label: 'Services', icon: faDesktop },
  // { path: '#certificates', label: 'Certificates', icon: faColumns },
  { path: '#contact', label: 'Contact', icon: faComment },
];

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  const { theme, setTheme } = useContext(ThemeContext);
  const { type } = theme;
  const handleToggle = () => {
    setTheme(theme.color == BaseTheme.color ? DarkTheme : BaseTheme);
  };
  const [activeMenu, setActiveMenu] = useState<string>('');

  const handleMenuAction = (selectedPath: string) => {
    setActiveMenu(selectedPath);
  };

  return (
    <div className={styles.main}>
      <LinkWrapper
        onClick={handleToggle}
        active={false}
        className={styles.themeIcon}
      >
        <FontAwesomeIcon icon={type === 'dark' ? faBoltLightning : faMoon} />
      </LinkWrapper>
      <Navigation>
        <div>
          {menuItems.map(({ path, icon, label }) => (
            <LinkWrapper
              key={path}
              active={activeMenu === path}
              onClick={() => handleMenuAction(path)}
              href={path}
            >
              <FontAwesomeIcon icon={icon} />
              <h2 className={styles.label}>{label}</h2>
            </LinkWrapper>
          ))}
        </div>
      </Navigation>
      {children}
    </div>
  );
};

export default Layout;
