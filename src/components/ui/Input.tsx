import { ChangeEvent, useContext } from 'react';
import { StyledInput, Textarea } from '../../styles/Input';
import styles from './index.module.scss';
import { ThemeContext } from 'styled-components';
type Props = {
  elementType?: 'textarea' | 'email';
  onChange: (name: string, value: string) => void;
  name: string;
  valid: boolean;
  touched: boolean;
  label: string;
  errorMessage?: string;
  value: string;
};

const Input = (props: Props) => {
  const {
    name,
    onChange,
    valid,
    touched,
    elementType = 'text',
    label,
    errorMessage,
    value,
  } = props;
  const themeContext = useContext(ThemeContext);
  const { secondaryColor } = themeContext;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    onChange(name, value);
  };
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}

        {elementType == 'textarea' ? (
          <Textarea
            name={name}
            onChange={handleChange}
            valid={valid}
            touched={touched}
            rows={5}
            value={value}
          />
        ) : (
          <StyledInput
            type={elementType}
            name={name}
            onChange={handleChange}
            valid={valid}
            touched={touched}
            value={value}
          />
        )}
      </label>
      <p className={styles.errorMessage} style={{ color: secondaryColor }}>
        {!valid && errorMessage}
      </p>
    </div>
  );
};

export default Input;
