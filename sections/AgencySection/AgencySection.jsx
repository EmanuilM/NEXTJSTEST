import {
  StyledBackgroundWrapper,
  StyledCardsWrapper,
  StyledImageWrapper,
  StyledSectionContent,
  StyledSectionWrapper,
  StyledHeading,
  StyledSubHeading,
  Card,
  BsFillBriefcaseFill,
  FaSearch,
  GiPitchfork,
} from "./elements";



import Image from "next/image";

const icons = [<BsFillBriefcaseFill />, <FaSearch />, <GiPitchfork />];

export const AgencySection = (props) => {
  return (
    <StyledSectionWrapper>
      <StyledBackgroundWrapper>
        <Image
          src={props.backgroundImage.src}
          alt={props.backgroundImage.alt}
          width={props.backgroundImage.width}
          height={props.backgroundImage.height}
        />
      </StyledBackgroundWrapper>
      <StyledHeading>{props.heading}</StyledHeading>
      <StyledSubHeading>{props.subHeading}</StyledSubHeading>

      <StyledSectionContent>
        <StyledImageWrapper>
          <Image
            src={props.videoImage.src}
            alt={props.videoImage.alt}
            layout="fill"
          />
        </StyledImageWrapper>

        <StyledCardsWrapper>
          {props.cards.map((card, index) => (
            <Card key={index} icon={icons[index]} {...card} />
          ))}
        </StyledCardsWrapper>
      </StyledSectionContent>
    </StyledSectionWrapper>
  );
};
