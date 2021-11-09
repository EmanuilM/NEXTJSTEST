// Styled elements for the Card go here

import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph } from "~/components";

export const StyledCard = styled(({ ...props }) => <section {...props} />)`
  background: #f1f1f1;
  border: 3px solid transparent;
  margin-top: 10px;
  display: flex;
  align-items: center;
  & > i {
    font-size: 30px;
    margin-right: 30px;
  }
  border-radius: 10px;
  padding: 20px;
  &:hover {
    border: 3px solid #0066fe;
    & h4 {
      color: #0066fe;
      text-decoration: underline;
    }
  }
  &:nth-child(1) {
    width: 86%;
  }
  &:nth-child(2) {
    width: 92%;
  }
  &:nth-child(3) {
    width: 100%;
  }
`;

export const StyledCardDescriptionWrapper = styled(({ ...props }) => (
  <article {...props} />
))`
  width: 287px;
  text-align: left;
`;

export const StyledCardHeading = styled(({ ...props }) => (
  <SectionInnerHeading {...props} />
))`
  margin: 0;
  font-weight: bold;
`;

export const StyledCardDescription = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
  & > p {
    margin: 0;
  }
`;
