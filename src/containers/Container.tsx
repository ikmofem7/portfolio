import styled from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Services from '../components/Service';

const Wrapper = styled.main`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background.content};
  display: flex;
`;

const Container = () => {
  return (
    <Wrapper>
      <Layout>
        <Home />
        <About />
        <Services />
        <Contact />
      </Layout>
    </Wrapper>
  );
};

export default Container;
