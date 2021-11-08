import {
    StyleSectionWrapper,
    StyleSectionContent,
    StyleCardsWrapper,
    StyleImageWrapper
} from './elements';
import {
    SectionHeading,
    SectionSubheading,
} from '../../components/Typography/index';

import Image from 'next/image';

import { Card } from '../../collections/Card/Card';
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { GiPitchfork } from 'react-icons/gi'




export const AgencySection = (props) => {
    return (
        <StyleSectionWrapper>
                <StyleImageWrapper>
                <Image src={props.backgroundImage.src} alt={props.backgroundImage.alt} width={props.backgroundImage.width} height={props.backgroundImage.height} />
                </StyleImageWrapper>
            <SectionHeading>{props.heading}</SectionHeading>
            <SectionSubheading>{props.subHeading}</SectionSubheading>

            <StyleSectionContent>
                <Image src={props.videoImage.src} alt={props.videoImage.alt} width={props.videoImage.width} height={props.videoImage.height} />
                <StyleCardsWrapper>
                    <Card icon={<BsFillBriefcaseFill />} title={"Brief"} description={<p>Complete <b>brief writing or simple guidance</b> on what to include , we've got you coverd.</p>} />
                    <Card icon={<FaSearch />} title={"Search"} description={<p>In-dedpth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting</p>} />
                    <Card icon={<GiPitchfork />} title={"Pitch"} description={<p>Comprehensive pitch management, including comms , diary management and <b>pitch hosting</b>.</p>} />
                </StyleCardsWrapper>

            </StyleSectionContent>

        </StyleSectionWrapper>
    )
}

