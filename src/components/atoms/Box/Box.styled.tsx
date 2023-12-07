import styled, { css } from 'styled-components';
import { defaultTheme } from 'utils/theming';
import { BoxCustomsProps, BoxProps } from './Box.interface';

type Index = {
    [key: string]: any;
  };
  
  const index: any = (obj:Index, is:any, value:any) => {
    if (typeof is == 'string') return index(obj, is.split('.'), value);
    else if (is.length == 1 && value !== undefined) return (obj[is[0]] = value);
    else if (is.length == 0) return obj;
    else return index(obj[is[0]], is.slice(1), value);
};

const getThemeData = (styles: any, props: any) => {
  Object.keys(styles).forEach((key) => {
    styles[key] =
      (index(props, styles[key]) || styles[key]) +
      (!styles[key].includes('!important') ? ' !important' : '');
  });
  return styles;
};

export const Box1Styled = styled.div<BoxProps & BoxCustomsProps>(
  ({ sx = {}, xs = {}, sm = {}, md = {}, lg = {}, xl = {}, ...props }) => {
    return {
      ...getThemeData(sx, props),
      '@media (min-width: 0px)': {
        ...getThemeData(xs, props),
      },
      '@media (min-width: 576px)': {
        ...getThemeData(sm, props),
      },
      '@media (min-width: 768px)': {
        ...getThemeData(md, props),
      },
      '@media (min-width: 992px)': {
        ...getThemeData(lg, props),
      },
      '@media (min-width: 1200px)': {
        ...getThemeData(xl, props),
      },
    };
  }
);

export const BoxStyled = styled(Box1Styled)<BoxProps>`
    /* Margins */
    ${({ m, theme }) =>
        m != null &&
        css`
            margin: ${theme.space[m] ? theme.space[m] : m} !important;
        `}
    ${({ spaceX, theme }) =>
        spaceX != null &&
        css`
            margin-left: ${theme.space[spaceX]
                ? theme.space[spaceX]
                : spaceX} !important;
            margin-right: ${theme.space[spaceX]
                ? theme.space[spaceX]
                : spaceX} !important;
        `}
    ${({ mw, theme }) =>
        mw != null &&
        css`
            min-width: ${theme.space[mw]
                ? theme.space[mw]
                : mw} !important;
        `}
    ${({ spaceY, theme }) =>
        spaceY != null &&
        css`
            margin-top: ${theme.space[spaceY]
                ? theme.space[spaceY]
                : spaceY} !important;
            margin-bottom: ${theme.space[spaceY]
                ? theme.space[spaceY]
                : spaceY} !important;
        `}
    ${({ ml, theme }) =>
        ml != null &&
        css`
            margin-left: ${theme.space[ml] ? theme.space[ml] : ml} !important;
        `}
    ${({ mr, theme }) =>
        mr != null &&
        css`
            margin-right: ${theme.space[mr] ? theme.space[mr] : mr} !important;
        `}
    ${({ mt, theme }) =>
        mt != null &&
        css`
            margin-top: ${theme.space[mt] ? theme.space[mt] : mt} !important;
        `}
    ${({ mb, theme }) =>
        mb != null &&
        css`
            margin-bottom: ${theme.space[mb] ? theme.space[mb] : mb} !important;
        `}
    /* Paddings */
    ${({ p, theme }) =>
        p != null &&
        css`
            padding: ${theme.space[p]} !important;
        `}
    ${({ h, theme }) =>
        h != null &&
        css`
            height: ${theme.space[h] ? theme.space[h] : h} !important;
        `}
    ${({ w, theme }) =>
        w != null &&
        css`
            width: ${theme.space[w] ? theme.space[w] : w} !important;
        `}
        ${({ gap, theme }) =>
        gap != null &&
        css`
            gap: ${theme.space[gap]} !important;
        `}
    ${({ color, theme }) =>
        color &&
        css`
            color: ${theme.palette[color]} !important;
        `}
    ${({ bgColor, theme }) =>
        bgColor &&
        css`
            background-color: ${theme.palette[bgColor]} !important;
        `}
    ${({ flex }) =>
        flex != null &&
        css`
            flex: ${flex} !important;
        `}
    ${({ d }) =>
        d != null &&
        css`
            display: ${d} !important;
        `}
    ${({ fd }) =>
        fd != null &&
        css`
            flex-direction: ${fd} !important;
        `}
    ${({ zIndex }) =>
        zIndex != null &&
        css`
            z-index: ${zIndex} !important;
        `}
    ${({ fadeIn }) =>
        fadeIn != null &&
        css`
            animation: fade-in-animation 0.6s forwards !important;
        `}
    ${({ round, theme }) =>
        round != null &&
        css`
            border-radius: ${theme.space[round]} !important;
        `}
    ${({ withBorder, theme }) =>
        withBorder != null &&
        css`
            border: 1px solid #000000 !important;
        `}
    ${({ noBorder, theme }) =>
        noBorder != null &&
        css`
            border: none !important;
        `}
    ${({ textOverflowShowDot }) =>
        textOverflowShowDot &&
        css`
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
            overflow: hidden !important;
        `}
    ${({ noPrint }) =>
        noPrint &&
        css`
            @media print {
                display: none !important;
            }
        `}
`;

BoxStyled.defaultProps = defaultTheme;
