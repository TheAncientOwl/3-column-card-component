import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const CardsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;

  min-height: 25em;

  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 0.8em;
  overflow: hidden;

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 100%;
  }
`;

export const Card = styled.div`
  font-family: 'Lexend', sans-serif;
  position: relative;

  background: ${({ bgColor }) => bgColor};

  padding: 2.5em 2em 9em 2em;

  @media (max-width: ${Breakpoints.mobile}) {
    padding-bottom: 7em;
  }
`;

export const CardIcon = styled.img``;

export const CardTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 1em;
  font-size: 1.5em;
  color: ${({ theme }) => theme.lightGray};
`;

export const CardDescription = styled.div`
  margin-top: 1em;
  font-size: 0.9em;
  max-width: 85%;
  color: ${({ theme }) => theme.white};

  @media (max-width: ${Breakpoints.mobile}) {
    max-width: 90%;
  }
`;

export const CardLearnMore = styled.div`
  position: absolute;
  left: 1.5em;
  bottom: 1.5em;
  min-height: 1.25em;
  font-size: 1.25em;
  color: ${({ color }) => color};
  background: ${({ theme }) => theme.lightGray};
  padding: 0.5em 1em;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 1.2em;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 1.5em;
  }

  &:hover {
    background: ${({ theme }) => theme.white};
  }
`;
