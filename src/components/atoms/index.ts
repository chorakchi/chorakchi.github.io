import { Button as ButtonTemp } from './Button';
import { Typography as TextTemp } from './Typography';
import { Logo as LogoTemp } from './Logo';
import { Divider as DividerTemp } from './Divider';
import { withBox } from 'components/atoms/Box/Box';

export { Box } from './Box';
export const Button = withBox(ButtonTemp);
export const Text = withBox(TextTemp);
export const Typography = withBox(TextTemp);
export const Logo = withBox(LogoTemp);
export const Divider = withBox(DividerTemp);