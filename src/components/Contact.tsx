import { useContext, useState } from 'react';
import {
  Button,
  Card,
  Heading,
  Heading3,
  SeperatorLine,
  Wrapper,
} from '../styles/content';
import styles from './index.module.scss';
import { send } from '@emailjs/browser';
import Input from './ui/Input';
import { checkValidity } from '../helpers/form-validation';
import { toast, ToastContainer } from 'react-toastify';
import { ThemeContext } from 'styled-components';
import SocialIcons from './ui/SocialIcons';

interface FormState {
  name: string;
  regex: string;
  error: boolean;
  errorMessage?: string;
  value: string;
  rules?: {
    required: boolean;
    isEmail?: boolean;
    minLength?: number;
    isNumeric?: boolean;
    maxLength?: number;
  };
  valid: boolean;
  touched: boolean;
  label: string;
  elementType?: 'textarea' | 'email';
}

const initialState: FormState[] = [
  {
    name: 'name',
    regex: '',
    error: false,
    errorMessage: 'Enter valid Name',
    value: '',
    rules: {
      required: true,
      minLength: 4,
    },
    valid: true,
    touched: false,
    label: 'NAME',
  },
  {
    name: 'phone_no',
    regex: '',
    error: false,
    errorMessage: 'Enter valid Phone Number',
    value: '',
    rules: {
      required: true,
      minLength: 10,
      isNumeric: true,
    },
    valid: true,
    touched: false,
    label: 'PHONE NUMBER',
  },
  {
    name: 'email',
    regex: '',
    error: false,
    errorMessage: 'Enter valid Email',
    value: '',
    rules: {
      required: true,
      isEmail: true,
    },
    valid: true,
    touched: false,
    label: 'Email',
    elementType: 'email',
  },
  {
    name: 'subject',
    regex: '',
    error: false,
    errorMessage: 'Enter valid Subject',
    value: '',
    rules: {
      required: true,
    },
    valid: true,
    touched: false,
    label: 'SUBJECT',
  },
  {
    name: 'message',
    regex: '',
    error: false,
    value: '',
    valid: true,
    touched: false,
    label: 'Message',
    elementType: 'textarea',
  },
];

const Contact = () => {
  const [formObject, setFormObject] = useState<FormState[]>(initialState);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);
  const { background } = themeContext;
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isFormValid) {
      const updatedFormObject = formObject.map((item) => {
        const { value, rules } = item;
        item.valid = checkValidity(value, rules);
        return item;
      });
      return setFormObject(updatedFormObject);
    }
    const body = formObject.reduce((acc, current) => {
      acc = { ...acc, [current.name]: current.value };
      return acc;
    }, {});

    send('service_e7gw7ba', 'template_mrj099a', body, 'V-XOcPU8H82Jzf9Sn').then(
      () => {
        toast('Email Sent Successfully');
      },
      () => {
        toast('Error while sending email');
      }
    );
  };
  const handleChange = (name: string, value: string) => {
    const updatedFormObject = formObject.map((item) => {
      if (item.name === name) {
        item.value = value;
        item.valid = checkValidity(value, item.rules);
        setIsFormValid(item.valid);
      }
      return item;
    });
    setFormObject(updatedFormObject);
  };

  return (
    <Wrapper id="contact" className={styles.contact}>
      <Heading className={styles.heading}>Contact</Heading>
      <div className={styles.contentWrapper}>
        <Card className={styles.contactDetails}>
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
            alt="contact"
            decoding="async"
            loading="lazy"
            // srcSet="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png 460w, https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1-300x188.png 300w"
            // sizes="(max-width: 460px) 100vw, 460px"
          />
          <div className={styles.details}>
            <Heading3 className={styles.name}>Mohamed Ikram</Heading3>
            <p className={styles.contactLabel}>Software Engineer</p>
            <p>
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <div>
              <span className={styles.contactLabel}>Phone:</span>
              <span>+91-9489156145 , +91-6369885573</span>
            </div>
            <div>
              <span className={styles.contactLabel}>Email:</span>
              <span>mohameikramks7@gmail.com</span>
            </div>
            <SocialIcons />
          </div>
        </Card>
        <Card>
          <form onSubmit={sendEmail}>
            <div className={styles.grid}>
              {formObject.map((input) => {
                const { name, label, elementType, errorMessage, valid } = input;
                return (
                  <Input
                    key={name}
                    onChange={handleChange}
                    name={name}
                    valid={valid}
                    touched={false}
                    label={label}
                    elementType={elementType}
                    errorMessage={errorMessage}
                  />
                );
              })}
            </div>
            <div>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </Card>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: background.navMenuBg }}
      />
      <SeperatorLine width="40vw" />
    </Wrapper>
  );
};

export default Contact;
