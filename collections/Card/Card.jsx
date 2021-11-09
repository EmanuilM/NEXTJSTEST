// The Card to be exported goes here

import {
  StyledCard,
  StyledCardDescriptionWrapper,
  StyledCardHeading,
  StyledCardDescription,
} from "./elements";

export const Card = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <i>{icon}</i>
      <StyledCardDescriptionWrapper>
        <StyledCardHeading>{title}</StyledCardHeading>
        <StyledCardDescription>{description}</StyledCardDescription>
      </StyledCardDescriptionWrapper>
    </StyledCard>
  );
};
