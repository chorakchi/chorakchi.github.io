import { EducationStyled, PositionStyled } from './Education.styled';
import { EducationProps } from './Education.interface';
import { Section } from '../../molecules';
import { Typography } from '../..';
import { NumberLabel } from '../../molecules/NumberLabel/NumberLabel';
export const Education: React.FC<EducationProps> = ({
    items = [],
    heading,
    label,
    ...props
}) => {
    return (
        <EducationStyled {...props}>
            <NumberLabel className="numberLabel">{label}</NumberLabel>
            <Section heading={heading}>
                {items.map((item, i) => (
                    <PositionStyled key={`edu-${i}`}>
                        <Typography
                            className="socialNetwork"
                            bold
                            variant="body"
                        >
                            {item.startDate}-{item.endDate || 'Present'}
                        </Typography>
                        <Typography
                            className="socialNetwork"
                            bold
                            variant="body"
                        >
                            {item.companyName}
                        </Typography>
                        <Typography className="socialNetwork" variant="body">
                            {item.description}
                        </Typography>
                    </PositionStyled>
                ))}
            </Section>
        </EducationStyled>
    );
};
