import {
  StyleSectionWrapper,
  StyleSectionContent,
  StyleCardsWrapper,
  StyleImageWrapper,
} from "./elements";
import {
  SectionHeading,
  SectionSubheading,
} from "../../components/Typography/index";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GiPitchfork } from "react-icons/gi";

import Image from "next/image";

import { Card } from "../../collections/Card/Card";

const icons = [<BsFillBriefcaseFill />, <FaSearch />, <GiPitchfork />];

export const AgencySection = (props) => {
  return (
    <StyleSectionWrapper>
      <StyleImageWrapper>
        <Image
          src={props.backgroundImage.src}
          alt={props.backgroundImage.alt}
          width={props.backgroundImage.width}
          height={props.backgroundImage.height}
        />
      </StyleImageWrapper>
      <SectionHeading>{props.heading}</SectionHeading>
      <SectionSubheading>{props.subHeading}</SectionSubheading>

      <StyleSectionContent>
        <Image
          src={props.videoImage.src}
          alt={props.videoImage.alt}
          width={props.videoImage.width}
          height={props.videoImage.height}
        />
        <StyleCardsWrapper>
          {props.cards.map((card, index) => (
            <Card key={index} icon={icons[index]} {...card} />
          ))}
        </StyleCardsWrapper>
      </StyleSectionContent>
    </StyleSectionWrapper>
  );
};
