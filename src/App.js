import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import styled from 'styled-components';
import Cards from './components/cards';
import Breakpoints from './Breakpoints';

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 2rem 15vw;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 1.5rem 10vw;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Cards />
      </Container>
    </ThemeProvider>
  );
}
