import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Palm from './Palm';
import Cinema from './Cinema';
import Desktop from './Desktop';
import Lap from './Lap';

storiesOf(' GLOBAL/Responsive', module)
  .addDecorator(withKnobs)
  .add('Palm (> 480px)', withInfo()(() => (
    <Palm>This content is only visible above 480px</Palm>
  )))
  .add('Lap (> 640px)', withInfo()(() => (
    <Lap>This content is only visible above 640px</Lap>
  )))
  .add('Desktop (> 1024px)', withInfo()(() => (
    <Desktop>This content is only visible above 1024px</Desktop>
  )))
  .add('Cinema (> 1280px)', withInfo()(() => (
    <Cinema>This content is only visible above 1280px</Cinema>
  )));

