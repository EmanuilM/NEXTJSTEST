// The Card to be exported goes here

import {
    StyleCard,
    StyleCardDescriptionWrapper,
    StyleCardHeading,
    StyleCardDescription,
} from './elements';



export const Card = ({ icon, title, description }) => {
    return (
        <StyleCard>
            <i>{icon}</i>
            <StyleCardDescriptionWrapper>
                <StyleCardHeading>{title}</StyleCardHeading>
                <StyleCardDescription>{description}</StyleCardDescription>
            </StyleCardDescriptionWrapper>
        </StyleCard>
    )
}
