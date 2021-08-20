import { SVGProps } from './SVG.type';
import {SVGStyled} from './SVG.styled'

const iconsFolder = '/assets/icons/';

export const SVG: React.FC<SVGProps> = ({
    name,
    src,
    ...props
}) => {
    // TODO/Fix: passing a link through this doesn't work. eg. try - https://svgshare.com/i/5vv.svg
    const sourcePath = src ? src : `${iconsFolder}${name}.svg`;

    return (
        <SVGStyled
            {...props}
            src={sourcePath}
            wrapper="span"
        />
    );
};
