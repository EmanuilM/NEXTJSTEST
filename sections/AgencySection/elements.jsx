import styled from "styled-components";

export const StyleSectionWrapper = styled(({ ...props }) => (
  <section {...props} />
))`
  text-align: center;
`;

export const StyleImageWrapper = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  z-index: -1;
`;
export const StyleSectionContent = styled(({ ...props }) => (
  <section {...props} />
))`
  display: flex;
  justify-content: center;
  & > img {
    width: 300px;
    margin-right: 50px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyleCardsWrapper = styled(({ ...props }) => (
  <section {...props} />
))`
  width: 400px;
  padding: 20px;
`;
