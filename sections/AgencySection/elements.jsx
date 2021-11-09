import styled from "styled-components";

export { Card } from "~/collections";
export { BsFillBriefcaseFill } from "react-icons/bs";
export { FaSearch } from "react-icons/fa";
export { GiPitchfork } from "react-icons/gi";

import { SectionHeading, SectionSubheading } from "~/components";

export const StyledHeading = styled(({ ...props }) => (
  <SectionHeading {...props} />
))`
  text-align: center;
`;

export const StyledSubHeading = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  text-align: center;
`;

export const StyledSectionWrapper = styled(({ ...props }) => (
  <section {...props} />
))`
  text-align: center;
`;

export const StyledBackgroundWrapper = styled(({ ...props }) => (
  <div {...props} />
))`
  position: absolute;
  z-index: -1;
`;
export const StyledSectionContent = styled(({ ...props }) => (
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

export const StyledCardsWrapper = styled(({ ...props }) => (
  <section {...props} />
))`
  width: 400px;
  padding: 20px;
`;

export const StyledImageWrapper = styled(({ ...props }) => <div {...props} />)`
  position: relative;
  width: 300px;
  height: 500px;
`;
