import styled from "styled-components";

export const Container = styled.section`
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
`;

export const Headline = styled.h1`
  margin: 0 0 1em 0;
  text-transform: uppercase;
`;

export const Copy = styled.p`
  margin: 0;
  line-height: 1.2;
`;

export default {
  Container,
  Copy,
  Headline
};
